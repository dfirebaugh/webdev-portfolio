"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/webdev-portfolio/index.html","ebdad5a30f3f8e1de3b323bd62d6e923"],["/webdev-portfolio/static/css/main.e2fc984a.css","1f5af8a73dc6a391768233d8521c1a2d"],["/webdev-portfolio/static/js/main.19a3b5d3.js","abad7b62ad45b19d2601cb54f4d187ec"],["/webdev-portfolio/static/media/HTML5_logo.525f317f.svg","525f317fe9e90927edf7694d88ce42c8"],["/webdev-portfolio/static/media/JQuery_logo.6ff17bd2.svg","6ff17bd2dc7d786853da589cb373d553"],["/webdev-portfolio/static/media/bar.45c96136.jpg","45c96136403a5039ce01c66c5932e271"],["/webdev-portfolio/static/media/css3.3707da3c.svg","3707da3c6a394c7ee2523273f8d98a25"],["/webdev-portfolio/static/media/df.2fb19daf.jpg","2fb19daf37f1e2f2487fbfc20c60a013"],["/webdev-portfolio/static/media/dustin.firebaugh.resume.0a261828.pdf","0a261828efddcf9198164570d16a821a"],["/webdev-portfolio/static/media/fcc.c61d940c.jpg","c61d940cede2390b2f1b77fb1af6b959"],["/webdev-portfolio/static/media/gameoflife.2960820e.jpg","2960820e70e1a3c99a02e5b9e8f1bcb4"],["/webdev-portfolio/static/media/javascript.87711407.svg","87711407412494d529d45ee76167583c"],["/webdev-portfolio/static/media/linkedin.d52422fb.svg","d52422fb357b28b8a8be88ad02d19397"],["/webdev-portfolio/static/media/markdown.5a13a19d.jpg","5a13a19d2c29fbf1d481eb2cc44db899"],["/webdev-portfolio/static/media/md.4d8e512c.jpg","4d8e512c4b4b831d25aac45e2fe3aacc"],["/webdev-portfolio/static/media/pclock.6e118923.jpg","6e118923d0997176b868d399b9946f1a"],["/webdev-portfolio/static/media/qgen.f9d110cb.jpg","f9d110cb6ffcad5c3bcf4d2ea5bff737"],["/webdev-portfolio/static/media/react.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/webdev-portfolio/static/media/recipe.b36a1da8.jpg","b36a1da82b766944f77a9b1c0e9dc36b"],["/webdev-portfolio/static/media/roguelike.c01e480a.jpg","c01e480a53dc8ed5c44dbf5a802e4cd2"],["/webdev-portfolio/static/media/scatter.d19bb053.jpg","d19bb053a643bc048da9bd6423f8ed58"],["/webdev-portfolio/static/media/speed.ca7f2793.jpg","ca7f2793805db31d13177cc3ed29d4eb"],["/webdev-portfolio/static/media/ttt.4f8653e6.jpg","4f8653e6b121d571d37a59e3420ac27a"],["/webdev-portfolio/static/media/um3.096b9055.jpg","096b9055f3e5ebd56c53169fa24da915"],["/webdev-portfolio/static/media/weather.5a36734d.jpg","5a36734d3f44cb773b590566e62d9a9e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var c="/webdev-portfolio/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});