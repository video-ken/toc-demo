!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";function n(){}i.r(e);function o(t){return t()}function l(){return Object.create(null)}function r(t){t.forEach(o)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function f(t){return 0===Object.keys(t).length}function a(t){return null==t?"":t}new Set;function d(t,e){t.appendChild(e)}function u(t,e,i){t.insertBefore(e,i||null)}function h(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function v(){return g(" ")}function m(t,e,i,n){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i,n)}function y(t,e,i){null==i?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}new Set;let w;function b(t){w=t}function k(){if(!w)throw new Error("Function called outside component initialization");return w}const $=[],_=[],E=[],C=[],T=Promise.resolve();let S=!1;function F(){S||(S=!0,T.then(j))}function L(t){E.push(t)}let z=!1;const M=new Set;function j(){if(!z){z=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];b(e),q(e.$$)}for($.length=0;_.length;)_.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];M.has(e)||(M.add(e),e())}E.length=0}while($.length);for(;C.length;)C.pop()();S=!1,z=!1,M.clear()}}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const O=new Set;let H;function P(){H={r:0,c:[],p:H}}function B(){H.r||r(H.c),H=H.p}function R(t,e){t&&t.i&&(O.delete(t),t.i(e))}function A(t,e,i,n){if(t&&t.o){if(O.has(t))return;O.add(t),H.c.push(()=>{O.delete(t),n&&(i&&t.d(1),n())}),t.o(e)}}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let I;function N(t){t&&t.c()}function V(t,e,i){const{fragment:n,on_mount:l,on_destroy:c,after_update:f}=t.$$;n&&n.m(e,i),L(()=>{const e=l.map(o).filter(s);c?c.push(...e):r(e),t.$$.on_mount=[]}),f.forEach(L)}function X(t,e){const i=t.$$;null!==i.fragment&&(r(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function D(t,e,i,o,s,c,f=[-1]){const a=w;b(t);const d=e.props||{},u=t.$$={fragment:null,ctx:null,props:c,update:n,not_equal:s,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:l(),dirty:f,skip_bound:!1};let p=!1;if(u.ctx=i?i(t,d,(e,i,...n)=>{const o=n.length?n[0]:i;return u.ctx&&s(u.ctx[e],u.ctx[e]=o)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](o),p&&function(t,e){-1===t.$$.dirty[0]&&($.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),i}):[],u.update(),p=!0,r(u.before_update),u.fragment=!!o&&o(u.ctx),e.target){if(e.hydrate){const t=(g=e.target,Array.from(g.childNodes));u.fragment&&u.fragment.l(t),t.forEach(h)}else u.fragment&&u.fragment.c();e.intro&&R(t.$$.fragment),V(t,e.target,e.anchor),j()}var g;b(a)}"function"==typeof HTMLElement&&(I=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,i){this[t]=i}$destroy(){X(this,1),this.$destroy=n}$on(t,e){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}$set(t){this.$$set&&!f(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class G{$destroy(){X(this,1),this.$destroy=n}$on(t,e){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}$set(t){this.$$set&&!f(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(t){let e,i,o,l,r,s,c,f,a;return{c(){e=p("div"),i=p("div"),o=g(t[1]),l=g("."),r=v(),s=p("div"),c=g(t[0]),y(i,"class","toc-index svelte-tn3bcd"),y(s,"class","toc-text svelte-tn3bcd"),y(e,"class","toc-item svelte-tn3bcd")},m(n,h){u(n,e,h),d(e,i),d(i,o),d(i,l),d(e,r),d(e,s),d(s,c),f||(a=m(e,"click",t[2]),f=!0)},p(t,[e]){2&e&&x(o,t[1]),1&e&&x(c,t[0])},i:n,o:n,d(t){t&&h(e),f=!1,a()}}}function K(t,e,i){let{text:n}=e,{index:o}=e;return t.$$set=t=>{"text"in t&&i(0,n=t.text),"index"in t&&i(1,o=t.index)},[n,o,function(e){!function(t,e){const i=t.$$.callbacks[e.type];i&&i.slice().forEach(t=>t(e))}(t,e)}]}var Q=class extends G{constructor(t){var e;super(),document.getElementById("svelte-tn3bcd-style")||((e=p("style")).id="svelte-tn3bcd-style",e.textContent="div.toc-item.svelte-tn3bcd{display:flex;flex-direction:row;align-items:center;padding:.7em 1em;box-sizing:border-box;color:#eeeeee}div.toc-item.svelte-tn3bcd:hover{background:#222222;cursor:pointer;color:#ffffff}div.toc-index.svelte-tn3bcd{flex:1;text-align:right}div.toc-text.svelte-tn3bcd{flex:10;padding-left:8px;padding-right:8px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden}",d(document.head,e)),D(this,t,K,J,c,{text:0,index:1})}};function U(t,e,i){const n=t.slice();return n[23]=e[i],n[25]=i,n}function W(t){let e,i,n,o,l,s,c,f,a,w,b,k,$=tt(t[4])+"",_=t[7],E=[];for(let e=0;e<_.length;e+=1)E[e]=Y(U(t,_,e));const C=t=>A(E[t],1,1,()=>{E[t]=null});return{c(){e=p("div");for(let t=0;t<E.length;t+=1)E[t].c();i=v(),n=p("div"),o=p("div"),o.innerHTML='<svg stroke="red" fill="red" stroke-width="0" viewBox="0 0 192 512" height="40" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"></path></svg>',l=v(),s=p("div"),c=g($),f=v(),a=p("div"),a.innerHTML='<svg stroke="red" fill="red" stroke-width="0" viewBox="0 0 192 512" height="40" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>',y(e,"class","items-list svelte-1rio8if"),y(o,"class","prev-button svelte-1rio8if"),y(s,"class","toc-text svelte-1rio8if"),y(a,"class","next-button svelte-1rio8if"),y(n,"class","toc-navigator svelte-1rio8if")},m(r,h){u(r,e,h);for(let t=0;t<E.length;t+=1)E[t].m(e,null);u(r,i,h),u(r,n,h),d(n,o),d(n,l),d(n,s),d(s,c),d(n,f),d(n,a),w=!0,b||(k=[m(o,"click",t[17]),m(s,"click",t[18]),m(a,"click",t[19])],b=!0)},p(t,i){if(1216&i){let n;for(_=t[7],n=0;n<_.length;n+=1){const o=U(t,_,n);E[n]?(E[n].p(o,i),R(E[n],1)):(E[n]=Y(o),E[n].c(),R(E[n],1),E[n].m(e,null))}for(P(),n=_.length;n<E.length;n+=1)C(n);B()}(!w||16&i)&&$!==($=tt(t[4])+"")&&x(c,$)},i(t){if(!w){for(let t=0;t<_.length;t+=1)R(E[t]);w=!0}},o(t){E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)A(E[t]);w=!1},d(t){t&&h(e),function(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}(E,t),t&&h(i),t&&h(n),b=!1,r(k)}}}function Y(t){let e,i;return e=new Q({props:{index:t[25]+1,text:t[6][t[23]]}}),e.$on("click",(function(...e){return t[16](t[23],...e)})),{c(){N(e.$$.fragment)},m(t,n){V(e,t,n),i=!0},p(i,n){t=i;const o={};192&n&&(o.text=t[6][t[23]]),e.$set(o)},i(t){i||(R(e.$$.fragment,t),i=!0)},o(t){A(e.$$.fragment,t),i=!1},d(t){X(e,t)}}}function Z(t){let e,i,n,o,l,s,c,f,g,x=t[7].length>0&&W(t);return{c(){e=p("div"),i=p("div"),i.textContent="TOPICS",n=v(),x&&x.c(),o=v(),l=p("div"),l.innerHTML='<div class="topics-icon svelte-1rio8if"></div>',y(i,"class","header svelte-1rio8if"),y(l,"class","handle svelte-1rio8if"),y(e,"class",s=a(`toc-container ${t[3]&&t[0]&&"hidden"} ${t[1]&&"minimized"} ${t[2]&&"expanded"}`)+" svelte-1rio8if")},m(r,s){u(r,e,s),d(e,i),d(e,n),x&&x.m(e,null),d(e,o),d(e,l),t[20](e),c=!0,f||(g=[m(i,"click",t[15]),m(e,"pointerenter",t[13]),m(e,"pointerleave",t[14])],f=!0)},p(t,[i]){t[7].length>0?x?(x.p(t,i),128&i&&R(x,1)):(x=W(t),x.c(),R(x,1),x.m(e,o)):x&&(P(),A(x,1,1,()=>{x=null}),B()),(!c||15&i&&s!==(s=a(`toc-container ${t[3]&&t[0]&&"hidden"} ${t[1]&&"minimized"} ${t[2]&&"expanded"}`)+" svelte-1rio8if"))&&y(e,"class",s)},i(t){c||(R(x),c=!0)},o(t){A(x),c=!1},d(i){i&&h(e),x&&x.d(),t[20](null),f=!1,r(g)}}}function tt(t){if(t)return t.length>64?t.substring(0,64)+"...":t}function et(t,e,i){let n,o,l,r=!1,s=!1,c=!0,f=!1,a={},d=[];var u;function h(){if(o<d.length-1){let t=d[o+1];o+=1,i(4,n=a[t]),_player.seekTo(t)}}function p(){if(o>0){let t=d[o-1];o-=1,i(4,n=a[t]),_player.seekTo(t)}}function g(t){console.log("clicked"),i(0,r=!0),_player.seekTo(t)}function v(){i(1,s=!1),l.animate([{top:"calc(100% - 150px)",right:"30px",bottom:"80px"},{top:"0px",right:"0px",bottom:"0px"}],{fill:"forwards",easing:"ease",duration:400}).onfinish=()=>{i(2,c=!0)}}function m(){i(2,c=!1),l.animate([{top:"0px",right:"0px",bottom:"0px"},{top:"calc(100% - 150px)",right:"30px",bottom:"80px"}],{fill:"forwards",easing:"ease",duration:400}).onfinish=()=>{i(1,s=!0);let t=function(t){for(let e=0;e<d.length;e++){const i=d[e],n=d[e+1]?d[e+1]:999999;if(t>=i&&t<n)return o=e,a[i]}return null}(_player.getCurrentTime());console.log("text is",t),i(4,n=t||"")}}u=async()=>{const{data:t}=await tocPromise;i(6,a=t.mmtoc),i(7,d=Object.keys(a)),console.log(a),console.log(window._player),window._player.addEventListener("onStateChange",t=>{3!=t.data||f||s||(i(3,f=!0),i(0,r=!0))})},k().$$.on_mount.push(u);return[r,s,c,f,n,l,a,d,h,p,g,v,m,function(){c&&i(0,r=!1)},function(){c?i(0,r=!0):setTimeout(()=>{c&&i(0,r=!0)},500)},()=>m(),t=>g(t),()=>p(),()=>v(),()=>h(),function(t){_[t?"unshift":"push"](()=>{l=t,i(5,l)})}]}var it=class extends G{constructor(t){var e;super(),document.getElementById("svelte-1rio8if-style")||((e=p("style")).id="svelte-1rio8if-style",e.textContent="div.toc-container.svelte-1rio8if.svelte-1rio8if{position:absolute;top:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.92);font-size:var(--toc-font);color:#eeeeee;pointer-events:auto;transition:all .4s ease-out}div.toc-container.svelte-1rio8if div.header.svelte-1rio8if{height:1em;padding:1em;display:none}div.toc-container.svelte-1rio8if div.items-list.svelte-1rio8if{display:none;overflow-y:scroll;height:calc(100% - 3em);scrollbar-width:thin;scrollbar-color:#4e4e4e #000000}div.items-list.svelte-1rio8if.svelte-1rio8if::-webkit-scrollbar{width:7px}div.items-list.svelte-1rio8if.svelte-1rio8if::-webkit-scrollbar-thumb{background:#4e4e4e;border-radius:2px;border:1px solid #4e4e4e}div.items-list.svelte-1rio8if.svelte-1rio8if::-webkit-scrollbar-track{background:#202020}div.toc-container.expanded.svelte-1rio8if div.items-list.svelte-1rio8if,div.toc-container.expanded.svelte-1rio8if div.header.svelte-1rio8if{display:block}div.toc-container.svelte-1rio8if .toc-navigator.svelte-1rio8if{height:100%;display:none}div.toc-container.minimized.svelte-1rio8if .toc-navigator.svelte-1rio8if{display:flex;align-items:center;justify-content:center}.toc-navigator.svelte-1rio8if .prev-button.svelte-1rio8if,.toc-navigator.svelte-1rio8if .next-button.svelte-1rio8if{display:flex;justify-content:center;align-items:center;cursor:pointer;flex-basis:32px;flex-grow:0;height:100%}.toc-navigator.svelte-1rio8if .prev-button.svelte-1rio8if:hover,.toc-navigator.svelte-1rio8if .next-button.svelte-1rio8if:hover{transform:scale(1.1)}.toc-navigator.svelte-1rio8if .toc-text.svelte-1rio8if{color:rgb(234, 234, 234);padding:0.2em 0.8em;overflow:hidden;cursor:text;flex-basis:17em;text-align:center;line-height:1.4}div.toc-container.svelte-1rio8if.svelte-1rio8if:not(.minimized)::before{content:'';position:absolute;height:2em;width:100%;bottom:0;background:linear-gradient(to top, rgba(10,10,10, 1), rgba(10,10,10, 0.1));pointer-events:none}div.header.svelte-1rio8if.svelte-1rio8if{letter-spacing:1px;padding:1em 1.5em}div.handle.svelte-1rio8if.svelte-1rio8if{width:3em;height:4em;position:absolute;top:calc(50% - 2em);background:rgba(0, 0, 0, .8);left:-4em;border-top-left-radius:1.4em;border-bottom-left-radius:1.4em;cursor:pointer;transform:scaleX(0);opacity:0;transform-origin:right;transition:transform .4s ease-out;box-sizing:content-box;border:1em solid transparent;background-clip:content-box;border-right:0}div.handle.svelte-1rio8if .topics-icon.svelte-1rio8if{width:100%;height:100%;background:url(\"data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Crect fill='none' id='z' height='32' width='32' y='-1' x='-1'/%3E%3C/g%3E%3Cg%3E%3Crect id='svg_1' height='4' width='4' y='5.520938' x='3.875121' fill-opacity='null' stroke-opacity='null' stroke-width='0' stroke='%23000' fill='%23fff'/%3E%3Crect id='svg_2' height='4' width='4' y='12.770858' x='3.937621' fill-opacity='null' stroke-opacity='null' stroke-width='0' stroke='%23000' fill='%23fff'/%3E%3Crect id='svg_3' height='4' width='4' y='20.020779' x='4.00012' fill-opacity='null' stroke-opacity='null' stroke-width='0' stroke='%23000' fill='%23fff'/%3E%3Crect stroke='%23000' id='svg_4' height='4' width='15.499873' y='5.520938' x='10.812547' fill-opacity='null' stroke-opacity='null' stroke-width='0' fill='%23fff'/%3E%3Crect stroke='%23000' id='svg_5' height='4' width='15.437374' y='12.770858' x='11.062544' fill-opacity='null' stroke-opacity='null' stroke-width='0' fill='%23fff'/%3E%3Crect stroke='%23000' id='svg_6' height='4' width='15.499873' y='20.020779' x='11.062544' fill-opacity='null' stroke-opacity='null' stroke-width='0' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E\");background-position:center;background-repeat:no-repeat;transform:scale(0.75, 0.85);opacity:0}div.toc-container.hidden.svelte-1rio8if .topics-icon.svelte-1rio8if{opacity:0.9}div.hidden.svelte-1rio8if div.handle.svelte-1rio8if{opacity:1;transform:scaleX(1)}",d(document.head,e)),D(this,t,et,Z,c,{})}};function nt(t){let e,i,o;return i=new it({}),{c(){e=p("div"),N(i.$$.fragment),y(e,"id","vken-controls"),y(e,"class","svelte-5e1arx")},m(t,n){u(t,e,n),V(i,e,null),o=!0},p:n,i(t){o||(R(i.$$.fragment,t),o=!0)},o(t){A(i.$$.fragment,t),o=!1},d(t){t&&h(e),X(i)}}}var ot=class extends G{constructor(t){var e;super(),document.getElementById("svelte-5e1arx-style")||((e=p("style")).id="svelte-5e1arx-style",e.textContent="#vken-controls.svelte-5e1arx{font-size:14px;position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;overflow:hidden}",d(document.head,e)),D(this,t,null,nt,c,{})}};function lt(){new ot({target:document.querySelector("#container"),props:{}})}"boolean"==typeof _ytready&&_ytready?lt(_player):window.setupVkenControls=lt,function(){let t='\n\t<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">\n\t  <g>\n\t\t<rect x="-1" y="-1" width="30" height="30" id="canvas_background" fill="#111111"/>\n\t  </g>\n\t  <g>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="4.224098" y="4.200487" width="2" height="7" id="svg_3"/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="4.308279" y="16.294511" width="2" height="7" id="svg_5"/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="21.321511" y="4.240171" width="2" height="7" id="svg_6"/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="21.239738" y="16.172252" width="2" height="7" id="svg_11"/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="6.730206" y="1.735667" width="2" height="7" id="svg_12" transform="rotate(90 7.7302069664001465,5.235671997070313) "/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="6.813585" y="18.80062" width="2" height="7" id="svg_14" transform="rotate(90 7.813585281372068,22.300619125366214) "/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="18.815404" y="1.734063" width="2" height="7" id="svg_15" transform="rotate(90 19.81540679931641,5.234067440032961) "/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="18.73363" y="18.67836" width="2" height="7" id="svg_20" transform="rotate(90 19.733633041381836,22.178359985351566) "/>\n\t  </g>\n\t</svg>\n\t',e=document.querySelector("#container"),i=document.createElement("span");i.classList.add("vken-fullscreen-button"),i.innerHTML=t;let n=!1;i.addEventListener("click",o=>{n?(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),i.innerHTML=t,n=!1):(e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),i.innerHTML='\n\t<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">\n\t  <g>\n\t\t<rect x="-1" y="-1" width="30" height="30" id="canvas_background" fill="#111111"/>\n\t  </g>\n\t  <g>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="9.343834" y="4.283063" width="2" height="7" id="svg_3"/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="9.428015" y="16.294511" width="2" height="7" id="svg_5"/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="16.284352" y="4.322747" width="2" height="7" id="svg_6"/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="16.243867" y="16.172252" width="2" height="7" id="svg_11"/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="6.812783" y="6.814115" width="2" height="7" id="svg_12" transform="rotate(90 7.812783241271972,10.314137458801271) "/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="6.896161" y="13.763461" width="2" height="7" id="svg_14" transform="rotate(90 7.896161556243894,17.2634391784668) "/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="18.815404" y="6.81251" width="2" height="7" id="svg_15" transform="rotate(90 19.815404891967777,10.31253242492676) "/>\n\t  <rect fill="#ffffff" stroke="#000" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="18.73363" y="13.6412" width="2" height="7" id="svg_20" transform="rotate(90 19.733631134033203,17.14117813110352) "/>\n\t  </g>\n\t</svg>\n\t',n=!0)}),document.addEventListener("fullscreenchange",e=>{document.fullscreenElement||(i.innerHTML=t,n=!1)}),e.appendChild(i)}()}]);