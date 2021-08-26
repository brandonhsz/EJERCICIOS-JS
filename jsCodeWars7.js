function sumTwoSmallestNumbers(numbers) {  

    let numero = numbers[0];
    array.forEach(element => {
        if(numero>element){
            numero = element;
        }
    });
    // let numero1 = minNumber(numbers);
    const array2 = numbers.filter(element => element !== numero);
    // let numero2 = minNumber(array2);
    // console.log(numero1);
    // console.log(minNumber(array2));
    let numero2 = numbers[0];
    array.forEach(element => {
        if(numero2>element){
            numero2 = element;
        }
    });
    console.log(numero2);

  }
// function minNumber(numbers){

//     let numero = numbers[0];
//     array.forEach(element => {
//         if(numero>element){
//             numero = element;
//         }
//     });
//     return numero;

// }  



const array = [20,10,50,100];
sumTwoSmallestNumbers(array)