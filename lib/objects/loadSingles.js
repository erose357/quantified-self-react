const $ = require('jquery')
const getSingle = require('../ajax-requests/getSingleFood')

function loadSingles() {
  loadBreakfast()
  loadLunch()
  loadDinner()
  loadSnack()
}

function loadBreakfast() {
  getSingle.getSingleFood(1, ".breakfast-heading")
  getSingle.getSingleFood(5, ".breakfast-heading")
}

function loadLunch() {
  getSingle.getSingleFood(40, ".lunch-heading")
  getSingle.getSingleFood(12, ".lunch-heading")
}

function loadDinner() {
  getSingle.getSingleFood(6, ".dinner-heading")
  getSingle.getSingleFood(7, ".dinner-heading")
}

function loadSnack() {
  getSingle.getSingleFood(2, ".snack-heading")
}

module.exports = {loadSingles}
