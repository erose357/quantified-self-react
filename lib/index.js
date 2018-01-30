import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
require('./styles/diary.css')
require('./ajax-responses/foodResponses')
require('./event-listeners/listeners')
require('./ajax-requests/requestsIndex')
require('./objects/requestsIndex')

ReactDOM.render(<ButtonGroup />, document.getElementById('root'))
