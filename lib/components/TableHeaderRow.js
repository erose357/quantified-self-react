import React, { Component } from 'react'
import TableHeader from './TableHeader'

class TableHeaderRow extends Component {
  render() {
    return(
      <tr className={this.props.cl}>
        <TableHeader cl="blank" />
        <TableHeader name="Name" cl="name" />
        <TableHeader name="Calories" id="calorie-filter" cl="Calories" />
      </tr>
    )
  }
}

export default TableHeaderRow
