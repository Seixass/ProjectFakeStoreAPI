async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    const productsContainer = document.getElementById('products');
    
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsContainer.appendChild(productDiv);
    });
  }
  
  function addToCart(productId) {
    // Here you can implement logic to add the product to the cart
    console.log(`Product ${productId} added to cart`);
  }
  
  async function checkout() {
    // Here you can implement logic to handle checkout
    console.log('Checkout clicked');
  }
  
  fetchProducts();
  