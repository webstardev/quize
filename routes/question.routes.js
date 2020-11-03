const express = require("express");
const questionRouter = express.Router();
const QuestionController = require("../controllers/question.controller");

questionRouter.get("/:id", QuestionController.get);

module.exports = questionRouter;
