const { blog, question, answer } = require("../models");
const { to, ReE, ReS } = require("../services/util.service");

const get = async function (req, res) {
  if (!req.params.id || req.params.id === "all") {
    let [errFindBlog, findBlog] = await to(
      blog.findAll({
        include: "question",
      })
    );

    if (errFindBlog) return ReE(res, { err: errFindBlog }, 422);

    const blogList = [];
    for (let i = 0; i < findBlog.length; i++) {
      const blogItem = findBlog[i];
      const questionList = [];
      for (let j = 0; j < blogItem.question.length; j++) {
        const [errFindQuestion, findQuestion] = await to(
          question.findOne({
            where: { id: blogItem.question[j].dataValues.id },
            include: "answer",
          })
        );
        if (findQuestion)
          questionList.push(JSON.parse(JSON.stringify(findQuestion)));
      }
      blogList.push({
        ...JSON.parse(JSON.stringify(findBlog[i])),
        question: [...questionList],
      });
    }

    return ReS(res, { blog: blogList }, 201);
  } else {
    const [errFindBlog, findBlog] = await to(
      blog.findOne({
        where: {
          id: req.params.id,
        },
        include: "question",
      })
    );
    if (errFindBlog) return ReE(res, { err: errFindBlog }, 422);

    const questionList = [];
    for (let i = 0; i < findBlog.question.length; i++) {
      const item = findBlog.question[i];
      const [errFindQuestion, findQuestion] = await to(
        question.findOne({
          where: { id: item.dataValues.id },
          include: "answer",
        })
      );

      if (findQuestion) {
        questionList.push(JSON.parse(JSON.stringify(findQuestion)));
      }
    }
    return ReS(
      res,
      {
        blog: {
          ...JSON.parse(JSON.stringify(findBlog)),
          question: [...questionList],
        },
      },
      201
    );
  }
};
module.exports.get = get;
