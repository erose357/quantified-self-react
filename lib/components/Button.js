import React, { Component } from 'react'

class Button extends Component {
  render() {
    return(
      <button className={"food-button " + this.props.text}>{this.props.text}</button>
    )
  }
}

export default Button
