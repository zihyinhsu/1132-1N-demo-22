const productContainer = document.querySelector('.products-container');

const url = 'https://www.course-api.com/javascript-store-products';

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
      const { name, price, image } = product.fields;
      return `
        <div class="single-product">
        <img
          src=${image[0].url}
          class="single-product-img img"
          alt=${name}
        />
        <footer>
          <h3 class="name">${name}</h3>
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

