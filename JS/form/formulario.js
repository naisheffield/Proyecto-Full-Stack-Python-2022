import { validacionContacto, validacionViaje } from "./validaciones.js";
import { renderizarMensaje } from "../ui/listadoPaquetes.js";

function inicializarFormulario() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => submitHandler(e));
}

function submitHandler(e) {
  e.preventDefault();
    
  const formType = form.dataset.type;
  let formValido;

  if (formType === "viaje") formValido = validacionViaje();
  if (formType === "contacto") formValido = validacionContacto();
  
  if (formValido) {
    // Una vez que el formulario se encuentre validado se hace la peticion al servidor
    // el código AJAX de Formspree iría dentro de este bloque de código
  }
}

export { inicializarFormulario };
