function validacion_viaje() 
          {
              nombre = document.getElementById("nombre").value;
              if( nombre == null || nombre.length == 0) 
              {
                  alert("Debe completar el nombre")                  
                  return false;
              }

              email = document.getElementById("email").value;
              if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar|edu)+$/.test(email)))
              {
                  alert("No es una direccion de email correcta") ;
                  return false;
              }

              opciones = document.getElementById("opciones").selectedIndex;
              if( opciones == null || opciones == 0 ) {
                alert("Por favor, seleccione la cantidad de personas que viajan")
                return false;
              }
              
              destino = document.getElementById("destino").value;
              if( destino == null || destino.length == 0 || /^\s+$/.test(destino) ) 
              {
                alert("Debe escribir su ciudad de destino")  
                return false;
              }

              categoria = document.getElementById("categoria").selectedIndex;
              if( categoria == null || categoria == 0 ) {
                alert("Por favor, seleccione qué categoría de hotel desea")
                return false;
              }

              paquete = document.getElementById("paquete").selectedIndex;
              if( paquete == null || paquete == 0 ) {
                alert("Por favor, seleccione qué tipo de paquete desea")
                return false;
              }

            return true;
              
          }

function validacion_contacto() 
          {
              nombre = document.getElementById("nombre").value;
              if( nombre == null || nombre.length == 0) 
              {
                  alert("Debe completar el nombre")                  
                  return false;
              }

              apellido = document.getElementById("apellido").value;
              if(apellido == null || apellido.length == 0) 
              {
                  alert("Debe completar el apellido")                  
                  return false;
              }

              email = document.getElementById("email").value;
              if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar|edu)+$/.test(email)))
              {
                  alert("No es una direccion de email correcta") ;
                  return false;
              }
              
              pais = document.getElementById("pais").value;
              if( pais == null || pais.length == 0 || /^\s+$/.test(pais) ) 
              {
                alert("Debe escribir el país")  
                return false;
              }

              consulta = document.getElementById('consulta').value;
              if(consulta=='')
              {
                alert("Por favor, escriba su consulta")  
                return false;
              }
    
            return true;
              
          }         