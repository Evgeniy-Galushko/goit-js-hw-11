const forms = document.querySelector('.search');

export function searchText(event) {
  event.preventDefault();
  const input = event.target;
  const text = input.elements.text.value.trim();
  const textSearch = text.toLowerCase();
  console.log(textSearch);

  const searchParams = new URLSearchParams({
    keys: '45780077-211740ab05b8c84b50ffae6ce',
    p: `${textSearch}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  console.log(searchParams.toString());

  const options = {
    method: 'GET',
    Host: 'pixabay.com',
    Origin: 'localhost:5173',

    headers: {
      // 'Access-Control-Allow-Origin': 'http://localhost:5173/',
      'Content-Type': 'photo',
      Host: 'localhost:5173',
    },
  };

  const url = `https://pixabay.com/api? ${searchParams}`;
  console.log(url);

  fetch(`${url}`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.blob(); //.json()
    })
    .then(images => {
      // const img = images.map(image => image);
      // console.log(img);
      console.log(images);
    })
    .catch(error => console.log(error));
  forms.reset();
}

forms.addEventListener('submit', searchText);
