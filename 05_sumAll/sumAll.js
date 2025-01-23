const sumAll = function (num1, num2) {

    // Create a variable to hold the final sum
    let sum = 0;

    // Using Number.IsInteger to check if the number is an integer
    // Or return an ERROR
    if ((!Number.isInteger(num1)) || (!Number.isInteger(num2))) return "ERROR";

    // Same goes for if the number is negative
    if (num1 < 0 || num2 < 0) return "ERROR";

    // Run an if statement to check if the number is large where num1 is start point
    // and num2 is the end point so (2000 > 20)
    // If so, swap it around to re-do the limits
    if (num1 > num2) {
        const num3 = num1;
        num1 = num2;
        num2 = num3;
    }

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
