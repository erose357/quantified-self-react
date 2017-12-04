const $ = require('jquery')
const loadSingles = require('../objects/loadSingles')
const allFoods = require('../ajax-requests/getAllFoods')
const calories = require('../objects/diaryCalorieCounts')
const filterFoods = require('../objects/foodsTableFilter')


$(document).ready(function() {
  $('body.diary').on('load', loadSingles.loadSingles())
  $('body.diary').on('load', allFoods.getFoodsDiary())
  $('#diary-food-input').keyup(filterFoods.filterDiaryFoods)

  $('button.breakfast').on('click', function () {
    let i, currentRow, verify;
    let table = document.getElementById('diary-foods-table')
    let tr = table.getElementsByTagName('tr')
    let checked = []

    for (i = 0; i < tr.length; i++) {
      currentRow = tr[i].className
      if (currentRow === 'headings-diary') {
        continue
      } else {
        verify = $(`.${currentRow} input:checkbox`)[0].checked
        if (verify === true) {
          checked.push(currentRow)
        }
      }
    }
    console.log(checked)
  })
})
