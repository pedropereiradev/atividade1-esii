// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
    return v1 - v2
}
    


// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    if (v2 === 0) {
        return "Não é possível dividir por 0";
    }
    return v1 / v2;
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
    return v1 * v2;
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
  return Math.sqrt(v1);
}

console.log(square(81));
console.log(mult(4, 5));
console.log(sub(10, 5))
