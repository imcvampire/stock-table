import React from 'react'
import PropTypes from 'prop-types'
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const numberFormat = new Intl.NumberFormat()

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
    <TableRowColumn>{ numberFormat.format(price) }</TableRowColumn>
    <TableRowColumn>{ numberFormat.format(Math.round(price * number)) }</TableRowColumn>
    <TableRowColumn>{ numberFormat.format(change) }</TableRowColumn>
    <TableRowColumn>{ numberFormat.format(percentage) }%</TableRowColumn>
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
