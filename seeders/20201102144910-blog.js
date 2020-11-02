"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "blogs",
      [
        {
          title: "What is a Stock Market Cycle?",
          blog_number: 1,
        },
        {
          title: "What is an ETF or Index?",
          blog_number: 2,
        },
        {
          title: "What is a Stock?",
          blog_number: 3,
        },
        {
          title: "What is a dividend?",
          blog_number: 4,
        },
        {
          title: "What is an IPO?",
          blog_number: 5,
        },
        {
          title: "What is a Stock Exchange?",
          blog_number: 6,
        },
        {
          title: "What is investment diversification and why does it matter?",
          blog_number: 7,
        },
        {
          title: "What is S&P 500, Nasdaq?",
          blog_number: 8,
        },
        {
          title: "What are Bull and Bear Markets?",
          blog_number: 9,
        },
        {
          title: "What is Tadawul?",
          blog_number: 10,
        },
        {
          title: "What is the ADX index?",
          blog_number: 11,
        },
        {
          title: "What is the DFM index?",
          blog_number: 12,
        },
        {
          title: "What is Investment Correlation?",
          blog_number: 13,
        },
        {
          title: "How is the Price of Oil Dictated?",
          blog_number: 14,
        },
        {
          title: "How do oil producing nations balance their budget?",
          blog_number: 15,
        },
        {
          title: "How does oil price affect local spending?",
          blog_number: 16,
        },
        {
          title: "What is SPAC?",
          blog_number: 17,
        },
        {
          title: "What is Market Volatility?",
          blog_number: 18,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
