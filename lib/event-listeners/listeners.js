const $ = require('jquery')
import {getFoods, getFoodsDiary} from '../ajax-requests/getAllFoods'
import {filterFoods, filterDiaryFoods} from '../objects/foodsTableFilter'
import {addToMeal} from '../objects/addItemsToMeal'
import {loadMeals} from '../ajax-requests/getMeals'
import {ascending, descending, original} from '../objects/filterCalories'
import {deleteMealItem} from '../ajax-requests/deleteMealItem'
import {createNewFood} from '../ajax-requests/postFood'
import {deleteFood} from '../ajax-requests/deleteFood'
import {saveData} from '../ajax-requests/editFoods'

$.fn.clicktoggle = function(a, b, c) {
    return this.each(function() {
        let clicked = 0;
        $(this).click(function() {
            if (clicked === 1) {
                clicked = 2;
                return b.apply(this, arguments)
            }else if (clicked === 2) {
                clicked = 0
                return c.apply(this, arguments)
            }
            clicked = 1;
            return a.apply(this, arguments)
        });
    });
};

$(document).ready(function() {
  $('body.diary').on('load', loadMeals())
  //$('body.diary').on('load', getFoodsDiary())
  $('#diary-food-input').keyup(filterDiaryFoods)
  $('button.breakfast').on('click', addToMeal)
  $('button.lunch').on('click', addToMeal)
  $('button.dinner').on('click', addToMeal)
  $('button.snack').on('click', addToMeal)
  $("#calorie-filter").clicktoggle(ascending, descending, original)
  $('#breakfast-table').on('click', '.delete-food', deleteMealItem)
  $('#lunch-table').on('click', '.delete-food', deleteMealItem)
  $('#snack-table').on('click', '.delete-food', deleteMealItem)
  $('#dinner-table').on('click', '.delete-food', deleteMealItem)
  $('body.foods').on('load', getFoods())
  $('.foods-table').on('click', '.delete-food', deleteFood)
  $('.new-food-form input[type="submit"]').on('click', createNewFood)
  $('#foods-table').on('keyup', "td", saveData)
  $('#food-input').keyup(filterFoods)
})
