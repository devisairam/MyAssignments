"use strict";
let testExecutionSummary = {
    suiteName: "Regression",
    totalTests: 100,
    passedTests: 90,
    failedTests: 10,
    executionTime: "20 mins"
};
console.log(testExecutionSummary);
let passPercentage = (testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100;
console.log("Pass percentage is:" + passPercentage);
if (testExecutionSummary.failedTests === 0) {
    console.log("Execution successful");
}
else
    console.log("Execution failed");
