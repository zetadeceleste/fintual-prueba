// Construct a simple Portfolio class that has a collection of Stocks and a "Profit" method that receives 2 dates and returns the profit of the Portfolio between those dates.
// Assume each Stock has a "Price" method that receives a date and returns its price.
// Bonus Track: make the Profit method return the "annualized return" of the portfolio between the given dates.

class Stock {
   constructor(values) {
      this.values = values;
   }

   getPriceByDate = (date) =>
      this.values?.find((value) => value?.date === date)?.price || null;
}

class Portfolio {
   constructor(stocks) {
      this.stocks = stocks;
   }

   getProfitBetweenDates = (dateFrom, dateTo) => {
      let profitBetweenDates = 0;
      let priceDateFrom = this.stocks.map((stock) =>
         stock.getPriceByDate(dateFrom),
      );
      let priceDateTo = this.stocks.map((stock) =>
         stock.getPriceByDate(dateTo),
      );

      profitBetweenDates = priceDateTo - priceDateFrom;

      return `Profit between inserted dates is: ${profitBetweenDates}`;
   };
}

const dateize = (string) => new Date(string);

const date1 = dateize('01-01-2021');
const date2 = dateize('01-02-2021');
const date3 = dateize('01-03-2021');
const date4 = dateize('01-04-2021');
const date5 = dateize('01-05-2021');
const date6 = dateize('01-06-2021');

// Supposing there is only one price for a date
const dummyStock1 = new Stock([
   { price: 100, date: date1 },
   { price: 1000, date: date2 },
]);

const dummyStock2 = new Stock([
   { price: 150, date: date3 },
   { price: 50, date: date4 },
]);

const dummyStock3 = new Stock([
   { price: 10, date: date5 },
   { price: 200, date: date6 },
]);

const dummyStocks = [dummyStock1, dummyStock2, dummyStock3];

const portfolioTest = new Portfolio(dummyStocks);
