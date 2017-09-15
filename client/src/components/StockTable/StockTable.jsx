import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  Table,
  TableBody,
  TableRow,
  TableHeader,
  TableHeaderColumn,
} from 'material-ui/Table'

import StockTableRow from './StockTableRow'

const StockTable = () => (
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
        <StockTableRow />
      </TableBody>
    </Table>
  </MuiThemeProvider>
)

export default StockTable
