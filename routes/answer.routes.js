const express = require("express");
const answerRouter = express.Router();
const AnswerController = require("../controllers/answer.controller");

answerRouter.get("/:id", AnswerController.get);

module.exports = answerRouter;
