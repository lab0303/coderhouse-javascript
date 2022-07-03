//ejemplo 1

let ropaEnStock = 5;
if (ropaEnStock != 0) {
  for (i = ropaEnStock; i > 0; i--) {
    console.log("Gracias por la compra, aun nos queda " + i + " prenda(s)");
  }
} else {
  console.log("Lo sentimos, ya no tenemos ropa");
}

// ejemplo 2

const nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");

while (edad < 18) {
  edad = prompt("Necesita ser mayor de edad");
}

console.log("Bienvenido " + nombre + " al club");
