import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit',buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    //validamos el formulario

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === "" || cancion === "") {
        // mostrarMensaje("Error, campos vacíos");

        UI.divMensajes.textContent = "Error, campos vacíos";
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = "";
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;


    }

    const api = new API(artista,cancion)
    api.consultarAPI();
}

// function mostrarMensaje(mensaje){

//     const divMensaje = document.createElement('div');
//     divMensaje.textContent= `${mensaje}`;
//     divMensaje.classList.add('error')
//     UI.divMensajes.appendChild(divMensaje);
// }

