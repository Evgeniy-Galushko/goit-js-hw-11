import request from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const forms = document.querySelector('.search');
const gallery = document.querySelector('.gallery');

function searchText(event) {
  gallery.innerHTML = '';
  event.preventDefault();
  const input = event.target;
  const text = input.elements.text.value.trim();
  const textSearch = text.toLowerCase();

  const searchParams = new URLSearchParams({
    key: '45780077-211740ab05b8c84b50ffae6ce',
    q: `${textSearch}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 18,
  });
  console.log(searchParams.toString());

  const url = `https://pixabay.com/api/?${searchParams}`;
  loader.classList.toggle('js-non-display');
  setTimeout(() => {
    request(url);
    loader.classList.toggle('js-non-display');
  }, 1000);

  new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  forms.reset();
}

forms.addEventListener('submit', searchText);
// function deleteLine(event) {
//   setTimeout(() => {
//     gallery.remove();
//   }, 5000);
// }
// forms.addEventListener('click', deleteLine);
