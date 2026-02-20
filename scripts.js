const burger = document.getElementById('burGer');
const burgerCont = document.getElementById('burgerContainer');
burger.addEventListener('click', () => {
    burgerCont.classList.toggle('active');
});


function initFormValidation() {
    const form = document.getElementById("formAltas");

    const inputName = document.getElementById("userName");
    const inputPrice = document.getElementById("Price");
    const inputAge = document.getElementById("Age");
    const inputStock = document.getElementById("Stock");
    const inputFoto = document.getElementById("Foto");

    const error = document.getElementById("ErrorMensaje");

    const regexName = /^[a-zA-Z\s]{3,}$/;
    const regexPrice = /^\d+(\.\d{1,2})?$/;
    const regexAge = /^\d+$/;
    const regexStock = /^\d+$/;
    
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        if (!regexName.test(inputName.value)) {
            error.textContent ="error: nombre inválido(Minimo 3 caracteres";
            return;
        }
        
        if (!regexPrice.test(inputPrice.value)) {
            error.textContent = "error precio inválido";
            return;
        }
        
        if (!regexAge.test(inputAge.value)) {
            error.textContent ="error edad inválido";
            return;
        }
        if (!regexStock.test(inputStock.value)) {
            error.textContent ="error  stock inválido";
            return;
        }
        if (inputFoto.Files.length === 0) {
            error.textContent ="error: eligir una imagen inválido";
            return;
        }
        const archivo = inputFoto.Files[0];
        if (!archivo.type.startsWith("image/")) {
            error.textContent = "error inválido";
            return;
        }

        error.textContent = "";
        alert("Formulario enviado correctamente ✔")
        formAltas.reset();

    });
}

initFormValidation();
 

function initContactValidation() { 
    
    const froming = document.getElementById("formIng");
    const inputName = document.getElementById("username")
    const inputEmail = document.getElementById("email")
    const inputComments = document.getElementById("comentarios");
    const error = document.getElementById("ErrorMensaje")
    
    const regexName = /^[a-zA-Z\s]{3,}$/;
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



froming.addEventListener("submit",(event) => {
    event.preventDefault();


    if (!regexName.test(inputName.value)) {
        error.textContent = "Error: nombre ";
        return;
    }

    if (!regexMail.test(inputEmail.value)) { 
         error.textContent ="Error: email ";
        return;
    }

    if (inputComments.value.length < 10) {
        error.textContent = "Error: el comentario debe tener al menos 10 caracteres";
        return;
    }

    error.textContent= "";
    alert("Mensaje enviado con éxito ✔");
    froming.reset();
   });
}

 initContactValidation();