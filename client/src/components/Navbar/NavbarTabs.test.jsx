import React from 'react'
import { shallow, mount, render } from 'enzyme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import NavbarTabs from './NavbarTabs'

describe('<NavbarTabs />', () => {
  const muiTheme = getMuiTheme()
  const shallowWithContext = node => shallow(node, { context: { muiTheme } })

  it('renders without crashing', () => {
    shallowWithContext(<NavbarTabs />)
  })

  it('has 2 tabs', () => {
    const wrapper = shallowWithContext(<NavbarTabs />)
    expect(wrapper.children().length).toBe(2)
  })

  it('has 1 Top gainers', () => {
    const wrapper = shallowWithContext(<NavbarTabs />)
    expect(wrapper.find({ label: 'Top gainers' }).length).toBe(1)
  })


  it('has 1 Top losers', () => {
    const wrapper = shallowWithContext(<NavbarTabs />)
    expect(wrapper.find({ label: 'Top losers' }).length).toBe(1)
  })
})
