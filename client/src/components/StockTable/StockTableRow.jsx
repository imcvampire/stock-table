import React from 'react'
import PropTypes from 'prop-types'
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const StockTableRow = ({
  code,
  company,
  price,
  number,
  change,
  percentage,
}) => (
  <TableRow>
    <TableRowColumn>{ code }</TableRowColumn>
    <TableRowColumn>{ company }</TableRowColumn>
    <TableRowColumn>{ price }</TableRowColumn>
    <TableRowColumn>{ Math.round(price * number) }</TableRowColumn>
    <TableRowColumn>{ change }</TableRowColumn>
    <TableRowColumn>{ percentage }%</TableRowColumn>
  </TableRow>
)

StockTableRow.propTypes = {
  code: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default StockTableRow
