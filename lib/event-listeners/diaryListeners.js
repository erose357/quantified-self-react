const $ = require('jquery')
const loadSingles = require('../objects/loadSingles')
const allFoods = require('../ajax-requests/getAllFoods')
const calories = require('../objects/diaryCalorieCounts')
const filterFoods = require('../objects/foodsTableFilter')
const responses = require('../ajax-requests/deleteFood.js')//temporary for development need to remove during refactor
const single = require('../ajax-requests/getSingleFood') //temporary for development need to remove during refactor


$(document).ready(function() {
  $('body.diary').on('load', loadSingles.loadSingles())
  $('body.diary').on('load', allFoods.getFoodsDiary())
  $('#diary-food-input').keyup(filterFoods.filterDiaryFoods)

  $('button.breakfast').on('click', function () {
    let target = event.currentTarget
    let meal = responses.getId(target) 
    let i, currentRow, verify;
    let table = document.getElementById('diary-foods-table')
    let tr = table.getElementsByTagName('tr')
    let checked = []

    for (i = 0; i < tr.length; i++) {
      currentRow = tr[i]
      if (currentRow.className === 'headings-diary') {
        continue
      } else {
        verify = $(`.${responses.getId(currentRow)} input:checkbox`)[0].checked
        if (verify === true) {
          checked.push(responses.getId(currentRow))
        }
      }
    }
    checked.forEach(function(foodId) {
      let heading = formatTableClass(meal)
      single.getSingleFood(foodId, heading) 
      debugger
    })
  })
})

function formatTableClass (meal) {
  return `.${meal}-heading`
}

