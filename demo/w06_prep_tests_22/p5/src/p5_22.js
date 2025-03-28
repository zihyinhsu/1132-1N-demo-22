import { tours } from "./data.js";

const section = document.querySelector(".section-center");
console.log('tours', tours);
const displayTours = () => {
    const toursInfo = tours.map((tour)=>{
        return `<article class="single-tour">
              <img
                src="${tour.img}"
                alt="${tour.name}"
              />
              <footer>
                <div class="tour-info">
                  <h4>${tour.name}</h4>
                  <h4 class="tour-price">$${tour.price}</h4>
                </div>
                <p>
                  ${tour.info}
                </p>
                <button class="delete-btn">not interested</button>
              </footer>
            </article>`;
    }).join('');
    console.log('toursInfo',toursInfo);
    section.innerHTML = toursInfo;
}

window.addEventListener("DOMContentLoaded", () => {
    displayTours();
})