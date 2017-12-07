const $ = require('jquery')

  function appendFoods(data) {
    for (let i = 0; i < data.length; i++) {
      $('.headings')
        .after(
        `<tr class="food${data[i].id}">
          <td contenteditable="true">${data[i].name}</td>
          <td contenteditable="true">${data[i].calories}</td>
          <td class="delete-button"><button class="delete-food ${data[i].id}">-</button></td>
        </tr>`
        )
    }
  }

  function appendFoodsDiary(data) {
    for (let i = 0; i < data.length; i++) {
      $('.headings-diary')
        .after(
        `<tr class="food ${data[i].id}">
          <td class="food-checkbox"><input class="${data[i].id}" type="checkbox" name="food-checkbox" aria-labelledby="foods-table"></td>
          <td>${data[i].name}</td>
          <td>${data[i].calories}</td>
        </tr>`
      )
    }
  }

  function appendFood(meal_object) {
    meal_object.foods.forEach(function (food) {
      $(`.${meal_object.name}`)
      .after(
          `<tr class="food${food.id} foodLoad">
          <td>${food.name}</td>
          <td class="countCalories">${food.calories}</td>
          <td class="delete-button"><button class="delete-food ${food.id}">-</button></td>
          </tr>`
        )
      })
  }


  function errorLog(error) {
    console.error(error)
  }

  function removeFood(foodId) {
    $(`.food${foodId}`).remove()
  }

module.exports = {appendFoods, appendFood, appendFoodsDiary, errorLog, removeFood}
