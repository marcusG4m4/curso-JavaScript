/*// 1 - Arrays
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(lista);

console.log(typeof lista);

const itens = ["marcus", true, 5, 4.12, []];

console.log(itens);

// 2 - mais sobre arrys 
const arr = ["a","b","c", "d", "e",];

console.log(arr[0]);

console.log(arr[3]);

console.log(arr[9]);

// 3 - propriedades
const numbers = [5, 6 , 9 , 8];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "marcus";

console.log(myName.length);

// 4 - métodos
const otherNumbers = [7, 1, 2, 3, 4,];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

// exemplo
const names = ["marcus","markelys",];

const otherNames = ["jean","wallace","nikson",];

const allNames = names.concat(otherNames);

console.log(allNames);

//UpperCase
const text = "AlGum tExto";

console.log(text.toUpperCase());

console.log(text.indexOf("u"));

// 5 - objetos 
const person = {
    nome: "marcus",
    idade: 42,
    profissão:"programador",
};

console.log(person);

console.log(person.nome);

console.log(person.nomelength);

console.log(person.idade);

console.log(typeof person);*/

// 6 - criando e deletando propriedades
/*const car = {
    engine: 2.0,
    color: "blue",
    brand: "Vw",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.color;

console.log(car);

// 7 - mais sobre objetos 
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
};

Object.assign(obj2, obj);

console.log(obj2);

console.log(obj);

// 8 - conhecendo melhor objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 -  mutação
const a = {
   name: "marcus"
};

const b = a;


console.log(a);
console.log(b);

console.log(a === b);

b.age = 42;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - loop  em array
const user = ["Marcus", "Roberta", "Lucas", "Yuri"];

for (let i = 0; i < user.length; i++) {
     console.log(`Listando o usuário: ${user[i]}`);
}

const fruit = ["pera","uva","maçã","banana"];

for (let i = 0; i < fruit.length; i++) {
    console.log(`lista de frutas: ${fruit[i]}`);
};

// 11 - push "adiciona final da lista" e pop "remove final da lista"
const array = ["a", "b", "c"];

console.log(array);

array.push("d");

console.log(array);

//array.pop("a");

//console.log(array);

//array.push("g","h","y","z");

//console.log(array);

// 12 - shift "remove do inicio da lista" e unshift "adiciona ao inicio da lista"
const letters = ["a", "b", "c"];
console.log(letters);

letters.unshift("y", "z");
console.log(letters);

letters.shift();
console.log(letters);

const list = ["Marcus", "Markelys", "Nikson", "Jean"];
list.unshift("walace");
console.log(list);

list.shift();
console.log(list);*/

/*// 13 - indexOf e lastIndexOf
const myElements = ["maçã", "pêra", "uva", "laranja", "limão", "uva"];

console.log(myElements.indexOf("pêra"));
console.log(myElements.indexOf("limão"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("uva")]);

console.log(myElements.lastIndexOf("uva"));

console.log(myElements.indexOf("acerola"));

console.log(myElements.lastIndexOf("acerola"));*/

// teste

/*let materialEscolar = ["tesoura", "lápis", "caderno", "borracha", "caneta"];
console.log(materialEscolar);

function removerCaderno() {
    const indexCaderno = materialEscolar.indexOf('caderno');

    if (indexCaderno !== -1) {
        materialEscolar.splice(indexCaderno, 1);
        console.log('Caderno removido com sucesso!');
    } else {
        console.log('Caderno não encontrado na array.');
    }
}

removerCaderno();
console.log(materialEscolar);*/

// 14 - slice
const testeSlice = ["lapis", "borracha", "caderno", "tesoura", "apontador", "régua", "livros"];

const subArray = testeSlice.slice(1, 4 +1);

console.log(testeSlice);

console.log(subArray);


const testeSlice2 = ["a", "b", "c", "d", "e", "f", "g"];

const subArray2 = testeSlice2.slice(1, 5 +1);

console.log(testeSlice2);

console.log(subArray2);



