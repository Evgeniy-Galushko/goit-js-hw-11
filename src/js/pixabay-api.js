import gallerys from '../js/render-functions';

export default function request(url) {
  fetch(`${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      const imgs = images.hits;
      gallerys(imgs);
    })
    .catch(error => console.log(error));
}
