// Antes de empezar, recuerden ejecutar "npm install" para instalar las dependencias necesarias.
// Para correr los tests, ejecuten "npm test" en la terminal.

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
}

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  // Tu código:
}

function puedePasar(num) {
  //La función recibe un número entero por argumento.
  //Debera devolver "Es mayor de edad, puede pasar" Si el número es mayor o igual a 18.
  //Si el número es menor a 18 devolver "No puede pasar".
  //Si el número es menor a 0 devolver "Dato incorrecto".
  // Tu código:
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
}

function retornarGanador(participantes, sorteo) {
  //La función recibe un array de nombres de participantes y un número entero llamado "sorteo".
  //Deberá devolver el nombre del participante que haya sido seleccionado en el sorteo.
  //Si el número es mayor a la cantidad de participantes, deberá devolver "No hay participantes".
  // Tu código:
}

function sumarTodos(array) {
  //La función recibe un array de números enteros y debe devolver la suma total de todos ellos.
  // Tu código:
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primo.
  // Tu código:
}

function factorial(numero) {
  // La función recibe un número "numero" y devuelve el factorial de ese número
  // Pista: El factorial de un número es el resultado de multiplicar ese número por sus anteriores hasta la unidad
  // Si el número es 0, el factorial es 1
  // Por ejemplo, si hacemos factorial(5) la Función deberá hacer la operación 5x4x3x2x1 y devolver el resultado: 120.
  // Tu código:
}

function fibonacci(n) {
  // La función recibe un número "n" y devuelve el enésimo número de la secuencia de Fibonacci.
  // La secuencia de Fibonacci comienza con 0 y 1. Cada número de Fibonacci posterior es la suma de los dos números anteriores.
  // Por ejemplo, si hacemos fibonacci(5) la Función deberá devolver el número 5 de la secuencia.
  // En otras palabras, imprimirá el número que está en la posición contando X cantidad de lugares.
  // Serie: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
  // Fibonacci (2): 1
  // Fibonacci (5): 3
  // Fibonacci (8): 13
  // Tu código:
}

export {
  menosQueNoventa,
  esImpar,
  esVocal,
  puedePasar,
  fizzBuzz,
  retornarGanador,
  sumarTodos,
  esPrimo,
  factorial,
  fibonacci,
}
