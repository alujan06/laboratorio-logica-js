// Practica 1

// const boton = document.querySelector('#btnTraer');
// const titulo = document.querySelector('#pantalla');

// async function obtenerDatos() {
//     const respuesta = await fetch('https://typicode.com');
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
//     const respuesta = await fetch('https://api.adviceslip.com/advice')
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
//     const respuesta = await fetch(`https://swapi.dev${idBuscado}/api/people/`);
//     const datos = await respuesta.json();
//     console.log(datos);
//     titulo.textContent = datos.name;
// }

// boton.addEventListener('click', () => {
//     obtenerDatos();
// });