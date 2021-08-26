// const binaryArrayToNumber = arr =>{
//     let longitud = arr.length-1;
//     let numeroDecimal = 0
//     arr.forEach(element => {
//         numeroDecimal = numeroDecimal + (Math.pow(2,longitud)*element);
//         longitud--;
// })
//     return numeroDecimal;
// }

// const array = [1,0,0,1];
// console.log(binaryArrayToNumber(array));
const binaryToNumber = (arr) => parseInt(arr.join(""), 2);
const array = [1, 0, 0, 1];
console.log(binaryToNumber(array));
