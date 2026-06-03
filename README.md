# 🛒 Proyecto: Tienda Virtual Interactiva con Arquitectura de Estado

En este proyecto he dado el salto definitivo al desarrollo frontend profesional, conectando una base de datos lógica en memoria con una interfaz gráfica interactiva en tiempo real (DOM).

## 🛠️ Tecnologías y Conceptos Avanzados Aplicados

### 1. Gestión de Estado Lógico (`Data Layer`)
* **Base de Datos en Memoria:** Creación de un arreglo global (`carrito`) que actúa como la "fuente única de verdad" de la aplicación, mutando dinámicamente mediante el método `.push()`.
* **Programación Funcional y Acumuladores:** Implementación del método moderno avanzado `.reduce()` para procesar la colección de objetos y calcular el coste financiero total en una sola línea de código limpia y eficiente.

### 2. Manipulación Avanzada del DOM (`UI Layer`)
* **Inyección de Componentes Dinámicos:** Uso de `document.createElement()` y `.append()` para fabricar etiquetas semánticas (`<li>`) directamente desde JavaScript e integrarlas en el flujo del navegador.
* **Arquitectura de Parámetros Dinámicos (Mensajeros):** Configuración de funciones de renderizado aisladas que aceptan objetos como argumentos (`prod.nombre`), permitiendo pintar datos específicos en pantalla de forma modular.
* **Escuchadores de Eventos en Paralelo:** Sincronización de múltiples eventos de tipo `'click'` que ejecutan la lógica de negocio y la actualización visual de manera coordinada.

### 3. Buenas Prácticas de Ingeniería de Software
* **Separación de Responsabilidades:** División estricta del código en funciones matemáticas/lógicas (`actualizarTotal`) y funciones de renderizado visual (`dibujarCarrito`).
* **Control de Versiones Atómico:** Registro constante del progreso mediante una estrategia de commits secuenciales y limpios en mi perfil de GitHub.

