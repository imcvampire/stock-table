import calDiff from './calDiff'

describe('calDiff()', () => {
  const firstlist = [
    {
      code: 'BCM.EY',
      company: 'uibWcwPUEO0iG3eOsrPP',
      price: 14.67,
      volume: 137487,
    },
    {
      code: 'QEH.KX',
      company: 'kwmx97JMGQK9Y6H26j1U',
      price: 24.25,
      volume: 523574,
    },
    {
      code: 'PXO.QY',
      company: '1cMCxdGgaDr0B4 gTUUV',
      price: 12.2,
      volume: 201320,
    },
  ]

  const newList = [
    {
      code: 'BCM.EY',
      company: 'uibWcwPUEO0iG3eOsrPP',
      price: 15,
      volume: 137487,
    },
    {
      code: 'QEH.KX',
      company: 'kwmx97JMGQK9Y6H26j1U',
      price: 24.25,
      volume: 530000,
    },
    {
      code: 'PXO.QY',
      company: '1cMCxdGgaDr0B4 gTUUV',
      price: 15,
      volume: 203000,
    },
  ]

  it('have same length', () => {
    const list = calDiff(firstlist, newList)

    expect(list).toHaveLength(newList.length)
  })

  it('in same order', () => {
    const list = calDiff(firstlist, newList)

    expect(list.map(({ code, company, price, volume }) => (
      { code, company, price, volume }
    )))
      .toEqual(newList)
  })

  it('has correct diff', () => {
    const list = calDiff(firstlist, newList)

    const result = [
      { change: 0.33, percentage: 0.02 },
      { change: 0, percentage: 0 },
      { change: 2.8, percentage: 0.23 },
    ]

    expect(list.map(({ change, percentage }) => ({ change, percentage }))).toEqual(result)
  })
})
