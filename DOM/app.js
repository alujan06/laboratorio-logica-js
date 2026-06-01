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