(()=>{"use strict";({156:function(t,o){var n=this&&this.__awaiter||function(t,o,n,e){return new(n||(n=Promise))((function(c,l){function i(t){try{a(e.next(t))}catch(t){l(t)}}function r(t){try{a(e.throw(t))}catch(t){l(t)}}function a(t){var o;t.done?c(t.value):(o=t.value,o instanceof n?o:new n((function(t){t(o)}))).then(i,r)}a((e=e.apply(t,o||[])).next())}))};Object.defineProperty(o,"__esModule",{value:!0}),function(){n(this,void 0,void 0,(function*(){const t=yield chrome.tabs.query({url:["http://localhost:8020/*","http://127.0.0.1:8020/*"]});console.log(t),t.forEach((t=>{!function(t){console.log("start closeTab"),-1===t.url.indexOf("http://localhost:8020")&&-1===t.url.indexOf("http://127.0.0.1:8020")||(console.log("about to close tab"),chrome.tabs.remove(t.id).catch((t=>{console.error(t)})).then((()=>{console.log("tab closed")})))}(t)}))}))}()}})[156](0,{})})();