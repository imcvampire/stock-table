function makeCode(charCode = 3, charExchange = 2) {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  ;[...Array(charCode)].forEach(() => {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  })
  text += '.'
  ;[...Array(charExchange)].forEach(() => {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  })

  return text
}

function makeCompany(length = 20) {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '

  ;[...Array(length)].forEach(() => {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  })

  return text
}

const getRandomNumber = (min, max) => Math.random() * (max - min) + min

/**
 * Init data
 *
 * @typedef {Object} Stock
 * @property {String} code
 * @property {String} company
 * @property {Number} price
 * @property {Number} volumn
 *
 * @param {Number} number
 * @return {Array.<Stock>} List of stocks
 */
function initData(number = 30) {
  const stockList = []

  ;[...Array(number)].forEach(() => {
    // Let make code is unique
    let code = makeCode()
    while (stockList.map(({ code }) => code).includes(code)) code = makeCode()

    stockList.push({
      code: makeCode(),
      company: makeCompany(),
      price: Number(getRandomNumber(0.01, 99.99).toFixed(2)),
      volumn: Math.round(getRandomNumber(1000, 1000000)),
    })
  })

  return stockList
}

module.exports = initData