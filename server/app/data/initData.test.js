const initData = require('./initData')

describe('initData', () => {
  it('create right number of stocks (default)', () => {
    const stockListDefault = initData()
    expect(stockListDefault).toHaveLength(30)
  })

  it('create right number of stocks', () => {
    const stockList = initData(20)
    expect(stockList).toHaveLength(20)
  })

  it('stock code is unique', () => {
    const stockList = initData()
    const codeList = stockList.map(({ code }) => code)

    const codeSet = new Set(codeList)

    expect(codeSet.size).toBe(codeList.length)
  })
})
