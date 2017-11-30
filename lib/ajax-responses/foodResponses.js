const $ = require('jquery')

  function appendFoods(data) {
    for (let i = 0; i < data.length; i++) {
      $('.foods-table').prepend('<tr><td>' + data[i].name + '</td><td>' + data[i].calories + '</td><td><button>-</button></td></tr>')
    }
  }

  function errorLog(error) {
    console.error(error)
  }

module.exports = { appendFoods, errorLog}
