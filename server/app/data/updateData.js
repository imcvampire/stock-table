const getRandomNumber = require('../utils/getRandomNumber')

function updateData(stockList) {
  return stockList.map((stock) => {
    const priceDiffLimit = stock.price * 5 / 100

    // Jest doesn't play nice with rest properties
    return Object.assign({}, stock, {
      price: Number((stock.price + getRandomNumber(-priceDiffLimit, priceDiffLimit)).toFixed(2)),
      volume: stock.volume + Math.round(getRandomNumber(10, 30)),
    })
  })
}

module.exports = updateData
