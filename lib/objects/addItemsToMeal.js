const $ = require('jquery')
import {postMealItems} from '../ajax-requests/postMealItems'
import {getId} from '../ajax-requests/deleteFood'
import {loadMeal} from '../ajax-requests/getMeals'

export function addToMeal() {
  let mealId = getMealId(getId(event.currentTarget))
  let checked = $(':checked').get()
  postChecked(checked, mealId)
}

function postChecked(checked, mealId) {
  return Promise.all(
  checked.map(function(item) {
    let itemId = item.className
    return postMealItems(itemId, mealId)
  })
  )
  .then(() => {
  uncheck(checked)
  loadMeal(mealId)
  })
  .catch(err => console.log(err))
}

function uncheck(elements) {
  elements.forEach(function(elem) {
    $(`input.${elem.className}`).prop('checked', false)
  })
}

function getMealId(meal) {
  switch(meal) {
  case 'breakfast':
  return 1
  break
  case 'snack':
  return 2;
  break
  case 'lunch':
  return 3
  break
  case 'dinner':
  return 4
  break
  }
}
