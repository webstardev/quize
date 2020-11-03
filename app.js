const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const pe = require("parse-error");
const cors = require("cors");

const app = express();
const env = process.env.NODE_ENV || "development";
const CONFIG = require("./config/config")[env];

const blogRouter = require("./routes/blog.routes");
const questionRouter = require("./routes/question.routes");
const answerRouter = require("./routes/answer.routes");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//Log Env
console.log("Environment:", CONFIG.app);
//DATABASE
const models = require("./models");
models.sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to SQL database:", CONFIG.database);
  })
  .catch((err) => {
    console.error("Unable to connect to SQL database:", CONFIG.database, err);
  });

if (CONFIG.app === "dev") {
  models.sequelize.sync().then(() => {}); //creates table if they do not already exist
  // models.sequelize.sync({ force: true });//deletes all tables then recreates them useful for testing and development purposes
}
// CORS
app.use(cors());

// Routes
app.use("/v1/blog", blogRouter);
app.use("/v1/question", questionRouter);
app.use("/v1/answer", answerRouter);

app.use("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.statusCode = 200; //send the appropriate status code
  res.json({ status: "success", message: "Parcel Pending API", data: {} });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

//This is here to handle all the uncaught promise rejections
process.on("unhandledRejection", (error) => {
  console.error("Uncaught Error", pe(error));
});

module.exports = app;
