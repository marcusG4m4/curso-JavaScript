/*// 1 - Métodos
const animal = {
    nome: "bob", 
    latir: function() {
        console.log("au au!!!");
    }
};

console.log(animal.nome);

animal.latir();

// 2 - aprofundando em metodos 
/*os metodos são utilizados para interagis também 
com as propriedades do seu objeto;
podemos exibir elas ou modifica-las;
podemos nos referir com o proprio objeto
com a palavra reservada this;
 const pessoa = {
    nome:"Lucas",

    getNome: function(){
        return this.nome;        
    },
    setNome: function(novoNome) {
        this.nome = novoNome;
    },
 };

 console.log(pessoa.nome);

 console.log(pessoa.getNome());
 
 pessoa.setNome("Marcus");

 console.log(pessoa.getNome());

 // 3 - Prototype
  /*é um recurso que faz parte da arquitetura
  de JAvaScript;
  é uma espécie de herança, onde objetos pais 
  herdam propriedades e métodos aos filhos;
  por isso muitos dados são considerados objetos e 
  temos objetos, como: String, Number, e outros;
  ou seja, cada dado tem um objeto pai herdanso
  características pelo prototype;


  // 4 - Prototype na pratica

  /*O recurso fundamental do Prototype que temos
   que entender é o fallback;
   quando uma propiedade não existe em um 
   dado/objeto, ela é procurada no seu ancestral;
   ou seja é por isso que temos acesso ao length
   em strings, por exemplo;


   const testeSlice = ["lápis","caderno","tesoura","borracha","régua"];

   const itemRemover = "régua";
   
   const posicao = testeSlice.indexOf(itemRemover);

   if ( posicao != -1 ){
    testeSlice.splice(posicao, 1);
    console.log("achou o item na posição: ", posicao );
   }

   else {
    console.log("não achou o item!");
   }
   console.log(testeSlice);*/

   //exemplo de métodos

   const texto = "algum texto";

   console.log(texto.toLowerCase());
   console.log(texto.toUpperCase());
   
   
