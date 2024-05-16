import{S as p,i as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="43873427-52524e51f424820d3ed845203",h=`?key=${m}&image_type=photo&orientation=horizontal&safesearch=true`;function g(s){return fetch(`${f}${h}&q=${s}`).then(r=>{if(!r.ok)throw new Error;return r.json()})}const y=new p(".gallery a",{captionsData:"alt",captionsDelay:250}),L=document.querySelector(".gallery");function $(s){const r=s.hits;if(r.length===0)d.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{const a=r.map(({webformatURL:i,largeImageURL:e,tags:t,likes:o,views:c,comments:l,downloads:u})=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${e}>
                <img class="gallery-image" src=${i} alt=${t} />
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
        </li>`).join("");L.innerHTML=a,y.refresh()}}const n=document.querySelector(".loader"),v=document.querySelector(".form");v.addEventListener("submit",S);function S(s){s.preventDefault(),n.classList.remove("is-hidden");const r=s.currentTarget,a=r.elements.searchInput.value;!a==""?g(a).then(i=>{$(i)}).catch(i=>{E(i)}).finally(()=>{r.reset(),n.classList.add("is-hidden")}):n.classList.add("is-hidden")}function E(s){alert(s)}
//# sourceMappingURL=commonHelpers.js.map
