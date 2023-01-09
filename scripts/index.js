let number1 = prompt("set number 1");
let number2 = prompt("set number 2");
let option = prompt("set option");

document.getElementById("button").onclick = function() {
    if (option == "/") {
        document.getElementById("answer").innerHTML = number1 / number2;
    }
    
    if (option == "*") {
        document.getElementById("answer").innerHTML = number1 * number2;
    }
    
    if (option == "%") {
        document.getElementById("answer").innerHTML = number1 % number2;
    }
}