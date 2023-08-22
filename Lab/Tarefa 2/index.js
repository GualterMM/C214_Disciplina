const Calculadora = require('./src/calculadora');
let arg1 = 6;
let arg2 = 2;
let arg3 = 0;
let arg4 = true;

// Soma
console.log(`Operação: ${arg1} + ${arg2}`);
console.log(`Resultado: ${Calculadora.soma(arg1, arg2)}\n`);

console.log(`Operação: ${arg1} + ${arg4}`);
console.log(`Resultado: ${Calculadora.soma(arg1, arg4)}\n`);

// Substração
console.log(`Operação: ${arg1} - ${arg2}`);
console.log(`Resultado: ${Calculadora.subtracao(arg1, arg2)}\n`);

console.log(`Operação: ${arg1} - ${arg4}`);
console.log(`Resultado: ${Calculadora.subtracao(arg1, arg4)}\n`);

// Multiplicação
console.log(`Operação: ${arg1} * ${arg2}`);
console.log(`Resultado: ${Calculadora.multiplicacao(arg1, arg2)}\n`);

console.log(`Operação: ${arg1} * ${arg4}`);
console.log(`Resultado: ${Calculadora.multiplicacao(arg1, arg4)}\n`);

// Divisão
console.log(`Operação: ${arg1} / ${arg2}`);
console.log(`Resultado: ${Calculadora.divisao(arg1, arg2)}\n`);

console.log(`Operação: ${arg1} / ${arg4}`);
console.log(`Resultado: ${Calculadora.divisao(arg1, arg4)}\n`);

console.log(`Operação: ${arg1} / ${arg3}`);
console.log(`Resultado: ${Calculadora.divisao(arg1, arg3)}\n`);


// Potência
console.log(`Operação: ${arg1} ^ ${arg2}`);
console.log(`Resultado: ${Calculadora.potencia(arg1, arg2)}\n`);

console.log(`Operação: ${arg1} ^ ${arg4}`);
console.log(`Resultado: ${Calculadora.potencia(arg1, arg4)}\n`);