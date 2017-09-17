import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import io from 'socket.io-client'
import clone from 'clone'

import Navbar from './components/Navbar'
import StockTable from './components/StockTable'
import calDiff from './utils/calDiff'
import getTop from './utils/getTop'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      socket: null,
      initData: [],
      newData: [],
    }
  }

  componentDidMount() {
    this.state.socket = io.connect('http://localhost:9000')
    this.state.socket.once('initData', (data) => {
      this.setState(() => ({
        initData: clone(data),
        newData: data.map(stock => ({
          ...stock,
          change: 0,
          percentage: 0,
        })),
      }), () => {
        this.state.socket.on('data', this.updateData.bind(this))
      })
    })
  }

  updateData(data) {
    this.setState(prevState => ({
      ...prevState,
      newData: calDiff(prevState.initData, data),
    }))
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Switch>
            <Route
              exact
              path="/gainer/top"
              render={() => (
                <StockTable stockList={getTop(this.state.newData)} />
              )}
            />
            <Route
              exact
              path="/loser/top"
              render={() => (
                <StockTable stockList={getTop(this.state.newData, false)} />
              )}
            />
            <Redirect to="/gainer/top" />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
