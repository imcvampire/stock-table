import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import NavbarTabs from './NavbarTabs'

const styles = {
  title: {
    cursor: 'pointer',
  },
}

const Navbar = () => (
  <MuiThemeProvider>
    <AppBar
      title={<span style={styles.title}>S&P/ASX</span>}
      showMenuIconButton={false}
      iconElementRight={<NavbarTabs />}
    />
  </MuiThemeProvider>
)

export default Navbar
