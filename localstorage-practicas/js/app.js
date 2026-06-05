// Primera practica

// const botonG = document.querySelector('#btnGuardar');
// const botonR = document.querySelector('#btnRecuperar');
// const texto = document.querySelector('#cajaNombre');
// const titulo = document.querySelector('#resultado');


// botonG.addEventListener('click', () => {
//     localStorage.setItem('nombreusuario', texto.value)
// });

// botonR.addEventListener('click', () => {
//     const usuario = localStorage.getItem('nombreusuario');
//     titulo.textContent = usuario;
// });


// Segunda Practica

// const amigos = [
//     { nombre: "Carlos", edad: 25 },
//     { nombre: "Ana", edad: 30 }
// ];


// const botonG = document.querySelector('#btnGuardarLista');
// const botonVer = document.querySelector('#btnVerLista');


// botonG.addEventListener('click', () => {
//     const strin = JSON.stringify(amigos);
//     localStorage.setItem('listaAmigos', strin); 
// });


// botonVer.addEventListener('click', () => {
//     const textoGuardado = localStorage.getItem('listaAmigos');
//     const listaReal = JSON.parse(textoGuardado);
//     console.log(listaReal)
// });


//Tercera Practica
// const texto = document.querySelector('#cajaEquipo');
// const botonG = document.querySelector('#btnGuardarEquipo');
// const botonVer = document.querySelector('#btnMostrarEquipo');
// const titulo = document.querySelector('#marcador');

// botonG.addEventListener('click', () => {
//     localStorage.setItem('equipoFavorito', texto.value);
// });

// botonVer.addEventListener('click', () => {
//    const textoGuardado = localStorage.getItem('equipoFavorito');
//    titulo.textContent = textoGuardado;
// });

//Cuarta Practica

// const boton = document.querySelector('#btnSumar');
// const marcador = document.querySelector('#marcador');

// let cuenta = Number(localStorage.getItem('totalClics')) || 0;

// marcador.textContent = cuenta;

// boton.addEventListener('click', () => {
//     cuenta++;
//     marcador.textContent = cuenta;
//     localStorage.setItem('totalClics', cuenta);
// });


// Quinta Practica

// let arrayGlobal = JSON.parse(localStorage.getItem('misPelis')) || [];

// const texto = document.querySelector('#cajaPeli');
// const boton = document.querySelector('#btnAnadirPeli');
// const lista = document.querySelector('#listaPelis'); 

// for(let i = 0; i < arrayGlobal.length; i++) {
//     const nuevoItem = document.createElement('li');
//     nuevoItem.textContent = arrayGlobal[i];
//     lista.append(nuevoItem);
// } 

// boton.addEventListener('click', () => {
//     arrayGlobal.push(texto.value);

//     const nuevoItem2 = document.createElement('li');
//     nuevoItem2.textContent = texto.value;
//     lista.append(nuevoItem2);


//     localStorage.setItem('misPelis', JSON.stringify(arrayGlobal));
// });

// Sexta Practica

// let notas = JSON.parse(localStorage.getItem('misNotasGuardadas')) || [];

// const lista = document.querySelector('#listaNotas');
// const boton = document.querySelector('#btnAnadir');
// const caja = document.querySelector('#cajaNota');

// for(let i = 0; i < notas.length; i++) {
//     const nuevoItem = document.createElement('li');
//     nuevoItem.textContent = notas[i];
//     lista.append(nuevoItem);
// };

// boton.addEventListener('click', () => {
//     notas.push(caja.value);

//     const nuevoItem2 = document.createElement('li');
//     nuevoItem2.textContent = caja.value;
//     lista.append(nuevoItem2)



//     localStorage.setItem('misNotasGuardadas', JSON.stringify(notas));
// });

// Septima practica 