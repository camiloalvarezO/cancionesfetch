import * as UI from './interfaz.js';

class API {
    constructor(artista,cancion){
        this.artista = artista,
        this.cancion = cancion
        
    }
    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
        .then(resultado => resultado.json())
        .then(respuesta => {
            if(respuesta.lyrics){
                
                const {lyrics} = respuesta;
                UI.divResultado.textContent = lyrics;
                UI.headingResultado.textContent = `letra de la cancion ${this.cancion} del artista ${this.artista}`
            } else{
                UI.resultado.textContent = 'No se encontró la canción'
                UI.resultado.classList.add('error');
                setTimeout(() => {
                    UI.resultado.textContent = ''
                UI.resultado.classList.remove('error');
                }, 3000);

            }
        })
    }
    limpiarHTML(){
        while(UI.divResultado.firstChild){
            UI.divResultado.remove(UI.divResultado.firstChild)
        }
    }
}



export default API;