// 1. El Cambiador de Grados: Crea una función que convierta una temperatura de grados Celsius a Fahrenheit. Fórmula: (Celsius * 9/5) + 32.

// function cambiadorDeGrados(celsius) {
//     const fahrenheit = (celsius * 9/5) + 32;
//     console.log(fahrenheit);
// }

// cambiadorDeGrados(40);

// 2.Filtro de Mayores de Edad: Crea una función que reciba una edad. Si es 18 o más, debe devolver true. Si es menor, debe devolver false.

// function filtroMayoresEdad (edad) {
//     if(edad >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// 3. El Consultor de Descuentos: Un cliente obtiene un 15% de descuento si gasta más de $100. Escribe un programa que reciba el total de la compra y calcule cuánto debe pagar el cliente al final (aplicando el descuento solo si cumple la condición).

// function descuentoCompra (cantidad) {
//     if(cantidad > 100 ) {
//         const descuento = cantidad -(cantidad * 0.15);
//         return descuento;
//     } else {
//         return 'no obtienes descuento';
//     }
// }

// console.log(descuentoCompra(90));

// 4. Tabla de Multiplicar: Escribe un código que reciba un número (por ejemplo, el 5) e imprima en la consola su tabla de multiplicar del 1 al 10 (5x1=5, 5x2=10, etc.). Pista: aquí sí usarás console.log dentro de un bucle para ir mostrando cada línea.

// function tablaMultiplicar (numero) {
//     for(let i = 1; i < 11; i++){
//         const multiplicacion = numero * i;
//         console.log(`${numero} x ${i} = ${multiplicacion}`);
//     }
// }

// tablaMultiplicar(2);

// Crea una función llamada encontrarMayor que reciba como parámetro un arreglo (array) con 4 números diferentes. La función debe recorrer ese arreglo y devolver (return) únicamente el número más grande de todo el grupo.

// let numeroMayor = [0];

// function encontrarMayor (array) {
//     for(let i = 0; i < 4; i++){
//         if (array[i] > numeroMayor){
//             numeroMayor = array[i];
//         }
//     }
//     return numeroMayor;
// }

// console.log(encontrarMayor([4, 12, 3, 8])); // Debería imprimir: 12
// console.log(encontrarMayor([45, 1, 99, 23])); // Debería imprimir: 99


// 1. El Contador de Números Positivos: Crea una función que reciba un arreglo con 5 números (algunos positivos y otros negativos, por ejemplo: [3, -2, 7, -1, 5]). La función debe recorrer el arreglo y devolver cuántos números positivos hay en total.

// const numerosSumares = [4, -2, 8, -5, 1];

// function numerosPositivos(array) {

//     let cantidadDePositivos = 0;

//     for(let i = 0; i < array.length; i++){
//         if( array[i] > 0){
//             cantidadDePositivos = cantidadDePositivos + 1;
//         }
//     }
//     return cantidadDePositivos;
// }

// console.log(numerosPositivos(numerosSumares))

// const arreglo = ['gato', 'perro', 'gato', 'gato', 'loro'];

// function mostrarPalabras (lista) {

//     let cantidadDeGatos = 0;

//     for(let i = 0; i < lista.length; i++){
//         if(lista[i] === 'gato'){
//             cantidadDeGatos = cantidadDeGatos + 1;
//         }

//     }
//     return cantidadDeGatos;
// }


// (mostrarPalabras(arreglo));

// const sacoDeMonedas = [5, 10, 2, 10, 8];



// function contarSacosGrandes(array) {

//     let contadorDeSacos = 0;

//     for(let i = 0; i < array.length; i++){
//         if(array[i] === 10) {
//             contadorDeSacos = contadorDeSacos + 1;
//         }
//     }
//     return contadorDeSacos;
// }

// console.log(contarSacosGrandes(sacoDeMonedas));


// Ejercicio 1:
// El Filtro de Temperatura Alta ☀️
// Enunciado:
// Un termómetro registra las temperaturas de los últimos días en un arreglo: [22, 35, 18, 40, 27].Crea una función llamada contarDiasCalurosos que recorra el arreglo y cuente cuántos días hicieron más de 30 grados. Al final, debe devolver (return) el total de días calurosos.


// const arreglo = [22, 35, 18, 40, 27]

// function contarDiasCalurosos (array) {
//     let diasMasDe30grados = 0;

//     for(let i = 0; i < array.length; i++) {
//         if (array[i] > 30){
//             diasMasDe30grados = diasMasDe30grados + 1;
//         }
//     }
//     return diasMasDe30grados;
// }

// console.log(contarDiasCalurosos(arreglo));


// Enunciado:
// En una frutería revisan una caja de manzanas para separar las que están podridas. El arreglo contiene textos que dicen si la manzana está sana o podrida: ["sana", "podrida", "sana", "sana", "podrida", "sana"].Crea una función llamada contarManzanasPodridas que recorra el arreglo y cuente cuántas manzanas "podridas" hay. Al final, debe devolver (return) ese total.

// const podridaONo = ["sana", "podrida", "sana", "sana", "podrida", "sana"];

// function contarManzanasPodridas(array) {

//     let manzanasPodridas = 0;

//     for(let i = 0; i < array.length; i++) {
//         if (array[i] === 'podrida'){
//             manzanasPodridas = manzanasPodridas + 1;
//         }
//     }
//     return manzanasPodridas;
// }

// console.log(contarManzanasPodridas(podridaONo));

// Ejercicio 3:
// El Validador de Contraseñas Seguras 🔐
// Enunciado:
// Un sistema de seguridad revisa una lista con las longitudes (el número de letras) de varias contraseñas creadas por los usuarios: [5, 12, 8, 4, 15, 6].Una contraseña se considera segura si tiene 8 o más letras.Crea una función llamada contarContrasenasSeguras que recorra ese arreglo de números y cuente cuántas contraseñas son seguras (es decir, cuáles son mayores o iguales a 8). Al final, debe devolver (return) el total.

// const contrasenas = [5, 12, 8, 4, 15, 6];

// function contarContrasenasSeguras(array) {

//     let contrasenasMayores = 0;


//     for(let i = 0; i < array.length; i++) {
//         if(array[i] >= 8) {
//             contrasenasMayores = contrasenasMayores + 1;
//         }
//     }
//     return contrasenasMayores;
// }

// console.log(contarContrasenasSeguras(contrasenas));

// Reto: La Cuenta del Supermercado 🛒
// Enunciado:
// Tienes un arreglo con los precios de los productos que compraste: ``.Crea una función llamada calcularTotal que recorra el arreglo, sume los precios de todos los productos y devuelva (return) el costo total de la compra.¡



// const productosPreciosCompra = [34,23,1,3,5];

// function calcularTotal (precios) {

//     let preciosTotal = 0;

//     for(let i = 0; i < precios.length; i++){
//         preciosTotal = preciosTotal + precios[i];
//     }

//     return preciosTotal;
// }

// console.log(calcularTotal(productosPreciosCompra));

// El Promedio de Notas 📝 Vamos a subir un pelín el nivel usando esta misma lógica de sumar.
// Enunciado:
// Un profesor tiene las notas de un alumno en un arreglo: [8, 7, 9, 10, 6].Crea una función llamada calcularPromedio que calcule la nota promedio del alumno y la devuelva (return).

// const notasAlumno = [8, 7, 9, 10, 6];

// function calcularPromedio (notas) {

//     let sumaNotas = 0;

//     for(let i = 0; i < notas.length;i++) {
//         sumaNotas = (sumaNotas + notas[i]);

//     }
//     sumaNotas = sumaNotas / notas.length;
//     return sumaNotas;
// }

// console.log(calcularPromedio(notasAlumno));

// Reto: La Hucha del Dinero Limpio 🐷💰
// Enunciado:
// Tienes una lista con los movimientos de dinero de tu cartera. Hay números positivos (dinero que has ganado) y números negativos (dinero que has gastado porque es menor que cero):const movimientos = [20, -5, 50, -12, 10, -3];Crea una función llamada sumarSoloGanancias que recorra el arreglo, pero solo debe sumar los números que sean positivos (mayores que 0). Los gastos (números negativos) debe ignorarlos por completo. Al final, debe devolver (return) la suma total de las ganancias.

// const movimientos = [20, -5, 50, -12, 10, -3];
// const movimientos2 = [20, -5, 50, 12, 10, -3];
// const movimientos3 = [20, 5, 50, -12, 10, -3];

// function sumarSoloGanancias(dinero) {

//     let contador = 0;

//     for(let i = 0; i < dinero.length; i++){
//         if(dinero[i] > 0){
//             contador = contador + dinero[i];
//         }
//     }
//     return contador;
// }

// console.log(sumarSoloGanancias(movimientos));
// console.log(sumarSoloGanancias(movimientos2));
// console.log(sumarSoloGanancias(movimientos3));

// El Filtro de Palabras Largas 🗣️
// Ya dominas los números, así que vamos a aplicar esta misma fusión de for + if + acumulador pero con textos, que suele costar un poquito más de ver al principio.
// Enunciado:
// Un escritor tiene una lista de palabras: ["sol", "computadora", "mar", "javascript", "casa", "programacion"].Quiere un programa que junte en un solo texto largo únicamente las palabras que tengan más de 5 letras, separadas por un espacio. Las palabras cortas las debe ignorar. Al final, debe devolver (return) ese texto largo acumulado.

// const listaPalabras = ["sol", "computadora", "mar", "javascript", "casa", "programacion"];

// function palabrasCincoLetras (palabras) {

//     let contador = '';

//     for(let i = 0; i < palabras.length; i++) {
//         if(palabras[i].length > 5) {
//             contador = contador + palabras[i] + ' ';
//         }
//     }
//     return contador;
// }

// console.log(palabrasCincoLetras(listaPalabras));


//  El Juego del "FizzBuzz" Simplificado 🎮
//  Para el siguiente nivel, vamos a practicar cómo hacer que un if tome tres caminos diferentes en lugar de solo uno. Es un clásico absoluto en la programación.
//  Enunciado:
//  Tienes una lista de números del 1 al 5: const numeros = [1, 2, 3, 4, 5];.Crea una función llamada reemplazarNumeros que recorra el arreglo y cree una nueva lista (un nuevo arreglo) siguiendo estas reglas para cada número:Si el número es 3, en su lugar debe guardar la palabra "Fizz".Si el número es 5, en su lugar debe guardar la palabra "Buzz".Para cualquier otro número, guarda el número original.Al final, debe devolver (return) ese nuevo arreglo con los cambios.


// const numeros = [1, 2, 3, 4, 5];

// function reemplazarNumeros (array) {

//     let nuevoArreglo = [];

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === 3){
//             nuevoArreglo.push('Fizz');
//         } else if (array[i] === 5){
//             nuevoArreglo.push('Buzz');
//         } else {
//             nuevoArreglo.push(array[i]);
//         }
//     }
//     return nuevoArreglo;
// }

// console.log(reemplazarNumeros(numeros));



// 1. El Multiplicador de la Tabla del 2 ✖️
// Enunciado:
// Tienes un arreglo con varios números: [1, 2, 3, 4, 5].Crea una función llamada duplicarNumeros que recorra el arreglo, multiplique cada número por 2, y guarde el resultado en un nuevo arreglo. Al final, debe devolver (return) la nueva lista con los números duplicados.
// Resultado esperado: [2, 4, 6, 8, 10]

// const numeros = [1, 2, 3, 4, 5];

// function duplicarNumeros (array) {

//     let nuevoArreglo = [];

//     for(let i = 0; i < array.length; i++){
//         nuevoArreglo.push(array[i] * 2);
//     }
//     return nuevoArreglo;
// }

// console.log(duplicarNumeros(numeros));

// 2. El Creador de Etiquetas de Precios
// 🏷️Enunciado:
// Tienes una lista con precios numéricos: [10, 25, 50].
// Crea una función llamada formatearPrecios que recorra el arreglo y transforme cada número en un texto que lleve el símbolo del dólar adelante. Es decir, si ve un 10, debe guardar "$10". Al final, devuelve el nuevo arreglo de textos.
// Resultado esperado: ["$10", "$25", "$50"]

// const  preciosNumericos = [10, 25, 50];

// function formatearPrecios(array) {

//     const nuevoArreglo = [];

//     for(let i = 0; i < array.length; i++) {
//         nuevoArreglo.push(`$${array[i]}`)
//     }
//     return nuevoArreglo;
// }


// console.log(formatearPrecios(preciosNumericos)) ;


// 3. El Semáforo Escolar (Aprobado o Suspendido)
// Enunciado:
// Tienes una lista con notas de exámenes: [4, 8, 5, 3, 9].Crea una función llamada evaluarNotas que recorra el arreglo y cree una nueva lista de textos siguiendo estas reglas:Si la nota es 5 o más, guarda el texto "Aprobado".Si la nota es menor que 5, guarda el texto "Suspendido".
// Al final, devuelve el nuevo arreglo de textos.Resultado esperado: ["Suspendido", "Aprobado", "Aprobado", "Suspendido", "Aprobado"]

// const listaExamenes = [4, 8, 5, 3, 9];

// function evaluarNotas(array) {

//     let nuevoArreglo = [];

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] >= 5){
//             nuevoArreglo.push('Aprobado');
//         }else {
//             nuevoArreglo.push('Suspenso');
//         }
//     }
//     return nuevoArreglo;
// }

// console.log(evaluarNotas(listaExamenes));

// 1. El Multiplicador Personalizado:
//  Crea una función llamada multiplicarArreglo que reciba dos parámetros: un arreglo de números y un número multiplicador. La función debe recorrer el arreglo, multiplicar cada elemento por ese número multiplicador y guardarlo en una nueva lista. Al final, devuelve la nueva lista.
//  Ejemplo de uso: multiplicarArreglo([1, 2, 3], 5) debería devolver [5, 10, 15].


// function multiplicarArreglo(array, num) {

//     let nuevoArray = [];

//     for(let i = 0; i < array.length; i++) {
//         nuevoArray.push(array[i] * num);
//     }
//     return nuevoArray;
// }

// console.log(multiplicarArreglo([1, 2, 3], 5));


// 2. El Buscador de Números Mayores que X: 
// Crea una función llamada filtrarMayoresQue que reciba dos parámetros: un arreglo de números y un número límite. La función debe recorrer el arreglo y devolver un nuevo arreglo únicamente con los números que sean más grandes que ese número límite.
// Ejemplo de uso: filtrarMayoresQue([10, 5, 20, 8], 9) debería devolver [10, 20].


// function filtrarMayoresQue(array, num) {

//     let nuevoArreglo = [];

//     for(let i = 0; i < array.length; i++) {
//        if(array[i] > num) {
//             nuevoArreglo.push(array[i]);
//        }
//     }

//     return nuevoArreglo;
// }

// console.log(filtrarMayoresQue([10, 5, 20, 8], 9));



// 3. El Calculador de Intereses de Ahorro: 
// Crea una función llamada aplicarInteres que reciba dos parámetros: un arreglo con los ahorros de 3 personas y un número que representa el porcentaje de interés que van a ganar (por ejemplo, un 10). 
// La función debe devolver una nueva lista con el dinero final de cada persona tras sumarle ese porcentaje de interés.
// Fórmula para sumarle el 10% a un número: numero + (numero * 0.10). Puedes usar el parámetro del interés para que sea dinámico.


// function aplicarIntereses(array, num) {
//     let nuevoArray = [];
//     for(let i = 0; i < array.length; i++) {
//         nuevoArray.push(array[i] + (array[i] * num));
//     }

//     return nuevoArray;
// }

// console.log(aplicarIntereses([100,200,300], 0.10));

// 1. El Buscador del Tesoro: 
// Crea una función llamada buscarNumeroTres que reciba un arreglo de números. La función debe recorrer el arreglo con un for. En el momento exacto en que el if encuentre el número 3, la función debe devolver (return) el valor de i (es decir, la posición donde lo encontró).
// Ejemplo: Si le pasas [10, 20, 3, 40], debe devolver 2.

// function buscarNumeroTres(array) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === 3){
//             return i;
//         }
//     }
// }

// console.log(buscarNumeroTres([10, 20, 3, 40]))



// 2. El Localizador de Alumnos:
// Crea una función llamada buscarAlumno que reciba dos parámetros: un arreglo de nombres de alumnos y el nombre del alumno que queremos buscar (ej: "Luis"). La función debe recorrer la lista y devolver el índice (la posición) donde se encuentra ese alumno.
// Ejemplo: buscarAlumno(["Ana", "Luis", "Marta"], "Luis") debería devolver 1.


// function buscarAlumno(array, name){
//     for(let i = 0; i < array.length; i++) {
//         if(name === array[i]){
//             return i;
//         }
//     }
// }

// console.log(buscarAlumno(["Ana", "Luis", "Marta"], "Luis"));


// 3.El Detector de Errores con Alerta: 
// Crea una función llamada detectarFallo que reciba un arreglo de textos que representan estados de un sistema (ej: ["ok", "ok", "error", "ok"]). La función debe buscar la palabra "error". Si la encuentra, debe devolver un texto personalizado que diga: "Fallo detectado en la posición [número de posición]". 
// Si no encuentra ningún error, debe devolver "Sistema limpio".Pista para el "Sistema limpio": Si el bucle termina del todo y el if nunca se activó, puedes poner un return al final de la función, fuera del bucle, para dar las buenas noticias.


// function detectarFallo (array) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === "error"){
//             return `Fallo detectado en la posicion ${i}`;
//         }
//     }
//     return 'No hay fallos';
// }

// console.log(detectarFallo(["ok", "ok", "error", "ok"]))


// Enunciado:
// Crea una función llamada encontrarMenor que reciba un arreglo de números. La función debe recorrer el arreglo y devolver (return) únicamente el número más pequeño de todo el grupo (sin usar trucos como Math.min).

// function encontrarMenor(array) {

//     let numeroMenor = array[0];
    
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] < numeroMenor) {
//             numeroMenor = array[i];
//         }
//     }
//     return numeroMenor;
// }

// console.log(encontrarMenor([2,1,3]))



// 1. El Buscador del Número Mayor (La Revancha) 📈:
// Crea una función llamada encontrarMayor que reciba un arreglo de números (ej: ``). Debe recorrer el arreglo y devolver (return) únicamente el número más grande de todo el grupo.


// function encontrarMayor(array) {

//     let numeroGrande = array[0];

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] > numeroGrande){
//             numeroGrande = array[i];
//         }
//     }

//     return numeroGrande;
// }

// console.log(encontrarMayor([12,34,21,67]))



// 2. La Temperatura Más Fría del Invierno ❄️:
// Un termómetro registra las temperaturas de la semana: const temperaturas = [4, -2, 5, 1, -5, 3];.Crea una función llamada temperaturaMinima que recorra el arreglo y devuelva la temperatura más baja (más pequeña) de todas.¡¡

// const temperaturas = [4, -2, 5, 1, -5, 3];

// function temperaturaMinima(array) {

//     let temperaturaPequena = array[0];

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] < temperaturaPequena){
//             temperaturaPequena = array[i];
//         }
//     }
//     return temperaturaPequena;
// }

// console.log(temperaturaMinima(temperaturas));

// 3. La Palabra Más Corta del Diccionario 🔤:
// Tienes una lista de palabras: const palabras = ["computadora", "sol", "javascript", "tren"];.Crea una función llamada palabraMasCorta que recorra el arreglo y devuelva la palabra que tenga menos letras.

// const palabras = ["computadora", "sol", "javascript", "tren"];

// function palabraMasCorta (array) {
//     let nuevoArreglo = array[0];
//     for(let i = 0; i < array.length; i++) {
//         if(array[i].length < nuevoArreglo.length) {
//             nuevoArreglo = array[i];
//         }
//     }
//     return nuevoArreglo;
// }

// console.log(palabraMasCorta(palabras));


// Reto 1: El Contador de Números Impares 🔢
// Crea una función llamada contarImpares que reciba un arreglo de números y devuelva cuántos números impares hay en la lista.

// function contarImpares (array) {

//     let nuevoArregloImpares = 0;

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] % 2 !== 0) {
//             nuevoArregloImpares = nuevoArregloImpares + 1;
//         }
//     }
//     return nuevoArregloImpares;
// }

// console.log(contarImpares([1,2,3,4,5,7,8]));


// Reto 2: El Filtro de la Lista de la Compra 🛒
// Tienes una lista de productos: ["leche", "pan", "chocolate", "manzana", "galletas"].
// Crea una función llamada filtrarPalabrasLargas que reciba ese arreglo y devuelva un nuevo arreglo únicamente con las palabras que tengan más de 4 letras.


// const productos = ["leche", "pan", "chocolate", "manzana", "galletas"];

// function filtrarPalabrasLargas (array) {
//     let nuevoArreglo = [];
//     for(let i = 0; i < array.length; i++) {
//         if(array[i].length > 4) {
//             nuevoArreglo.push(array[i]);
//         }
        
//     }
//     return nuevoArreglo;
// }

// console.log(filtrarPalabrasLargas(productos));



// Un profesor quiere saber cuál fue la nota más alta de su clase.
// Crea una función llamada notaMasAlta que reciba un arreglo con las notas: [6, 8, 4, 9, 7, 5] y devuelva únicamente el número de la nota más grande.

// const notas = [6, 8, 4, 9, 7, 5];

// function notaMasAlta (array) {

//     let numeroNota = 0;
//     for(let i = 0; i < array.length; i++){
//     if (array[i] > numeroNota){
//         numeroNota = array[i]
//         }
//     }
//     return numeroNota;
// }

// console.log(notaMasAlta(notas));



// Reto de Bienvenida: El Filtro Anti-Repetidos 🚫👥
// Enunciado:Tienes una lista de números donde algunos se han colado más de una vez por error: const listaConRepetidos = [2, 5, 2, 8, 5, 1];.
// Crea una función llamada eliminarRepetidos que recorra ese arreglo y cree una nueva lista limpia, es decir, donde cada número aparezca solo una vez. 
// Al final, debe devolver (return) ese nuevo arreglo sin duplicados.Resultado esperado: [2, 5, 8, 1]


// const listaConRepetidos = [2, 5, 8, 5, 1];

// function eliminarRepetidos(array) {
//     let nuevaLista = [];
//     for(let i = 0; i < array.length; i++) {
//         if (nuevaLista.includes(array[i]) === false){
//             nuevaLista.push(array[i]);
//         }
//     }
//     return nuevaLista;
// }

// console.log(eliminarRepetidos(listaConRepetidos));




// Ejercicios para practicar el .includes()
// 1. El Filtro del Club VIP 🎟️:
// Tienes una lista de personas que ya entraron a una fiesta: const yaEntraron = ["Ana", "Carlos", "Luis"];.Llega una lista de nuevos invitados: const nuevos = ["Luis", "Marta", "Ana", "Pedro"];.
// Crea una función llamada filtrarNuevos que reciba ambos arreglos como parámetros. Debe recorrer la lista de nuevos y guardar en un tercer arreglo solo a las personas que NO estén ya en la lista de yaEntraron. Al final, devuelve ese arreglo.
// Resultado esperado: ["Marta", "Pedro"]


// const yaEntraron = ["Ana", "Carlos", "Luis"];
// const nuevos = ["Luis", "Marta", "Ana", "Pedro"];


// function filtrarNuevos (array, array2) {

//     let nuevaLista = [];

//     for(let i = 0; i <  array2.length; i++) {
//         if(array.includes(array2[i]) === false) {
//             nuevaLista.push(array2[i]);
//         }
//     }
//     return nuevaLista;
// }

// console.log(filtrarNuevos(["Ana", "Carlos", "Luis"], ["Luis", "Marta", "Ana", "Pedro"]));


// Vamos a por el Ejercicio 2: 
// El Buscador de Palabras Únicas 📝
// Para fijar este conocimiento y que no se te olvide, haz el segundo ejercicio de la tanda. Es el de limpiar las palabras repetidas:const palabras = ["hola", "mundo", "hola", "javascript", "mundo"];
// Crea la función obtenerUnicas que reciba este arreglo y te devuelva una nueva lista solo con las palabras sin repetir: ["hola", "mundo", "javascript"].

// const palabras = ["hola", "mundo", "hola", "javascript", "mundo"];

// function obtenerUnicas (array) {
//     let nuevaLista = []

//     for(let i = 0; i < array.length; i++) {
//         if(nuevaLista.includes(array[i]) === false) {
//             nuevaLista.push(array[i]);
//         }
//     }
//     return nuevaLista;
// }

// console.log(obtenerUnicas(["hola", "mundo", "hola", "javascript", "mundo"]))


// Reto: El Corrector de Precios Inflados 🎈💸
// Enunciado:
// Tienes una lista de precios de tu tienda: const precios = [5, 12, 20, 8, 15]; [3].El gobierno ha puesto una regla: cualquier precio que sea mayor de 10 dólares es considerado "caro" y debe recibir un descuento de 2 dólares. Los precios que sean de 10 o menos se quedan igual.
// Crea una función llamada corregirPrecios que recorra el arreglo y devuelva un nuevo arreglo con los precios corregidos (algunos rebajados y otros intactos) [3].Resultado esperado: [5, 10, 18, 8, 13]


// const precios = [5, 12, 20, 8, 15];

// function corregirPrecios (array) {

//     let nuevoArreglo = [];

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] > 10) {
//             nuevoArreglo.push(array[i] - 2);
//         } else {
//             nuevoArreglo.push(array[i]);
//         }
//     }
//     return nuevoArreglo;
// }

// console.log(corregirPrecios([5, 12, 20, 8, 15]));


// Enunciado:
// Tienes una lista de palabras: const frutas = ["manzana", "pera", "platano", "uva"];.
// Queremos destacar las palabras cortas. 
// Crea una función llamada destacarCortas que recorra el arreglo y cree una nueva lista siguiendo estas reglas:Si la palabra tiene menos de 5 letras (ej: "pera", "uva"), conviértela a MAYÚSCULAS antes de guardarla.Si la palabra tiene 5 letras o más (ej: "manzana", "platano"), guárdala igual que estaba (en minúsculas).
// Al final, debe devolver (return) el nuevo arreglo con las modificaciones.Resultado esperado: ["manzana", "PERA", "platano", "UVA"]

// const frutas = ["manzana", "pera", "platano", "uva"];

// function destacarCortas(array) {

//     let nuevoArreglo = [];

//     for(let i = 0; i < array.length ; i++) {
//         if(array[i].length < 5) {
//             nuevoArreglo.push(array[i].toUpperCase());
//         } else {
//             nuevoArreglo.push(array[i]);
//         }
//     }
//     return nuevoArreglo;
// }

// console.log(destacarCortas(["manzana", "pera", "platano", "uva"]));


// 🎧 PROYECTO: El Motor de Playlists Inteligente
// Un usuario tiene una lista de canciones guardadas en su cuenta, pero su reproductor se ha vuelto loco. La lista es este arreglo de textos: 

// const cancionesSucias = ["enigma", "rockstar", "enigma", "sky", "thunder", "rockstar", "paradise", "sky"];

// 🚫 FASE 1: 
// El Filtro Anti-RepeticionesAl usuario le molesta que las canciones se repitan una y otra vez.Crea una función llamada limpiarPlaylist que reciba el arreglo. Debe devolver un nuevo arreglo con las canciones sin repetir ninguna (cada canción debe aparecer una sola vez).
// Resultado esperado de la Fase 1: ["enigma", "rockstar", "sky", "thunder", "paradise"]


// function limpiarPlaylist (array) {

//     let nuevoArreglo = [];

//     for(let i = 0; i < array.length; i++) {
//         if(nuevoArreglo.includes(array[i]) === false) {
//             nuevoArreglo.push(array[i]);
//         }
//     }
//     return nuevoArreglo;
// }



// 🔠 FASE 2: 
// El Formateador VIPLa empresa quiere que las canciones cortas tengan un diseño especial en la aplicación (todo en mayúsculas) para que destaquen.Crea una función llamada formatearCanciones que reciba la lista ya limpia de la Fase 1.Si el nombre de la canción tiene menos de 6 letras (ej: "sky", "enigma"), la guarda en MAYÚSCULAS.Si tiene 6 letras o más (ej: "rockstar", "thunder", "paradise"), la guarda igual que estaba (en minúsculas).
// Resultado esperado de la Fase 2: ["ENIGMA", "rockstar", "SKY", "thunder", "paradise"]

// function formatearCanciones(lista) {

//     let listaNueva = [];

//     for(let i = 0; i < lista.length; i++) {
//         if(lista[i].length < 6) {
//             listaNueva.push(lista[i].toUpperCase());
//         } else {
//             listaNueva.push(lista[i]);
//         }
//     }
//     return listaNueva;
// }


// 👑 FASE 3: 
// El Buscador del Hit del AñoPor último, el sistema necesita saber cuál es la canción con el nombre más largo de toda la lista para ponerla en la portada de la web.Crea una función llamada obtenerCancionMasLarga que reciba la lista formateada de la Fase 2.Debe recorrer el arreglo y devolver (return) únicamente el texto de la canción con más letras de todas.


// function obtenerCancionMasLarga(lista) {

//     let nuevoArreglo = lista[0];

//     for(let i = 0; i < lista.length; i++){
//         if(lista[i].length > nuevoArreglo.length){
//             nuevoArreglo = lista[i];
//         }
//     }
//     return nuevoArreglo;
// }

// console.log(obtenerCancionMasLarga(cancionesSucias))



// 1. El Botón de Borrar Historial 🗑️:Tienes una lista de páginas web visitadas: const historial = ["google", "facebook", "youtube", "twitter"];.
// Crea una función llamada borrarPagina que reciba dos parámetros: el arreglo y el índice (número de posición) que quieres eliminar. La función debe aplicar el .splice() en esa posición para borrarla y devolver (return) el arreglo modificado.
// Ejemplo: borrarPagina(historial, 2) debería devolver ["google", "facebook", "twitter"] (borró YouTube).


// const historial = ["google", "facebook", "youtube", "twitter"];

// function borrarPagina (array, indice) {
//     array.splice(indice,1);
//     return array;
// }

// console.log(borrarPagina(historial,2))



// 2. El Exterminador de "Spam" 🚫📧:
// Tienes una lista de correos donde algunos son mensajes de publicidad que contienen la palabra "spam": const bandeja = ["hola", "spam", "trabajo", "spam", "saludo"];.
// Crea una función llamada eliminarSpam que reciba el arreglo. Debe recorrerlo con un bucle for y, si encuentra la palabra "spam", debe borrarla usando .splice(). Al final, devuelve la bandeja limpia.Resultado esperado: ["hola", "trabajo", "saludo"]
// ista de oro: Cuando borras un elemento a mitad de camino, la lista se encoge. Para que el bucle no se salte el siguiente número, dentro del if, justo después del .splice(), tienes que restarle uno a tu contador: i--;. ¡Piénsalo como dar un paso atrás para no saltarte la cinta transportadora!


// const bandeja = ["hola", "spam", "trabajo", "spam", "saludo"];

// function eliminarSpam (array) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === 'spam') {
//             array.splice(i, 1);
//             i--;
//         }
//     }
//     return array;
// }

// console.log(eliminarSpam(bandeja));



// 3. El Limpiador del Almacén 📦:
// Tienes un almacén con cajas de diferentes pesos: ``.El jefe te pide que elimines todas las cajas que pesen menos de 10 kilos porque se han roto. 
// Crea una función llamada limpiarCajasLigeras que reciba el arreglo, busque los números menores a 10, los elimine con .splice() (no olvides el i--;) y devuelva el arreglo final con las cajas pesadas.


// const cajas = [12, 5, 8, 20, 3, 15];

// function limpiarCajasLigeras(array) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] < 10) {
//             array.splice(i,1);
//             i--
//         }
//     }
//     return array;
// }

// console.log(limpiarCajasLigeras(cajas));


// Tienes una lista de personas que quieren entrar a una discoteca. Cada persona es un objeto dentro de un arreglo:
// javascript
// const clientes = [
// //     { nombre: "Carlos", edad: 16 },
// //     { nombre: "Marta", edad: 22 },
// //     { nombre: "Luis", edad: 15 },
// //     { nombre: "Laura", edad: 19 }
// // ];
// // Usa el código con precaución.
// // Crea una función llamada filtrarMayoresDeEdad que recorra ese arreglo de objetos y devuelva un nuevo arreglo únicamente con los objetos de las personas que tengan 18 años o más.Resultado esperado: [ { nombre: "Marta", edad: 22 }, { nombre: "Laura", edad: 19 } ]

// const clientes = [
//     { nombre: 'Carlos', edad: 16},
//     { nombre: 'Marta', edad: 22},
//     { nombre: 'Luis', edad: 15},
//     { nombre: 'Laura', edad: 19},
// ];

// function filtrarMayoresDeEdad (array) {
//     let nuevoArreglo = [];
//     for(let i = 0; i < array.length; i++) {
//         if(array[i].edad >= 18) {
//             nuevoArreglo.push(array[i]);
//         }
//     }
//     return nuevoArreglo;
// }

// console.log(filtrarMayoresDeEdad(clientes))


// Enunciado:
// Tienes una lista de productos tecnológicos de una tienda. Cada uno tiene un nombre, un precio y un dato llamado enStock que dice si quedan unidades (true) o si están agotados (false):

// javascript
// // const inventario = [
// //     { producto: "Ratón", precio: 20, enStock: true },
// //     { producto: "Teclado", precio: 50, enStock: false },
// //     { producto: "Monitor", precio: 150, enStock: true },
// //     { producto: "Auriculares", precio: 30, enStock: false }
// // ];
// Usa el código con precaución.
// Crea una función llamada buscarDisponibles que recorra el arreglo de objetos y devuelva un nuevo arreglo únicamente con los productos que SÍ están en stock (es decir, donde enStock sea igual a true).Resultado esperado en la consola: Los objetos completos del Ratón y del Monitor.

// const inventario = [
//     { producto: "Ratón", precio: 20, enStock: true },
//     { producto: "Teclado", precio: 50, enStock: false },
//     { producto: "Monitor", precio: 150, enStock: true },
//     { producto: "Auriculares", precio: 30, enStock: false }
// ];

// function buscarDisponibles (array) {
//     let nuevoArreglo = [];
//     for(let i = 0;i < array.length; i++) {
//         if(array[i].enStock === true) {
//             nuevoArreglo.push(array[i]);
//         }
//     }
//     return nuevoArreglo;
// }

// console.log(buscarDisponibles(inventario));


// Crea una función llamada calcularTotalCarrito que recorra el arreglo de objetos, sume el precio de todos los artículos y devuelva (return) el costo total que debe pagar el cliente.
// Resultado esperado en la consola: 130 (porque 25 + 40 + 60 + 5 = 130).

// const carrito = [
//     { articulo: "Camiseta", precio: 25 },
//     { articulo: "Pantalón", precio: 40 },
//     { articulo: "Zapatillas", precio: 60 },
//     { articulo: "Calcetines", precio: 5 }
// ];

// function calcularTotalCarrito (array) {
//     let total = 0;
//     for(let i = 0; i < array.length; i++) {
//         total = total + array[i].precio;
//     }
//     return total;
// }

// console.log(calcularTotalCarrito(carrito));


// La empresa ha decidido subir el precio únicamente del plan "Estándar" a 15 dólares. Los demás planes deben quedarse exactamente igual.
// Crea una función llamada actualizarPlanEstandar que recorra el arreglo. Si encuentra el objeto cuyo nombre sea igual a "Estándar", debe cambiar su propiedad precio a 15 usando el signo =. Al final, devuelve (return) el arreglo original pero con el cambio hecho.

// const planes = [
//     { nombre: "Básico", precio: 9 },
//     { nombre: "Estándar", precio: 13 },
//     { nombre: "Premium", precio: 18 }
// ];

// function actualizarPlanEstandar(array) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i].nombre === 'Estándar'){
//             array[i].precio = 15;
//         }
//     }
//     return array;
// }

// console.log(actualizarPlanEstandar(planes));


// Reto 1: El Filtro de Mensajes Urgentes 📨🚨
// Tienes una lista de mensajes de soporte técnico de una empresa:javascriptconst mensajes = [
//     { id: 1, texto: "No puedo entrar", urgente: true },
//     { id: 2, texto: "Sugerencia de color", urgente: false },
//     { id: 3, texto: "Error en el pago", urgente: true }
// ];
// Usa el código con precaución.Crea una función llamada obtenerUrgentes que recorra el arreglo y devuelva un nuevo arreglo únicamente con los objetos de los mensajes que tengan urgente igual a true.

// const mensajes = [
//     { id: 1, texto: "No puedo entrar", urgente: true },
//     { id: 2, texto: "Sugerencia de color", urgente: false },
//     { id: 3, texto: "Error en el pago", urgente: true }
// ];

// function obtenerUrgentes(array) {
//     let nuevoArreglo = [];
//     for(let i = 0; i < array.length; i++) {
//         if(array[i].urgente === true) {
//             nuevoArreglo.push(array[i]);
//         }
//     }
//     return nuevoArreglo;
// }

// console.log(obtenerUrgentes(mensajes));


// Reto 2: El Aumento de Sueldo General 💼💵
// Tienes la lista de empleados de una oficina:javascriptconst empleados = [
//     { nombre: "Ana", sueldo: 1000 },
//     { nombre: "Pedro", sueldo: 1200 },
//     { nombre: "Marta", sueldo: 1500 }
// ];
// Usa el código con precaución.El jefe quiere sumarle 200 dólares al sueldo de TODOS los empleados sin excepción (aquí no necesitas usar ningún if). Crea una función llamada subirSueldos que recorra el arreglo, le aumente el sueldo a cada uno modificando su propiedad y devuelva la lista original con los cambios hechos.


// const empleados = [
//     { nombre: "Ana", sueldo: 1000 },
//     { nombre: "Pedro", sueldo: 1200 },
//     { nombre: "Marta", sueldo: 1500 }
// ];

// function subirSueldos (array) {
//     for(let i = 0; i < array.length; i++) {
//         array[i].sueldo = array[i].sueldo + 200;
//     }
//     return array;
// }

// console.log(subirSueldos(empleados));


// 1. El Filtro de Precios Bajos 🛒:Tienes una lista de precios: const precios = [15, 4, 25, 8, 30, 2];.Crea una variable llamada preciosBaratos que use .filter() para quedarse únicamente con los precios que sean menores de 10.
// Resultado esperado: [4, 8, 2]

// const precios = [15, 4, 25, 8, 30, 2];

// const preciosBaratos = precios.filter(num => num > 10);


// 2. El Buscador de Nombres Cortos 🔤:Tienes una lista de nombres: const nombres = ["Alejandro", "Ana", "Luis", "Marta", "Rey"];.Crea una variable llamada nombresCortos que filtre la lista para quedarse solo con los nombres que tengan menos de 5 letras (usa .length).Resultado esperado: ["Ana", "Luis", "Rey"]

// const nombres = ["Alejandro", "Ana", "Luis", "Marta", "Rey"];

// const nombresCortos = nombres.filter(name => name.length < 5);

// console.log(nombresCortos);


// 3. Crea una variable llamada mensajesUrgentes que use el método .filter() para quedarse únicamente con los objetos que tengan la propiedad urgente igual a true.

// const mensajes = [
//     { id: 1, texto: "No puedo entrar", urgente: true },
//     { id: 2, texto: "Sugerencia de color", urgente: false },
//     { id: 3, texto: "Error en el pago", urgente: true }
// ];

// const mensajesUrgentes = mensajes.filter(msg => msg.urgente === true);

// console.log(mensajesUrgentes)


// 1. El Convertidor de Euros a Pesetas/Dólares 💵:Tienes una lista de precios en euros: const preciosEuros =;.Crea una variable llamada preciosDolares que use .map() para multiplicar cada precio por 1.10 (suponiendo que un euro vale 1.10 dólares).Resultado esperado: [11, 22, 33, 44]

// const preciosEuros = [10, 20, 30, 40];

// const preciosDolares = preciosEuros.map(money => money * 1.10);
// console.log(preciosDolares);



// 2. El Creador de Etiquetas de Precios (Versión Flecha) 🏷️:¿Te acuerdas de cuando nos costó transformar los números en texto con el signo de dólar adelante ("\$10") usando comillas invertidas? ¡Ahora lo vas a hacer en una sola línea!Lista de origen: const importes =;.Crea una variable llamada etiquetas que use .map() y template literals (las comillas invertidas ` y ${}) para transformar cada número en un texto con el $ adelante.
// Resultado esperado: ["$5", "$12", "$20"]

// const importes = [5, 12, 20];

// const etiquetas = importes.map(num => `$${num}`);

// console.log(etiquetas);



// Crea una variable llamada nuevosSueldos que use .map() para sumarle 200 dólares al sueldo de cada empleado.

// const empleados = [
//     { nombre: "Ana", sueldo: 1000 },
//     { nombre: "Pedro", sueldo: 1200 }
// ];

// const nuevosSueldos = empleados.map(suma => ({
//     nombre: suma.nombre,
//     sueldo: suma.sueldo + 200
// }));

// console.log(nuevosSueldos);




// Queremos hacer una liquidación. 
// Crea una variable llamada ofertasDisponibles que en una sola línea haga dos cosas:.filter(): Quédate solo con los productos que SÍ están en stock (prod.enStock === true)..map(): A esos productos que sobrevivieron, bájales el precio a la mitad (precio: prod.precio / 2).
// Resultado esperado: Una lista con los objetos de los Auriculares (a 15$) y el Ratón Gamer (a 10$). El Teclado desaparece.


// const productos = [
//     { nombre: "Auriculares", precio: 30, enStock: true },
//     { nombre: "Teclado", precio: 50, enStock: false },
//     { nombre: "Ratón Gamer", precio: 20, enStock: true }
// ];

// const ofertasDisponibles = productos
//     .filter(prod => prod.enStock === true) 
//     .map(prod => ({                       
//         nombre: prod.nombre,
//         precio: prod.precio / 2,
//         enStock: prod.enStock
//     }));


// console.log(ofertasDisponibles);