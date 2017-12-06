const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')
const calories = require('../objects/diaryCalorieCounts')
const filterFoods = require('../objects/foodsTableFilter')
const addToMeal = require('../objects/addItemsToMeal')
const getMeals = require('../ajax-requests/getMeals')
const filterCalories = require('../objects/filterCalories')
const requests = require('../ajax-responses/foodResponses') //only for development, delete when done

$.fn.clicktoggle = function(a, b, c) {
    return this.each(function() {
        let clicked = 0;
        $(this).click(function() {
            if (clicked === 1) {
                clicked = 2;
                return b.apply(this, arguments);
            }else if (clicked === 2) {
                clicked = 0
                return c.apply(this, arguments)
            }
            clicked = 1;
            return a.apply(this, arguments);
        });
    });
};

$(document).ready(function() {
  $('body.diary').on('load', getMeals.loadMeals())
  $('body.diary').on('load', allFoods.getFoodsDiary())
  $('#diary-food-input').keyup(filterFoods.filterDiaryFoods)
  $('button.breakfast').on('click', addToMeal.addToMeal)
  $('button.lunch').on('click', addToMeal.addToMeal)
  $('button.dinner').on('click', addToMeal.addToMeal)
  $('button.snack').on('click', addToMeal.addToMeal)
  $("#calorie-filter").clicktoggle(filterCalories.ascending,filterCalories.descending,filterCalories.original)
  $('#breakfast-table').on('click', '.delete-food', function () {
    let ids = getIds(this)
    return $.ajax({
      url: `https://api-qs.herokuapp.com/api/v1/meals/${ids.mealId}/foods/${ids.foodId}`,
      method: 'DELETE',
    })
    .then(function() {
      removeMealItem(ids)//might be temporary
    })
    .catch(requests.errorLog)
  })
})

function getIds(element) {
  let rawIds, mealId, foodId; 
  rawIds = $(element).parents()[1].className.split(' ')
  mealId = diaryIds(rawIds[1]) 
  foodId = diaryIds(rawIds[0])
  return { foodId: foodId, mealId: mealId }
}

function diaryIds(string) {
  let rawArray = string.split(/(\D)/)
  return rawArray[rawArray.length - 1]
}

function removeMealItem(ids) {
  $(`tr.food${ids.foodId}.meal${ids.mealId}`).remove()
}
