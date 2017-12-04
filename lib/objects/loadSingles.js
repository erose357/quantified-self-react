const $ = require('jquery')
const getSingle = require('../ajax-requests/getSingleFood')
const calories = require('../objects/diaryCalorieCounts')
const totals = require('../objects/totalsTable')


function loadSingles() {
  loadBreakfast()
  loadLunch()
  loadDinner()
  loadSnack()
  setTimeout(calories.totalCalories, 1000)
  setTimeout(calories.remainingCalories, 1100)
  setTimeout(totals.loadTotals, 2000)
}

function loadBreakfast() {
  getSingle.getSingleFood(1, ".breakfast-heading")
  getSingle.getSingleFood(5, ".breakfast-heading")
}

function loadLunch() {
  getSingle.getSingleFood(3, ".lunch-heading")
  getSingle.getSingleFood(12, ".lunch-heading")
}

function loadDinner() {
  getSingle.getSingleFood(6, ".dinner-heading")
  getSingle.getSingleFood(7, ".dinner-heading")
}

function loadSnack() {
  getSingle.getSingleFood(4, ".snack-heading")
}

module.exports = {loadSingles}
