const $ = require('jquery')
const requests = require('../ajax-responses/foodResponses')

function loadMeals (){
  return $.get("https://api-qs.herokuapp.com/api/v1/meals")
    .done(function(data) {
      data.forEach(function(mealObject) {
        return requests.appendFood(mealObject)
      })
    })
    .catch(requests.errorLog)
}

module.exports = {loadMeals}
