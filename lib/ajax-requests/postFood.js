const $ = require('jquery')
const API = 'https://api-qs.herokuapp.com'


function createNewFood() {
  const postName = $(".new-food-form input[name='food-name']").val();
  const postCalories = $(".new-food-form input[name='food-calories']").val();
  if(postName.length === 0) {
    $("#msg1").css("display", "block")
  } else if(postCalories.length === 0){
    $("#msg2").css("display", "block")
  }else {
    return $.ajax({
      url: API + '/api/v1/foods',
      method: 'POST',
      data: { food: {name: postName, calories: postCalories} }
    })
  }
}
module.exports = {createNewFood}
