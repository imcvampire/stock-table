import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  Table,
  TableBody,
  TableRow,
  TableHeader,
  TableHeaderColumn,
} from 'material-ui/Table'

import StockTableRow from './StockTableRow'

const StockTable = ({ stockList }) => (
  <MuiThemeProvider>
    <Table selectable={false}>
      <TableHeader displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Code</TableHeaderColumn>
          <TableHeaderColumn>Company</TableHeaderColumn>
          <TableHeaderColumn>Price</TableHeaderColumn>
          <TableHeaderColumn>Value</TableHeaderColumn>
          <TableHeaderColumn>Change</TableHeaderColumn>
          <TableHeaderColumn>% Change</TableHeaderColumn>
        </TableRow>
      </TableHeader>

      <TableBody displayRowCheckbox={false}>
        {
          stockList.map(stock => (<StockTableRow {...stock} key={stock.toString()} />))
        }
      </TableBody>
    </Table>
  </MuiThemeProvider>
)

StockTable.propTypes = {
  stockList: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    change: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
}

export default StockTable
