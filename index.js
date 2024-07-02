// Passo 1: Crie um array com alguns números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrarPares(arr) {
  const pares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pares.push(arr[i]);
    }
  }
  return pares;
}

const numerosPares = filtrarPares(numeros);
console.log(numerosPares);
