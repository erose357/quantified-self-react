const $ = require('jquery')
const API = 'https://api-qs.herokuapp.com'


  const createNewFood = function() {
    const postName = $(".new-food-form input[name='food-name']").val();
    const postCalories = $(".new-food-form input[name='food-calories']").val();
    return $.ajax({
      url: API + '/api/v1/foods',
      method: 'POST',
      data: { food: {name: postName, calories: postCalories} }
    })



  $('.new-food-form input[type="submit"]').on('click', createNewFood);
}
