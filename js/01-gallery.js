import { galleryItems } from './gallery-items.js';
// Change code below this line

let gallery = document.querySelector(".gallery")
let markup = galleryItems.map(item => 
  `<div class="gallery__item"><a class="gallery__link" href=${item.original}>
  <img
    class="gallery__image"
    src=${item.preview}
    data-source=${item.original}
    alt=${item.description}/></a></div>`
).join("");

gallery.innerHTML = markup;
gallery.addEventListener("click", selectTarget)

function selectTarget(event) {
    event.preventDefault()
    if(event.target.nodeName !== "IMG") {
      return
    }
    const instance = basicLightbox.create(`<img
    src=${event.target.dataset.source} width="800" height="600" />`)
    instance.show()
    gallery.addEventListener("keydown", event => {
        if(event.code === "Escape") {
        instance.close()
        }
    })
}

