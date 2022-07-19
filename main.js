const carrito = [];
let cantidad = 0;
//agregando productos al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  cantidad++;
  console.log(
    "Agregaste " +
      producto.nombre +
      " al carrito, tienes " +
      cantidad +
      " producto(s)"
  );
}
//eliminando productos del carrito
function eliminarProducto(producto) {
  let indice = carrito.findIndex((el) => el.nombre === producto);
  if (indice != -1) {
    carrito.splice(indice, 1);
    cantidad--;
    console.log(
      "Eliminaste " +
        producto +
        " de tu carrito, tienes " +
        cantidad +
        " producto(s)"
    );
  }
}
//mostrando los nombres de los productos del carrito
function mostrarNombres(array) {
  const nombres = array.map((el) => el.nombre);
  return nombres;
}

//filtrando los productos por plataforma
function filtrarProducto(array, plataforma) {
  const filtrar = array.filter((el) => el.plataforma === plataforma);
  return filtrar;
}

agregarAlCarrito({ id: 1, nombre: "PES2022", plataforma: "PS5" });
agregarAlCarrito({ id: 2, nombre: "CALL OF DUTY", plataforma: "PC" });
agregarAlCarrito({ id: 3, nombre: "FIFA2022", plataforma: "XBOX" });
agregarAlCarrito({ id: 4, nombre: "UFC4", plataforma: "PC" });
console.log(carrito);
eliminarProducto("FIFA2022");
console.log(carrito);
agregarAlCarrito({ id: 4, nombre: "HALO", plataforma: "XBOX" });
console.log(mostrarNombres(carrito));

let nombrePlataforma = prompt("Ingrese la plataforma ('PS5','XBOX','PC')");
let consola = nombrePlataforma.toUpperCase();
let existePlataforma = carrito.some((el) => el.plataforma == consola);
while (!existePlataforma) {
  nombrePlataforma = prompt(
    "Ingrese una plataforma exitente ('PS5','XBOX','PC')"
  );
  consola = nombrePlataforma.toUpperCase();
  existePlataforma = carrito.some((el) => el.plataforma == consola);
}
const juegosConsola = filtrarProducto(carrito, consola);
alert("Los juegos de " + consola + " son: " + mostrarNombres(juegosConsola));
