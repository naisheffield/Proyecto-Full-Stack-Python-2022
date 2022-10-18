// 132165489 - Canada
// 123456789 - Maldivas
// 514135499 - Machu Picchu
// 165498667 - Bora Bora
// 876131224 - Italia

import { inicializarPaquetes } from "./ui/listadoPaquetes.js"

function get () {
  // (A) GET THE PARAMETERS
  var params = new URLSearchParams(window.location.search),
      id = params.get("id");

  // (B) IT WORKS!
  inicializarPaquetes(id);
}

window.addEventListener('load', (event) => {
  get()
});
