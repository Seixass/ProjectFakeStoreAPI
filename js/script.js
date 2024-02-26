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
      <a href="product.html?id=${product.id}" class="info-product">More Details</a> <!-- Link para a nova página -->
    `;
    productsContainer.appendChild(productDiv);
  });
}

fetchProducts();
