const $ = require('jquery')
import {errorLog} from '../ajax-responses/foodResponses'

export function saveData() {
  const parent = this.parentNode
  const foodEditId = parent.className.slice(4)
  const foodNameId = parent.children[0].innerHTML
  const calorieId = parent.children[1].innerHTML
  return $.ajax({
    url: `https://qs-node-api.herokuapp.com/${foodEditId}`,
    method: 'PATCH',
    data: { food: {name: foodNameId, calories: calorieId} },
  }).done(function(data) {
  }).catch(errorLog)
}
