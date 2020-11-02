"use strict";
module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define(
    "blog",
    {
      title: DataTypes.STRING,
      blog_number: DataTypes.INTEGER,
    },
    {}
  );
  blog.associate = function (models) {
    // associations can be defined here
    blog.hasMany(models.question, {
      as: "question",
      foreignKey: "blog_id",
    });
  };
  return blog;
};
