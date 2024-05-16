import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43873427-52524e51f424820d3ed845203';
const params = `?key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true`;
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionsDelay: 250
});

function fetchImg(imageId) {
  return fetch(`${BASE_URL}${params}&q=${imageId}`).then(response => {
    if (!response.ok) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
        );
    }
    return response.json();
  });
};

const galleryContainer = document.querySelector(".gallery");
const formEach = document.querySelector(".form");
const loader = document.querySelector('.loader');

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
//      console.log("поле для пошуку має бути заповненим");
      loader.classList.add('is-hidden');
    }
   
};

function onFetchError(error) {
  alert(error);
}

function renderImageCard(result) {
  
  const imgCreate = result.hits;
  if (imgCreate.length === 0) {
    iziToast.error({
      message: (`Sorry, there are no images matching your search query. Please try again!`),
    });
  } else {
    const createMarkup = imgCreate.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return (`
        <li class="gallery-item">
            <a class="gallery-link" href=${largeImageURL}>
                <img class="gallery-image" src=${webformatURL} alt=${tags} />
            </a>
            <ul class="gallery-caption">
              <li class="caption-item">
                <h3 class="caption-title">Likes</h3>
                <p class="caption-value">${likes}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Views</h3>
                <p class="caption-value">${views}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Comments</h3>
                <p class="caption-value">${comments}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Downloads</h3>
                <p class="caption-value">${downloads}</p>
              </li>
            </ul>
        </li>`)
    }).join('');
    galleryContainer.innerHTML = createMarkup;
  };
};



