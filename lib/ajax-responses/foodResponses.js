const $ = require('jquery')

  export function appendFoods(data) {
    for (let i = 0; i < data.length; i++) {
      $('.headings')
        .after(
        `<tr class="food ${data[i].id}">
          <td tabindex="0" contenteditable="true">${data[i].name}</td>
          <td tabindex="0" contenteditable="true">${data[i].calories}</td>
          <td class="delete-button">
            <button class="delete-food ${data[i].id}">
              <i class="material-icons md-18 red">remove_circle_outline</i>
            </button>
          </td>
        </tr>`
        )
    }
  }

  //export function appendFoodsDiary(data) {
    //for (let i = 0; i < data.length; i++) {
      //$('.headings-diary')
        //.after(
        //`<tr class="food ${data[i].id}">
          //<td class="food-checkbox"><input class="${data[i].id}" type="checkbox" name="food-checkbox" aria-labelledby="foods-table"></td>
          //<td tabindex="0" class="name">${data[i].name}</td>
          //<td tabindex="0" class="calories">${data[i].calories}</td>
        //</tr>`
      //)
    //}
  //}

  export function appendFood(meal_object) {
    let i = 0
    meal_object.foods.forEach(function (food) {
      $(`.${meal_object.name}`)
      .after(
          `<tr class="${i} food${food.id} meal${meal_object.id} foodLoad">
          <td tabindex="0" class="name">${food.name}</td>
          <td tabindex="0" class="countCalories calories">${food.calories}</td>
          <td class="delete-button">
            <button class="delete-food ${food.id}">
              <i class="material-icons md-18 red">remove_circle_outline</i>
            </button>
          </td>
          </tr>`
        )
      i++
      })
  }


  export function errorLog(error) {
    console.error(error)
  }

  export function removeFood(foodId) {
    $(`tr.food.${foodId}`).remove()
  }
