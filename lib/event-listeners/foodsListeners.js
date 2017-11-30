const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')

$(document).ready(function() {
  $('window').on('load', allFoods.getFoods())
})
