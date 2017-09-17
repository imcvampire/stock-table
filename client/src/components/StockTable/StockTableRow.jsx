import React from 'react'
import PropTypes from 'prop-types'
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const numberFormat = new Intl.NumberFormat()

const styles = {
  code: {
    color: 'blue',
  },
  changeUp: {
    color: 'green',
  },
  changeDown: {
    color: 'red',
  },
}

const StockTableRow = ({
  code,
  company,
  price,
  volume,
  change,
  percentage,
}) => (
  <TableRow>
    <TableRowColumn style={styles.code}>{ code }</TableRowColumn>
    <TableRowColumn>{ company }</TableRowColumn>
    <TableRowColumn>{ numberFormat.format(price) }</TableRowColumn>
    <TableRowColumn>{ numberFormat.format(Math.round(price * volume)) }</TableRowColumn>
    <TableRowColumn style={change >= 0 ? styles.changeUp : styles.changeDown}>
      { numberFormat.format(change) }
    </TableRowColumn>
    <TableRowColumn style={change >= 0 ? styles.changeUp : styles.changeDown}>
      { numberFormat.format(percentage) }%
    </TableRowColumn>
  </TableRow>
)

StockTableRow.propTypes = {
  code: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default StockTableRow
