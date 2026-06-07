// Las 4 constantes del DOM [local].
// La función async / await con el fetch dinámico usando comillas inclinadas (`) [local].
// El if de blindaje para que no entre texto vacío [local].
// La inyección con .innerHTML de la tarjeta en la pantalla izquierda [local].
// El evento del botón de escanear [local].

// #inputGalactico, #btnEscanear, #contenedor-busqueda, #lista-favoritos

const boton = document.querySelector('#btnEscanear');
const idPer = document.querySelector('#inputGalactico');
const contenedor = document.querySelector('#contenedor-busqueda');
const lista = document.querySelector('#lista-favoritos');

async function escanearPersonaje() {
    let id = idPer.value;

    if(id === ''){
        alert('Por favor, escriba un ID válido');
        return;
    }
    


    const respuesta = await fetch (`https://swapi.py4e.com/api/people/${id}/`);
    const personaje = await respuesta.json();
    console.log(personaje);


    contenedor.innerHTML = `
        <div class="tarjeta-personaje">
            <div class="info-peli">
                <h3>👤 ${personaje.name}</h3>
                <p>Altura: ${personaje.height}cm | Peso: ${personaje.mass}kg</p>
            </div>
            <button id="btnAgregarFav" class="btn-fav">⭐ Guardar Favorito</button>
        </div>
    `;
}


boton.addEventListener('click', () => {
    escanearPersonaje();
});