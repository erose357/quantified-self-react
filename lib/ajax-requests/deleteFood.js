const $ = require('jquery')
const API = 'https://api-qs.herokuapp.com'

$(document).ready(function() {
 $('.foods-table').on('click', '.delete-food', function() {
   console.log('deleted')
  })
})
