import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import StockTable from './components/StockTable'

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <StockTable stockList={[]} />
    </div>
  </BrowserRouter>
)

export default App
