const generador = (n) => {
  let array = [];

  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  permutaciones(array);
};

const permutaciones = (a) => {
  let auxiliar;
  let array2 = [];
  for (let i = 0; i <= a.length; i++) {
    if (i === 0) {
      array2.push(a.join(" "));
      console.log(array2);
    }
    auxiliar;
    a[i];
  }
};

generador(3);
