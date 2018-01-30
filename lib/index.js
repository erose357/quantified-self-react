import React, { Component } from 'react'
import ReactDOM from 'react-dom'
require('./styles/diary.css')
require('./ajax-responses/foodResponses')
require('./event-listeners/listeners')
require('./ajax-requests/requestsIndex')
require('./objects/requestsIndex')


class FoodsTable extends Component {
  render() {
    return(
      <p>Future Foods Table</p>
    )
  }
}

ReactDOM.render(<FoodsTable />, document.getElementById('root'))

