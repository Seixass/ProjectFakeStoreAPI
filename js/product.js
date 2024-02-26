document.addEventListener("DOMContentLoaded", function () {
  // Recuperar o ID do produto da URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  // Função para buscar os detalhes do produto pelo ID
  async function fetchProductDetails(productId) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const product = await response.json();
      const productDetailsContainer = document.getElementById('product-details');
  
      // Construir a exibição dos detalhes do produto
      const productDetailsDiv = document.createElement('div');
      productDetailsDiv.classList.add('product-details');
      productDetailsDiv.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
      `;
      productDetailsContainer.appendChild(productDetailsDiv);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }
  
  // Chamar a função para buscar os detalhes do produto
  fetchProductDetails(productId);
});
