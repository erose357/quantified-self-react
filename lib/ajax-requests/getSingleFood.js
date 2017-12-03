const $ = require('jquery')
const requests = require('../ajax-responses/foodResponses')

function getSingleFood(id, meal) {
  return $.get(`https://api-qs.herokuapp.com/api/v1/foods/${id}`)
    .done(function(data) {
      requests.appendFood(data, meal)
    })
    .catch(requests.errorLog)
}

module.exports = {getSingleFood}
