"use strict";

function btnClear() {
    document.getElementById("output").innerHTML = "0";
}

function btnClearZero() {
    var value = document.getElementById("output").innerHTML;
    if(value == "0") {
        value = " ";
        document.getElementById("output").innerHTML = value;
    }
}

function btnDisplay(value) {
    btnClearZero()
    document.getElementById("output").innerHTML += value;
}

function btnSolved() {
    btnClearZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}