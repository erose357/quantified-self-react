const $ = require('jquery')
import {appendFoods, appendFood, appendFoodsDiary, errorLog, removeFood} from '../ajax-responses/foodResponses'
const API = 'https://api-qs.herokuapp.com'

export function getFoods() {
  return $.get("https://api-qs.herokuapp.com/api/v1/foods")
    .done(function(data) {
      appendFoods(data)
    })
    .catch(errorLog)
}

export function getFoodsDiary() {
  return $.get("https://api-qs.herokuapp.com/api/v1/foods")
    .done(function(data) {
      appendFoodsDiary(data)
    })
    .catch(errorLog)
}
