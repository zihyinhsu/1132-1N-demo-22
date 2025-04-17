import { mid_products_22 } from './products_data_22.js';
console.log('mid_products_22', mid_products_22);
const container = document.querySelector('.products-container');

const displayProducts_22 = () => {
  const productsInfo = mid_products_22
    .map((item) => {
      const { id, title, price, img } = item;
      return `
      <div class='single-product'>
        <img
          src='${img}'
          class='single-product-img img'
          alt='${title}'
        />
        <footer>
          <h5 class='name'>${id}-${title}</h5>
          <span class='price'>$${price}</span>
        </footer>
      </div>
    `;
    })
    .join('');
  container.innerHTML = productsInfo;
};

window.addEventListener('DOMContentLoaded', () => {
  displayProducts_22();
});
