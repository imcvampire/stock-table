import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn,
} from 'material-ui/Table'

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
        <TableRow>
          <TableRowColumn>Code</TableRowColumn>
          <TableRowColumn>Company</TableRowColumn>
          <TableRowColumn>Price</TableRowColumn>
          <TableRowColumn>Value</TableRowColumn>
          <TableRowColumn>Change</TableRowColumn>
          <TableRowColumn>% Change</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </MuiThemeProvider>
)

export default StockTable
