import React, { Component } from 'react'
import Button from './Button'

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

export default ButtonGroup
