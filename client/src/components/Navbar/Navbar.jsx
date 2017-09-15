import React from 'react'
import AppBar from 'material-ui/AppBar'
import NavbarTabs from './NavbarTabs'

const styles = {
  title: {
    cursor: 'pointer',
  },
}

const Navbar = () => (
  <AppBar
    title={<span style={styles.title}>S&P/ASX</span>}
    showMenuIconButton={false}
    iconElementRight={<NavbarTabs />}
  />
)

export default Navbar
