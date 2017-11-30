const $ = require('jquery')
const API = 'https://api-qs.herokuapp.com'

$(document).ready(function() {
  console.log('test')
  $('.foods-table').on('click', '.delete-food', function() {
    console.log('deleted')
  })
})
