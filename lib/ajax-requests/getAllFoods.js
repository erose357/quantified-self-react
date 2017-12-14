const $ = require('jquery')
import {appendFoods, appendFood, appendFoodsDiary, errorLog, removeFood} from '../ajax-responses/foodResponses'

export function getFoods() {
  return $.get("https://qs-node-api.herokuapp.com/api/v1/foods")
    .done(function(data) {
      appendFoods(data)
    })
    .catch(errorLog)
}

export function getFoodsDiary() {
  return $.get("https://qs-node-api.herokuapp.com/api/v1/foods")
    .done(function(data) {
      appendFoodsDiary(data)
    })
    .catch(errorLog)
}
