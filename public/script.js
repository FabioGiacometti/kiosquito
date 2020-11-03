var gallery = new Vue({
  el: "#gallery",
  data: {
    integrantes: [
      {
        imagen: "https://i.pravatar.cc/140?img=3",
        nombre: "Diego Herrera",
        titulo: "Fullstack Developer",
        texto:
          "“Me gusta andar en bici encartonado y gritarle cosas a la gente en los balcones. La verdad esta re guay!“",
        linkedin: "https://www.linkedin.com/in/diego-herrera-fe/",
      },
      {
        imagen: "https://i.pravatar.cc/140?img=2",
        nombre: "Fabio Giacometti",
        titulo: "UI/UX Designer",
        texto:
          "“Me gusta pensar el usuario como un raton en un laberinto, yo quiero que llegue a su queso y ya!”",
        linkedin: "https://www.linkedin.com/in/fabio-giacometti-/",
      },
      {
        imagen: "https://i.pravatar.cc/140?img=1",
        nombre: "Eleonora Galdos",
        titulo: "Diseñadora / Ilustradora",
        texto:
          "“La ilustración es una forma de expresar la realidad que la realidad no posee. Smplica sacar detalles y dejar lo escencial”",
        linkedin: "https://www.linkedin.com/in/eleonora-gald%C3%B3s-77079535/",
      },
      {
        imagen: "https://i.pravatar.cc/140?img=4",
        nombre: "Jeronimo Bello",
        titulo: "Creativo de Marketing",
        texto:
          "“El pollo con papas es un compromiso que nunca podes descuidar. Si te colgas te sale seco o crudo”",
        linkedin: "https://www.linkedin.com/in/jeronimo-bello-59797772/",
      },
    ],
  },
});

// Email.send({

  //hay que hacer funcionar el secureToken que provee smtpjs.com.
  //ingresando el host, user y pass me dio "54458174-51c0-424f-a73e-ca40b83400c9" 
  // pero asi no me envia el mail
  
//   Host: "smtp.gmail.com",
//   Username: "develop.kioskito@gmail.com",
//   Password: "Hola!100",
//   To: "develop.kioskito@gmail.com",
//   From: "fabiog.inbox@gmail.com",
//   Subject: "sin token",
//   Body: "And this is the body",
// }).then((message) => alert("sin token"));

const menuButton = document.getElementById('menu-button') 
const menu = document.getElementById('menu')
let isMenuShown = false

function handleMenu(){
  if(!isMenuShown){
    console.log("click")
    menuButton.classList.add('is-active')
    menu.classList.remove('hidden')
    isMenuShown = true
  } else {
    menuButton.classList.remove('is-active')
    isMenuShown = false
    menu.classList.add('hidden')

  }
}