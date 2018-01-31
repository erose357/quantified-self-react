import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import IndexFoodsTable from './components/IndexFoodsTable'
require('./styles/diary.css')
require('./ajax-responses/foodResponses')
require('./event-listeners/listeners')
require('./ajax-requests/requestsIndex')
require('./objects/requestsIndex')

ReactDOM.render(<IndexFoodsTable />, document.getElementById('root'))
