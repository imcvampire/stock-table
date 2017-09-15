import React from 'react'
import {
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table'

const StockTableHeader = () => (
  <TableHeader>
    <TableRow>
      <TableHeaderColumn>Code</TableHeaderColumn>
      <TableHeaderColumn>Company</TableHeaderColumn>
      <TableHeaderColumn>Price</TableHeaderColumn>
      <TableHeaderColumn>Value</TableHeaderColumn>
      <TableHeaderColumn>Change</TableHeaderColumn>
      <TableHeaderColumn>% Change</TableHeaderColumn>
    </TableRow>
  </TableHeader>
)

export default StockTableHeader
