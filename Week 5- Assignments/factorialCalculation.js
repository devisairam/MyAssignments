"use strict";
let factoralValue;
function factorial(n) {
    let result = 1;
    if (n > 0) {
        for (let i = n; i > 0; i--) {
            result = result * i;
        }
    }
    else
        console.log("Please enter a positive number");
    return result;
}
factoralValue = factorial(8);
console.log(factoralValue);
factoralValue = factorial(-3);
console.log(factoralValue);
