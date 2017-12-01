const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')
const createNewFood = require('../ajax-requests/postFood')

$(document).ready(function() {
  $('window').on('load', allFoods.getFoods())

  $('.new-food-form input[type="submit"]').on('click', createNewFood.createNewFood)

  $('table td').keyup(function() {
    clearTimeout($.data(this, 'timer'));
    const wait = setTimeout(saveData(), 500); // delay after user types
    $(this).data('timer', wait);
  });

  function saveData() {
    const nameID = $(".new-food-form input[name='update-id']").val();//change these inputs
    const calorieID = $(".new-food-form input[name='post-description']").val();

    return $.ajax({
      url: 'https://api-qs.herokuapp.com/api/v1/foods/:id',
      method: 'PUT',
      data: { food: {name: nameID, calories: calorieID} }
    })//.done(function(data) {
      //$('#latest-posts').append('<p class="post">New post has been updated.</p>');
    //}).fail(function() {
      //handleError();
    //})
  }
})
