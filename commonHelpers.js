import{i as p,S as m}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",f="43873427-52524e51f424820d3ed845203",h=`?key=${f}&image_type=photo&orientation=horizontal&safesearch=true`;function y(s){return fetch(`${d}${h}&q=${s}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()})}const g=document.querySelector(".gallery"),L=document.querySelector(".form"),n=document.querySelector(".loader");L.addEventListener("submit",$);function $(s){s.preventDefault(),n.classList.remove("is-hidden");const r=s.currentTarget,i=r.elements.searchInput.value;!i==""?y(i).then(a=>{v(a)}).catch(a=>{S(a)}).finally(()=>{r.reset(),n.classList.add("is-hidden")}):(console.log("поле для пошуку має бути заповненим"),n.classList.add("is-hidden"))}function S(s){alert(s)}function v(s){const r=s.hits;if(r.length===0)p.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{const i=r.map(({webformatURL:a,largeImageURL:e,tags:t,likes:o,views:c,comments:l,downloads:u})=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${e}>
                <img class="gallery-image" src=${a} alt=${t} />
            </a>
            <ul class="gallery-caption">
              <li class="caption-item">
                <h3 class="caption-title">Likes</h3>
                <p class="caption-value">${o}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Views</h3>
                <p class="caption-value">${c}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Comments</h3>
                <p class="caption-value">${l}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Downloads</h3>
                <p class="caption-value">${u}</p>
              </li>
            </ul>
        </li>`).join("");g.innerHTML=i}}new m(".gallery a",{captionsData:"alt",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
