function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("7Y9D8");document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();const{delay:t,step:n,amount:r}=o.currentTarget.elements,l=Number(t.value),s=Number(n.value),u=Number(r.value),a=Array.from({length:u},((o,t)=>function(e,o){const t=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{t?n({position:e,delay:o}):r({position:e,delay:o})}),o)}))}(t+1,l+t*s).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))));Promise.all(a).then((()=>{console.log("All success")})).catch((e=>{console.error("At least one promise was rejected:",e)}))}));
//# sourceMappingURL=03-promises.a577827f.js.map
