const $ = require('jquery')
const API = 'https://api-qs.herokuapp.com'


  function createNewFood() {
    const postName = $(".new-food-form input[name='food-name']").val();
    const postCalories = $(".new-food-form input[name='food-calories']").val();
    return $.ajax({
      url: API + '/api/v1/foods',
      method: 'POST',
      data: { food: {name: postName, calories: postCalories} }
    })
}
module.exports = {createNewFood}
