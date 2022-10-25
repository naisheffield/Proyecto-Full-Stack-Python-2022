import { validacionContacto, validacionViaje } from "./validaciones.js";
import { renderizarMensaje } from "../ui/listadoPaquetes.js";

function inicializarFormulario() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => submitHandler(e));
}

async function submitHandler(e) {
  e.preventDefault();
  var data = new FormData(e.target);
  fetch(e.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  })
    
  const formType = form.dataset.type;
  let formValido;

  if (formType === "viaje") formValido = validacionViaje();
  if (formType === "contacto") formValido = validacionContacto();
  
  if (formValido) {
    // Una vez que el formulario se encuentre validado se hace la peticion al servidor
    // el código AJAX de Formspree iría dentro de este bloque de código
    form.reset()
    Swal.fire({
      title: "Tu mensaje fue enviado!",
      text: "Gracias por contactarte, nos comunicaremos con vos a la brevedad.",
      icon: "success" ,
     })
}
}

export { inicializarFormulario };
