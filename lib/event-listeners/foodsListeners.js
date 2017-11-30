const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')

$(document).ready(function() {
  $('window').on('load', allFoods.getFoods())
  $('.foods-table').on('click', '.delete-food', deleteFood)

  function deleteFood () {
    const foodId = getId(this)
    return $.ajax({
      url: `https://api-qs.herokuapp.com/api/v1/foods/${foodId}`,
      method: 'DELETE',
    })
    .then(function() {
      $(`.food${foodId}`).remove()
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  function getId (id) {
    return id.className.split(' ')[1]
  }
})
