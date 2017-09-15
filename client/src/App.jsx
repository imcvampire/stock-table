import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/Navbar'

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <Navbar />
    </MuiThemeProvider>
  </BrowserRouter>
)

export default App
