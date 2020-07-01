var fas = [
  "Ironing-short",
  "Ironing-Medium",
  "Ironing-long",
  "Roller setting",
  "Straightening-short",
  "Straightening-medium",
  "Straightening-long",
];
var fmas = [740, 870, 1070, 960, 3330, 4840, 7625];
var fnas = [890, 1045, 1285, 1150, 3995, 5810, 9155];

var fcs = [
  "trendy kiddy cut",
  "wowie makeover",
  "haircut-basic",
  "haircut-advanced",
  "creative-haircut",
];

var fmcs = [185, 395, 315, 640, 910];
var fncs = [220, 475, 380, 770, 1090];

var fb = ["Face", "Neck", "Feet", "Full arms"];
var fmb = [165, 260, 255, 380];
var fnb = [300, 315, 310, 460];
var fmd = [260, 260, 420, 730];
var fnd = [315, 315, 510, 875];

var mas = [
  "Ironing",
  "Straightening-Short",
  "Straightening-Medium",
  "Rebonding-Short",
  "Rebonding-Medium",
];
var mmas = [455, 3270, 4480, 4175, 5445];
var mnas = [550, 3925, 5375, 5015, 6535];

var mcs = ["Trendy kiddy cut", "Haircut-Basic", "Haircut-Advanced"];
var mmcs = [85, 185, 355];
var mncs = [220, 220, 425];

var mb = ["Face", "Neck", "Feet"];
var mmb = [165, 165, 255];
var mnb = [200, 200, 310];
var mmd = [260, 260, 420];
var mnd = [315, 315, 510];

function clear() {
  document.getElementById("table").innerHTML = "";
}
function generate_table(g, num) {
  // get the reference for the
  var body = document.getElementsByTagName("table");

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  var title, item, mem_price, nonmem_price;

  if (g == 0) {
    if (num == 0) {
      clear();
      item = fas;
      mem_price = fmas;
      nonmem_price = fnas;
      title = "Advanced styling";
    } else if (num == 1) {
      clear();
      item = fcs;
      mem_price = fmcs;
      nonmem_price = fncs;
      title = "Cut and style";
    } else if (num == 2) {
      clear();
      item = fb;
      mem_price = fmb;
      nonmem_price = fnb;
      title = "Cream bleach";
    }
  } else if (g == 1) {
    if (num == 0) {
      clear();
      item = mas;
      mem_price = mmas;
      nonmem_price = mnas;
      title = "Advanced styling";
    } else if (num == 1) {
      clear();
      item = mcs;
      mem_price = mmcs;
      nonmem_price = mncs;
      title = "Cut and style";
    } else if (num == 2) {
      clear();
      item = mb;
      mem_price = mmb;
      nonmem_price = mnb;
      title = "Cream bleach";
    }
  }
  var row = document.createElement("tr");
  row.setAttribute("class", "table_head");
  var cell = document.createElement("td");
  var cellText = document.createTextNode(title);
  cell.appendChild(cellText);
  row.appendChild(cell);
  var cell = document.createElement("td");
  var cellText = document.createTextNode("Member price");
  cell.appendChild(cellText);
  row.appendChild(cell);
  var cell = document.createElement("td");
  var cellText = document.createTextNode("Non-member price");
  cell.appendChild(cellText);
  row.appendChild(cell);
  tblBody.appendChild(row);

  for (var i = 0; i < item.length; i++) {
    // creates a table row

    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var cellText = document.createTextNode(item[i]);
    cell.appendChild(cellText);
    row.appendChild(cell);
    var cell = document.createElement("td");
    var cellText = document.createTextNode(mem_price[i]);
    cell.appendChild(cellText);
    row.appendChild(cell);
    var cell = document.createElement("td");
    var cellText = document.createTextNode(nonmem_price[i]);
    cell.appendChild(cellText);
    row.appendChild(cell);

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  table.appendChild(tbl);

  if (num == 2) {
    var row = document.createElement("tr");
    row.setAttribute("class", "table_head");
    var cell = document.createElement("td");
    var cellText = document.createTextNode(title);
    cell.appendChild(cellText);
    row.appendChild(cell);
    var cell = document.createElement("td");
    var cellText = document.createTextNode("Member price");
    cell.appendChild(cellText);
    row.appendChild(cell);
    var cell = document.createElement("td");
    var cellText = document.createTextNode("Non-member price");
    cell.appendChild(cellText);
    row.appendChild(cell);
    tblBody.appendChild(row);
    if (g == 0) {
      item = fb;
      mem_price = fmd;
      nonmem_price = fnd;
    } else {
      item = mb;
      mem_price = mmd;
      nonmem_price = mnd;
    }
    title = "Detan";

    for (var i = 0; i < item.length; i++) {
      // creates a table row

      var row = document.createElement("tr");
      var cell = document.createElement("td");
      var cellText = document.createTextNode(item[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell = document.createElement("td");
      var cellText = document.createTextNode(mem_price[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell = document.createElement("td");
      var cellText = document.createTextNode(nonmem_price[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);

      tblBody.appendChild(row);
    }
  }
  tbl.setAttribute("border", "2");
}
