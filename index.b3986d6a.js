var e;function n(e,n,t){var o,r,l,u,c;function a(){var i=Date.now()-u;i<n&&i>=0?o=setTimeout(a,n-i):(o=null,t||(c=e.apply(l,r),l=r=null))}null==n&&(n=100);var i=function(){l=this,r=arguments,u=Date.now();var i=t&&!o;return o||(o=setTimeout(a,n)),i&&(c=e.apply(l,r),l=r=null),c};return i.clear=function(){o&&(clearTimeout(o),o=null)},i.flush=function(){o&&(c=e.apply(l,r),l=r=null,clearTimeout(o),o=null)},i}n.debounce=n,e=n;document.querySelector("#search-box").addEventListener("input",(0,e.debounce)((function(e){const n=e.target.value.trim();if(""===n)return console.log("Не можна натискати на побіл");console.log(n),(t=n,fetch(`https://restcountries.com/v3.1/name/${t}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((e=>{console.log(e)})).catch((e=>console.error(e)));var t}),300));
//# sourceMappingURL=index.b3986d6a.js.map
