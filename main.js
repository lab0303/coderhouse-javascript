const carrito = [];
let cantidad = 0;
//agregando productos al carrito
function agregarAlCarrito(producto) {
  const {nombre} = producto;
  nombre && console.log(nombre); //Operador logico AND
  carrito.push(producto);
  cantidad++;
  console.log(
    "Agregaste " +
      nombre +
      " al carrito, tienes " +
      cantidad +
      " producto(s)"
  );
}
//eliminando productos del carrito
function eliminarProducto(producto) {
  let indice = carrito.findIndex((el) => el.nombre === producto);
  (indice != -1) ? (        // Operador Ternario
    carrito.splice(indice, 1),
    cantidad--,
    console.log(
      "Eliminaste " +
        producto +
        " de tu carrito, tienes " +
        cantidad +
        " producto(s)"
    )) : console.log("No existe ese producto");
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
eliminarProducto("FIFA2022");
agregarAlCarrito({ id: 5, nombre: "HALO", plataforma: "XBOX" });
eliminarProducto("GOW4");



// Agregando Evento al DOM
let juegos = document.querySelector(".juegosConsola");
let cartAgregado = document.querySelector(".cartAgregado");



for(const juego of carrito){
  const {nombre, plataforma} = juego; //Desestructuracion
  let idCarrito = `idCart${juego.id}`;
  let juegoLista = document.createElement("div");
  juegoLista.innerHTML = `<h2>${nombre}--------${plataforma}</h2> <button id="${idCarrito}">Agregar al carrito</button>`;
  juegos.appendChild(juegoLista);
}
let idDelete = 0;
for(const juego of carrito){
  const {nombre, id} = juego;
  let idCarrito = `idCart${id}`;
  document.getElementById(idCarrito).addEventListener("click",()=>{
    idDelete++;
    let cartJuegos = document.createElement("div");
    cartJuegos.innerHTML = `<h2>${nombre}<button id="${idDelete}">Sacar del carrito</button></h2>`;
    cartAgregado.appendChild(cartJuegos);
    document.getElementById(idDelete).addEventListener("click", () => {
      cartAgregado.removeChild(cartJuegos);
    })
  });
}

const filtrar = document.querySelector(".filtrar");
filtrar.addEventListener("click", () => {
  juegos.innerHTML = "";
  const filtrado = carrito.filter((el)=> el.plataforma === "PC")
  for(const juego of filtrado){
    const {nombre, plataforma, id} = juego;
    let idCarrito = `idCart${id}`;
    let juegoLista = document.createElement("div");
    juegoLista.innerHTML = `<h2>${nombre}--------${plataforma}</h2> <button id="${idCarrito}">Agregar al carrito</button>`;
    juegos.appendChild(juegoLista);
    document.getElementById(idCarrito).addEventListener("click",()=>{
      idDelete++;
      let cartJuegos = document.createElement("div");
      cartJuegos.innerHTML = `<h2>${nombre}<button id="${idDelete}">Sacar del carrito</button></h2>`;
      cartAgregado.appendChild(cartJuegos);
      document.getElementById(idDelete).addEventListener("click", () => {
        cartAgregado.removeChild(cartJuegos);
      })
    });
  }
})

const cantidadCarrito = (carrito.length>0)? "Tienes elementos" : "No tienes elementos"; //Operador Ternario
console.log(cantidadCarrito);

