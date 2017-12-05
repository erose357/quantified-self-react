const $ = require('jquery')
const getMeals = require('../ajax-requests/getMeals')
const calories = require('../objects/diaryCalorieCounts')
const totals = require('../objects/totalsTable')


function loadMeals() {
  getMeals.getmeals()
  // setTimeout(calories.totalCalories, 1000)
  // setTimeout(calories.remainingCalories, 1100)
  // setTimeout(totals.loadTotals, 1200)
}

module.exports = {loadMeals}
