// CARDÁPIO DEMONSTRATIVO — produtos, preços e adicionais fictícios.
// Imagens ilustrativas. Valide as informações antes da publicação oficial.
// Preço null = "Consulte o valor".
const categorias = [
  { id: 'todos', nome: 'Todos', icone: '🍽️' },
  { id: 'destaques', nome: 'Destaques', icone: '⭐' },
  { id: 'pizzas', nome: 'Pizzas', icone: '🍕' },
  { id: 'petiscos', nome: 'Petiscos', icone: '🍟' },
  { id: 'pratos', nome: 'Pratos', icone: '🥘' },
  { id: 'chopp', nome: 'Chopp', icone: '🍺' },
  { id: 'cervejas', nome: 'Cervejas', icone: '🍻' },
  { id: 'drinks', nome: 'Drinks', icone: '🍹' },
  { id: 'bebidas', nome: 'Sem álcool', icone: '🥤' },
  { id: 'sobremesas', nome: 'Sobremesas', icone: '🍰' }
];

const produtos = [
  {
    id: 1,
    nome: 'Pizza Margherita',
    descricao: 'Molho de tomate, muçarela, tomate fresco e manjericão. Pizza grande, 8 fatias.',
    categoria: 'pizzas',
    preco: 49.90,
    destaque: true,
    selo: 'SUGESTÃO',
    adicional: { nome: 'Queijo extra', preco: 7.00 },
    imagem: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=80'
  },
  {
    id: 2,
    nome: 'Pizza Calabresa',
    descricao: 'Molho de tomate, muçarela, calabresa, cebola e orégano. Pizza grande, 8 fatias.',
    categoria: 'pizzas',
    preco: 52.90,
    destaque: true,
    adicional: { nome: 'Bacon', preco: 8.00 },
    imagem: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=80'
  },
  {
    id: 3,
    nome: 'Pizza Quatro Queijos',
    descricao: 'Muçarela, provolone, parmesão e gorgonzola sobre molho de tomate. Pizza grande, 8 fatias.',
    categoria: 'pizzas',
    preco: 59.90,
    adicional: { nome: 'Borda recheada com requeijão', preco: 10.00 },
    imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80'
  },
  {
    id: 12,
    nome: 'Pizza de Frango com Requeijão',
    descricao: 'Frango desfiado, requeijão cremoso, muçarela e milho. Pizza grande, 8 fatias.',
    categoria: 'pizzas',
    preco: 59.90,
    adicional: { nome: 'Bacon', preco: 8.00 },
    imagem: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=700&q=80'
  },
  {
    id: 13,
    nome: 'Pizza Portuguesa',
    descricao: 'Muçarela, presunto, ovos, cebola, pimentão e azeitonas. Pizza grande, 8 fatias.',
    categoria: 'pizzas',
    preco: 57.90,
    adicional: { nome: 'Queijo extra', preco: 7.00 },
    imagem: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700&q=80'
  },
  {
    id: 14,
    nome: 'Pizza Pepperoni',
    descricao: 'Molho de tomate, muçarela, pepperoni e orégano. Pizza grande, 8 fatias.',
    categoria: 'pizzas',
    preco: 62.90,
    adicional: { nome: 'Borda recheada com requeijão', preco: 10.00 },
    imagem: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700&q=80'
  },

  {
    id: 4,
    nome: 'Batata Frita',
    descricao: 'Batatas douradas e crocantes, acompanhadas de maionese da casa. Porção para 2 pessoas.',
    categoria: 'petiscos',
    preco: 29.90,
    destaque: true,
    adicional: { nome: 'Cheddar e bacon', preco: 9.00 },
    imagem: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&q=80'
  },
  {
    id: 5,
    nome: 'Frango Crocante',
    descricao: 'Pedaços de frango empanados, servidos com molho de alho. Porção para 2 pessoas.',
    categoria: 'petiscos',
    preco: 39.90,
    adicional: { nome: 'Molho barbecue', preco: 4.00 },
    imagem: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=700&q=80'
  },
  {
    id: 15,
    nome: 'Bruschettas',
    descricao: 'Pão tostado com tomate temperado, manjericão e azeite. Porção com 6 unidades.',
    categoria: 'petiscos',
    preco: 27.90,
    adicional: { nome: 'Parmesão', preco: 5.00 },
    imagem: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=700&q=80'
  },
  {
    id: 16,
    nome: 'Anéis de Cebola',
    descricao: 'Anéis de cebola empanados e crocantes com molho barbecue. Porção para 2 pessoas.',
    categoria: 'petiscos',
    preco: 32.90,
    adicional: { nome: 'Maionese da casa', preco: 4.00 },
    imagem: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=700&q=80'
  },
  {
    id: 17,
    nome: 'Tábua de Queijos',
    descricao: 'Seleção de queijos, frutas, castanhas e torradas. Ideal para compartilhar entre 2 pessoas.',
    categoria: 'petiscos',
    preco: 54.90,
    adicional: { nome: 'Porção extra de torradas', preco: 6.00 },
    imagem: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=700&q=80'
  },

  {
    id: 6,
    nome: 'Filé de Frango Grelhado',
    descricao: 'Filé de frango grelhado com arroz branco, feijão, legumes e salada. Serve 1 pessoa.',
    categoria: 'pratos',
    preco: 32.90,
    adicional: { nome: 'Porção extra de arroz', preco: 5.00 },
    imagem: 'https://images.unsplash.com/photo-1676471759564-8426f19510c0?w=700&q=80'
  },
  {
    id: 18,
    nome: 'Bife Acebolado',
    descricao: 'Bife grelhado com cebolas, arroz branco, feijão, farofa e batata frita. Serve 1 pessoa.',
    categoria: 'pratos',
    preco: 39.90,
    adicional: { nome: 'Ovo frito', preco: 3.00 },
    imagem: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=700&q=80'
  },
  {
    id: 19,
    nome: 'Frango à Parmegiana',
    descricao: 'Filé de frango empanado com molho de tomate e muçarela, arroz e batata frita. Serve 1 pessoa.',
    categoria: 'pratos',
    preco: 44.90,
    destaque: true,
    adicional: { nome: 'Porção extra de batata frita', preco: 8.00 },
    imagem: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=700&q=80'
  },
  {
    id: 20,
    nome: 'Peixe Grelhado',
    descricao: 'Filé de peixe grelhado com arroz, legumes salteados e limão. Serve 1 pessoa.',
    categoria: 'pratos',
    preco: 42.90,
    adicional: { nome: 'Molho de ervas', preco: 4.00 },
    imagem: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=700&q=80'
  },

  {
    id: 7,
    nome: 'Chopp Pilsen 300 ml',
    descricao: 'Chopp pilsen leve e refrescante, servido bem gelado em tulipa de 300 ml.',
    categoria: 'chopp',
    preco: 10.90,
    destaque: true,
    imagem: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=700&q=80'
  },
  {
    id: 8,
    nome: 'Cerveja Long Neck',
    descricao: 'Cerveja pilsen em garrafa de 330 ml, servida bem gelada.',
    categoria: 'cervejas',
    preco: 12.90,
    imagem: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=700&q=80'
  },
  {
    id: 23,
    nome: 'Cerveja sem Álcool',
    descricao: 'Cerveja pilsen sem álcool em garrafa de 330 ml, servida gelada.',
    categoria: 'cervejas',
    preco: 12.90,
    imagem: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=700&q=80'
  },

  {
    id: 9,
    nome: 'Drink da Casa',
    descricao: 'Vodka, frutas vermelhas, suco de limão e gelo. Taça de 300 ml.',
    categoria: 'drinks',
    preco: 24.90,
    destaque: true,
    imagem: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700&q=80'
  },
  {
    id: 24,
    nome: 'Caipirinha de Limão',
    descricao: 'Cachaça, limão fresco, açúcar e gelo. Copo de 300 ml.',
    categoria: 'drinks',
    preco: 19.90,
    imagem: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=700&q=80'
  },
  {
    id: 25,
    nome: 'Gin Tônica',
    descricao: 'Gin, água tônica, limão e gelo. Taça de 400 ml.',
    categoria: 'drinks',
    preco: 27.90,
    imagem: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700&q=80'
  },
  {
    id: 10,
    nome: 'Refrigerante Lata',
    descricao: 'Lata de 350 ml. Opções de cola, guaraná ou laranja.',
    categoria: 'bebidas',
    preco: 6.90,
    imagem: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=700&q=80'
  },
  {
    id: 27,
    nome: 'Suco de Laranja',
    descricao: 'Suco de laranja preparado na hora, sem adição de açúcar. Copo de 300 ml.',
    categoria: 'bebidas',
    preco: 9.90,
    imagem: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=700&q=80'
  },
  {
    id: 28,
    nome: 'Água Mineral',
    descricao: 'Água mineral sem gás em garrafa de 500 ml.',
    categoria: 'bebidas',
    preco: 4.90,
    imagem: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=700&q=80'
  },

  {
    id: 11,
    nome: 'Taça de Morango',
    descricao: 'Morangos frescos com creme de baunilha e calda de frutas vermelhas. Porção individual.',
    categoria: 'sobremesas',
    preco: 19.90,
    imagem: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&q=80'
  },
  {
    id: 29,
    nome: 'Brownie com Sorvete',
    descricao: 'Brownie de chocolate servido com uma bola de sorvete de baunilha e calda de chocolate.',
    categoria: 'sobremesas',
    preco: 22.90,
    imagem: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&q=80'
  },
  {
    id: 30,
    nome: 'Sorvete de Chocolate',
    descricao: 'Duas bolas de sorvete de chocolate com calda de chocolate. Porção individual.',
    categoria: 'sobremesas',
    preco: 14.90,
    imagem: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700&q=80'
  }
].map(produto => ({ preco: null, destaque: false, ...produto }));
