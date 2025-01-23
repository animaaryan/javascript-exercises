const reverseString = function(string) {

    // Split the string, reverse it and join it back
    let newStr = string.split("").reverse().join("");

    // Return the reversed string
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
