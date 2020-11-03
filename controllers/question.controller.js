const { question } = require("../models");
const { to, ReE, ReS } = require("../services/util.service");

const get = async function (req, res) {
  if (!req.params.id || req.params.id === "all") {
    let [errFindQuestion, findQuestion] = await to(
      question.findAll({
        include: "answer",
      })
    );

    if (errFindQuestion) return ReE(res, { err: errFindQuestion }, 422);
    return ReS(res, { question: findQuestion }, 201);
  } else {
    let [errFindQuestion, findQuestion] = await to(
      question.findOne({
        where: {
          id: req.params.id,
        },
        include: "answer",
      })
    );
    if (errFindQuestion) return ReE(res, { err: errFindQuestion }, 422);

    return ReS(
      res,
      {
        question: findQuestion,
      },
      201
    );
  }
};
module.exports.get = get;
