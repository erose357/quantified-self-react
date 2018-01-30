import React, { Component } from 'react'
import ReactDOM from 'react-dom'
require('./styles/diary.css')
require('./ajax-responses/foodResponses')
require('./event-listeners/listeners')
require('./ajax-requests/requestsIndex')
require('./objects/requestsIndex')

class Button extends Component {
  render() {
    return(
      <button className="food-button breakfast">Breakfast</button>
    )
  }
}
ReactDOM.render(<Button />, document.getElementById('root'))
