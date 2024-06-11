export const formularioBuscar = document.querySelector('#formulario-buscar'),
             divBuscar = document.querySelector('#buscar'),
             divMensajes = document.querySelector('#mensajes'),
             divResultado = document.querySelector('#resultado'),
             headingResultado = document.querySelector('.letra-resultado h2')
        
export function mostrarSpinner(){
        const divSpinner = document.createElement('div');
        divSpinner.classList.add('sk-chase');

        divSpinner.innerHTML = `
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        `;

        divMensajes.appendChild(divSpinner);
        setTimeout(() => {
               divSpinner.remove(); 
        }, 1000);
};

export function limpiarHTML(){
        headingResultado.textContent= ``;
        divResultado.textContent = ``;
};