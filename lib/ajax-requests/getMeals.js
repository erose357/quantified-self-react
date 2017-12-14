const $ = require('jquery')
import {appendFoods, appendFood, appendFoodsDiary, errorLog, removeFood} from '../ajax-responses/foodResponses'
import {totalCalories, remainingCalories, totalCalorieCount, remainingCalorieCount} from '../objects/diaryCalorieCounts'
import {loadTotals} from '../objects/totalsTable'

export function loadMeals (){
  return $.get("https://qs-node-api.herokuapp.com/api/v1/meals")
    .done(function(data) {
      data.forEach(function(mealObject) {
        return appendFood(mealObject)
      })
    })
    .then(totalCalories)
    .then(remainingCalories)
    .then(loadTotals)
    .catch(errorLog)
}

export function loadMeal(mealId) {
  return $.get(`https://qs-node-api.herokuapp.com/api/v1/meals/${mealId}/foods`)
.done(function(data) {
  let table = document.getElementById(`${data.name.toLowerCase()}-table`)
  removeMealRows(table)
  return data
 })
  .then(function(data) {
  appendFood(data)
  })
  .then(totalCalories)
  .then(remainingCalories)
  .then(loadTotals)
  .catch(errorLog)
}

function removeMealRows(table) {
  let rows = table.getElementsByClassName('foodLoad')
  while (rows.length > 0) {
    rows[0].parentNode.removeChild(rows[0])
  }
}
