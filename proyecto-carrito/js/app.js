let carrito = [];

// Añadir el primer producto logica

const boton1 = document.querySelector('#btn-camiseta');
const boton2 = document.querySelector('#btn-pantalon');
const lista = document.querySelector('#lista-carrito');
const precioTotal = document.querySelector('#precio-total')


boton1.addEventListener('click', () => {
    const nuevoObjeto = {
        nombre: 'Camiseta Negra',
        precio: 25
    };
    carrito.push(nuevoObjeto);
    actualizarTotal();
    dibujarCarrito(nuevoObjeto);
});

// Hacemos lo mismo para el pantalón

boton2.addEventListener('click', () => {
    const nuevoObjeto2 = {
        nombre: 'Pantalon Vaquero',
        precio: 40
    }
    carrito.push(nuevoObjeto2);
    actualizarTotal();
    dibujarCarrito(nuevoObjeto2);
});

// Calcular el precio total de la compra

function actualizarTotal () {
    let total = carrito.reduce((acum, prod) => acum + prod.precio, 0);
    precioTotal.textContent = total;
};


// Añadir los artiuclos a la lista visualmente

function dibujarCarrito (prod) {
    let nuevoItem = document.createElement('li');
    nuevoItem.textContent = prod.nombre;
    lista.append(nuevoItem);
};