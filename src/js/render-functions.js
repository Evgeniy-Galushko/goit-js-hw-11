import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import sorry from '../img/bi_x-octagon.svg';
const gallery = document.querySelector('.gallery');

export default function gallerys(imgs) {
  if (imgs.length === 0) {
    iziToast.warning({
      backgroundColor: '#EF4040',
      position: 'center',
      iconUrl: sorry,
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
  const line = imgs
    .map(
      img => `<li class="gallery-card">
        <a class="gallery-link" href=${img.largeImageURL}>
          <img src=${img.webformatURL} data-source=${img.largeImageURL} alt=${img.tags} width="360">
        </a>
          <ul class="gallery-card-signature">
            <li><p class="gallery-card-signature-p">Likes</p><p class="gallery-card-signature-number">${img.likes}</p></li>
            <li><p class="gallery-card-signature-p">Views</p><p class="gallery-card-signature-number">${img.views}</p></li>
            <li><p class="gallery-card-signature-p">Comments</p><p class="gallery-card-signature-number">${img.comments}</p></li>
            <li><p class="gallery-card-signature-p">Downloads</p><p class="gallery-card-signature-number">${img.downloads}</p></li>
          </ul>
        </li>`
    )
    .join('');
  gallery.innerHTML = line;
}
