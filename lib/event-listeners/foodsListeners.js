const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')
const createNewFood = require('../ajax-requests/postFood')
const deleteFood = require('../ajax-requests/deleteFood')

$(document).ready(function() {
  $('window').on('load', allFoods.getFoods())
  $('.foods-table').on('click', '.delete-food', deleteFood.deleteFood)
  $('.new-food-form input[type="submit"]').on('click', createNewFood.createNewFood);
})
