import React from 'react'
import PropTypes from 'prop-types'
import { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import NavbarTabs from './NavbarTabs'

describe('<NavbarTabs />', () => {
  const muiTheme = getMuiTheme()
  const shallowWithContext = node => shallow(node, { context: { muiTheme } })
  const mountWithContext = node => mount(node, {
    context: { muiTheme },
    childContextTypes: {
      muiTheme: PropTypes.object,
    },
  })

  it('renders without crashing', () => {
    mountWithContext(<MemoryRouter><NavbarTabs /></MemoryRouter>)
  })

  it('has 2 tabs', () => {
    const wrapper = shallowWithContext(<NavbarTabs />)
    expect(wrapper.children()).toHaveLength(2)
  })

  it('has 1 Top gainers', () => {
    const wrapper = shallowWithContext(<NavbarTabs />)
    expect(wrapper.find({ label: 'Top gainers' })).toHaveLength(1)
  })


  it('has 1 Top losers', () => {
    const wrapper = shallowWithContext(<NavbarTabs />)
    expect(wrapper.find({ label: 'Top losers' })).toHaveLength(1)
  })
})
