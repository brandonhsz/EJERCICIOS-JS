function positiveSum(arr) {
  let resultado = 0;
  arr.forEach((element) => {
    if (element > 0) {
      resultado = element + resultado;
    }
  });
  return resultado;
}

const array = [10, 20, 50, -20, -10, -1, 1];
console.log(positiveSum(array));
