const $ = require('jquery')
const API = 'https://api-qs.herokuapp.com'

$(document).ready(function() {
  console.log(API)
    const getFoods = function() {
      return $.ajax({
        url: API + '/api/v1/foods',
        method: 'GET',
    }).done(function(data) {
      for (let i = 0; i < data.length; i++) {
        $('.foods-table').append('<tr><td>' + data[i].name + '</td><td>' + data[i].calories + '</td></tr>')
      }
    }).fail(function(error) {
      console.error(error)
    })
  }

  getFoods()
})
