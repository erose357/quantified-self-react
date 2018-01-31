import React, { Component } from 'react'
import ButtonGroup from './ButtonGroup'
import TableHeader from './TableHeader'

class IndexFoodsTable extends Component {
  render() {
    return(
      <div>
      <ButtonGroup />
        <table className="diary foods-table" id="diary-foods-table">
          <tbody>
            <tr className="headings-diary">
              <TableHeader cl="blank" />
              <TableHeader name="Name" cl="name" />
              <TableHeader name="Calories" id="calorie-filter" cl="Calories" />
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default IndexFoodsTable
