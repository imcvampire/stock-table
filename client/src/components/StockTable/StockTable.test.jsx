import React from 'react'
import { shallow, mount, render } from 'enzyme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  TableHeaderColumn,
} from 'material-ui/Table'
import StockTable from './StockTable'

describe('<StockTable />', () => {
  const muiTheme = getMuiTheme()
  const shallowWithContext = node => shallow(node, { context: { muiTheme } })

  it('renders without crashing', () => {
    shallowWithContext(<StockTable />)
  })

  it('has enough tab', () => {
    const wrapper = shallowWithContext(<StockTable />)
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
