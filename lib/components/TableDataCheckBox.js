import React, { Component } from 'react'

class TableDataCheckBox extends Component {
  render() {
    return(
      <td className={this.props.tdClass}>
        <input className={this.props.inputId} type="checkbox" name="food-checkbox" aria-labelledby="foods-table"></input>
      </td>
    )
  }
}

export default TableDataCheckBox
