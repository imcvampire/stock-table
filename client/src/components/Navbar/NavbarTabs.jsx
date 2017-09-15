import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'

const styles = {
  tabs: {
    width: '40vw',
  },
}

const NavbarTabs = () => (
  <Tabs style={styles.tabs}>
    <Tab
      label="Top gainers"
      data-route="/gainers/top"
    />
    <Tab
      label="Top losers"
      data-route="/losers/top"
    />
  </Tabs>
)

export default NavbarTabs
