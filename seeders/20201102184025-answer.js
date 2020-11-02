"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "answers",
      [
        {
          title: "Accumulation, Markup, Distribution & Decline",
          question_id: 1,
          answer_order: 0,
          correct_answer: true,
        },
        {
          title: "Introduction, Growth, Maturity & Decline",
          question_id: 1,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "Introduction, Maturity, Distribution & Decline",
          question_id: 1,
          answer_order: 2,
          correct_answer: false,
        },
        {
          title: "Accumulation, Growth, Markup & Distribution",
          question_id: 1,
          answer_order: 3,
          correct_answer: false,
        },
        {
          title: "Decline",
          question_id: 2,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "Markup",
          question_id: 2,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "Distribution",
          question_id: 2,
          answer_order: 2,
          correct_answer: true,
        },
        {
          title: "Accumulation",
          question_id: 2,
          answer_order: 3,
          correct_answer: false,
        },
        {
          title: "Bull Market",
          question_id: 3,
          answer_order: 0,
          correct_answer: true,
        },
        {
          title: "Bear Market",
          question_id: 3,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "True",
          question_id: 4,
          answer_order: 0,
          correct_answer: true,
        },
        {
          title: "False",
          question_id: 4,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "1 - 3 years",
          question_id: 5,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "4 - 10 years",
          question_id: 5,
          answer_order: 1,
          correct_answer: true,
        },
        {
          title: "10 - 20 years",
          question_id: 5,
          answer_order: 2,
          correct_answer: false,
        },
        {
          title: "None of the above",
          question_id: 5,
          answer_order: 3,
          correct_answer: false,
        },
        {
          title: "True",
          question_id: 6,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "False",
          question_id: 6,
          answer_order: 1,
          correct_answer: true,
        },
        {
          title: "Accumulation",
          question_id: 7,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "Markup",
          question_id: 7,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "Distribution",
          question_id: 7,
          answer_order: 2,
          correct_answer: false,
        },
        {
          title: "Decline",
          question_id: 7,
          answer_order: 3,
          correct_answer: true,
        },
        {
          title: "True",
          question_id: 8,
          answer_order: 0,
          correct_answer: true,
        },
        {
          title: "False",
          question_id: 8,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "2008 mortgage bubble",
          question_id: 9,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "2001 dot-com bubble",
          question_id: 9,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "1987 black Monday",
          question_id: 9,
          answer_order: 2,
          correct_answer: false,
        },
        {
          title: "All of the above",
          question_id: 9,
          answer_order: 3,
          correct_answer: true,
        },
        {
          title: "True",
          question_id: 10,
          answer_order: 0,
          correct_answer: true,
        },
        {
          title: "False",
          question_id: 10,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "Diversification",
          question_id: 11,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "Stable Growth",
          question_id: 11,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "Long Term Returns",
          question_id: 11,
          answer_order: 2,
          correct_answer: false,
        },
        {
          title: "All of the above",
          question_id: 11,
          answer_order: 3,
          correct_answer: true,
        },
        {
          title: "$200",
          question_id: 12,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "$150",
          question_id: 12,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "$161",
          question_id: 12,
          answer_order: 2,
          correct_answer: true,
        },
        {
          title: "$110",
          question_id: 12,
          answer_order: 3,
          correct_answer: false,
        },
        {
          title: "NASDAQ",
          question_id: 13,
          answer_order: 0,
          correct_answer: true,
        },
        {
          title: "S&P 500",
          question_id: 13,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "NYSE",
          question_id: 13,
          answer_order: 2,
          correct_answer: false,
        },
        {
          title: "None of the above",
          question_id: 13,
          answer_order: 3,
          correct_answer: false,
        },
        {
          title: "True",
          question_id: 14,
          answer_order: 0,
          correct_answer: true,
        },
        {
          title: "False",
          question_id: 14,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "True",
          question_id: 15,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "False",
          question_id: 15,
          answer_order: 1,
          correct_answer: true,
        },
        {
          title: "ETFs",
          question_id: 16,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "Stocks",
          question_id: 16,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "Cryptocurrencies ",
          question_id: 16,
          answer_order: 2,
          correct_answer: false,
        },
        {
          title: "All of the above",
          question_id: 16,
          answer_order: 3,
          correct_answer: true,
        },
        {
          title: "By including the most expensive stocks from the sector",
          question_id: 17,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "By including the most profitable stocks from the sector",
          question_id: 17,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "By including the most relevant stocks from the sector",
          question_id: 17,
          answer_order: 2,
          correct_answer: true,
        },
        {
          title: "None of the above",
          question_id: 17,
          answer_order: 3,
          correct_answer: false,
        },
        {
          title: "Commission",
          question_id: 18,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "Expense Ratio",
          question_id: 18,
          answer_order: 1,
          correct_answer: true,
        },
        {
          title: "Premium",
          question_id: 18,
          answer_order: 2,
          correct_answer: false,
        },
        {
          title: "Discount",
          question_id: 18,
          answer_order: 3,
          correct_answer: false,
        },
        {
          title: "True",
          question_id: 19,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "False",
          question_id: 19,
          answer_order: 1,
          correct_answer: true,
        },
        {
          title: "Apple, Amazon & Coke Cola",
          question_id: 20,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "AT&T, Uber & General Electric",
          question_id: 20,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "Google, Microsoft & Apple",
          question_id: 20,
          answer_order: 2,
          correct_answer: true,
        },
        {
          title: "Walmart, Wells Fargo & Tesla",
          question_id: 20,
          answer_order: 3,
          correct_answer: false,
        },
        {
          title: "A form of cash",
          question_id: 21,
          answer_order: 0,
          correct_answer: false,
        },
        {
          title: "A good or service",
          question_id: 21,
          answer_order: 1,
          correct_answer: false,
        },
        {
          title: "A piece of ownership in a company",
          question_id: 21,
          answer_order: 2,
          correct_answer: true,
        },
        {
          title: "None of the above",
          question_id: 21,
          answer_order: 3,
          correct_answer: false,
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
