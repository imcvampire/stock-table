const getRandomNumber = require('../utils/getRandomNumber')

function updateData(stockList) {
  return stockList.map((stock) => {
    const priceDiffLimit = stock.price * 5 / 100

    // Jest isn't play nice with rest properties
    return Object.assign({}, stock, {
      price: Number((stock.price + getRandomNumber(-priceDiffLimit, priceDiffLimit)).toFixed(2)),
      volumn: stock.volumn + Math.round(getRandomNumber(10, 30)),
    })
  })
}

module.exports = updateData