const $ = require('jquery')

function ascending () {
  let table, rows, switching, i, x, y, shouldSwitch
  table = document.getElementById("diary-foods-table")
  switching = true

  while (switching) {
    switching = false
    rows = table.getElementsByTagName("TR")

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2]
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch= true;
        break
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
      switching = true
    }
  }
}

function descending () {
  let table, rows, switching, i, x, y, shouldSwitch
  table = document.getElementById("diary-foods-table")
  switching = true

  while (switching) {
    switching = false
    rows = table.getElementsByTagName("TR")

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2]
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        shouldSwitch= true;
        break
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
      switching = true
    }
  }
}

function original () {
  console.log('this is func c')
}

module.exports = {ascending, descending, original}
