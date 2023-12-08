const carrinho = [
    {
      nome: "Placa Mãe",
      valor: 100,
      quantidade: 2
    },
    {
      nome: "Memoria",
      valor: 50,
      quantidade: 2
    },
    {
      nome: "Placa de video",
      valor: 2000,
      quantidade: 3
    },
  ];
  
  let valorTotal = 0;
  
  for(let posicao = 0; posicao < carrinho.length; posicao++ ){
    valorTotal += carrinho[posicao].valor * carrinho[posicao].quantidade ;
  }
  
  
  console.log(valorTotal);
  