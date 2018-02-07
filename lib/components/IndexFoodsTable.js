import React, { Component } from 'react'
import ButtonGroup from './ButtonGroup'
import TableHeaderRow from './TableHeaderRow'
import TableRow from './TableRow'

class IndexFoodsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    let self = this
    fetch("https://qs-node-api.herokuapp.com/api/v1/foods")
      .then(res => res.json())
      .then(
        (data) => {
        self.setState({
          isLoaded: true,
          items: data
        })
      },
      (error) => {
        self.setState({
          isLoaded: true,
          error
        })
      }
    )
  }

  render() {
    const { error, isLoaded, items } = this.state
    return(
      <div>
      <ButtonGroup />
        <table className="diary foods-table" id="diary-foods-table">
          <tbody>
            <TableHeaderRow cl="headings-diary" />
            {items.map(item => (
              <TableRow key={item.id} data={item} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default IndexFoodsTable
