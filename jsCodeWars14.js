const removeSmallest = (numbers) =>{
    const minValue = Math.min(...numbers);
    let numeros = numbers.filter((element,index) =>  element > Math.min(...numbers));
    const numbersLength = numbers.length;
    const numerosLength = numeros.length;
    const diferencia = numbersLength - numerosLength;
    if(diferencia > 1){
        for(let i = 0;i< diferencia;i++){
            numeros = numeros.push('1');
        }
    }
    else{
        return numeros;
    }

}


console.log(removeSmallest([10, 2, 5, 30, 45,2]));
