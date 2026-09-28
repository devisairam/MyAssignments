"use strict";
function fibonacci(n) {
    let num1 = 0;
    let num2 = 1;
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }
    return result;
}
console.log(fibonacci(4));
console.log(fibonacci(6));
