/*// 1 - Criando uma função
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

console.log(soma(b, c));

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

// 4 - escopo aninhado

let m = 10;

function escopoAninhado() {
  let m = 20;

  if (true) {
    let m = 30;
    if (true) {
      let m = 40;
      console.log(m);
    }
    console.log(m);
  }
  console.log(m);
}
escopoAninhado();
console.log(m);

// 5 - arrow function
const testeArrow = () => {
  console.log("Está é uma Arrow function");
};

testeArrow();

const parOuIpar = (n) => {
  if (n % 2 === 0) {
    console.log("Par");
    return;
  }
  console.log("Impar");
};

parOuIpar(5);

parOuIpar(10);

// 6 - mais sobre Arrow functions
const raizQadrada = (x) => {
  return x * x;
};

console.log(raizQadrada(4));

console.log(raizQadrada(9));

//mais simplificado
const raizQadrada2 = (x) => x * x;

console.log(raizQadrada2(7));

console.log(raizQadrada2(5));

const OláMundo = () => console.log("Olá Mundo");

OláMundo();

// 7 - parametro opcional
const multiplication = (m, n) => {
if (n === undefined) {
    return m * 2
}
else{
 return m * n 
}}
console.log(multiplication(5));

console.log(multiplication(2, 4));

const greeting = (name) =>{
  if (!name) {
    console.log("Olá");
    return;
  }
  console.log(`Olá ${name}!`);
}

greeting();

greeting("Marcus");*/

// 8 - valor Default
const custonGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}!`;
};
 console.log(custonGreeting("Marcus"));

 console.log(custonGreeting("João", "bom dia"));

 const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
 };

 repeatText("testando");

 repeatText("agora repete 10 vezes", 10);

 // 9 - closure
 function someFunction() {
  let txt = "alguma coisa";

  function display() {
    console.log(txt);
  }
  display();
 }
 someFunction();

 // 10 - mais sobre closure
 const multiplicationClosure = (n) => {
  return (m) => {
    return n * m;
  }
 };

 const c1 = multiplicationClosure(5);

 const c2 = multiplicationClosure(10);

 console.log(c1);

 console.log(c2);

 console.log(c2(5));

 console.log(c2(10));

 