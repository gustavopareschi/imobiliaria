const CHAVE_LOCAL_STORAGE = 'imoveis'; // Chave para identificar os dados no localStorage

// Verifica se há dados no localStorage
const dadosLocalStorage = localStorage.getItem(CHAVE_LOCAL_STORAGE);
let imoveis = dadosLocalStorage ? JSON.parse(dadosLocalStorage) : [
    {
        imagem: 'https://i.pinimg.com/736x/0a/bd/e3/0abde3a78895986150ee846d56b6da52.jpg',
        titulo: 'Casa Linda',
        preco: 'R$ 500.000',
        descricao: 'Casa com 3 quartos...',
        quartos: 3,
        banheiros: 2,
    },
    {
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhvDPC0eoBInwEpPt20bui9W24I4yb-glVg&s',
        titulo: 'Casa Verde',
        preco: 'R$ 800.000',
        descricao: 'Casa com 3 quartos...',
        quartos: 3,
        banheiros: 1,
    },
];

// Função para salvar os imóveis no localStorage
function salvarImoveis() {
    localStorage.setItem(CHAVE_LOCAL_STORAGE, JSON.stringify(imoveis));
}
  
  function renderizarCards() {
    const container = document.getElementById('cards');
    const template = document.getElementById('card-template');
    container.innerHTML = ''; // Limpar o container antes de renderizar novamente
  
    imoveis.forEach(imovel => {
      const novoCard = template.content.cloneNode(true); 
      novoCard.querySelector('.img_imov').style.backgroundImage = `url(${imovel.imagem})`;
      novoCard.querySelector('#titulo').textContent = imovel.titulo;
      novoCard.querySelector('#preco').textContent = imovel.preco; // Adiciona o preço
      novoCard.querySelector('#descricao').textContent = imovel.descricao;
      novoCard.querySelector('#quartos_qtd').textContent = imovel.quartos;
      novoCard.querySelector('#banheiros_qtd').textContent = imovel.banheiros;
      container.appendChild(novoCard);
    });
  }
  
  renderizarCards();

  function adicionarImovel(novoImovel) {
    imoveis.push(novoImovel);
    renderizarCards();
    salvarImoveis();
}

console.log(imovel.titulo)