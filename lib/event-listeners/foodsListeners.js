const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')
const deleteFood = require('../ajax-requests/deleteFood')

$(document).ready(function() {
  $('window').on('load', allFoods.getFoods())
  $('.foods-table').on('click', '.delete-food', deleteFood.deleteFood)
})
