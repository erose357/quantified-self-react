const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')
const createNewFood = require('../ajax-requests/postFood')

$(document).ready(function() {
  $('window').on('load', allFoods.getFoods())

  $('.new-food-form input[type="submit"]').on('click', createNewFood.createNewFood)
})
