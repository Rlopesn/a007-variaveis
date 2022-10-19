let valor1 = 50
console.log("valor1 =", valor1)

let valor2 = 25
console.log("valor2 =", valor2)

let valor3 = valor1

valor1 = valor2
valor2 = valor3
valor3 = valor2

console.log("valor1 agora é =",valor1)
console.log("valor2 agora é =", valor2)

// foi feita a troca de valores entre valor1 e valor2
