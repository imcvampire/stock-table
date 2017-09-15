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
  value,
  change,
  percentage,
}) => (
  <TableRow>
    <TableRowColumn>{ code }</TableRowColumn>
    <TableRowColumn>{ company }</TableRowColumn>
    <TableRowColumn>{ price }</TableRowColumn>
    <TableRowColumn>{ value }</TableRowColumn>
    <TableRowColumn>{ change }</TableRowColumn>
    <TableRowColumn>{ percentage }%</TableRowColumn>
  </TableRow>
)

StockTableRow.propTypes = {
  code: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default StockTableRow
