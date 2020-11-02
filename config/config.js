require("dotenv").config(); //instatiate environment variables

let CONFIG = {
  development: {
    app: process.env.APP || "dev",
    app_port: process.env.PORT || "3001",
    APP_URL: process.env.APP_URL || "http://localhost:3000",
    dialect: process.env.DB_DIALECT || "mysql",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "heytakeaway",
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  },
  production: {
    app: process.env.APP || "prod",
    app_port: process.env.PORT || "3001",
    dialect: process.env.DB_DIALECT || "mysql",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "heytakeaway",
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  },
}; //Make this global to use all over the application

module.exports = CONFIG;
