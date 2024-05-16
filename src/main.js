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

const galleryContainer = document.querySelector(".gallery");
const formEach = document.querySelector(".form");
const loader = document.querySelector('.loader');

formEach.addEventListener("submit", onSearch);

import { fetchImg, onSearch, onFetchError } from "./js/pixabay-api"; 

import { renderImageCard } from "./js/render-functions";




