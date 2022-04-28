import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems)

// const galleryArrayMarkup = []

// galleryItems.forEach( (element)=>{
// const galleryDiv = document.createElement("div")
// galleryDiv.classList.add("gallery__item")
// galleryDiv.innerHTML = `
// <a class="gallery__link" href="${element.original}">
// <img
//   class="gallery__image"
//   src="${element.preview}"
//   data-source="${element.original}"
//   alt="${element.description}"
// />
// </a>
// `
// galleryArrayMarkup.push(galleryDiv)
// } )

const gallery = document.querySelector(".gallery")
const galleryMarup =  createMarkup (galleryItems)
gallery.innerHTML = galleryMarup
// gallery.append(...galleryArrayMarkup)
function createMarkup (galleryItems){
  return galleryItems.map(({preview,original,description}) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
  }).join("")
}


gallery.addEventListener('click', openModal)

function openModal(e){
  e.preventDefault()
  const image = e.target.classList.contains('gallery__image')

  if(!image){
    return
  } else{

  // window.addEventListener('keydown', event => {
  //     if( event.key ==="Escape")
  //     instance.close()
  //   }) 


  
const instance = basicLightbox.create(
`
<div class="modal">
<img src="${e.target.dataset.source}" alt = "${e.target.alt}"width="800" height="600">
        
    </div>`
)

instance.show()

gallery.addEventListener('keydown', event => {
      if( event.key === "Escape"){
      instance.close()
      console.log(`pra`)}
      return  
    }) 
}

 }

 