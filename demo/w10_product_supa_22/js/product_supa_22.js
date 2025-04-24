import { mid_products_22 } from './products_data_22.js';

const productContainer = document.querySelector('.products-container');

console.log('mid_products_22', mid_products_22);

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { id, title, price, img } = product;
      return `
        <div class="single-product">
        <img
          src=${img}
          class="single-product-img img"
          alt=${title}
        />
        <footer>
          <h3 class="name">${id}-${title}</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
    `;
    })
    .join('');
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  displayProducts(mid_products_22);
});
