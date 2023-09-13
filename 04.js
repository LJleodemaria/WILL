/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  let entero = num.toString()// 1ro convertimos para luego poder hacer la comparacion con la otra variable.
  let invertido = entero.split('').reverse().join('')// esta variable invierte los caracteres.
     return entero === invertido // esto seria lo mismo que la condicion 'if'.
      
}
console.log(numeroSimetrico(121));

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico