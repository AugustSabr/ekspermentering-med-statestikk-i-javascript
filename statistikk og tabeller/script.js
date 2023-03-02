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
  window["input"+j] = document.createElement("input")
  window["input"+j].type = "checkbox"
  window["input"+j].name = "i"+i;
  window["input"+j].setAttribute("onchange", "regnUtvalgteArstall()");

  overview.insertRow();
  overview.rows[overview.rows.length - 1].insertCell().textContent = arstall[i];
  overview.rows[overview.rows.length - 1].insertCell().textContent = guttebarn[i];
  overview.rows[overview.rows.length - 1].insertCell().textContent = jentebarn[i];
  overview.rows[overview.rows.length - 1].insertCell().textContent = arsSum[i];
  overview.rows[overview.rows.length - 1].insertCell().appendChild(window["input"+j]);
  }
  
  var thRow = overview.insertRow(0);
  thRow.insertCell(0).outerHTML = "<th>Årstall</th>";
  thRow.insertCell(1).outerHTML = "<th>Gutter</th>";
  thRow.insertCell(2).outerHTML = "<th>Jenter</th>";
  thRow.insertCell(3).outerHTML = "<th>Totalt antall fødsler</th>";
  thRow.insertCell(4).outerHTML = "<th>Selektiv utregning</th>";

  var placeholder = document.getElementById("tablePlaceholder")
  placeholder.appendChild(overview);
}
orderTable();

document.getElementById("flærrestFødslerAr").innerText = arstall[arsSum.indexOf(low)];
document.getElementById("flærrestFødslerInt").innerText = low;
document.getElementById("flestFødslerAr").innerText = arstall[arsSum.indexOf(high)];
document.getElementById("flestFødslerInt").innerText = high;
document.getElementById("alleAr").innerText = arstall.length;
document.getElementById("alleInt").innerText = totalSum;

for(var i = 0 ; i < 2 ; i++){
  window["select"+i] = document.createElement("select")
  for(var j = 0 ; j < arstall.length ; j++){
    var option = document.createElement("option")
    option.appendChild(document.createTextNode(arstall[j]));
    window["select"+i].appendChild(option);
  }
  window["select"+i].id = "select"+i;
  window["select"+i].setAttribute("onchange", "regnUtIntervall()");
  document.getElementById("select"+i).replaceWith(window["select"+i]);
}

function regnUtIntervall(){
  var intervallGutter = 0;
  var intervallJenter = 0;
  var intervallSum = 0;
  var id0 = arstall.indexOf(parseInt(document.getElementById("select0").value));
  var id1 = arstall.indexOf(parseInt(document.getElementById("select1").value));

  var list = [];
  for (var i = id0; i <= id1; i++) {
    list.push(i);
  }
  for (var i = 0; i < list.length; i++) {
    intervallGutter += guttebarn[list[i]];
    intervallJenter += jentebarn[list[i]];
    intervallSum += arsSum[list[i]];
  } 
  document.getElementById("intervallGutter").innerText = intervallGutter;
  document.getElementById("intervallJenter").innerText = intervallJenter;
  document.getElementById("intervallSum").innerText = intervallSum;
}
regnUtIntervall()

function regnUtvalgteArstall(){
  var utvalgtGutter = 0;
  var utvalgtJenter = 0;
  var utvalgtSum = 0;
  for(var i = 0 ; i < arstall.length ; i++){
    if(document.querySelector('input[name="i'+i+'"]:checked')){
      utvalgtGutter += guttebarn[i];
      utvalgtJenter += jentebarn[i];
      utvalgtSum += arsSum[i];
    }
  }
  document.getElementById("utvalgtGutter").innerText = utvalgtGutter;
  document.getElementById("utvalgtJenter").innerText = utvalgtJenter;
  document.getElementById("utvalgtSum").innerText = utvalgtSum;

}
regnUtvalgteArstall()
