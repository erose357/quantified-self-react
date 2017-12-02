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
        `<tr class="food${data[i].id}">
          <td class="food-checkbox"><input type="checkbox" name="food-checkbox"></td>
          <td>${data[i].name}</td>
          <td>${data[i].calories}</td>
        </tr>`
      )
    }
  }

  function errorLog(error) {
    console.error(error)
  }

module.exports = {appendFoods, errorLog, appendFoodsDiary}

