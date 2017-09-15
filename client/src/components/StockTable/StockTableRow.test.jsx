import React from 'react'
import { shallow, mount, render } from 'enzyme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import StockTableRow from './StockTableRow'

const props = {
  code: 'ABC.XY',
  company: 'NQA JSC',
  price: 55.11,
  number: 120,
  change: 2,
  percentage: 6,
}

describe('<StockTableRow />', () => {
  const muiTheme = getMuiTheme()
  const shallowWithContext = node => shallow(node, { context: { muiTheme } })

  it('renders without crashing', () => {
    shallowWithContext(<StockTableRow {...props} />)
  })
})
