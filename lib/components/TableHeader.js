import React, { Component } from 'react'

class TableHeader extends Component {
  render() {
    return(
      <th className={this.props.cl} id={this.props.id} tabIndex="0">{this.props.name}</th>
    )
  }
}

export default TableHeader
