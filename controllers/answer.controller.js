const { answer } = require("../models");
const { to, ReE, ReS } = require("../services/util.service");

const get = async function (req, res) {
  if (!req.params.id || req.params.id === "all") {
    let [errFindAnswer, findAnswer] = await to(answer.findAll());

    if (errFindAnswer) return ReE(res, { err: errFindAnswer }, 422);
    return ReS(res, { answer: findAnswer }, 201);
  } else {
    let [errFindAnswer, findAnswer] = await to(
      answer.findOne({
        where: {
          id: req.params.id,
        },
      })
    );
    if (errFindAnswer) return ReE(res, { err: errFindAnswer }, 422);

    return ReS(
      res,
      {
        answer: findAnswer,
      },
      201
    );
  }
};
module.exports.get = get;
