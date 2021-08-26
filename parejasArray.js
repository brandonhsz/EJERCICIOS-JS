const formarParejas = (arreglo) => {
  arreglo.forEach((element, index) => {
    const auxiliar = arreglo[index - 1];
    if (index % 2 !== 0) {
      arreglo[index - 1] = element;
      arreglo[index] = auxiliar;
    }
  });
  console.log(arreglo);
};

formarParejas([1, 2, 3, 4, 5, 6, 7]);
