import { fetchImg } from "./js/pixabay-api"; 
import { renderImageCard } from "./js/render-functions";

const loader = document.querySelector('.loader');
const formEach = document.querySelector(".form");
formEach.addEventListener("submit", onSearch);

function onSearch(event) {
  event.preventDefault();
  loader.classList.remove('is-hidden');
  const form = event.currentTarget;
  const imagesEach = form.elements.searchInput.value;

    if (!imagesEach =="") {
    fetchImg(imagesEach)
     .then(image => {
       renderImageCard(image);
//       lightbox.refresh();
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
function onFetchError(error) {
  alert(error);
}


