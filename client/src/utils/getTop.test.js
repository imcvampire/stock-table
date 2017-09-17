import getTop from './getTop'

describe('getTop()', () => {
  const list = [
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
    {
      code: 'ZSA.VJ',
      company: 'HpicTrx6RDs2yRGWXViy',
      price: 46.6,
      volume: 702162,
    },
    {
      code: 'IGK.JN',
      company: 'u3mGe4 GsHZQ365DKnCB',
      price: 8.31,
      volume: 745749,
    },
  ]

  it('return extract length', () => {
    const newList = getTop(list, true, 3)

    expect(newList).toHaveLength(3)
  })

  it('return in order', () => {
    const resultDesc = [
      {
        code: 'ZSA.VJ',
        company: 'HpicTrx6RDs2yRGWXViy',
        price: 46.6,
        volume: 702162,
      }, {
        code: 'QEH.KX',
        company: 'kwmx97JMGQK9Y6H26j1U',
        price: 24.25,
        volume: 523574,
      },
      {
        code: 'IGK.JN',
        company: 'u3mGe4 GsHZQ365DKnCB',
        price: 8.31,
        volume: 745749,
      },
      {
        code: 'PXO.QY',
        company: '1cMCxdGgaDr0B4 gTUUV',
        price: 12.2,
        volume: 201320,
      },
      {
        code: 'BCM.EY',
        company: 'uibWcwPUEO0iG3eOsrPP',
        price: 14.67,
        volume: 137487,
      },
    ]

    const newListDesc = getTop(list)
    const newListAsc = getTop(list, false)

    expect(newListDesc).toEqual(resultDesc)
    expect(newListAsc).toEqual(resultDesc.reverse())
  })
})
