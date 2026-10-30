// CARDÁPIO DEMONSTRATIVO — preços fictícios, apenas para demonstração.
// Nomes, disponibilidade e preços devem ser validados antes da publicação.
// Preço null = "Consulte o valor". Não publique como cardápio oficial sem revisão.
const categorias = [
  {id:'todos',nome:'Tudo',icone:'🍽️'},
  {id:'destaques',nome:'Destaques',icone:'⭐'},
  {id:'pizzas',nome:'Pizzas',icone:'🍕'},
  {id:'petiscos',nome:'Petiscos',icone:'🍟'},
  {id:'pratos',nome:'Pratos',icone:'🥘'},
  {id:'chopp',nome:'Chopp',icone:'🍺'},
  {id:'cervejas',nome:'Cervejas',icone:'🍻'},
  {id:'drinks',nome:'Drinks',icone:'🍹'},
  {id:'bebidas',nome:'Sem álcool',icone:'🥤'},
  {id:'sobremesas',nome:'Sobremesas',icone:'🍰'}
];
const produtos = [
  {id:1,adicional:{nome:'Queijo extra',preco:7.00},preco:49.90,nome:'Pizza Margherita',descricao:'Molho de tomate, queijo e manjericão.',categoria:'pizzas',destaque:true,selo:'SUGESTÃO',imagem:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=80'},
  {id:2,adicional:{nome:'Bacon',preco:8.00},preco:52.90,nome:'Pizza Calabresa',descricao:'Calabresa, queijo e cebola.',categoria:'pizzas',destaque:true,imagem:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=80'},
  {id:3,adicional:{nome:'Borda recheada com requeijão',preco:10.00},preco:59.90,nome:'Pizza de Queijos',descricao:'Uma combinação de queijos derretidos.',categoria:'pizzas',imagem:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80'},
  {id:4,adicional:{nome:'Cheddar e bacon',preco:9.00},preco:29.90,nome:'Batata Frita',descricao:'Porção dourada e crocante para compartilhar.',categoria:'petiscos',destaque:true,imagem:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&q=80'},
  {id:5,adicional:{nome:'Molho da casa',preco:4.00},preco:39.90,nome:'Frango Crocante',descricao:'Pedaços de frango temperados e crocantes.',categoria:'petiscos',imagem:'https://images.unsplash.com/photo-1562967914-608f82629710?w=700&q=80'},
  {id:6,adicional:{nome:'Bacon',preco:6.00},preco:32.90,nome:'Hambúrguer da Casa',descricao:'Pão, hambúrguer, queijo e acompanhamentos.',categoria:'pratos',imagem:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=80'},
  {id:7,preco:10.90,nome:'Chopp Gelado',descricao:'Servido bem gelado.',categoria:'chopp',destaque:true,imagem:'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=700&q=80'},
  {id:8,preco:12.90,nome:'Cerveja Long Neck',descricao:'Consulte as marcas disponíveis.',categoria:'cervejas',imagem:'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=700&q=80'},
  {id:9,preco:24.90,nome:'Drink da Casa',descricao:'Consulte as opções e sabores disponíveis.',categoria:'drinks',imagem:'https://images.unsplash.com/photo-1536935338788846bb9981813?w=700&q=80'},
  {id:10,preco:6.90,nome:'Refrigerante',descricao:'Consulte os sabores disponíveis.',categoria:'bebidas',imagem:'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=700&q=80'},
  {id:11,preco:19.90,nome:'Sobremesa Especial',descricao:'Consulte as opções do dia.',categoria:'sobremesas',imagem:'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&q=80'}
].map(p => ({preco:null,destaque:false,...p}));
