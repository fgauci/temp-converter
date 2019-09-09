/* 
-----------------------------------------
FORMULAS 
-----------------------------------------
Fahrenheit to Celsius: C = (F - 32) / 1.8
Celsius to Fahrenheit: F = (C * 1.8) + 32 
-----------------------------------------
*/

function conversion() {
    var resultElement = document.getElementById("result");
    var result = 0;
    var temp = document.getElementById("inputTemperature").value;
    var to = document.getElementById("inputTo").value;
    var blue = "#3B4FE1";
    var red = "#BA2409";
    resultElement.style.color = "#000000"; //Sets result colour default to black
    if (to == "°C") { //If Celsius is chosen, then run formula C
        result = (temp - 32) / 1.8;
        if (result <= 4) {
            resultElement.style.color = blue; //If temperature is less than or equal to 4°C, display in blue
        } else if (result >= 27) {
            resultElement.style.color = red; //If temperature is more than or equal to 27°C, display in red
        } 
    } else { //Else, Fahrenheit is chosen, then run formula F 
        result = (temp * 1.8) + 32;
        if (result <= 39.2) {
            resultElement.style.color = blue; //If temperature is less than or equal to 39.2°F, display in blue
        } else if (result >= 80.6) {
            resultElement.style.color = red; //If temperature is more than or equal to 80.6°F, display in red
        }

    }
    result = Number.isInteger(result) ? result : parseFloat(result).toFixed(2); //Sets result to 2 decimal points
    resultElement.innerHTML = result + to; 
}

conversion();