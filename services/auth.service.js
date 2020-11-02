const { User } = require("../models");
const validator = require("validator");
const { to, TE } = require("../services/util.service");
const env = process.env.NODE_ENV || "development";
const CONFIG = require("../config/config")[env];

const getUniqueKeyFromBody = function (body) {
  // this is so they can send in 2 options unique_key or email and it will work
  let unique_key = body.unique_key;
  if (typeof unique_key === "undefined") {
    if (typeof body.email != "undefined") {
      unique_key = body.email;
    } else {
      unique_key = null;
    }
  }

  return unique_key;
};
module.exports.getUniqueKeyFromBody = getUniqueKeyFromBody;

const createUser = async (userInfo) => {
  let unique_key, auth_info, err;

  auth_info = {};
  auth_info.status = "create";

  unique_key = getUniqueKeyFromBody(userInfo);
  if (!unique_key) TE("An email was not entered.");

  if (validator.isEmail(unique_key)) {
    auth_info.method = "email";
    userInfo.email = unique_key;

    [errFind, findUser] = await to(
      User.findOne({ where: { email: userInfo.email } })
    );

    if (findUser) TE("Email already exist!");

    [err, user] = await to(User.create(userInfo));
    if (err) {
      console.log(err);
      TE(err.message);
    }

    return user;
  } else {
    TE("A valid email was not entered.");
  }
};
module.exports.createUser = createUser;

const createSuperAdmin = async () => {
  User.findOne({ where: { email: CONFIG.APP_ADMIN_EMAIL } }).then(function (
    user,
    err
  ) {
    if (err) console.log(err);

    if (!user)
      User.create({
        name: "SuerAdmin",
        email: CONFIG.APP_ADMIN_EMAIL,
        password: CONFIG.APP_ADMIN_PASSWORD,
        role: "superadmin",
      });
  });
};
module.exports.createSuperAdmin = createSuperAdmin;

const authUser = async function (userInfo) {
  if (!userInfo.email) TE("Please enter an email to login");
  if (!userInfo.password) TE("Please enter a password to login");

  let user, err, findErr;
  if (validator.isEmail(userInfo.email)) {
    [findErr, user] = await to(
      User.findOne({ where: { email: userInfo.email } })
    );
    if (!user) TE("User does not exist!");
    if (findErr) TE(findErr.message);
  } else {
    TE("A valid email was not entered");
  }

  [err, user] = await to(user.comparePassword(userInfo.password));
  if (err) TE(err.message);

  return { user };
};
module.exports.authUser = authUser;
