const $ = require('jquery')
import {errorLog, removeFood} from '../ajax-responses/foodResponses'

export function deleteFood () {
  const foodId = getId(this)
  return $.ajax({
    url: `https://api-qs.herokuapp.com/api/v1/foods/${foodId}`,
    method: 'DELETE',
  })
  .then(function() {
    removeFood(foodId)
  })
  .catch(errorLog)
}

export function getId (id) {
  return id.className.split(' ')[1]
}
