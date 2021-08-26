const calcularImpuestos = (edad, ingresos) =>
  edad > 18 && ingresos >= 1000 ? ingresos * 0.4 : 0;
