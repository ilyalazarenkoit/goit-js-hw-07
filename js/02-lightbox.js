import { galleryItems } from './gallery-items.js';
// Change code below this line

let gallery = document.querySelector(".gallery")
let markup = galleryItems.map(item => 
    `<a class="gallery__item" href=${item.original}>
     <img class="gallery__image" src=${item.preview} alt=${item.description} />
     </a>`
).join("");

gallery.innerHTML = markup;


var lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
})