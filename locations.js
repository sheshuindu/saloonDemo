var states = ["Andhra Pradesh", "Karnataka", "Kerala"];
var ap = ["Anantapur", "Chittor", "Elaru"];
var ka = ["Bengaluru", "Mysore", "Tumkur"];
var kl = ["Calicut", "Cochin", "Palakkad"];
var d = document.getElementById("dropdown1");
var e = document.getElementById("dropdown2");

var sel = document.createElement("SELECT");
sel.setAttribute("id", "states");
sel.setAttribute("class", "dropdown");

for (i = 0; i < states.length; i++) {
  var a1 = document.createElement("option");
  a1.setAttribute("value", i);
  var b1 = document.createTextNode(states[i]);
  a1.appendChild(b1);
  sel.appendChild(a1);
  d.appendChild(sel);
}
var sub = document.createElement("button");
sub.textContent = "Select";
sub.setAttribute("class", "button");
d.appendChild(sub);

sub.onclick = function () {
  document.getElementById("dropdown2").innerHTML = "";
  document.getElementById("address").innerHTML = "";
  var g = sel.options[sel.selectedIndex].value;
  var q;
  switch (g) {
    case "0":
      q = ap;
      break;
    case "1":
      q = ka;
      break;
    case "2":
      q = kl;
      break;
  }
  var sel1 = document.createElement("SELECT");
  sel1.setAttribute("id", "districts");
  sel1.setAttribute("class", "dropdown");

  for (i = 0; i < q.length; i++) {
    var a2 = document.createElement("option");
    a2.setAttribute("value", i);
    var b2 = document.createTextNode(q[i]);
    a2.appendChild(b2);
    sel1.appendChild(a2);
    e.appendChild(sel1);
  }
  var sub1 = document.createElement("button");
  sub1.textContent = "Select";
  sub1.setAttribute("class", "button");
  e.appendChild(sub1);

  sub1.onclick = function () {
    // var add = document.getElementById("address");
    // var address = document.createElement("p");
    var g1 = sel1.options[sel1.selectedIndex].value;
    if (g == 0) {
      if (g1 == 0) {
        document.getElementById("address").innerHTML =
          "<h2>ANANTAPUR</h2><p> <br>Second floor 11 - 137<br> Sapthagiri circle<br> Subhash road<br> Above Joy Alukkas Anantapur<br> Andhra Pradesh<br> Pin code -515001 </p>";
      } else if (g1 == 1) {
        document.getElementById("address").innerHTML =
          "<h2>CHITTOOR</h2><p><br> No.2/927<br> Cheasepillar road<br> Kongareddy palli<br> Near SBI Bank<br> Behind Karumari Amman Koil<br> Chittoor </p>";
      } else if (g1 == 2) {
        document.getElementById("address").innerHTML =
          "<h2>ELURU</h2><p> <br>Frist Floor<br> North Block<br>  Central Plaza <br> Above MORE Super Market<br> Temple Road<br>  Ramachandrarao Pet<br> West Godavari Dist </p>";
      }
    } else if (g == 1) {
      if (g1 == 0) {
        document.getElementById("address").innerHTML =
          "<h2> AECS LAYOUT - KUNDANAHALLI</h2> <p> <br> No.613, 1st Floor<br>C Block<br> AECS Layout<br> Kundanahalli<br> Bangalore - 560037</p>";
      } else if (g1 == 1) {
        document.getElementById("address").innerHTML =
          "<h2> K D ROAD </h2> <p> <br> Bhavani Enterprises<br> Door No.138, 1st Floor<br>Next to State Bank of India<br> Phase-I, K.D Road<br>Jayalakshmi Puram<br> Mysore<br> Karnataka 570012</p>";
      } else if (g1 == 2) {
        document.getElementById("address").innerHTML =
          "<h2>TUMKUR</h2><p><br>1st Floor, SBP Arcade<br> Opp. to Gayathri Theater<br> BH Road<br> Tumkur – 572101 </p>";
      }
    } else if (g == 2) {
      if (g1 == 0) {
        document.getElementById("address").innerHTML =
          "<h2>BYPASS ROAD</h2><p> Rarichan Road<br> Near Passport Office <br> Mini Bypass Road<br> Kozhikode<br> Kerala 673006</p>";
      } else if (g1 == 1) {
        document.getElementById("address").innerHTML =
          "<h2>EDAPPALLY</h2><p>No.34/17010 C<br> First floor<br> PTM Chambers<br> (Near Changampuzha park, Above More super market)<br> Edapally<br> Cochin - 682024</p>";
      } else if (g1 == 2) {
        document.getElementById("address").innerHTML =
          "<h2>PALAKKAD</h2><p>No.12/657-2<br>1st Floor<br> M-5 Business Centre<br>(Above Samsung)<br> (Near Head Post Office)<br>Palakaad - 678001</p>";
      }
    }
    address.appendChild(q);
    add.appendChild(address);
  };
};
