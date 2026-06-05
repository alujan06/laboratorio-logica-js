// Practica 1

// const boton = document.querySelector('#btnTraer');
// const titulo = document.querySelector('#pantalla');

// async function obtenerDatos() {
//     const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const datos = await respuesta.json();
//     console.log(datos);
//     titulo.textContent = datos.name;
// }

// boton.addEventListener('click', () => {
//     obtenerDatos();
// });

// Practica 2

// const boton = document.querySelector('#btnConsejo');
// const texto = document.querySelector('#texto-consejo');

// async function obtenerConsejo() {
//     const respuesta = await fetch('https://api.adviceslip.com/advice)
//     const datos = await respuesta.json();
//     console.log(datos);
//     texto.textContent = datos.slip.advice;
// }

// boton.addEventListener('click', () => {
//     obtenerConsejo();
// });

// Practica 3

// const id = document.querySelector('#cajaId');
// const boton = document.querySelector('#btnBuscar');
// const titulo = document.querySelector('#pantallaNombre');

// async function obtenerDatos() {
//     let idBuscado = id.value;
//     const respuesta = await fetch(`https://swapi.dev/api/people/${idBuscado}/`);
//     const datos = await respuesta.json();
//     console.log(datos);
//     titulo.textContent = datos.name;
// }

// boton.addEventListener('click', () => {
//     obtenerDatos();
// });

// Practica 4

// const boton = document.querySelector('#btnClima');
// const temperatura = document.querySelector('#temperatura');


// async function obtenerClima() {
//     const respuesta = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.4168&longitude=-3.7038&current=temperature_2m');
//     const datos = await respuesta.json();
//     temperatura.textContent = datos.current.temperature_2m;
// }

// boton.addEventListener('click', () => {
//     obtenerClima();
// });

// Practica 5

// const boton = document.querySelector('#btnCargar');
// const lista = document.querySelector('#contenedor-productos');

// async function cargarTienda() {
//     const respuesta = await fetch('https://fakestoreapi.com/products');
//     const listaProductos = await respuesta.json();
//     console.log(listaProductos);

//     for(let i = 0; i < listaProductos; i++) {
//     const tarjeta = document.createElement('li');
//     tarjeta.classList.add('tarjeta-ropa');

//     tarjeta.innerHTML = `
//         <h3>${listaProductos[i].title}</h3>
//         <p>Precio: ${listaProductos[i].price}€</p>
//     `;

//     contenedor.append(tarjeta);
// }

// }


// boton.addEventListener('click', () => {
//     cargarTienda();
// });