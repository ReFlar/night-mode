module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t,n){"use strict";var o={AUTO:0,LIGHT:1,DARK:2,DEFAULT:function(){return Number.parseInt(app.data["fof-nightmode.default_theme"])||0}};t.a=o},function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return s}));var o=n(4),r=n(0),i="flarum_nightmode",c=function(){var e=o.get(i);return e||"0"===e?Number(e):r.a.DEFAULT()},a=function(e){return o.set(i,e,{sameSite:"lax",secure:"https:"===location.protocol})},s=function(){return o.remove(i)}},function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var o=n(5),r=n(7),i=n.n(r),c=n(0),a=n(6),s=n(3);function u(){var e=app.session.user;e?(e.preferences().fofNightMode_perDevice&&Object(a.a)(),f(Object(s.a)())):f(c.a.DEFAULT())}function f(e){if(e===c.a.DARK)p("night");else if(e===c.a.LIGHT)p("day");else{p(window.matchMedia("(prefers-color-scheme: dark)").matches?"night":"day")}}function p(e){var t=document.querySelector("link.nightmode-light[rel=stylesheet]"),n=document.querySelector("link.nightmode-dark[rel=stylesheet]");if(t&&n){if(0===Object(s.a)())return;var o="day"===e?t:n;("day"===e?n:t).remove(),o.setAttribute("media",""),o.className="nightmode"}else{var r=t||n||document.querySelector("link.nightmode[rel=stylesheet]"),i={day:app.data["fof-nightmode.assets.day"],night:app.data["fof-nightmode.assets.night"]}[e];i!==r.href&&(r.href=i,r.className="nightmode")}}t.a=function(){Object(o.extend)(i.a.prototype,"init",u)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),r=n(1);function i(){var e=app.session.user,t=e&&!!e.preferences().fofNightMode_perDevice,n=e&&e.preferences().fofNightMode;return t?Object(r.a)():"number"==typeof n&&-1!==n?n:o.a.DEFAULT()}},function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function r(e,t){if(!t)return"";var n="; "+e;return!0===t?n:n+"="+t}function i(e,t,n){return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(t).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(e){if("number"==typeof e.expires){var t=new Date;t.setMilliseconds(t.getMilliseconds()+864e5*e.expires),e.expires=t}return r("Expires",e.expires?e.expires.toUTCString():"")+r("Domain",e.domain)+r("Path",e.path)+r("Secure",e.secure)+r("SameSite",e.sameSite)}(n)}function c(e){for(var t={},n=e?e.split("; "):[],o=/(%[\dA-F]{2})+/gi,r=0;r<n.length;r++){var i=n[r].split("="),c=i.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{t[i[0].replace(o,decodeURIComponent)]=c.replace(o,decodeURIComponent)}catch(e){}}return t}function a(){return c(document.cookie)}function s(e,t,n){document.cookie=i(e,t,o({path:"/"},n))}t.__esModule=!0,t.encode=i,t.parse=c,t.getAll=a,t.get=function(e){return a()[e]},t.set=s,t.remove=function(e,t){s(e,"",o(o({},t),{expires:-1}))}},function(e,t){e.exports=flarum.core.compat.extend},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),r=n(1);function i(){var e=Array.from(new Set(Object.values(o.a))),t=Object(r.a)();isNaN(t)?c("Theme is not a valid integer! Resetting..."):e.includes(t)||c("Theme is out of bounds! Resetting...")}function c(e){console.warn(e),Object(r.c)(o.a.DEFAULT())}},function(e,t){e.exports=flarum.core.compat["components/Page"]},,function(e,t){e.exports=flarum.core.compat["components/SettingsPage"]},function(e,t){e.exports=flarum.core.compat["components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["components/Select"]},function(e,t){e.exports=flarum.core.compat["components/FieldSet"]},function(e,t){e.exports=flarum.core.compat["components/Switch"]},function(e,t,n){"use strict";n.r(t);var o=n(5),r=n(9),i=n.n(r),c=n(10),a=n.n(c),s=n(11),u=n.n(s),f=n(12),p=n.n(f),d=n(13),l=n.n(d),h=n(2),g=n(6),b=n(1),v=n(3),y=n(0),O=function(e){return app.translator.trans("fof-nightmode.forum.user.settings."+e)};app.initializers.add("fof-nightmode",(function(){Object(o.extend)(i.a.prototype,"settingsItems",(function(e){var t=app.session.user,n=!!t.preferences().fofNightMode_perDevice;n&&Object(g.a)();var o=Object(v.a)();"number"==typeof o||o||(o=y.a.DEFAULT()),e.add("fof-nightmode",p.a.component({label:O("heading"),className:"Settings-theme",children:[m("p",{className:"description"},O("description")),m("p",{className:"description"},O("description2")),l.a.component({children:O("device_specific_setting_checkbox"),className:"Settings-theme--per_device_cb",state:n,onchange:function(e){e?b.c(o):b.b(),t.savePreferences({fofNightMode_perDevice:e}).then((function(){Object(h.b)()}))}}),u.a.component({value:o,key:"selected_theme",className:"Settings-theme--input",onchange:function(e){if(n)return b.c(e),void Object(h.b)();t.savePreferences({fofNightMode:Number.parseInt(e)}).then((function(){m.redraw(),Object(h.b)()}))},options:[O("options.auto"),O("options.day"),O("options.night")]}),m("p",{className:"Settings-theme--selection_description"},o===y.a.AUTO?O("option_descriptions.auto"):o===y.a.LIGHT?O("option_descriptions.day"):o===y.a.DARK?O("option_descriptions.night"):a.a.component())]}))})),Object(h.a)()}))}]);
//# sourceMappingURL=forum.js.map