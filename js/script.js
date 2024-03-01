// Função assíncrona para buscar e exibir produtos
async function fetchProducts() {
  // Fazer uma requisição para obter a lista de produtos
  const response = await fetch('https://fakestoreapi.com/products');
  // Converter a resposta para JSON
  const products = await response.json();
  // Obter o contêiner onde os produtos serão exibidos
  const productsContainer = document.getElementById('products');
  
  // Iterar sobre cada produto retornado pela API
  products.forEach(product => {
    // Criar um elemento div para representar o produto
    const productDiv = document.createElement('div');
    // Adicionar uma classe ao elemento div para estilização
    productDiv.classList.add('product');
    // Definir o conteúdo HTML do elemento div com os detalhes do produto
    productDiv.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
      <button>
        <a href="./pages/product.html?id=${product.id}" class="info-product-btn">More Details</a> 
      </button>
    `;
    // Adicionar o elemento div com os detalhes do produto ao contêiner de produtos
    productsContainer.appendChild(productDiv);
  });
}

// Chamar a função para buscar e exibir produtos
fetchProducts();
