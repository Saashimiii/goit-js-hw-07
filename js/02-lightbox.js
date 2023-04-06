import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");
list.classList.add("js-gallery");
const cards = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title = "${description}"/>
   </a>
</li>`
);
list.insertAdjacentHTML("beforeend", cards.join(""));

let gallery = new SimpleLightbox(".gallery a", { captionDelay: 250 });