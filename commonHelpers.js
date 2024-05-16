(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l="https://pixabay.com/api/",u="43873427-52524e51f424820d3ed845203",p=`?key=${u}&image_type=photo&orientation=horizontal&safesearch=true`;function d(s){return fetch(`${l}${p}&q=${s}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()})}const f=document.querySelector(".gallery"),m=document.querySelector(".form"),c=document.querySelector(".loader");m.addEventListener("submit",h);function h(s){s.preventDefault(),c.classList.remove("is-hidden");const r=s.currentTarget,i=r.elements.searchInput.value;!i==""&&d(i).then(o=>{g(o)}).catch(o=>{console.log(o),y(o)}).finally(()=>{r.reset(),c.classList.add("is-hidden")})}function y(s){alert(s)}function g(s){const i=s.hits.map(({webformatURL:o,likes:e,views:t,comments:a,downloads:n})=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${o}>
                <img class="gallery-image" src=${o} alt="photo" />
            </a>
            <ul class="gallery-caption">
              <li class="caption-item">
                <h3 class="caption-title">Likes</h3>
                <p class="caption-value">${e}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Views</h3>
                <p class="caption-value">${t}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Comments</h3>
                <p class="caption-value">${a}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Downloads</h3>
                <p class="caption-value">${n}</p>
              </li>
            </ul>
        </li>`).join("");f.innerHTML=i}
//# sourceMappingURL=commonHelpers.js.map
