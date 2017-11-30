const $ = require('jquery')
const requests = require('../ajax-responses/foodResponses')
const API = 'https://api-qs.herokuapp.com'


function getFoods() {
  return $.get("https://api-qs.herokuapp.com/api/v1/foods")
    .done(function(data) {
      requests.appendFoods(data)
    })
    .catch(requests.errorLog)
}

module.exports = {getFoods}
