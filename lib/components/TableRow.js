import React, { Component } from 'react'
import TableData from './TableData'

class TableRow extends Component {
  render() {
    return(
      <tr>
        <TableData />
        <TableData value={this.props.data.name} />
        <TableData value={this.props.data.calories} />
      </tr>
    )
  }
}

export default TableRow
