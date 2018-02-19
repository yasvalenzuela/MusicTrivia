/*
https://opentdb.com/api.php?amount=15 //mi url
https://opentdb.com/api.php?amount=10//para comenzar
https://opentdb.com/api.php?amount=10&token=YOURTOKENHERE //usando un token de sesion
https://opentdb.com/api_token.php?command=request //recuperar un token de sesion
https://opentdb.com/api_token.php?command=reset&token=YOURTOKENHERE //restablecer un token de sesion
https://opentdb.com/api.php?amount=10&encode=url3986 //Llamada de API con tipo de código (urlLegacy, url3986, base64):
Código 0: éxito Devuelto resultados con éxito.
Código 1: Sin resultados No se pudieron devolver los resultados. La API no tiene suficientes preguntas para su consulta. (Ex. Pedir 50 preguntas en una categoría que solo tiene 20.)
Código 2: Parámetro no válido Contiene un parámetro no válido. Los alegatos pasados ​​no son válidos. (Por ejemplo, Monto = Cinco)
Código 3: token no encontrado El token de sesión no existe.
Código 4: Token Empty Session Token ha devuelto todas las preguntas posibles para la consulta especificada. Restablecer el token es necesario.
https://opentdb.com/api_category.php //devuelve la lista completa de catgorias e identificadores en la base de datos
https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE //devuelve el numero de preguntas en la base de datos en una categoria especifica
https://opentdb.com/api_count_global.php //devuelve el numero de todas las preguntas en la base de datos. total, pendiente, verificado y rechazado.

Limitaciones
Solo se puede solicitar 1 categoría por llamada API. Para obtener preguntas de cualquier categoría, no especifique una categoría.
Se puede recuperar un máximo de 50 preguntas por llamada.

*/

$( document ).ready(function(){
  $("#btnSesion").click(function() {
    //let usuario = $("#usuario").val();
    let datos = obtenerDatos_localstorage();
    let name = $("#usuario").val();
    let pasword = $("#clave").val();
    if (name == datos.usuario && pasword == datos.clave){
      document.location.replace('triviamusic.html')
    }else if(name == ""){
      $("#mensaje_usuario").fadeIn();
      return false;
    }else{
      $("#mensaje_usuario").fadeOut();
        if(pasword == ""){
          $("#mensaje_clave").fadeIn();
          return false;
        }else{
          $("#mensaje_clave").fadeOut();
          if(pasword.length < 6 ){
            $("#mensaje_clave2").fadeIn();
            return false;
          }else{
            $("#mensaje_clave2").fadeOut();
            if(pasword == "123456"){
              $("#mensaje_clave3").fadeIn();
              return false;
            }
          }
        }
    }
  })
});

guardarDatos_localstorage();


function obtenerDatos_localstorage(){

    if(localStorage.getItem("nombre")){
    //let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem("persona"));
    return persona;
    }else
    console.log("no hay entradas")
};


function guardarDatos_localstorage(){
    let persona = {
        usuario: "yasvalenzuela",
        clave: "25051991"
    }
    //localStorage.setItem("nombre",nombre);
    localStorage.setItem("persona",JSON.stringify(persona));
}

























/*
fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium')
.then((response)=>{
    console.log(response);
    return response.json();
  })

  .then((data)=>{
     console.log(data)
  
});
*/
/*
const btnStart = document.getElementById('boton');

btnStart.addEventListener('click', function(event) {
  let evento = event.target;
  getTrivia();
})

function getTrivia() {
  fetch(`https://opentdb.com/api_category.php`)
    .then(function(response) {
    // Turns the the JSON into a JS object
      return response.json();
    })
    .then(function(categories) {
      console.log(categories.results);
    });
}
*/