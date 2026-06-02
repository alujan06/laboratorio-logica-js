// Agarra los tres elementos al principio del archivo usando document.querySelector:
// El botón: #miBoton
// La caja de texto: #cajaTexto
// El párrafo del resultado: #resultado
// Ponle el .addEventListener("click", () => { ... }) al botón.Dentro del clic, haz la magia: dile al párrafo que su .textContent tiene que ser igual al .value de la caja de texto.

// const boton = document.querySelector('#miBoton');
// const caja = document.querySelector('#cajaTexto');
// const resultado = document.querySelector('#resultado');

// boton.addEventListener('click', () => {
//     resultado.textContent = caja.value;
// })


// Paso 2: Tu plan para app.js 🥷
// Crea una variable numérica fuera del evento que empiece en cero: let cuenta = 0; (tu acumulador lógico).Agarra con document.querySelector el título #contador y el botón #btnSumar [local].
// Ponle el addEventListener("click", () => { ... }) al botón [local].
// Dentro del clic, haz dos cosas:Súmale uno a tu variable: cuenta++;Dile al título que su .textContent sea igual a tu variable cuenta [local]



// const titulo = document.querySelector('#contador');
// const boton = document.querySelector('#btnSumar');

// let cuenta = 0;

// boton.addEventListener('click', () =>{
//     cuenta++;
//     titulo.textContent = cuenta;
// })


// Crea el código para que aparezcan dibujados en la pantalla usando .map() e .innerHTML.
// El mapa de ruta para tu código:Agarra el contenedor con document.querySelector("#escaparate");.
// Crea una variable llamada tarjetas que use el método .map() sobre tu arreglo de productos. 
// Dentro de la función flecha, devuelve un bloque de texto HTML usando las comillas invertidas (` `).
// Ejemplo: prod => ${prod.nombre}Precio: \(prod.precio\) 
// Al terminar el paréntesis del mapa, pégale al final un punto con el método .join("") (esto sirve para unir todos los bloques de texto en uno solo gigante y quitar las comas molestas de los arreglos).
// Inyecta ese string gigante dentro del contenedor usando .innerHTML = tarjetas;.


// const productos = [
//     { nombre: "Camiseta Negra", precio: 25 },
//     { nombre: "Pantalón Vaquero", precio: 40 },
//     { nombre: "Chaqueta de Cuero", precio: 80 }
// ];

// const escaparate = document.querySelector('#escaparate');

// // 2. Fabricamos la lista de textos HTML y los unimos con .join('') al final
// const tarjetas = productos.map(prod => `
//     <div>
//         <h3>${prod.nombre}</h3>
//         <p>Precio: ${prod.precio}€</p>
//     </div>
// `).join('');

// escaparate.innerHTML = tarjetas;



// 2. Tu misión en app.js:
// Crea la lógica para que, al hacer clic en el botón, el texto del título (<h1>) cambie a "La luz está ENCENDIDA ☀️" [local].
//     Paso 1: Crea una constante para agarrar el título usando su ID #bombilla.
//     Paso 2: Crea otra constante para agarrar el botón usando su ID #btnInterruptor.
//     Paso 3: Ponle el addEventListener("click", () => { ... }) al botón.
//     Paso 4: Dentro del clic, cambia el .textContent del título.


// const titulo = document.querySelector('#bombilla');
// const interruptor = document.querySelector('#btnInterruptor');

// interruptor.addEventListener('click', () => {
//     titulo.textContent = 'LA LUZ ESTA ENCENDIDA';
// })



// 2. Tu misión en app.js:Queremos que cuando el usuario escriba su nombre en la caja y pulse el botón, el título cambie y diga exactamente lo que el usuario escribió [local].
// Paso 1: Crea tres constantes para agarrar el título (#saludo), la caja de texto (#cajaNombre) y el botón (#btnSaludar).
// Paso 2: Ponle el addEventListener de "click" al botón.
// Paso 3: Dentro del clic, dile al título que su .textContent sea igual al .value de tu caja de texto.

// const titulo = document.querySelector('#saludo');
// const cajaTexto = document.querySelector('#cajaNombre');
// const boton = document.querySelector('#btnSaludar');

// boton.addEventListener('click', () => {
//     titulo.textContent = cajaTexto.value;
// });



// 2. Tu misión en app.js:
// Queremos comprobar si el usuario conoce la contraseña secreta, que será "1234".Si lo que ha escrito en la caja es exactamente igual a "1234", cambia el texto del título a: "¡Acceso Concedido! 🔓".

// Si escribe cualquier otra cosa, cambia el texto del título a: "¡Contraseña Incorrecta! ❌".


// const titulo = document.querySelector('#mensaje');
// const texto = document.querySelector('#cajaClave');
// const boton = document.querySelector('#btnVerificar');


// boton.addEventListener('click', () => {
//     if(texto.value === '1234') {
//         titulo.textContent = '¡Acceso Concedido! 🔓';
//     } else {
//         titulo.textContent = '¡Contraseña Incorrecta! ❌';
//     }
// })



// 2. Enunciado:
// Al pulsar el botón, la web debe comparar los valores de ambas cajas y cambiar el texto del título (<h1>):Si el primero es más grande: "El primero es mayor" [local].
// Si el segundo es más grande: "El segundo es mayor" [local].Si son idénticos: "Son iguales" [local].


// const boton = document.querySelector('#btnComparar');
// const titulo = document.querySelector('#resultado');
// const input1 = document.querySelector('#numero1');
// const input2 = document.querySelector('#numero2');

// boton.addEventListener('click', () => {
//     if(input1.value > input2.value) {
//         titulo.textContent = 'El primero es mayor';
//     } else if (input1.value === input2.value) {
//         titulo.textContent = "Son iguales";
//     } else {
//         titulo.textContent = "El segundo es mayor";
//     }
// })



// 2. Enunciado:
// Al pulsar el botón, deben ocurrir dos cambios de diseño simultáneos en la pantalla:
// El fondo de toda la página web (document.body) debe volverse de color negro [local].
// Las letras del título (<h1>) deben volverse de color blanco [local].


// const titulo = document.querySelector('#texto');
// const boton = document.querySelector('#btnModo');

// boton.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'black';
//     titulo.style.color = 'white';
// })



// Tu misión: Al pulsar el botón, el título debe cambiar su texto a "¡Adelante! 🟢", sus letras deben volverse de color verde y su fontSize debe cambiar a "40px".

// const boton = document.querySelector('#btnVerde');
// const titulo = document.querySelector('#estado');

// boton.addEventListener('click', () => {
//     titulo.textContent = '¡Adelante! 🟢';
//     titulo.style.color = 'green';
//     titulo.style.fontSize = '40px'
// });



// Tu misión: 
// Cuando el usuario escriba un color en inglés en la caja y pulse el botón, el fondo de toda la página (document.body) debe cambiar exactamente al color escrito.


// const boton = document.querySelector('#btnPintar');
// const color = document.querySelector('#cajaColor');

// boton.addEventListener('click', () => {
//     document.body.style.backgroundColor = color.value;
// });




// 2. Tu misión en app.js (Modo Experto Sin Pistas 🥷):
// Crea el código para que al pulsar el botón ocurra una de estas tres opciones según el número que el usuario haya escrito en la caja:

// Opción A (Si la temperatura es menor de 30):El texto del título cambia a: "Estado: Temperatura Correcta 🟢" [local].El color de fondo de la página (document.body) se vuelve verde ("green") [local].

// Opción B (Si la temperatura está entre 30 y 70, ambos incluidos):El texto del título cambia a: "Estado: Precaución, subiendo ⚠️" [local].El color de fondo de la página (document.body) se vuelve naranja ("orange") [local].

// Opción C (Si la temperatura es mayor de 70):El texto del título cambia a: "Estado: ¡PELIGRO EXTREMO! 🚨" [local].El color de fondo de la página (document.body) se vuelve rojo ("red") [local].

// const titulo = document.querySelector('#alerta');
// const texto = document.querySelector('#cajaTemperatura');
// const boton = document.querySelector('#btnEvaluar');

// boton.addEventListener('click', () => {
//     if(texto.value < 30) {
//         titulo.textContent = "Estado: Temperatura Correcta 🟢";
//         document.body.style.backgroundColor = 'green';
//     } else if (texto.value >= 30 && texto.value <= 70) {
//         titulo.textContent = "Estado: Precaución, subiendo ⚠️";
//         document.body.style.backgroundColor = 'orange';
//     } else {
//         titulo.textContent = "Estado: ¡PELIGRO EXTREMO! 🚨";
//         document.body.style.backgroundColor = 'red';
//     }
// });


// Tanda de Retos: El Control de las Clases CSS (Sin Pistas 🥷)Para entrenar tu mente con esta nueva técnica, te he preparado 3 ejercicios progresivos.

// Estilo listo en el sistema (imagina que ya existe): "destacado" (vuelve el texto amarillo y con borde).
// Tu misión: Al pulsar el botón, debes añadirle la clase "destacado" al párrafo usando .classList.add().

// const parrafo = document.querySelector('#parrafo');
// const boton = document.querySelector('#btnDestacar');

// boton.addEventListener('click', () => {
//     parrafo.classList.add('destacado');
// });


// Tu misión: 
// Cada vez que el usuario pulse el botón, debes aplicar un .classList.toggle() con la clase "modo-oscuro" sobre el body de la página (document.body) [local]. 
// ¡Recuerda que para el body no te hace falta usar querySelector! [local]


// const boton = document.querySelector('#btnInterruptor');

// boton.addEventListener('click', () => {
//     document.body.classList.toggle('modo-oscuro');
// });


// Tu misión: 
// Al pulsar el botón de cerrar, debes quitarle la clase "visible" a la tarjeta de alerta para simular que desaparece de la pantalla.

// const boton = document.querySelector('#btnCerrar');
// const visible = document.querySelector('#alerta');

// boton.addEventListener('click', () => {
//     visible.classList.remove('visible');
// })




// Ejercicio 11: El Validador de Formularios Inteligente 📝🔒

// 2. Enunciado:
// Queremos validar que el nombre de usuario sea seguro antes de dejarlo registrarse. Al pulsar el botón, comprueba la longitud (.length) de lo que ha escrito en la caja:

// Si el texto tiene menos de 5 letras, el título cambia a: "¡Usuario demasiado corto! ❌", el color del texto del título se vuelve rojo ("red") y su tamaño (fontSize) cambia a "25px" [local].

// Si tiene 5 letras o más, el título cambia a: "¡Usuario Registrado con Éxito! 🟢" y el color de su texto se vuelve verde ("green") [local].

// const boton = document.querySelector('#btnValidar');
// const texto = document.querySelector('#cajaUsuario');
// const titulo = document.querySelector('#mensajeError');

// boton.addEventListener('click', () => {
//     if (texto.value.length < 5 ) {
//         titulo.textContent = "¡Usuario demasiado corto! ❌";
//         titulo.style.color = 'red';
//         titulo.style.fontSize = '25px';
//     } else{
//         titulo.textContent = "¡Usuario Registrado con Éxito! 🟢";
//         titulo.style.color = 'green';
//     }
// });


// Tu misión: 
// Al pulsar el botón, evalúas la velocidad convirtiéndola a número real [local]. 

// Si es <= 120, el título dice "Velocidad Correcta ✅", el fondo de la web (document.body) se pone azul y el título blanco [local]. 

// Si es > 120, el título dice "¡MULTA! Exceso de velocidad 🚨", el fondo se pone amarillo y las letras negras [local].

// const boton = document.querySelector('#btnRadar');
// const titulo = document.querySelector('#radar');
// const texto = document.querySelector('#cajaVelocidad');


// boton.addEventListener('click', () => {
//     if(texto.value <= 120) {
//         titulo.textContent = "Velocidad Correcta ✅";
//         titulo.style.color = 'white';
//         document.body.style.backgroundColor = 'blue';
//     } else {
//         titulo.textContent = "¡MULTA! Exceso de velocidad 🚨";
//         titulo.style.color = 'black';
//         document.body.style.backgroundColor = 'yellow';
//     }
// });



// Tu misión: 
// Si el texto es exactamente "DESCUENTO20", el título dice "Total a pagar: 80€ 🎉" y le añades la clase "oferta" con .classList.add() [local]. 
// Si es otra cosa, vuelve a "Total a pagar: 100€" y le quitas la clase con .classList.remove() [local].


// const boton = document.querySelector('#btnAplicar');
// const texto = document.querySelector('#cajaCupon');
// const titulo = document.querySelector('#totalCompra');


// boton.addEventListener('click', () => {
//     if(texto.value === 'DESCUENTO20') {
//         titulo.textContent = "Total a pagar: 80€ 🎉";
//         titulo.classList.add('oferta');
//     } else {
//         titulo.textContent = "Total a pagar: 100€";
//         titulo.classList.remove('oferta');
//     }
// });


// Enunciado:
// Queremos una lista interactiva. 
// Cuando el usuario escriba una tarea en la caja de texto y pulse el botón, debes fabricar un nuevo elemento <li> en el aire, ponerle como texto lo que el usuario escribió en la caja y engancharlo (.append()) dentro de la lista #listaTareas [local].

// const boton = document.querySelector('#btnAnadir');
// const texto = document.querySelector('#cajaTarea');
// const lista = document.querySelector('#listaTareas');


// boton.addEventListener('click', () => {
//     const nuevoItem = document.createElement('li');
//     nuevoItem.textContent = texto.value;
//     lista.append(nuevoItem);
// });


// Tu misión (Sin pistas 🥷): 
// Cada vez que se pulse #btnGenerar, debes fabricar una etiqueta <button> en el aire, ponerle como texto "Botón Nuevo" y engancharla (.append()) dentro de #contenedorBotones [local].

// const boton = document.querySelector('#btnGenerar');
// const contendor = document.querySelector('#contendorBotones');

// boton.addEventListener('click', () => {
//     const nuevoItem = document.createElement('button');
//     nuevoItem.textContent = 'Botón Nuevo';
//     contendor.append(nuevoItemd);
// });


// Enunciado:
// Cada vez que el usuario pulse el botón #btnAlerta, debes fabricar un nuevo párrafo <p> en el aire con el texto: "¡Alerta! Haz clic aquí para cerrarla".
// Antes de colgarlo con .append() dentro de #zonaAlertas, debes programar que si el usuario hace clic sobre esa alerta específica que acaba de nacer, la alerta se borre de la pantalla usando .remove() [local].


// const boton = document.querySelector('#btnAlerta');
// const contenedor = document.querySelector('#zonaAlertas');

// boton.addEventListener('click', () => {
//     const nuevoItem = document.createElement('p');
//     nuevoItem.textContent = "¡Alerta! Haz clic aquí para cerrarla";

//     nuevoItem.addEventListener('click', () => {
//         nuevoItem.remove();
//     });

//     contenedor.append(nuevoItem);
// });




// 2. Enunciado (Modo Experto Sin Pistas 🥷):
// Cuando el usuario escriba en la caja y pulse #btnAnadir, debes hacer tres pasos dentro del evento:
// Fabricar un elemento <li> en el aire [local].
// Ponerle como texto lo que el usuario escribió en la caja (cajaTarea.value) [local].
// Fabricar un botón <button> en el aire que tenga el texto " X" [local].
// Ponerle un escuchador de clics a ese botoncito nuevo para que, cuando el usuario lo pulse, borre por completo a su elemento padre (<li>) usando .remove() [local].
// Enganchar (.append()) el botoncito dentro del <li>, y luego enganchar el <li> dentro de la lista #listaTareas [local].


// const boton = document.querySelector('#btnAnadir');
// const texto = document.querySelector('#cajaTarea');
// const contenedor = document.querySelector('#listaTareas');

// boton.addEventListener('click', () => {
//     const nuevoItem = document.createElement('li');
//     nuevoItem.textContent = texto.value;

//     const nuevoItem2 = document.createElement('button');
//     nuevoItem2.textContent = ' X';

//     nuevoItem2.addEventListener('click', () => {
//         nuevoItem.remove();
//     });

//     nuevoItem.append(nuevoItem2);
//     contenedor.append(nuevoItem);

// });