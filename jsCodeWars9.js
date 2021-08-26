const arrayDiff = (a,b) => {
    let index = b.length;
    while(index >= 0){
    a = a.filter( element => element != b[index])
    index--;
    }
    return a;
}


const arreglo = [1,2,3,4,5,6,6,6,7];
const quitarArreglo = [6,2,3];
console.log(arrayDiff(arreglo,quitarArreglo));

