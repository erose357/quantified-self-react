const $ = require('jquery')
const requests = require('../ajax-responses/foodResponses')
const calories = require('../objects/diaryCalorieCounts')
const totals = require('../objects/totalsTable')

function loadMeals (){
  return $.get("https://api-qs.herokuapp.com/api/v1/meals")
    .done(function(data) {
      data.forEach(function(mealObject) {
        return requests.appendFood(mealObject)
      })
    })
    .then(calories.totalCalories)
    .then(calories.remainingCalories)
    .then(totals.loadTotals)
    .catch(requests.errorLog)
}

function loadMeal(mealId) {
  return $.get(`https://api-qs.herokuapp.com/api/v1/meals/${mealId}/foods`)
.done(function(data) {
  let table = document.getElementById(`${data.name.toLowerCase()}-table`)
  let rows = table.getElementsByClassName('foodLoad')
  while (rows.length > 0) {
    rows[0].parentNode.removeChild(rows[0]) 
  }
  requests.appendFood(data)
 })
  .then(function () {
    calories.totalCalories()
  })
  .then(function() {
    calories.remainingCalories()
  })
  .then(function() {
    totals.loadTotals()
  })
}

module.exports = {loadMeals, loadMeal}
