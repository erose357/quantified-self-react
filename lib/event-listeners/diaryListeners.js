const $ = require('jquery')
const loadSingles = require('../objects/loadSingles')
const allFoods = require('../ajax-requests/getAllFoods')
const calories = require('../objects/diaryCalorieCounts')
const filterFoods = require('../objects/foodsTableFilter')


$(document).ready(function() {
  $('body.diary').on('load', loadSingles.loadSingles())
  $('body.diary').on('load', allFoods.getFoodsDiary())
  $('#diary-food-input').keyup(filterFoods.filterDiaryFoods)
})
