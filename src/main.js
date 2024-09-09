import request from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import gallerys from './js/render-functions';

const loader = document.querySelector('.loader');
const forms = document.querySelector('.search');
const gallery = document.querySelector('.gallery');
const simpleBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function searchText(event) {
  gallery.innerHTML = '';
  event.preventDefault();
  const input = event.target;
  const text = input.elements.text.value.trim();
  const textSearch = text.toLowerCase();
  if (textSearch === '') {
    return;
  }

  loader.classList.toggle('js-non-display');

  request(textSearch).then(images => {
    const imgs = images.hits;
    gallerys(imgs);
    loader.classList.toggle('js-non-display');
    simpleBox.refresh();
  });

  forms.reset();
}

forms.addEventListener('submit', searchText);
