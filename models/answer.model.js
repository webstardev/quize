"use strict";
module.exports = (sequelize, DataTypes) => {
  const answer = sequelize.define(
    "answer",
    {
      title: DataTypes.STRING,
      question_id: DataTypes.INTEGER,
      answer_order: DataTypes.INTEGER,
      correct_answer: DataTypes.BOOLEAN,
    },
    {}
  );
  answer.associate = function (models) {
    // associations can be defined here
  };
  return answer;
};
