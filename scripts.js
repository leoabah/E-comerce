document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burGer');
    const burgerCont = document.getElementById('burgerContainer');

    if (burger && burgerCont) {
        burger.addEventListener('click', (e) => {
            const isOpen = burgerCont.classList.toggle('active');
            burger.setAttribute('aria-expanded', isOpen);
            document.body.classList.toggle('no-scroll', isOpen);
        });

        // Close menu when clicking a nav link
        const ul = document.getElementById('ulnavBar');
        if (ul) {
            ul.addEventListener('click', (e) => {
                if (e.target && e.target.tagName === 'A') {
                    burgerCont.classList.remove('active');
                    burger.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('no-scroll');
                }
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (burgerCont.classList.contains('active') && !burgerCont.contains(target) && !burger.contains(target)) {
                burgerCont.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('no-scroll');
            }
        });
    }

    function initFormValidation() {
        const form = document.getElementById('formAltas');
        if (!form) return;

        const inputName = document.getElementById('userName');
        const inputPrice = document.getElementById('Price');
        const inputAge = document.getElementById('Age');
        const inputStock = document.getElementById('Stock');
        const inputFoto = document.getElementById('Foto');
        const error = document.getElementById('ErrorMensaje');

        const regexName = /^[a-zA-Z\s]{3,}$/;
        const regexPrice = /^\d+(\.\d{1,2})?$/;
        const regexAge = /^\d+$/;
        const regexStock = /^\d+$/;

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (inputName && !regexName.test(inputName.value)) {
                if (error) error.textContent = 'Error: nombre inválido (mínimo 3 caracteres)';
                return;
            }

            if (inputPrice && !regexPrice.test(inputPrice.value)) {
                if (error) error.textContent = 'Error: precio inválido';
                return;
            }

            if (inputAge && !regexAge.test(inputAge.value)) {
                if (error) error.textContent = 'Error: edad inválida';
                return;
            }

            if (inputStock && !regexStock.test(inputStock.value)) {
                if (error) error.textContent = 'Error: stock inválido';
                return;
            }

            if (inputFoto && inputFoto.files) {
                if (inputFoto.files.length === 0) {
                    if (error) error.textContent = 'Error: seleccione una imagen';
                    return;
                }
                const archivo = inputFoto.files[0];
                if (!archivo.type.startsWith('image/')) {
                    if (error) error.textContent = 'Error: archivo no es una imagen';
                    return;
                }
            }

            if (error) error.textContent = '';
            alert('Formulario enviado correctamente ✔');
            form.reset();
        });
    }

    initFormValidation();

    function initContactValidation() {
        const froming = document.getElementById('formIng');
        if (!froming) return;

        const inputName = document.getElementById('username');
        const inputEmail = document.getElementById('email');
        const inputComments = document.getElementById('comentarios');
        const error = document.getElementById('ErrorMensaje');

        const regexName = /^[a-zA-Z\s]{3,}$/;
        const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        froming.addEventListener('submit', (event) => {
            event.preventDefault();

            if (inputName && !regexName.test(inputName.value)) {
                if (error) error.textContent = 'Error: nombre inválido';
                return;
            }

            if (inputEmail && !regexMail.test(inputEmail.value)) {
                if (error) error.textContent = 'Error: email inválido';
                return;
            }

            if (inputComments && inputComments.value.length < 10) {
                if (error) error.textContent = 'Error: el comentario debe tener al menos 10 caracteres';
                return;
            }

            if (error) error.textContent = '';
            alert('Mensaje enviado con éxito ✔');
            froming.reset();
        });
    }

    initContactValidation();
});

let selectproduct = document.getElementsByClassName("card");
 
console.log(selectproduct)
    
