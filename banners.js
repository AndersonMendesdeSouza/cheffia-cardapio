// Controle do carrossel: false = apenas o primeiro banner habilitado.
const carrosselAtivo = true;
// Para testar o rodízio: ativo:true e somenteQuinta:false.
// Em produção: ativo:true e somenteQuinta:true (quinta-feira no horário do visitante).
const rodizioPizza = {
  ativo: false,
  somenteQuinta: true,
  preco: null, // Preencha somente depois de confirmar o valor com o estabelecimento.
};
const banners = [
  { exibir: rodizioPizza.ativo, somenteQuinta: rodizioPizza.somenteQuinta,
    imagem: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1400&q=85',
    alt:'Pizza assada', chamada:'QUINTA-FEIRA É DIA DE PIZZA',
    titulo:'Rodízio de Pizza', destaque:'no Garden',
    descricao: rodizioPizza.preco === null ? 'Toda quinta-feira, uma noite especial para os apaixonados por pizza.' : `Rodízio por R$ ${rodizioPizza.preco.toFixed(2).replace('.', ',')}.`,
    exibirContagem:false },
  { exibir:true, imagem:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1400&q=85',
    alt:'Pizza com queijo e manjericão', chamada:'BEM-VINDO AO GARDEN',
    titulo:'O sabor é', destaque:'quem manda',
    descricao:'Pizzas, petiscos e bons momentos em um só lugar.',exibirContagem:false },
  { exibir:true, imagem:'https://images.unsplash.com/photo-1547592180-85f173990554?w=1400&q=85',
    alt:'Mesa com comida', chamada:'BONS ENCONTROS',titulo:'Uma mesa cheia',
    destaque:'de histórias',descricao:'Escolha seus favoritos e aproveite cada momento.',exibirContagem:false }
];
