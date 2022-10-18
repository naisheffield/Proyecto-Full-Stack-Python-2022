
// -----------------------------------------------------------------------------------------------//
// Para el Carrusel
// -----------------------------------------------------------------------------------------------//

const sliderContainer = document.querySelector('.slider-container')
// const sliderNavBtn = document.querySelectorAll('.slider-nav-btn')
let sliderSection = document.querySelectorAll('.slide')
let sliderSectionLast = sliderSection[sliderSection.length - 1]
    
const sliderBtnRight = document.querySelector('#btn-right')
const sliderBtnLeft = document.querySelector('#btn-left')

sliderContainer.insertAdjacentElement('afterbegin', sliderSectionLast)

// Para el botón de ver detalles
const slideBtnDetails = document.querySelectorAll('.slide-btn-details')

// Recorro todos los puntos - quedó desactualizado porque no se usa la barrita de navegación inferior
// sliderNavBtn.forEach( (eachNavBtn, i )=> {

//     // Asignamos un click a cada punto o boton
//     sliderNavBtn[i].addEventListener("click", ()=>{

//         // Guardar la posicion del boton
//         let posicion = i
//         // Si la posicion es i, el transformX (espacio a desplazarse el container) es -i*20
//         let operacion = -20 * posicion
//         // Movemos el container
//         sliderContainer.style.transform = `translateX(${operacion}%)`

//         // Recorrer todos los botones
//         sliderNavBtn.forEach( (eachNavBtn, i) => {
//             // Quitar la clase activo a todos los botones
//             sliderNavBtn[i].classList.remove('active')
//         })

//         // Agregar la clase activo al boton seleccionado
//         sliderNavBtn[i].classList.add('active')

//     })
// })

function Next(){
    let sliderSectionFirst = document.querySelectorAll('.slide')[0]
    sliderContainer.style.marginLeft = '-200%'
    sliderContainer.style.transition = 'all 0.5s'

    setTimeout(function(){
        sliderContainer.style.transition = 'none'
        sliderContainer.insertAdjacentElement('beforeend', sliderSectionFirst)
        sliderContainer.style.marginLeft = '-100%'
    }, 500)

}

function Prev(){
    let sliderSection = document.querySelectorAll('.slide')
    let sliderSectionLast = sliderSection[sliderSection.length - 1]
    sliderContainer.style.marginLeft = '0%'
    sliderContainer.style.transition = 'all 0.5s'

    setTimeout(function(){
        sliderContainer.style.transition = 'none'
        sliderContainer.insertAdjacentElement('afterbegin', sliderSectionLast)
        sliderContainer.style.marginLeft = '-100%'
    }, 500)

    // // Recorrer todos los botones
    // sliderNavBtn.forEach( (eachNavBtn, i) => {
    //     // Quitar la clase activo a todos los botones
    //     sliderNavBtn[i].classList.remove('active')
    // })

    // // Agregar la clase activo al boton seleccionado
    // sliderNavBtn[i].classList.add('active')
}

sliderBtnRight.addEventListener('click', function(){
    Next()
})

sliderBtnLeft.addEventListener('click', function(){
    Prev()
})

// Automatizacion del carrusel cada 5 segundos
setInterval(function(){
    Next()
}, 5000)

// -----------------------------------------------------------------------------------------------//

slideBtnDetails.forEach( (eachNavBtn, i )=> {
    
    // Asignamos un click a cada punto o boton
    slideBtnDetails[i].addEventListener("click", ()=>{
      go()
    })
  })

  function go (id) {
    // (A) VARIABLES TO PASS
    var id = document.getElementsByClassName("slide-btn-details")[1].id;

    // (B) URL PARAMETERS
    var params = new URLSearchParams();
    params.append("id", id);

    // (C) GO!
    var url = "promociones.html?" + params.toString();
    location.href = url;
    //window.open(url);
}