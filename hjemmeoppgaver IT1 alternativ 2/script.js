var arstall = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
var guttebarn = [31006, 30993, 30138, 30370, 30369, 30386, 29173, 28430, 28042, 27063]
var jentebarn = [29214, 29214, 28857, 28714, 28689, 28504, 27460, 29690, 26453, 25916]
var arsSum = []

var totalSum = 0;
var rows = 0
for(var i = 0 ; i < arstall.length ; i++){
  rows++
  arsSum.push(guttebarn[i] + jentebarn[i]);
  totalSum += guttebarn[i] + jentebarn[i]
}
var low = Math.min.apply(Math, arsSum)
var high = Math.max.apply(Math, arsSum)


function orderTable(){
  var overview = document.createElement("table");
  overview.id = "table"
  for (var i = 0 ; i < arstall.length ; i++) {
  overview.insertRow();
  overview.rows[overview.rows.length - 1].insertCell().textContent = arstall[i];
  overview.rows[overview.rows.length - 1].insertCell().textContent = guttebarn[i];
  overview.rows[overview.rows.length - 1].insertCell().textContent = jentebarn[i];
  overview.rows[overview.rows.length - 1].insertCell().textContent = arsSum[i];
  }
  
  var thRow = overview.insertRow(0);
  thRow.insertCell(0).outerHTML = "<th>Årstall</th>";
  thRow.insertCell(1).outerHTML = "<th>Gutter</th>";
  thRow.insertCell(2).outerHTML = "<th>Jenter</th>";
  thRow.insertCell(3).outerHTML = "<th>totalt antall fødsler</th>";

  var placeholder = document.getElementById("tablePlaceholder")
  placeholder.appendChild(overview);
}
orderTable();

document.getElementById("tekst").innerText = "Året med færrest fødsler var "+arstall[arsSum.indexOf(low)]+", bare "+low+" barn ble født. Året med flest fødsler var "+arstall[arsSum.indexOf(high)]+", hele "+high+" barn ble født. Iløpet av de"+arstall.length+" årene ble "+totalSum+" barn født.";

for(var i = 0 ; i < 2 ; i++){
  window["select"+i] = document.createElement("select")
  for(var j = 0 ; j < arstall.length ; j++){
    var option = document.createElement("option")
    option.appendChild(document.createTextNode(arstall[j]));
    window["select"+i].appendChild(option);
  }
  window["select"+i].id = "select"+i;
  window["select"+i].setAttribute("onchange", "regnUt()");
  document.getElementById("select"+i).replaceWith(window["select"+i]);
}

function regnUt(){
  var intervallSum = 0;
  var id0 = arstall.indexOf(parseInt(document.getElementById("select0").value));
  var id1 = arstall.indexOf(parseInt(document.getElementById("select1").value));

  var list = [];
  for (var i = id0; i <= id1; i++) {
    list.push(i);
  }
  for (var i = 0; i < list.length; i++) {
    intervallSum += arsSum[list[i]];
  }
  document.getElementById("intervall").innerText = intervallSum;
}
regnUt()