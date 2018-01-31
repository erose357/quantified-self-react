import React, { Component } from 'react'
import ButtonGroup from './ButtonGroup'
import TableHeaderRow from './TableHeaderRow'

class IndexFoodsTable extends Component {
  render() {
    return(
      <div>
      <ButtonGroup />
        <table className="diary foods-table" id="diary-foods-table">
          <tbody>
            <TableHeaderRow cl="headings-diary" />
          </tbody>
        </table>
      </div>
    )
  }
}

export default IndexFoodsTable
