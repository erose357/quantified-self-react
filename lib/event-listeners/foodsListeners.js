const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')

$(document).ready(function() {
  $('window').on('load', allFoods.getFoods())
  $('.foods-table').on('click', '.delete-food', function() {
    const foodId = getId(this.className)
    return $.ajax({
      url: `https://api-qs.herokuapp.com/api/v1/foods/${foodId}`,
      method: 'DELETE'
    })
    .then(function() {
      console.log('success')
    })
    .catch(function(error) {
      console.log(error)
    })
  })

  function getId (string) {
    return string.split(' ')[1]
  }
})
