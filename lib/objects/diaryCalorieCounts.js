const $ = require('jquery')

function totalCalories() {
  totalCalorieBreakfast()
}

function totalCalorieBreakfast() {
  //iterate through all table data rows of breakfast table with class includeCalories and add calories to array
  let diaryTable = document.getElementById('breakfast-table')
  let x = diaryTable.getElementsByClassName('countCalories')
  let calorieValues = []

  for (var i = 0; i < x.length; i++) {
    let temp = x[i].innerHTML
    calorieValues.push(Number(temp))
  }

  myFunction(calorieValues, "breakfastTotalCal")
}

function getSum(total, num) {
  return total + num
}

function myFunction(item, id) {
  document.getElementById(id).innerHTML = item.reduce(getSum);
}

module.exports = {totalCalories}
