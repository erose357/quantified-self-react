import React, { Component } from 'react'
import ButtonGroup from './ButtonGroup'

class IndexFoodsTable extends Component {
  render() {
    return(
      <div>
      <ButtonGroup />
        <table className="diary foods-table" id="diary-foods-table">
          <tr className="headings-diary">
            <th className="blank"></th>
            <th tabIndex="0" className="name">Name</th>
            <th tabIndex="0" id="calorie-filter" className="calories">Calories</th>
          </tr>
        </table>
      </div>
    )
  }
}

export default IndexFoodsTable
