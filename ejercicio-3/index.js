let arrayNumeros = [10, 40, 30, 20, 15, 5];
let arrayOrdenado = arrayNumeros.slice().sort((a, b) => a - b);
let numeroMenor = arrayOrdenado[0];
let numeroMayor = arrayOrdenado[arrayOrdenado.length - 1];
console.log("Ejercicio 3:");
console.log("Arreglo ordenado:", arrayOrdenado);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);