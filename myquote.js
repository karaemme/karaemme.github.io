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

var programmer = ["developer", "computer whisperer", "hobbyist", "coder", "try hard engineer"];

function choosei(){
    var i = Math.floor(Math.random() * 4);
    return i;
}

var pick = 1;
var fools = fool[pick];
var understands = understand[pick];
var Greats = Great[pick];
var writes = write[pick];
var human = humans[pick];
var programmers = programmer[pick];

var q = document.getElementById("quote");

q.innerHTML =
    "\"Any " + fools +
    " can write code that a computer can " +
    understands + ". " + Greats + " programmers " + writes + " code that " + human + " can " + understands + ".\"" +
      "Martin Fowler, " + programmers;

