let menuVisible= false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible=false
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita la redirección

    const formData = new FormData(this); // Obtiene los datos del formulario

    fetch('https://formsubmit.co/emmanueltavolaro@email.com', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json' // Para recibir una respuesta en formato JSON
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Email enviado con éxito!');
            this.reset(); // Limpia los campos del formulario
        } else {
            alert('Error al enviar el email. Inténtalo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar el email. Inténtalo de nuevo.');
    });
});
