// presupuesto de pagos en cuotas
function presupuesto(monto, meses) {
  let pagosPromedio = monto / meses;
  let montoRestante = monto;
  for (let i = 1; i <= meses; i++) {
    montoRestante -= pagosPromedio;
    if (montoRestante < 0.01) {
      montoRestante = 0;
    }
    console.log(
      "El pago del mes " +
        i +
        " es: " +
        pagosPromedio +
        ". Su saldo restante es: " +
        montoRestante
    );
  }
}
let montoDinero = parseInt(prompt("Ingrese el monto que quiere prestarse: "));
let mesesDePago = parseInt(prompt("Ingrese la cantidad de meses para pagar: "));
presupuesto(montoDinero, mesesDePago);
