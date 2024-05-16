const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43873427-52524e51f424820d3ed845203';
const params = `?key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true`;

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
     })
     .catch(error => {
        console.log(error);
        onFetchError(error);
     })
     .finally(() => {
        form.reset();
        loader.classList.add('is-hidden');
     });
    }
   
};

function onFetchError(error) {
  alert(error);
}

function renderImageCard(result) {
    const imgCreate = result.hits;
    const createMarkup = imgCreate.map(({ webformatURL, likes, views, comments, downloads }) => {
        return (`
        <li class="gallery-item">
            <a class="gallery-link" href=${webformatURL}>
                <img class="gallery-image" src=${webformatURL} alt="photo" />
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





