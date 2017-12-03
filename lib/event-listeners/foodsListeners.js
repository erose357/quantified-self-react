const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')
const createNewFood = require('../ajax-requests/postFood')
const deleteFood = require('../ajax-requests/deleteFood')
const filterFoods = require('../objects/foodsTableFilter')
const saveData = require('../ajax-requests/editFoods')

$(document).ready(function() {
  $('body.foods').on('load', allFoods.getFoods())
  $('.foods-table').on('click', '.delete-food', deleteFood.deleteFood)
  $('.new-food-form input[type="submit"]').on('click', createNewFood.createNewFood)
  $('#foods-table').on('keyup', "td", saveData.saveData)
  $('#food-input').keyup(filterFoods.filterFoods)
})
