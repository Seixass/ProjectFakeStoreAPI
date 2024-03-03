document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  async function fetchProductDetails(productId) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const product = await response.json();
      const productDetailsContainer = document.querySelector('.product-details-container');
      
      productDetailsContainer.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.title}">
        <div class="product-details">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-description">${product.description}</p>
          <p class="product-price">Price: $${product.price}</p>
          <button class="buy-button"><a href="./pagebuy.html">Buy Now</a></button>
        </div>
      `;
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }
  
  fetchProductDetails(productId);
});
