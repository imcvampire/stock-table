import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <div>
        test
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default App
