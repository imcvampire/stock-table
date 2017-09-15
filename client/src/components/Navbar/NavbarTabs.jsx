import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Link } from 'react-router-dom'

const styles = {
  tabs: {
    width: '40vw',
  },
}

const NavbarTabs = () => (
  <Tabs style={styles.tabs}>
    <Tab
      label="Top gainers"
      data-route="/gainer/top"
      containerElement={<Link to="/gainer/top" />}
    />
    <Tab
      label="Top losers"
      data-route="/loser/top"
      containerElement={<Link to="/loser/top" />}
    />
  </Tabs>
)

export default NavbarTabs
