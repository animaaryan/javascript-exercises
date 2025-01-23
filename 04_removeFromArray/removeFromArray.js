const removeFromArray = function(array, ...args) {

    const newNum = [];

    array.forEach((item) => {
        if(!args.includes(item)) {
            newNum.push(item);
        }
    });

    return newNum;
};

// Do not edit below this line
module.exports = removeFromArray;
