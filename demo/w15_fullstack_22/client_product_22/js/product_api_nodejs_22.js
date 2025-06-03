const productContainer = document.querySelector('.products-container');

const url = 'http://localhost:3000/api/product_22';

const fetchProducts = async (url) => {
  try {
      const response = await fetch(url);  
      console.log('response', response);
      const data = await response.json(); 
      console.log('data', data);
      displayProducts(data);                 
  } catch (err) {
      console.error('Error occurred:', err); 
  }
};


const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { title, price, img } = product;
      return `
        <div class="single-product">
        <img
          src=${img}
          class="single-product-img img"
          alt=${title}
        />
        <footer>
          <h3 class="name">${title}</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
    `;
    })
    .join('');
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  await fetchProducts(url);
});

