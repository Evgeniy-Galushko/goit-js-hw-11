const forms = document.querySelector('.search');
import request from './js/pixabay-api';

function searchText(event) {
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

  const url = `http://pixabay.com/api/?${searchParams}`;

  request(url);

  forms.reset();
}

forms.addEventListener('submit', searchText);
