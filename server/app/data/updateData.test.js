const updateData = require('./updateData')

describe('update', () => {
  const stockList = [
    { price: 1001.88, volumn: 10013, code: 'AAA.XX', company: 'NQA' },
    { price: 100, volumn: 20000, code: 'BBB.YY', company: 'Quant Edge' },
  ]

  it('still has same length', () => {
    const newStockList = updateData(stockList)

    expect(newStockList).toHaveLength(stockList.length)
  })

  it('still have same code', () => {
    const newStockList = updateData(stockList)

    expect(newStockList.map(({ code }) => code)).toEqual(stockList.map(({ code }) => code))
  })

  it('price changes in range +- 5%', () => {
    const newStockList = updateData(stockList)

    newStockList.forEach(({ price }, index) => {
      expect(price).toBeGreaterThanOrEqual(stockList[index].price * 95 / 100)
      expect(price).toBeLessThanOrEqual(stockList[index].price * 105 / 100)
    })
  })

  it('volumn changes in range + [10, 30]', () => {
    const newStockList = updateData(stockList)

    newStockList.forEach(({ volumn }, index) => {
      expect(volumn).toBeGreaterThanOrEqual(stockList[index].volumn + 10)
      expect(volumn).toBeLessThanOrEqual(stockList[index].volumn + 30)
    })
  })
})