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
  debugger
  //$('#snack-table tr.food').remove()
  //NEED TO FIGURE OUT HOW TO SELECT SPECIFIC TABLE ELEMENTS FOR REMOVAL
  //first need to clear the table on the page
  //then reload with the new data
 })
}

module.exports = {loadMeals, loadMeal}
