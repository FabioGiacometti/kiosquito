
var grabFormControllers = function(){
    var btnEnviar = document.getElementById("enviar");

    btnEnviar.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Hello World");
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var tel = document.getElementById("telefono").value;
        console.log("data cargada: ", "nombre: ", nombre, " email: ", email, " telefono: ", tel); 
      });

  };
  
  
  if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    grabFormControllers();

  } else {
    document.addEventListener("DOMContentLoaded", grabFormControllers());
  }
