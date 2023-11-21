// 1 - Criando uma função
function minhaFuncao() {
  console.log("Testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
  console.log("Funçao em variável");
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
  console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa");
funcaoComParametro("outra função");

function saudacao() {
  console.log("Olá Mundo!!!");
}

saudacao();

// 2 - Return

/*const a = 15;
const b = 26;
const c = 37;
const d = 42;

function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(b, d);

console.log(resultado);

console.log(soma(b, c));*/

// exemplo:
const e = 5;
const f = 6;
const g = 3;
const h = 7;

function soma(m1, m2) {
  return m1 + m2;
}

const resultado = soma(e, g);

console.log(resultado);

console.log(soma(e, g));


// 3 - escopo da função
let y = 10;

function testandoEscopo() {
  let y = 20;
  console.log(`Y dentro da função é: ${y}`);
}

testandoEscopo();

console.log(`Y fora da função é: ${y}`);

testandoEscopo();
