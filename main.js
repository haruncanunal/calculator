function num(par1) {
    document.getElementById("p1").innerHTML += par1;
}

//---------------------------------------

function one() {
    return num(1);
}

function two() {
    return num(2);
}

function three() {
    return num(3);
}

function four() {
    return num(4);
}

function five() {
    return num(5);
}

function six() {
    return num(6);
}

function seven() {
    return num(7);
}

function eight() {
    return num(8);
}

function nine() {
    return num(9);
}

function ten() {
    return num(0);
}

//----------------------------

function sum(par1, par2) {
    return par1 + par2;
}

function sub(par1, par2) {
    return par1 - par2;
}

function multi(par1, par2) {
    return par1 * par2;
}

function divide(par1, par2) {
    return par1 / par2;
}

//-----------------------------
var x,y,z;
function plus() {
    x = document.getElementById("p1").innerHTML;
    document.getElementById("p1").innerHTML = "";
    return z = sum;
}

function minus() {
    x = document.getElementById("p1").innerHTML;
    document.getElementById("p1").innerHTML = "";
    return z = sub;
}

function cross() {
    x = document.getElementById("p1").innerHTML;
    document.getElementById("p1").innerHTML = "";
    return z = multi;
}

function slash() {
    x = document.getElementById("p1").innerHTML;
    document.getElementById("p1").innerHTML = "";
    return z = divide;
}

function equal() {
    y = document.getElementById("p1").innerHTML;
    document.getElementById("p1").innerHTML = z(Number(x), Number(y));
}

function ac() {
    document.getElementById("p1").innerHTML = "";
}