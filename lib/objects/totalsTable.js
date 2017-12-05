const $ = require('jquery')

function loadTotals (){
  let x = document.getElementsByClassName('totalCals')
  let calorieValues = []
  let calorieTotalId = "totalsTotalCal"

  for (var i = 0; i < x.length; i++) {
    let temp = x[i].innerHTML
    calorieValues.push(Number(temp))
  }

  myFunction(calorieValues, calorieTotalId)
  remainingCals()
}

function getSum(total, num) {
  return total + num
}

function myFunction(item, id) {
  document.getElementById(id).innerHTML = item.reduce(getSum);
}

function remainingCals () {
  let totalCal = document.getElementById('totalsTotalCal').innerHTML
  let remainingCal = 2000 - totalCal
  document.getElementById('totalsRemainingCal').innerHTML = remainingCal
}


module.exports = {loadTotals}
