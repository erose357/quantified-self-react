const $ = require('jquery')

function totalCalories() {
  totalCalorieCount('breakfast-table', 'breakfastTotalCal')
  totalCalorieCount('lunch-table', 'lunchTotalCal')
  totalCalorieCount('dinner-table', 'dinnerTotalCal')
  totalCalorieCount('snack-table', 'snackTotalCal')
}

function remainingCalories() {
  remainingCalorieCount('breakfast-table', 'breakfastRemainingCal', 'breakfastTotalCal', 400)
}

function remainingCalorieCount (tableId, remaining, total, cals) {
  let calsUsed = Number(document.getElementById(total).innerHTML)
  let newRemaining = cals - calsUsed
  document.getElementById(remaining).innerHTML = newRemaining
}

function totalCalorieCount(tableId, calorieTotalId) {
  let diaryTable = document.getElementById(tableId)
  let x = diaryTable.getElementsByClassName('countCalories')
  let calorieValues = []

  for (var i = 0; i < x.length; i++) {
    let temp = x[i].innerHTML
    calorieValues.push(Number(temp))
  }

  myFunction(calorieValues, calorieTotalId)
}

function getSum(total, num) {
  return total + num
}

function myFunction(item, id) {
  document.getElementById(id).innerHTML = item.reduce(getSum);
}

module.exports = {totalCalories, remainingCalories}
