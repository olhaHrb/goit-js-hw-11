import{S as p}from"./assets/vendor-10cb7c31.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",f="43873427-52524e51f424820d3ed845203",d=`?key=${f}&image_type=photo&orientation=horizontal&safesearch=true`;function h(o){return fetch(`${m}${d}&q=${o}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()})}const y=document.querySelector(".gallery"),g=document.querySelector(".form"),c=document.querySelector(".loader");g.addEventListener("submit",L);function L(o){o.preventDefault(),c.classList.remove("is-hidden");const r=o.currentTarget,s=r.elements.searchInput.value;!s==""&&h(s).then(a=>{v(a)}).catch(a=>{console.log(a),$(a)}).finally(()=>{r.reset(),c.classList.add("is-hidden")})}function $(o){alert(o)}function v(o){const s=o.hits.map(({webformatURL:a,largeImageURL:e,tags:t,likes:i,views:n,comments:l,downloads:u})=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${e}>
                <img class="gallery-image" src=${a} alt=${t} />
            </a>
            <ul class="gallery-caption">
              <li class="caption-item">
                <h3 class="caption-title">Likes</h3>
                <p class="caption-value">${i}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Views</h3>
                <p class="caption-value">${n}</p>
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
        </li>`).join("");y.innerHTML=s}new p(".gallery a",{captionsData:"alt",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
