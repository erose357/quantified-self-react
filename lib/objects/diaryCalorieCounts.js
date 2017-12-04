const $ = require('jquery')

function totalCalories() {
  totalCalorieCount('breakfast-table', 'breakfastTotalCal')
  totalCalorieCount('lunch-table', 'lunchTotalCal')
  totalCalorieCount('dinner-table', 'dinnerTotalCal')
  totalCalorieCount('snack-table', 'snackTotalCal')
}

function remainingCalories() {
  remainingCalorieCount('#breakfastRemainingCal', '#breakfastTotalCal', 400)
  remainingCalorieCount('#lunchRemainingCal', '#lunchTotalCal', 600)
  remainingCalorieCount('#dinnerRemainingCal', '#dinnerTotalCal', 800)
  remainingCalorieCount('#snackRemainingCal', '#snackTotalCal', 200)
}

function remainingCalorieCount (remaining, total, cals) {
  let calsUsed = Number($(total)[0].innerHTML)
  let newRemaining = cals - calsUsed
  $(remaining)[0].innerHTML = newRemaining
  if(newRemaining < 0) {
    $(remaining).css("color", "red")
  } else {
    $(remaining).css("color", "green")
  }
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
