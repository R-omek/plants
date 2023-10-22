(()=>{"use strict";var e={387:(e,t,n)=>{n.r(t)},590:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addFavicon=void 0,t.addFavicon=function(){const e=document.createElement("link");e.rel="icon",e.href="leaf.png",document.head.appendChild(e)}}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(387);const e=n(590),t=document.querySelector(".header__logo");null==t||t.addEventListener("click",(()=>(window.scrollTo(0,0),void document.querySelectorAll(".nav__item").forEach(((e,t)=>0===t?e.classList.add("active"):e.classList.remove("active")))))),(0,e.addFavicon)();const o=document.querySelectorAll(".nav__item");o.forEach((e=>{e.addEventListener("click",(()=>{o.forEach((e=>e.classList.remove("active"))),e.classList.add("active")}))}));const c=document.querySelectorAll(".projects__btn"),i=document.querySelectorAll(".projects__item");function l(){this.classList.remove("blur-scale")}c.forEach((e=>{e.addEventListener("click",(function(){var e;e=this,i.forEach((t=>{var n,o,i;const r="Garden"===(null===(n=t.children[1].textContent)||void 0===n?void 0:n.split(" ")[0]),s=(null===(o=t.children[1].textContent)||void 0===o?void 0:o.split(" ")[0].toLowerCase())===(null===(i=e.textContent)||void 0===i?void 0:i.toLowerCase());t.classList.remove("blur-scale"),function(e){c.forEach((e=>e.classList.remove("active"))),e.classList.add("active")}(e),"Gardens"===e.textContent?r||t.classList.add("blur-scale"):(t.classList.remove("blur-scale"),s||t.classList.add("blur-scale")),t.addEventListener("click",l)}))}))}));const r=document.querySelectorAll(".prices__select"),s=document.querySelector(".prices__title"),d=null==s?void 0:s.children[0].textContent;let a=0,u=!1;function h(){u&&(a<d.length?(s.children[0].textContent+=d[a],a++,setTimeout(h,150)):(setTimeout((()=>{s.children[0].textContent=s.children[0].textContent.slice(0,a-1),a--,setTimeout(h,500)}),200),setTimeout((()=>u=!1),3e3)))}const v=new IntersectionObserver((e=>{e[0].isIntersecting&&(u||(s.children[0].textContent="",u=!0,h()),v.disconnect())}));function m(e){const t=document.createElement("div");return e.classList.contains("opened")?t.innerHTML='\n        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <circle cx="8" cy="8" r="8" fill="#D9D9D9"/>\n            <path d="M8.00003 8.99997L6.00002 7.00008" stroke="#717171" stroke-width="0.5" stroke-linecap="round"/>\n            <path d="M8 9L10 7" stroke="#717171" stroke-width="0.5" stroke-linecap="round"/>\n        </svg>\n    ':t.innerHTML='\n        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <circle cx="8" cy="8" r="8" transform="rotate(-180 8 8)" fill="#AEA1A1"/>\n            <path d="M7.99997 7.00003L9.99998 8.99992" stroke="white" stroke-width="0.5" stroke-linecap="round"/>\n            <path d="M8 7L6 9" stroke="white" stroke-width="0.5" stroke-linecap="round"/>\n        </svg>   \n    ',t.children[0]}v.observe(s),r.forEach((e=>{e.addEventListener("click",(()=>{r.forEach((t=>{t.classList.contains("opened")&&t.children[0].replaceChild(m(t),t.children[0].children[1]),e!==t&&t.classList.remove("opened")})),e.children[0].replaceChild(m(e),e.children[0].children[1]),e.classList.toggle("opened")}))}));const p=document.querySelector(".contact-us__select");null==p||p.children[0].addEventListener("click",(()=>{p.classList.toggle("opened"),null==p||p.children[0].classList.toggle("opened"),null==p||p.children[1].classList.toggle("opened")}));const L=document.querySelectorAll(".scroll-animation");function g(){L.forEach((e=>{const t=e.getBoundingClientRect().top,n=e.getBoundingClientRect().bottom;t<window.innerHeight-50&&e.classList.add("animated"),n>window.innerHeight+400&&e.classList.remove("animated")}))}window.addEventListener("scroll",g),g()})()})();