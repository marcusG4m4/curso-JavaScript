// 1 - Variáveis
let nome = "Marcus";

console.log(nome);

nome = "Marcus José";

console.log(nome);

const idade = 42;

console.log(idade);

//idade = 41;

console.log(typeof nome)

console.log(typeof idade)

// 2 -  mais sobre variáveis
//let 2teste = "inválido";
//let @teste = "inválido";

let a=10,
b=20,
c=30;

console.log( a,b,c);

const nomecompleto = "Marcus José";

const nomeCompleto = "Lucas Gama";

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok";

let $teste = "ok";

console.log(_teste);

console.log($teste);

// 3 - prompet
//const age = prompt("Digite aqui sua idade");

//console.log(`Voce tem ${age} anos.`);

// 4 - Alert
//alert("testando");

//const z = 110;

//alert(`O numero é ${z}`);

// 5 - math
console.log(Math.max(5,2,6,4,2,10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

const z = 110;

// 6 - console

console.log('teste');

console.error("erro!");

console.warn("aviso!");

// 7 - if
const m = 10;

if(m > 5){
console.log("m é maior que 5!");
}

const user = "Marcus";

if(user === "Marcus"){
    console.log("Olá Marcus");
}
if(user === "Paula"){
    console.log("Olá Paula");
}

console.log(user === "Marcus". user === "Paula");

// 8 - else
const loggedIn = false;

if(loggedIn) {
console.log("está autenticado!");
} else {
    console.log("nao está autenticado!");
}

const k = 10
const w = 25

if(k > 5 && w > 20){
console.log("Números mais altos!");
} 
else{
console.log("Números mais baixo!");
}

// 9 - else if
if (1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("Agora sim!");
}

const userName = ("Marcus");
const userAge = 42;

if (userName === "José"){
    console.log("Seja bem vindo José!");
} else if (userName === "Marcus" && userAge === 42){
    console.log("Bem vindo Marcus sua idade e 42 anos!");
} else {
    console.log("nenhuma condição aceita!");
}

// 10 - loop infinito
/*let x = 10
while(x > 5) {
    console.log(`Imprimindo ${x}` );
    x = x - 1;
}*/

 // 11 - do wile
 let o = 10;

 do{
    console.log(`valor de o: ${o}`);
    o--;
 } while(o > 0);