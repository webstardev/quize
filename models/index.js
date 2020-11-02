"use strict";
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const db = {};
const env = process.env.NODE_ENV || "development";
const CONFIG = require("../config/config")[env];

const sequelize = new Sequelize(
  CONFIG.database,
  CONFIG.username,
  CONFIG.password,
  {
    host: CONFIG.host,
    dialect: CONFIG.dialect,
    port: 3306,
    operatorsAliases: false,
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    let model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
