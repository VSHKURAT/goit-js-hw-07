import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// // markup
// const galleryArrayMarkup = []
// galleryItems.forEach( (element)=>{
// const galleryRef = document.createElement("a")
// galleryRef.classList.add("gallery__item")
// galleryRef.href = element.original
// galleryRef.innerHTML = `
// <img
//   class="gallery__image"
//   src="${element.preview}"
//   alt="${element.description}"
//   href = "${ element.original }"
// />
// `


// galleryArrayMarkup.push(galleryRef)
// } )
// // add markup
// const gallery = document.querySelector('.gallery')
// gallery.append(...galleryArrayMarkup)
// //

const gallery = document.querySelector('.gallery')
const galleryMarkup = createGalleryMarkup(galleryItems)
gallery.insertAdjacentHTML('beforeend', galleryMarkup)

function  createGalleryMarkup(galleryItems){
return galleryItems.map(({preview,original,description}) => {
  return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `
}).join('')
}

const lightbox = new SimpleLightbox('.gallery a', 
{captionsData: "alt",
captionPosition	:'bottom',
captionDelay :	250});