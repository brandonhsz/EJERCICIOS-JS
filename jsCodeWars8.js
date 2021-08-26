function solution(str){

    const arrayChar = dividirString(str);
    const arrayLen = contadorChar(arrayChar);
    const verificacion = verificarArray(arrayLen);
    const concatenadorChar = concatenado(arrayChar,verificacion);

   
}

const dividirString = str => str.split("");
const contadorChar = arrayChar => arrayChar.length;
const verificarArray = arrayLen => arrayLen%2 == 0 ? true : false;
const concatenado = (arrayChar,verificacion,arrayLen) =>{
    const arraySalida = [];
    if (verificacion){
        
    }
    else{
        console.log(`concatenado de array impar`);
    }

}

const cadena = "HOLA"
solution(cadena)