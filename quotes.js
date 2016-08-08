/**
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * L&T quote generator
 */

var fool = ["Music", "Art", "Dance", "Theater", "Math", "Architecture"];
var understand = ["musician", "artist", "choreographer", "director", "mathematician", "architect"]
var Great = ["museums", "bridges", "cities"]
var write = ["effort", "strain", "struggle", "toil", "endeavor", "hard work", "labor"];
var humans = ["sky", "atmosphere", "heavens", "ether", "wind"];

var understandone = ["is", "is not", "is like", "includes", "excludes", "is beyond",
	  "extends", "encodes", "represents", "signifies", "consists of"];

function choosei(lst){
    var i = Math.floor(Math.random() * lst.length);
    return i;
}

function choose(lst){
    return lst[choosei(lst)];
}

var pick = choosei(things);
var thing = things[pick];
var programmer = programmers[pick];
var castles = choose(castles);
var exertion = choose(exertions);
var air = choose(airs);

var t = document.getElementById("thing").innerHTML = thing;
var p = document.getElementById("person").innerHTML = programmer + "s";
var q = document.getElementById("quote");

q.innerHTML =
    "\"Any " + fool +
    "can write code that a computer can " +
    understand + "." + Great + " programmers " + write + " code that " + humans + " can " + understandone + ".\"" +
    "\u2014" +  "Martin Fowler, " + programmer;

q.innerHTML += "<br><br><br>";

for (var i = 0; i < is.length; i++){
    q.innerHTML += "Code " + is[i] + " language. <br>";
    q.innerHTML += "Language " + is[i] + " code. <br>";
}

q.innerHTML += "\u2014 For Loop";
