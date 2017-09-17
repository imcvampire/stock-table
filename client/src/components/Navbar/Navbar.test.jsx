import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Navbar from './Navbar'

describe('<Navbar />', () => {
  const muiTheme = getMuiTheme()
  const mountWithContext = node => mount(node, {
    context: { muiTheme },
  })

  it('renders without crashing', () => {
    mountWithContext(<MemoryRouter><Navbar /></MemoryRouter>)
  })
})
