const $ = require('jquery')

  function appendFoods(data) {
    for (let i = 0; i < data.length; i++) {
      $('.headings').after('<tr><td contenteditable="true">' + data[i].name + '</td><td contenteditable="true">' + data[i].calories + '</td><td><button>-</button></td></tr>')
    }
  }

  function errorLog(error) {
    console.error(error)
  }

module.exports = { appendFoods, errorLog}
