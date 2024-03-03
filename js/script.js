async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  const productsContainer = document.getElementById('products');
  
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
      <button>
        <a href="./pages/product.html?id=${product.id}" class="info-product-btn">Purchase</a> 
      </button>
    `;
    productsContainer.appendChild(productDiv);
  });
}

fetchProducts();
