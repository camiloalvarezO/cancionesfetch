import * as UI from './interfaz.js';

class API{
    constructor(nombre,cancion){
        this.nombre = nombre,
        this.cancion = cancion
    }

    consultarAPI(){
       const url = `https://api.lyrics.ovh/v1/${this.nombre}/${this.cancion}`;
        UI.mostrarSpinner();
        UI.limpiarHTML();
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                if(resultado.error){
                    
                        UI.divMensajes.textContent = 'No se encontraron letras para la canción especificada.';
                        UI.divMensajes.classList.add('error');
                     
                        UI.divMensajes.textContent = `${resultado.error}`;
                        UI.divMensajes.classList.add('error');

                
                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error')
                    }, 3000);
                    return;
                }
                console.log(resultado);
                const {lyrics} = resultado;
                UI.headingResultado.textContent= `artista: ${this.nombre} - ${this.cancion}`;
                UI.divResultado.textContent = `${lyrics}`;
            }
                
            )
            .catch((error) => {
                if (error.error && error.error === 'No lyrics found') {
                    UI.divMensajes.textContent = 'No se encontraron letras para la canción especificada.';
                    UI.divMensajes.classList.add('error');
                } else {
                    UI.divMensajes.textContent = `${error}`;
                    UI.divMensajes.classList.add('error');
                }
            
                setTimeout(() => {
                    UI.divMensajes.textContent = '';
                    UI.divMensajes.classList.remove('error')
                }, 3000);
            })
    }
}


export default API