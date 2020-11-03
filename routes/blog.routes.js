const express = require("express");
const blogRouter = express.Router();
const BlogController = require("../controllers/blog.controller");

blogRouter.get("/:id", BlogController.get);

module.exports = blogRouter;
