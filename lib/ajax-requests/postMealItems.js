const $ = require('jquery')
import {appendFoods, appendFood, appendFoodsDiary, errorLog, removeFood} from '../ajax-responses/foodResponses'

export function postMealItems(itemId, meal) {
  return $.ajax({
    url: `https://api-qs.herokuapp.com/api/v1/meals/${meal}/foods/${itemId}`,
    method: 'POST',
  })
  .catch(errorLog)
}
