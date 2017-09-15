import React from 'react'
import { shallow, mount, render } from 'enzyme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  TableHeaderColumn,
} from 'material-ui/Table'
import StockTable from './StockTable'

const props = {
  stockList: [{
    code: 'ABC.XY',
    company: 'NQA JSC',
    price: 55.11,
    number: 1000,
    change: 2,
    percentage: 6,
  }, {
    code: 'DEF.MN',
    company: 'Quant Edge',
    price: 23.45,
    number: 100001,
    change: 2.1,
    percentage: 6,
  }],
}

describe('<StockTable />', () => {
  const muiTheme = getMuiTheme()
  const shallowWithContext = node => shallow(node, { context: { muiTheme } })

  it('renders without crashing', () => {
    shallowWithContext(<StockTable {...props} />)
  })

  it('has enough tab', () => {
    const wrapper = shallowWithContext(<StockTable {...props} />)
    expect(wrapper.find(TableHeaderColumn).map(node => node.props().children)).toEqual([
      'Code',
      'Company',
      'Price',
      'Value',
      'Change',
      '% Change',
    ])
  })
})
