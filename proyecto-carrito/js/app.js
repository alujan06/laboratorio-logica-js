let carrito = JSON.parse(localStorage.getItem('carritoGuardado')) || [];

// Añadir el primer producto logica

const boton1 = document.querySelector('#btn-camiseta');
const boton2 = document.querySelector('#btn-pantalon');
const lista = document.querySelector('#lista-carrito');
const precioTotal = document.querySelector('#precio-total');



for (let i = 0; i < carrito.length; i++) {
    dibujarCarrito(carrito[i]);
}
actualizarTotal();

boton1.addEventListener('click', () => {
    const nuevoObjeto = {
        id: Date.now(),
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
        id: Date.now(),
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
    localStorage.setItem('carritoGuardado', JSON.stringify(carrito));
};


// Añadir los artiuclos a la lista visualmente y quitarlos

function dibujarCarrito (prod) {

    let nuevoItem = document.createElement('li');
    nuevoItem.classList.add('item-carrito');
    nuevoItem.textContent = prod.nombre;
    lista.append(nuevoItem);

    let boton = document.createElement('button');
    boton.classList.add('btn-delete');
    boton.dataset.id = prod.id;
    boton.textContent = ' X';
    nuevoItem.append(boton);

    boton.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        carrito = carrito.filter(item => item.id !== Number(e.target.dataset.id));
        actualizarTotal();
    });
    
};
