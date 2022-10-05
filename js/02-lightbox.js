import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
console.log(gallery);

function createGallery(items) {
    return items.map((item) => `
    <a class="gallery__item" href= ${item.original}>
  <img class="gallery__image" src= ${item.preview} alt=${item.description} />
</a>`).join('')
}
const newCreat = createGallery(galleryItems);
gallery.innerHTML = newCreat;


gallery.addEventListener('click', imageClick);

function imageClick(event) {
  blockStandartAction(event)

  if(event.target.nodeName !== 'IMG'){
      return;
  }

 const galleryNew = new SimpleLightbox('.gallery a' , {
    captionsData: 'alt',
 });
 }
//   galleryNew.on('show.simplelightbox', function () {
// `<img src="${event.target.href}" width="800" height="600" >`
//   });


// gallery.addEventListener('keydown', (event)=>{ 
//   if(event.code === 'Escape'){
//     instance.close()
//   }
// }) 
// }

function blockStandartAction(event){
  event.preventDefault();
}

