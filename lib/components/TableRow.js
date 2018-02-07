import React, { Component } from 'react'
import TableData from './TableData'
import TableDataCheckBox from './TableDataCheckBox'

class TableRow extends Component {
  render() {
    return(
      <tr>
        <TableDataCheckBox tdClass="food-checkbox" inputId={this.props.data.id}/>
        <TableData value={this.props.data.name} />
        <TableData value={this.props.data.calories} />
      </tr>
    )
  }
}

export default TableRow
