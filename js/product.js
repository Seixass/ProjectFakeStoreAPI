// Evento que é disparado quando o DOM está completamente carregado
document.addEventListener("DOMContentLoaded", function () {
  // Recuperar o ID do produto da URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  // Função para buscar os detalhes do produto pelo ID
  async function fetchProductDetails(productId) {
    try {
      // Fazer uma requisição para obter os detalhes do produto usando o ID
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      // Converter a resposta para JSON
      const product = await response.json();
      // Obter o contêiner onde os detalhes do produto serão exibidos
      const productDetailsContainer = document.querySelector('.product-details-container');
      
      // Atualizar o HTML com os detalhes do produto
      productDetailsContainer.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.title}">
        <div class="product-details">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-description">${product.description}</p>
          <p class="product-price">Price: $${product.price}</p>
          <button class="buy-button">Buy Now</button>
        </div>
      `;
    } catch (error) {
      // Lidar com erros caso a requisição falhe
      console.error('Error fetching product details:', error);
    }
  }
  
  // Chamar a função para buscar os detalhes do produto
  fetchProductDetails(productId);
});
