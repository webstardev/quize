"use strict";
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define(
    "question",
    {
      title: DataTypes.STRING,
      blog_id: DataTypes.INTEGER,
    },
    {}
  );
  question.associate = function (models) {
    // associations can be defined here
    question.belongsTo(models.answer, {
      as: "answer",
      foreignKey: "question_id",
    });
  };
  return question;
};
