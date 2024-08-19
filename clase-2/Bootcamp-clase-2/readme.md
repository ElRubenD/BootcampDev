# Clase 2: Javascript Avanzado

En esta clase veremos:

- Ciclos
- Estructuras de control

## Ciclos

Los ciclos son una herramienta fundamental en la programación, ya que permiten ejecutar un bloque de código repetidamente hasta que se cumpla una condición específica.

### Ciclo for:

El ciclo for se utiliza para ejecutar un bloque de código un número determinado de veces. Es ideal para iterar sobre secuencias de elementos, como listas o arreglos.

Estructura básica:

```js
for (inicialización; condición; incremento) {
  bloque de código;
}
```

Ejemplo:

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

### Ciclo while:

El ciclo while ejecuta un bloque de código repetidamente, mientras se cumpla una condición específica. Es útil para situaciones donde la cantidad de iteraciones no se conoce de antemano.

```js
while (condición) {
  bloque de código;
}
```

condición: Se evalúa antes de cada iteración. Si es verdadera, se ejecuta el bloque de código; si es falsa, el ciclo termina.

Ejemplo:

```js
let numero = 10

while (numero > 0) {
  console.log(numero)
  numero--
}
```

### Cilo do-while

El ciclo do-while es similar al ciclo while, pero con una diferencia crucial: el bloque de código se ejecuta al menos una vez, independientemente del valor inicial de la condición.

Estructura básica:

```js
do {
  bloque de código;
} while (condición);
```

bloque de código: Se ejecuta al menos una vez y luego se evalúa la condición.
condición: Si la condición es verdadera, se repite el ciclo; si es falsa, el ciclo termina.

Ejemplo

```js
let numero = 0

do {
  console.log(numero)
  numero++
} while (numero < 5)
```

## Estructuras de control

### Sentencias if y else: La base de las decisiones

Las sentencias if y else nos permiten evaluar una condición y ejecutar un bloque de código si esta es verdadera, o un bloque alternativo si es falsa. Son la base de la toma de decisiones en JavaScript.

Estructura básica:

```js
if (condición) {
  bloque de código si es verdadera
} else {
  bloque de código si es falsa
}
```

Ejemplo:

```js
let edad = 18
if (edad >= 18) {
  console.log("Eres mayor de edad")
} else {
  console.log("Eres menor de edad")
} // salida: "Eres mayor de edad"
```

### Sentencia else if: Ampliando las posibilidades

La sentencia else if nos permite agregar más de una condición a nuestra estructura de control, evaluando diferentes escenarios de forma encadenada.

Estructura básica:

```js
if (condición1) {
  bloque de código si es condición1
} else if (condición2) {
  bloque de código si es condición2
} else {
  bloque de código si ninguna condición es verdadera
}
```

Ejemplo:

```js
let calificacion = 85
if (calificacion >= 90) {
  console.log("Excelente")
} else if (calificacion >= 80) {
  console.log("Muy bien")
} else if (calificacion >= 70) {
  console.log("Bien")
} else {
  console.log("Regular")
}
// salida: "Muy Bien"
```

### Sentencia switch: Eligiendo entre múltiples opciones

La sentencia switch nos permite evaluar una expresión y comparar su valor con diferentes casos, ejecutando un bloque de código específico para cada caso coincidente.

Estructura básica:

```js
switch (expresión) {
  case valor1:
    bloque de código para valor1
    break;
  case valor2:
    bloque de código para valor2
    break;
  default:
    bloque de código si no hay coincidencia
}
```

## Arreglos: Métodos Avanzados

Los arrays o matrices son estructuras de datos fundamentales para almacenar y organizar información. Sin embargo, trabajar con arrays de manera eficiente y requiere herramientas más allá de la simple iteración. Aquí es donde entran en juego los métodos de array avanzados en JavaScript, como map, filter, find, y más.

### map: Transformando elementos uno a uno

El método map nos permite transformar cada elemento de un array en otro nuevo, aplicando una función de transformación a cada elemento. Es ideal para realizar operaciones como cambiar el formato de datos, aplicar cálculos o crear nuevos arrays a partir del original.

Estructura básica:

```js
array.map(function (elemento, indice, arrayOriginal) {
  return elementoTransformado
})
```

Ejemplo:

```js
const numeros = [1, 2, 3, 4, 5]
const numerosAlCuadrado = numeros.map((numero) => numero * numero)
console.log(numerosAlCuadrado)
// salida: [1, 4, 9, 16, 25]
```

### filter: Extrayendo elementos específicos

El método filter nos permite crear un nuevo array que contiene solo los elementos del array original que cumplen con una condición específica. Es ideal para filtrar datos, seleccionar elementos que cumplan ciertos criterios o eliminar elementos no deseados.

Estructura básica:

```js
array.filter(function (elemento, indice, arrayOriginal) {
  return condicion
})
```

Ejemplo:

```js
const numeros = [1, 2, 3, 4, 5]
const numerosPares = numeros.filter((numero) => {
  return numero % 2 === 0
})
console.log(numerosPares)
// salida: [2, 4]
```

### find: Encontrando un elemento único

El método find nos permite buscar en un array y devolver el primer elemento que cumpla con una condición específica. Es ideal para localizar un elemento en particular, extraer información específica o validar la presencia de un elemento.

```js
array.find(function (elemento, indice, arrayOriginal) {
  return condicion
})
```

Ejemplo:

```js
const productos = [
  { nombre: "Producto 1", precio: 10 },
  { nombre: "Producto 2", precio: 15 },
  { nombre: "Producto 3", precio: 20 },
]
const productoBarato = productos.find((producto) => {
  return producto.precio < 15
})
console.log(productoBarato)
// salida: { nombre: "Producto 1", precio: 10 }
```

### reduce: Combinando elementos en un solo valor

El método reduce nos permite iterar sobre un array y combinar sus elementos en un solo valor, aplicando una operación de reducción a cada elemento. Es ideal para calcular sumas, promedios, concatenar strings o realizar cálculos estadísticos.

Estructura básica:

```js
array.reduce(function (valorAcumulado, elementoActual, indice, arrayOriginal) {
  return nuevoValorAcumulado
}, valorInicial)
```

Ejemplo:

```js
const numeros = [1, 2, 3, 4, 5]
const sumaTotal = numeros.reduce((acumulado, actual) => {
  return acumulado + actual
})
console.log(sumaTotal)
// salida: 15
```
