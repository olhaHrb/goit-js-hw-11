export function fetchImg(imageId) {
  return fetch(`${BASE_URL}${params}&q=${imageId}`).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};
export function onSearch(event) {
  event.preventDefault();
  loader.classList.remove('is-hidden');
  const form = event.currentTarget;
  const imagesEach = form.elements.searchInput.value;

    if (!imagesEach =="") {
    fetchImg(imagesEach)
     .then(image => {
       renderImageCard(image);
       lightbox.refresh();
     }) 
        .catch (error => {
          onFetchError(error);
     })
     .finally(() => {
        form.reset();
        loader.classList.add('is-hidden');
     });
    } else {
      loader.classList.add('is-hidden');
    }
};
export function onFetchError(error) {
  alert(error);
}