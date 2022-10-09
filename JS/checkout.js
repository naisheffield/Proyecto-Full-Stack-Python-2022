import paquetesDataCompleta from '../Data/paquetes.json' assert { type: "json" };

function inicializarCheckout() {
  // 1. toma los elementos que se encuentren en el localStorage
  // 2. calcula los costos de todos los paquetes.
  //      |-> multiplica los precios por la cantidad de articulos.
  //      |-> suma el subtotal de cada articulo.  
  // 3. renderiza las Cards diseñadas para el checkout
  // 4. renderiza los detalles del checkout --> 

  const articulosCarrito = JSON.parse(localStorage.getItem("carrito"));

  console.log("articulos en carrito:", articulosCarrito);
  console.log("articulos en DB:", paquetesDataCompleta);

  // const costoTotal = calcularCostoTotal(articulosCarrito);

  // renderizarArticulosCarrito(articulosCarrito);
  // renderizarDetalleCheckout(costoTotal);
}

inicializarCheckout();
