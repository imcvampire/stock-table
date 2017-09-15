import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import StockTable from './components/StockTable'

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />

      <Switch>
        <Route
          exact
          path="/gainer/top"
          render={() => (
            <StockTable
              stockList={[
                {
                  code: 'ABC.XY',
                  company: 'NQA JSC',
                  price: 55.11,
                  number: 1000,
                  change: 2,
                  percentage: 6,
                },
              ]}
            />
          )}
        />
        <Route
          exact
          path="/loser/top"
          render={() => (
            <StockTable
              stockList={[
                {
                  code: 'DEF.MN',
                  company: 'Quant Edge',
                  price: 23.45,
                  number: 100001,
                  change: 2.1,
                  percentage: 6,
                },
              ]}
            />
          )}
        />
        <Redirect to="/gainer/top" />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
