import sorry from '../img/bi_x-octagon.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import gallerys from '../js/render-functions';

const loader = document.querySelector('.loader');

export default function request(url) {
  loader.classList.toggle('js-non-display');
  setTimeout(() => {
    fetch(`${url}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(images => {
        const imgs = images.hits;
        if (imgs.length === 0) {
          iziToast.warning({
            backgroundColor: '#EF4040',
            position: 'center',
            iconUrl: sorry,
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        }
        gallerys(imgs);
      })
      .catch(error => console.log(error));
    loader.classList.toggle('js-non-display');
  }, 1000);
}
