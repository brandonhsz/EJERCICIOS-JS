"use strict";
const uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    let auxiliarArray = [];
    iterable.split("").map((letra, index) => {
        if (index === 0) {
            auxiliarArray.push(letra);
        }
        else {
            if (letra !== auxiliarArray[index - 1]) {
                // auxiliarArray.push(letra);
                console.log(letra);
            }
        }
    });
    console.log(auxiliarArray);
};
uniqueInOrder("AAABBBBCcDA");
