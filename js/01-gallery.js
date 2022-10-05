import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
console.log(gallery);

function createGallery(items) {
    return items.map((item) => `
    <div class="gallery__item">
    <a class="gallery__link" href= ${item.original}>
      <img
        class="gallery__image"
        src= ${item.preview}
        data-source= ${item.original}
        alt=${item.description}
      />
    </a>
    </div>
    `).join('')
}
const newCreat = createGallery(galleryItems);
gallery.innerHTML = newCreat;

gallery.addEventListener('click', imageClick);

function imageClick(event) {
  blockStandartAction(event)

  if(event.target.nodeName !== 'IMG'){
      return;
  }

const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600" >` ) ;
instance.show()


gallery.addEventListener('keydown', (event)=>{ 
  if(event.code === 'Escape'){
    instance.close()
  }
})  }

function blockStandartAction(event){
  event.preventDefault();
}


// console.log(galleryItems);
