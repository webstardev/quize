"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "questions",
      [
        {
          title: "What are the four stages of the stock market?",
          blog_id: 1,
        },
        {
          title: "At what stage does the stock market cycle reach its peak?",
          blog_id: 1,
        },
        {
          title:
            "What type of market is categorized by rising stock prices, a strong economy and high employment levels?",
          blog_id: 1,
        },
        {
          title: "True or False: Can Stock Market Cycles be predicted?",
          blog_id: 1,
        },
        {
          title: "How long do cyclic markets last?",
          blog_id: 1,
        },
        {
          title:
            "True or False:Bull and bear markets are not found in every stock market cycle, with each lasting only a fraction of the overall cycle.",
          blog_id: 1,
        },
        {
          title: "At what stage will the consumer only buy out of necessity?",
          blog_id: 1,
        },
        {
          title:
            "True or False: Secular Markets are long term and last between 20-30 years.",
          blog_id: 1,
        },
        {
          title: "What is a well known example of a bear market.",
          blog_id: 1,
        },
        {
          title:
            "True or false: Luxury goods stocks will yield stable gains regardless of the stock market cycle.",
          blog_id: 1,
        },
        {
          title: "Why do investors choose to invest in ETFs?",
          blog_id: 2,
        },
        {
          title:
            "If you invested $100 in 2015 in the S&P 500, with an average growth rate of 10%, what would your investment be worth today?",
          blog_id: 2,
        },
        {
          title: "PowerShares QQQ ETF (QQQ) tracks the performance of what?",
          blog_id: 2,
        },
        {
          title:
            "True or False: ETFs track markets, sectors and indexes by owning relevant securities from the said markets, sectors or indices.",
          blog_id: 2,
        },
        {
          title:
            "True or False: Like ETFs, Index funds can be bought and sold as whenever the investors wants to.",
          blog_id: 2,
        },
        {
          title: "You can buy fractional shares of…",
          blog_id: 2,
        },
        {
          title: "How do ETFs track a market or a sector?",
          blog_id: 2,
        },
        {
          title: "What are low fees charged by ETFs and Index Funds called?",
          blog_id: 2,
        },
        {
          title:
            "True or False: Before selecting an ETF it is important to consider factors such as expense ratio, holdings allocation, annual dividend yield & standard deviation.",
          blog_id: 2,
        },
        {
          title:
            "Which of the following securities best represent a technology sector ETF?",
          blog_id: 2,
        },
        {
          title: "What is a stock?",
          blog_id: 3,
        },
        {
          title: "Why do people buy stocks?",
          blog_id: 3,
        },
        {
          title:
            "Companies prefer giving out preferred shares compared to common shares due to..",
          blog_id: 3,
        },
        {
          title:
            "Which shareholder has priority when a company files for bankruptcy and has to liquidate its assets?",
          blog_id: 3,
        },
        {
          title: "What is the key feature of common stock?",
          blog_id: 3,
        },
        {
          title:
            "If a company has 10,000 shares outstanding and an investor owns 100 shares of the said company. What percentage of the company does the investor own?",
          blog_id: 3,
        },
        {
          title:
            "How do you get the most benefit out of stocks in the long run?",
          blog_id: 3,
        },
        {
          title:
            "Apple Inc., has a market capitalization of $1.705 trillion and its shares are trading at $393.43. If an investor were to buy 10,000 shares of Apple Inc., how much percentage of the company would the investor own?",
          blog_id: 3,
        },
        {
          title:
            "True or False:  Companies issue shares for various purposes such as scaling up, expansion, launching new products and new business ventures.",
          blog_id: 3,
        },
        {
          title:
            "What are some of the fundamental factors that can influence a stock’s price?",
          blog_id: 3,
        },
        {
          title: "What is a dividend?",
          blog_id: 4,
        },
        {
          title:
            "True or False: Dividends are only paid out in the form of additional shares of a company.",
          blog_id: 4,
        },
        {
          title:
            "Some companies offer a program where investors can automatically reinvest their dividends into the company. What is this program called?",
          blog_id: 4,
        },
        {
          title: "Growth stocks don’t pay out dividends because?",
          blog_id: 4,
        },
        {
          title: "Dividends are paid out..",
          blog_id: 4,
        },
        {
          title: "Why are dividends important?",
          blog_id: 4,
        },
        {
          title:
            "True or False: Companies primarily pay out dividends to create investor confidence.",
          blog_id: 4,
        },
        {
          title:
            "If a dividend paying company decides to stop paying dividends for any reason, what happens to the stock price?",
          blog_id: 4,
        },
        {
          title:
            "True or False: Dividend yield is a simple calculation that helps investors determine the price of the stock.",
          blog_id: 4,
        },
        {
          title:
            "Home Depot's current share price is 265.31 and it’s dividend distribution for the year is $6. What is their dividend yield?",
          blog_id: 4,
        },
        {
          title: "Which of the following best describes an IPO?",
          blog_id: 5,
        },
        {
          title: "Which company had the first IPO in the world and when?",
          blog_id: 5,
        },
        {
          title: "When is a company considered a “Unicorn”?",
          blog_id: 5,
        },
        {
          title: "When did IPOs become less common?",
          blog_id: 5,
        },
        {
          title:
            "True or False: IPOs come with several disadvantages such as leak of sensitive information, regular financial disclosures & legal costs.",
          blog_id: 5,
        },
        {
          title:
            "True or False: Facebook never generated a net income before it’s IPO.",
          blog_id: 5,
        },
        {
          title: "Direct listing IPOs is usually only feasible by..",
          blog_id: 5,
        },
        {
          title: "Spotify went through a…",
          blog_id: 5,
        },
        {
          title: "True or False: You can’t purchase IPO shares.",
          blog_id: 5,
        },
        {
          title:
            "Companies always conduct their own IPOs and rarely if ever go through an underwriter.",
          blog_id: 5,
        },
        {
          title: "What is a Stock Exchange?",
          blog_id: 6,
        },
        {
          title:
            "Which of the following is not one of the top ten stock exchanges in the world based on market cap?",
          blog_id: 6,
        },
        {
          title: "When was the New York Stock Exchange established?",
          blog_id: 6,
        },
        {
          title:
            "Investment banks, Hedge Funds, Insurance Companies and Private Equity Firms are examples of?",
          blog_id: 6,
        },
        {
          title: "Which of the following are Retail Investors?",
          blog_id: 6,
        },
        {
          title:
            "True or False: Stock Exchanges helps companies raise funds for scaling up, international expansion and building investor confidence.",
          blog_id: 6,
        },
        {
          title: "Which of the following can affect the price of a stock?",
          blog_id: 6,
        },
        {
          title: "Where does trading occur in a physical stock exchange?",
          blog_id: 6,
        },
        {
          title:
            "What is the minimum market capitalization that a company must have to be listed on the New York stock exchange?",
          blog_id: 6,
        },
        {
          title:
            "True or False: Companies listed on the stock exchange are not restricted by rules or regulations.",
          blog_id: 6,
        },
        {
          title: "What is investment diversification?",
          blog_id: 7,
        },
        {
          title:
            "Diversifying across many different assets and industries help minimize portfolio vulnerability to major factors that affect share price or market negatively.",
          blog_id: 7,
        },
        {
          title:
            "Inflation, Political instability and exchange rates are examples of what risk?",
          blog_id: 7,
        },
        {
          title:
            "True or False: Is a portfolio of only Arts and antiquities considered to be diverse?",
          blog_id: 7,
        },
        {
          title: "Which of the following investments is considered diverse?",
          blog_id: 7,
        },
        {
          title: "Diversification helps in mitigating overall risk by having..",
          blog_id: 7,
        },
        {
          title:
            "True or False: Diversification can be time consuming as you manage multiple asset classes.",
          blog_id: 7,
        },
        {
          title:
            "A portfolio containing only airline stocks would be considered?",
          blog_id: 7,
        },
        {
          title: "A stock market index is something...",
          blog_id: 8,
        },
        {
          title: "What is the S&P 500?",
          blog_id: 8,
        },
        {
          title: "Where is NASDAQ stock exchange located?",
          blog_id: 8,
        },
        {
          title:
            "True or False: All companies listed in the S&P 500 are weighed equally.",
          blog_id: 8,
        },
        {
          title:
            "Which stock market index tracks the Abu Dhabi Stock Exchange?",
          blog_id: 8,
        },
        {
          title:
            "True or False: Nasdaq was the first stock exchange that allowed investors to trade over a computer.",
          blog_id: 8,
        },
        {
          title: "When is a market considered to be bullish?",
          blog_id: 9,
        },
        {
          title: "When was the longest bull market in history?",
          blog_id: 9,
        },
        {
          title: "What are some of the features of a Bearish Market?",
          blog_id: 9,
        },
        {
          title: "IPOs decrease is what markets?",
          blog_id: 9,
        },
        {
          title:
            "Stock market continued to climb despite Covid wreaking havoc on the economy due to...",
          blog_id: 9,
        },
        {
          title:
            "True or False: The economy could be failing despite the stock market experiencing a bullish run.",
          blog_id: 9,
        },
        {
          title:
            "True or False: A bullish stock market represents a strong economy.",
          blog_id: 9,
        },
        {
          title: "Where is the Tadawul Stock Exchange located?",
          blog_id: 10,
        },
        {
          title:
            "Many of the companies listed on the Tadawul come from which industry?",
          blog_id: 10,
        },
        {
          title: "Saudi Vision 2030 focuses on which projects?",
          blog_id: 10,
        },
        {
          title:
            "Saudi Aramco’s IPO of $25.6 billion is considered to be the biggest IPO in the...",
          blog_id: 10,
        },
        {
          title: "Which index tracks the Tadawul?",
          blog_id: 10,
        },
        {
          title:
            "By what percent did Saudi Stock Exchange’s market jump with the IPO of Saudi Aramco?",
          blog_id: 10,
        },
        {
          title: "What is Tadawul’s market cap?",
          blog_id: 10,
        },
        {
          title: "Where is the ADX stock exchange located?",
          blog_id: 11,
        },
        {
          title: "When was the ADX established?",
          blog_id: 11,
        },
        {
          title:
            "Which ETF was launched on the Abu Dhabi Stock Exchange first?",
          blog_id: 11,
        },
        {
          title: "What are the top for sectors in the ADX general index?",
          blog_id: 11,
        },
        {
          title:
            "True or False: ADX climbed to become one of the best indices in the world in 2018.",
          blog_id: 11,
        },
        {
          title:
            "ADX encourages which of the following entities to join the financial markets?",
          blog_id: 11,
        },
        {
          title: "How much did ADNOC's IPO raise?",
          blog_id: 11,
        },
        {
          title: "Who is DFM regulated by?",
          blog_id: 12,
        },
        {
          title:
            "Majority of the companies listed on the DFM are from which sector?",
          blog_id: 12,
        },
        {
          title: "What is DFMs market cap ?",
          blog_id: 12,
        },
        {
          title: "What is DFM’s status?",
          blog_id: 12,
        },
        {
          title: "How many companies are listed on the DFM general index?",
          blog_id: 12,
        },
        {
          title: "DFM jumped by what percent in the year 2019?",
          blog_id: 12,
        },
        {
          title: "What was the DFM found?",
          blog_id: 12,
        },
        {
          title:
            "Assets such as stocks, bonds, commodities and others can have…",
          blog_id: 13,
        },
        {
          title:
            "Which of the following two stocks are an example of positive correlation?",
          blog_id: 13,
        },
        {
          title:
            "True or False: Correlation between two assets are calculated by multiplying the standard deviation of one asset with that of the other asset.",
          blog_id: 13,
        },
        {
          title: "Correlated assets represent what?",
          blog_id: 13,
        },
        {
          title:
            "Two assets are considered to have negative correlation when their correlation is...",
          blog_id: 13,
        },
        {
          title:
            "True or False: Correlation between certain assets can change over time.",
          blog_id: 13,
        },
        {
          title: "Which of the following helps in diversifying assets?",
          blog_id: 13,
        },
        {
          title: "When was the first commercial oil well drilled?",
          blog_id: 14,
        },
        {
          title: "Which US state was Oil found in first?",
          blog_id: 14,
        },
        {
          title:
            "What is the Organization of the Petroleum’s (OPEC) primary objective?",
          blog_id: 14,
        },
        {
          title:
            "Which other country outside of the OPEC has a huge influence on oil prices?",
          blog_id: 14,
        },
        {
          title: "OPEC controls roughly what percent of global oil supply?",
          blog_id: 14,
        },
        {
          title:
            "True or False: Oil was, and continues to be a hot commodity, given the dependence of countries’ economies on their energy sectors.",
          blog_id: 14,
        },
        {
          title: "Oil prices can be affected by...",
          blog_id: 14,
        },
        {
          title:
            "True or False: If the forecasted revenue is not met, the oil producing country would operate at a fiscal deficit.",
          blog_id: 15,
        },
        {
          title: "What percentage of Saudi’s budget revenue comes from oil?",
          blog_id: 15,
        },
        {
          title:
            "What was the per barrel break-even point for Oil in the United Arab Emirates in 2019?",
          blog_id: 15,
        },
        {
          title:
            "Which country in 2017 had the largest break-even point per barrel of oil?",
          blog_id: 15,
        },
        {
          title:
            "True or False: Middle Eastern oil producing nations have recently taken steps to diversify their economy so as to not rely so heavily on their oil sectors.",
          blog_id: 15,
        },
        {
          title:
            "What are some of the steps taken by oil producing nations to diversify their revenues?",
          blog_id: 15,
        },
        {
          title:
            "When the prices of oil rose between 1965 to 1985, how did it make an impact in the Middle East?",
          blog_id: 16,
        },
        {
          title: "Which of the following factors dictate the price of Oil?",
          blog_id: 16,
        },
        {
          title:
            "True or False: When the price of oil goes down, it positively impacts the economy of an oil producing nation.",
          blog_id: 16,
        },
        {
          title: "Low oil prices affect oil importing nations…",
          blog_id: 16,
        },
        {
          title:
            "True or False: Both oil importing and exporting countries are severely affected by sharp inclines or declines in the price of oil.",
          blog_id: 16,
        },
        {
          title:
            "Which of the following is not one of the top producers of Oil in the world?",
          blog_id: 16,
        },
        {
          title:
            "COVID-19 has presented low oil prices, but the oil importing countries have yet to take advantage of this. Why?",
          blog_id: 16,
        },
        {
          title: "What is an SPAC?",
          blog_id: 17,
        },
        {
          title:
            "True or False: SPAC companies primary goal is to acquire or merge with another company.",
          blog_id: 17,
        },
        {
          title:
            "SPAC’s retail investors don’t know what type of acquisition or investment the SPAC is planning because...",
          blog_id: 17,
        },
        {
          title:
            "True or False: Companies prefer IPOs over selling to SPACs, because it is quicker and easier.",
          blog_id: 17,
        },
        {
          title:
            "True or False: Once the SPAC’s merger with a new company is completed it’s ticker symbol changes.",
          blog_id: 17,
        },
        {
          title: "SPACs have been around for the…",
          blog_id: 17,
        },
        {
          title:
            "Bill Ackman’s Pershing Square Capital Management is the largest IPO for a SPAC with a valuation of...",
          blog_id: 17,
        },
        {
          title: "SPACs performance in recent years have been…",
          blog_id: 17,
        },
        {
          title:
            "Market volatility is characterized by sharp rises or falls in market performance.",
          blog_id: 18,
        },
        {
          title: "What creates large market volatility?",
          blog_id: 18,
        },
        {
          title:
            "Market volatility can create a range of emotions in investors such as?",
          blog_id: 18,
        },
        {
          title: "What helps in mitigating market volatility impact?",
          blog_id: 18,
        },
        {
          title:
            "True or False: Emotional Intelligence is the ability to engage in sophisticated information processing about one’s own and others’ emotions and the ability to use this information as a guide to thinking and behavior.",
          blog_id: 18,
        },
        {
          title: "Historically the US stock market has always...",
          blog_id: 18,
        },
        {
          title:
            "If a company has good leadership and strong financials, what should you do during a market volatility where the share price steeply drops?",
          blog_id: 18,
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
