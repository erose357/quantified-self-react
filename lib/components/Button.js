import React, { Component } from 'react'

class Button extends Component {
  capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  buttonName() {
    return this.capitalize(this.props.text)
  }

  render() {
    return(
      <button className={"food-button " + this.props.text}>{this.buttonName()}</button>
    )
  }
}

export default Button
