import { fetchImg } from "./js/pixabay-api"; 
import { renderImageCard } from "./js/render-functions";

const loader = document.querySelector('.loader');
const formEach = document.querySelector(".form");
formEach.addEventListener("submit", onSearch);

function onSearch(event) {
  event.preventDefault();
  loader.classList.remove('is-hidden');
  const form = event.currentTarget;
  const searchQuery = form.elements.searchInput.value.trim();

  if (searchQuery === "") { 
    loader.classList.add('is-hidden');
    return;
  };   

  fetchImg(searchQuery)
    .then(image => {
      renderImageCard(image);
    }) 
    .catch (error => {
      onFetchError(error);
    })
    .finally(() => {
      form.reset();
      loader.classList.add('is-hidden');
    });
};
function onFetchError(error) {
  alert(error);
}


