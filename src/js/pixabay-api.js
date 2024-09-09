export default function request(textSearch) {
  const searchParams = new URLSearchParams({
    key: '45780077-211740ab05b8c84b50ffae6ce',
    q: `${textSearch}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  });
  console.log(searchParams.toString());

  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(`${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}
