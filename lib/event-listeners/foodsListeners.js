const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')
const createNewFood = require('../ajax-requests/postFood')
const deleteFood = require('../ajax-requests/deleteFood')
const filterFoods = require('../objects/foodsTableFilter')
const saveData = require('../ajax-requests/editFoods')

$(document).ready(function() {
  $('window').on('load', allFoods.getFoods())

  $('.foods-table').on('click', '.delete-food', deleteFood.deleteFood)
  $('.new-food-form input[type="submit"]').on('click', createNewFood.createNewFood)
  $('#foods-table').on('keyup', "td", saveData.saveData)




  $('#food-input').keyup(filterFoods.filterFoods)

  $('.new-food-form input[type="submit"]').on('click', function() {
    const postName = $('.new-food-form input[name=food-name]').val()
    const postCalories = $('.new-food-form input[name=food-calories').val()
    if (postName.length === 0 || postCalories.length === 0) {
      event.preventDefault()
      $('.food-placeholders').toggle()
    } else {
      createNewFood.createNewFood()
    }
  })
})
