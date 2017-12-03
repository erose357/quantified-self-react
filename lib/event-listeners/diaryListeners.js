const $ = require('jquery')
const loadSingles = require('../objects/loadSingles')


$(document).ready(function() {
  $('window').on('load', loadSingles.loadSingles())
})
