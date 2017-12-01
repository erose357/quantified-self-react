const $ = require('jquery')
const requests = require('../ajax-responses/foodResponses')

function deleteFood () {
  const foodId = getId(this)
  return $.ajax({
    url: `https://api-qs.herokuapp.com/api/v1/foods/${foodId}`,
    method: 'DELETE',
  })
  .then(function() {
    $(`.food${foodId}`).remove()
  })
  .catch(requests.errorLog) 
}

function getId (id) {
  return id.className.split(' ')[1]
}

module.exports = {deleteFood}
