import{S as d,i as f}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",h="43873427-52524e51f424820d3ed845203",y=`?key=${h}&image_type=photo&orientation=horizontal&safesearch=true`;function g(s){return fetch(`${m}${y}&q=${s}`).then(r=>{if(!r.ok)throw new Error;return r.json()})}const L=new d(".gallery a",{captionsData:"alt",captionsDelay:250}),c=document.querySelector(".gallery");function $(s){const r=s.hits;if(r.length===0)c.innerHTML="",f.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{const o=r.map(({webformatURL:i,largeImageURL:e,tags:t,likes:a,views:l,comments:u,downloads:p})=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${e}>
                <img class="gallery-image" src=${i} alt=${t} />
            </a>
            <ul class="gallery-caption">
              <li class="caption-item">
                <h3 class="caption-title">Likes</h3>
                <p class="caption-value">${a}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Views</h3>
                <p class="caption-value">${l}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Comments</h3>
                <p class="caption-value">${u}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Downloads</h3>
                <p class="caption-value">${p}</p>
              </li>
            </ul>
        </li>`).join("");c.innerHTML=o,L.refresh()}}const n=document.querySelector(".loader"),v=document.querySelector(".form");v.addEventListener("submit",S);function S(s){s.preventDefault(),n.classList.remove("is-hidden");const r=s.currentTarget,o=r.elements.searchInput.value.trim();if(o===""){n.classList.add("is-hidden");return}g(o).then(i=>{$(i)}).catch(i=>{b(i)}).finally(()=>{r.reset(),n.classList.add("is-hidden")})}function b(s){alert(s)}
//# sourceMappingURL=commonHelpers.js.map
