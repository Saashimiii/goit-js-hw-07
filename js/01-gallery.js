import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");
list.classList.add("js-gallery");
const cards = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
 <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"/>
   </a>
 </li>
`
);
list.insertAdjacentHTML("beforeend", cards.join(""));

list.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.dataset.source) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1200" height="600">
`);

    instance.show();
 if (instance.visible()) {
     document.addEventListener("keydown", closer)
     function closer(event) {
         if (event.code === "Escape") {
          instance.close(() => document.removeEventListener("keydown", closer));  
        }
        };
 }   
}