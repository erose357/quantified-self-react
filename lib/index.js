import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
require('./styles/diary.css')
require('./ajax-responses/foodResponses')
require('./event-listeners/listeners')
require('./ajax-requests/requestsIndex')
require('./objects/requestsIndex')

class ButtonGroup extends Component {
  render() {
    return(
      <div>
        <Button text="breakfast"/>
        <Button text="lunch" />
        <Button text="dinner" />
        <Button text="snack" />
      </div>
    )
  }
}

ReactDOM.render(<ButtonGroup />, document.getElementById('root'))
