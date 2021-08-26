const arreglo = [10,20,30,40]
const arreglo2 = []
const duplicar = arreglo => {
    arreglo.map( elemento => {
        arreglo2.push( elemento*2 )
    })
    console.log(arreglo2)
}
duplicar(arreglo)