var wc;(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=window.wc.__experimentalInteractivity,r="rating_filter";(0,t.store)("woocommerce/product-filter-rating",{actions:{toggleFilter:()=>{var e;const o=(0,t.getContext)("woocommerce/product-filters"),a=function(e){return e.params[r]?e.params[r].split(","):[]}(o),{ref:i}=(0,t.getElement)(),l=null!==(e=i.getAttribute("data-target-value"))&&void 0!==e?e:i.getAttribute("value"),c=a.includes(l)?[...a.filter((e=>e!==l))]:[...a,l];0!==c.length?o.params={...o.params,[r]:c.join(",")}:delete o.params[r]},clearFilters:()=>{const e=(0,t.getContext)("woocommerce/product-filters"),o=e.params;delete o[r],e.params={...o}}}}),(wc=void 0===wc?{}:wc)["product-filter-rating"]=e})();