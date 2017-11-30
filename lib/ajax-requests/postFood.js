const $ = require('jquery')
const API = 'https://api-qs.herokuapp.com'

$(document).ready(function() {
  const createNewFood = function() {
    const postName = $(".new-food-form input[name='food-name']").val();
    const postCalories = $(".new-food-form input[name='food-calories']").val();
    return $.ajax({
      url: API + '/api/v1/foods',
      method: 'POST',
      data: { food: {name: postName, calories: postCalories} }
    })//.done(function(data) {
      //$('.foods-table').append('<p class="new-food">New food has been added.</p>');
    //}).fail(function() {
    //  handleError();
    //})
  }

  // const handleError = function() {
  //   $('.foods-table').append('<p>Something went wrong. Try again later</p>');
  // }

  $('.new-food-form input[type="submit"]').on('click', createNewFood);
})
