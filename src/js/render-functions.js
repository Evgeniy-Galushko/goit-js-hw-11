import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');

export default function gallerys(arry) {
  const line = arry
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

  new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
}
