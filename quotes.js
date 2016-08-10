/**
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * L&T quote generator
 */

var fool = ["dunce", "simpleton", "coder", "clown", "being", "mortal"];
var understand = ["comprehend", "grasp", "fathom", "recognize", "acknowledge", "believe"];
var Great = ["Outstanding", "Perfect", "Important"];
var write = ["compose", "compile", "note", "communicate", "record", "produce", "formulate"];
var humans = ["beings", "individuals", "humanoids", "mortals", "earthlings"];

var programmer = ["developer", "drafter", "hobbyist", "coder", "try hard engineer"];

function choosei(lst){
    var i = Math.floor(Math.random() * lst.length);
    return i;
}

function choose(lst){
    return lst[choosei(lst)];
}

var fools = choosei(fool);
var understands = choose(understand);
var Greats = choose(Great);
var writes = choose(write);
var human = choose(humans);
var programmers = choose(programmer);

var t = document.getElementById("thing").innerHTML = thing;
var p = document.getElementById("person").innerHTML = programmer + "s";
var q = document.getElementById("quote");

q.innerHTML =
    "\"Any " + fools +
    "can write code that a computer can " +
    understands + "." + Greats + " programmers " + writes + " code that " + human + " can " + understands + ".\"" +
    "\u2014" +  "Martin Fowler, " + programmers;

q.innerHTML += "<br><br><br>";

for (var i = 0; i < is.length; i++){
    q.innerHTML += "Code " + is[i] + " language. <br>";
    q.innerHTML += "Language " + is[i] + " code. <br>";
}

q.innerHTML += "\u2014 For Loop";
