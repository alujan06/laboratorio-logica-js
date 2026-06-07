// Las 4 constantes del DOM [local].
// La función async / await con el fetch dinámico usando comillas inclinadas (`) [local].
// El if de blindaje para que no entre texto vacío [local].
// La inyección con .innerHTML de la tarjeta en la pantalla izquierda [local].
// El evento del botón de escanear [local].

// #inputGalactico, #btnEscanear, #contenedor-busqueda, #lista-favoritos

let favoritos = JSON.parse(localStorage.getItem('misFavoritosGalacticos')) || [];

const boton = document.querySelector('#btnEscanear');
const idPer = document.querySelector('#inputGalactico');
const contenedor = document.querySelector('#contenedor-busqueda');
const lista = document.querySelector('#lista-favoritos'); 

for (let i = 0; i < favoritos.length; i++) {
    const nuevoItem = document.createElement('li');
    nuevoItem.classList.add('item-fav');
    nuevoItem.innerHTML = `
        <span>${favoritos[i]}</span>
        <button class="btn-borrar-fav">X</button>
    `;
    lista.append(nuevoItem);

    const btnBorrarAnterior = nuevoItem.querySelector('.btn-borrar-fav');
    btnBorrarAnterior.addEventListener('click', () => {
        nuevoItem.remove(); // Borra de la pantalla
        favoritos = favoritos.filter(item => item !== favoritos[i]); // Borra de la memoria
        localStorage.setItem('misFavoritosGalacticos', JSON.stringify(favoritos)); // Actualiza
    });
}

async function escanearPersonaje() {
    let id = idPer.value.trim();

    if(id === ''){
        alert('Por favor, escriba un ID válido');
        return;
    }

    const respuesta = await fetch(`https://swapi.py4e.com/api/people/${id}/`);
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

    const botonFav = document.querySelector('#btnAgregarFav');
    botonFav.addEventListener('click', () => {
        favoritos.push(personaje.name);
        const nuevoItem = document.createElement('li');
        nuevoItem.classList.add('item-fav');
        nuevoItem.innerHTML = `
            <span>${personaje.name}</span>
            <button class="btn-borrar-fav">X</button>
        `;
        lista.append(nuevoItem);
        localStorage.setItem('misFavoritosGalacticos', JSON.stringify(favoritos));

        const btnBorrarNuevo = nuevoItem.querySelector('.btn-borrar-fav');
        btnBorrarNuevo.addEventListener('click', () => {
            nuevoItem.remove(); 
            favoritos = favoritos.filter(item => item !== personaje.name); 
            localStorage.setItem('misFavoritosGalacticos', JSON.stringify(favoritos));
        });
    });
}

boton.addEventListener('click', () => {
    escanearPersonaje();
});
