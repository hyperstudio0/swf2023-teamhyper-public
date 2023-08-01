/*! For license information please see 1010.e6922917.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[1010],{21531:function(e,n,t){var r=t(47313);var u="function"===typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e===1/n)||e!==e&&n!==n},i=r.useState,a=r.useEffect,o=r.useLayoutEffect,c=r.useDebugValue;function f(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!u(e,t)}catch(r){return!0}}var s="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),r=i({inst:{value:t,getSnapshot:n}}),u=r[0].inst,s=r[1];return o((function(){u.value=t,u.getSnapshot=n,f(u)&&s({inst:u})}),[e,t,n]),a((function(){return f(u)&&s({inst:u}),e((function(){f(u)&&s({inst:u})}))}),[e]),c(t),t};n.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:s},51239:function(e,n,t){e.exports=t(21531)},1010:function(e,n,t){t.d(n,{ZP:function(){return le},JG:function(){return ne}});var r=t(74165),u=t(15861),i=t(1413),a=t(29439),o=t(47313),c=t(51239),f=t(37762),s=function(){},d=s(),l=Object,v=function(e){return e===d},p=function(e){return"function"==typeof e},h=function(e,n){return(0,i.Z)((0,i.Z)({},e),n)},g=function(e){return p(e.then)},b=new WeakMap,w=0,y=function e(n){var t,r,u=typeof n,i=n&&n.constructor,a=i==Date;if(l(n)!==n||a||i==RegExp)t=a?n.toJSON():"symbol"==u?n.toString():"string"==u?JSON.stringify(n):""+n;else{if(t=b.get(n))return t;if(t=++w+"~",b.set(n,t),i==Array){for(t="@",r=0;r<n.length;r++)t+=e(n[r])+",";b.set(n,t)}if(i==l){t="#";for(var o=l.keys(n).sort();!v(r=o.pop());)v(n[r])||(t+=r+":"+e(n[r])+",");b.set(n,t)}}return t},m=new WeakMap,k={},_={},E="undefined",S=typeof window!=E,x=typeof document!=E,O=function(e,n){var t=m.get(e);return[function(){return!v(n)&&e.get(n)||k},function(r){if(!v(n)){var u=e.get(n);n in _||(_[n]=u),t[5](n,h(u,r),u||k)}},t[6],function(){return!v(n)&&n in _?_[n]:!v(n)&&e.get(n)||k}]},Z=!0,R=S&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[s,s],L=(0,a.Z)(R,2),T=L[0],V=L[1],C={isOnline:function(){return Z},isVisible:function(){var e=x&&document.visibilityState;return v(e)||"hidden"!==e}},D={initFocus:function(e){return x&&document.addEventListener("visibilitychange",e),T("focus",e),function(){x&&document.removeEventListener("visibilitychange",e),V("focus",e)}},initReconnect:function(e){var n=function(){Z=!0,e()},t=function(){Z=!1};return T("online",n),T("offline",t),function(){V("online",n),V("offline",t)}}},I=!o.useId,P=!S||"Deno"in window,A=function(e){return S&&typeof window.requestAnimationFrame!=E?window.requestAnimationFrame(e):setTimeout(e,1)},M=P?o.useEffect:o.useLayoutEffect,F="undefined"!==typeof navigator&&navigator.connection,W=!P&&F&&(["slow-2g","2g"].includes(F.effectiveType)||F.saveData),j=function(e){if(p(e))try{e=e()}catch(t){e=""}var n=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?y(e):"",n]},q=0,J=function(){return++q},N=2,U=3,$=0,G=N,H=1;function z(){return B.apply(this,arguments)}function B(){return B=(0,u.Z)((0,r.Z)().mark((function e(){var n,t,i,o,c,s,l,b,w,y,k,_,E,S,x,Z,R,L,T,V,C,D,I=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(D=function(){return D=(0,u.Z)((0,r.Z)().mark((function e(n){var u,i,c,f,l,h,b,y,x,Z,R,L,T,V,C,D,I,P,A,M,F,W,q,U;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=j(n),i=(0,a.Z)(u,1),c=i[0]){e.next=3;break}return e.abrupt("return");case 3:if(f=O(o,c),l=(0,a.Z)(f,2),h=l[0],b=l[1],y=m.get(o),x=(0,a.Z)(y,4),Z=x[0],R=x[1],L=x[2],T=x[3],V=Z[c],C=function(){return _&&(delete L[c],delete T[c],V&&V[0])?V[0](N).then((function(){return h().data})):h().data},!(t.length<3)){e.next=9;break}return e.abrupt("return",C());case 9:if(D=s,P=J(),R[c]=[P,0],A=!v(k),M=h(),F=M.data,W=M._c,q=v(W)?F:W,A&&(k=p(k)?k(q,F):k,b({data:k,_c:q})),p(D))try{D=D(q)}catch(r){I=r}if(!D||!g(D)){e.next=30;break}return e.next=22,D.catch((function(e){I=e}));case 22:if(D=e.sent,P===R[c][0]){e.next=29;break}if(!I){e.next=26;break}throw I;case 26:return e.abrupt("return",D);case 29:I&&A&&E(I)&&(w=!0,b({data:D=q,_c:d}));case 30:return w&&(I||(p(w)&&(D=w(D,q)),b({data:D,error:d,_c:d}))),R[c][1]=J(),e.next=34,C();case 34:if(U=e.sent,b({_c:d}),!I){e.next=40;break}if(!S){e.next=39;break}throw I;case 39:return e.abrupt("return");case 40:return e.abrupt("return",w?U:D);case 41:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)},C=function(e){return D.apply(this,arguments)},n=I.length,t=new Array(n),i=0;i<n;i++)t[i]=I[i];if(o=t[0],c=t[1],s=t[2],l=t[3],b=h({populateCache:!0,throwOnError:!0},"boolean"===typeof l?{revalidate:l}:l||{}),w=b.populateCache,y=b.rollbackOnError,k=b.optimisticData,_=!1!==b.revalidate,E=function(e){return"function"===typeof y?y(e):!1!==y},S=b.throwOnError,!p(c)){e.next=18;break}x=c,Z=[],R=o.keys(),L=(0,f.Z)(R);try{for(L.s();!(T=L.n()).done;)V=T.value,!/^\$(inf|sub)\$/.test(V)&&x(o.get(V)._k)&&Z.push(V)}catch(P){L.e(P)}finally{L.f()}return e.abrupt("return",Promise.all(Z.map(C)));case 18:return e.abrupt("return",C(c));case 19:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}var K=function(e,n){for(var t in e)e[t][0]&&e[t][0](n)},Q=function(e,n){if(!m.has(e)){var t=h(D,n),r={},u=z.bind(d,e),i=s,a={},o=function(e,n){var t=a[e]||[];return a[e]=t,t.push(n),function(){return t.splice(t.indexOf(n),1)}},c=function(n,t,r){e.set(n,t);var u=a[n];if(u){var i,o=(0,f.Z)(u);try{for(o.s();!(i=o.n()).done;){(0,i.value)(t,r)}}catch(c){o.e(c)}finally{o.f()}}},l=function(){if(!m.has(e)&&(m.set(e,[r,{},{},{},u,c,o]),!P)){var n=t.initFocus(setTimeout.bind(d,K.bind(d,r,0))),a=t.initReconnect(setTimeout.bind(d,K.bind(d,r,1)));i=function(){n&&n(),a&&a(),m.delete(e)}}};return l(),[e,u,l,i]}return[e,m.get(e)[4]]},X=Q(new Map),Y=(0,a.Z)(X,2),ee=Y[0],ne=Y[1],te=h({onLoadingSlow:s,onSuccess:s,onError:s,onErrorRetry:function(e,n,t,r,u){var i=t.errorRetryCount,a=u.retryCount,o=~~((Math.random()+.5)*(1<<(a<8?a:8)))*t.errorRetryInterval;!v(i)&&a>i||setTimeout(r,o,u)},onDiscarded:s,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:W?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:W?5e3:3e3,compare:function(e,n){return y(e)==y(n)},isPaused:function(){return!1},cache:ee,mutate:ne,fallback:{}},C),re=function(e,n){var t=h(e,n);if(n){var r=e.use,u=e.fallback,i=n.use,a=n.fallback;r&&i&&(t.use=r.concat(i)),u&&a&&(t.fallback=h(u,a))}return t},ue=(0,o.createContext)({}),ie=S&&window.__SWR_DEVTOOLS_USE__,ae=ie?window.__SWR_DEVTOOLS_USE__:[],oe=function(e){return p(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},ce=ae.concat((function(e){return function(n,t,r){var u=t&&function(){var e=j(n),r=(0,a.Z)(e,1)[0],u=m.get(ee),i=(0,a.Z)(u,4)[3],o=i[r];return v(o)?t.apply(void 0,arguments):(delete i[r],o)};return e(n,u,r)}}));ie&&(window.__SWR_DEVTOOLS_REACT__=o);var fe,se=o.use||function(e){if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((function(n){e.status="fulfilled",e.value=n}),(function(n){e.status="rejected",e.reason=n})),e)},de={dedupe:!0},le=(l.defineProperty((function(e){var n=e.value,t=(0,o.useContext)(ue),r=p(n),u=(0,o.useMemo)((function(){return r?n(t):n}),[r,t,n]),i=(0,o.useMemo)((function(){return r?u:re(t,u)}),[r,t,u]),a=u&&u.provider,c=(0,o.useRef)(d);a&&!c.current&&(c.current=Q(a(i.cache||ee),u));var f=c.current;return f&&(i.cache=f[0],i.mutate=f[1]),M((function(){if(f)return f[2]&&f[2](),f[3]}),[]),(0,o.createElement)(ue.Provider,h(e,{value:i}))}),"defaultValue",{value:te}),fe=function(e,n,t){var f=t.cache,s=t.compare,l=t.suspense,g=t.fallbackData,b=t.revalidateOnMount,w=t.revalidateIfStale,y=t.refreshInterval,k=t.refreshWhenHidden,_=t.refreshWhenOffline,E=t.keepPreviousData,S=m.get(f),x=(0,a.Z)(S,4),Z=x[0],R=x[1],L=x[2],T=x[3],V=j(e),C=(0,a.Z)(V,2),D=C[0],F=C[1],W=(0,o.useRef)(!1),q=(0,o.useRef)(!1),N=(0,o.useRef)(D),B=(0,o.useRef)(n),K=(0,o.useRef)(t),Q=function(){return K.current},X=function(){return Q().isVisible()&&Q().isOnline()},Y=O(f,D),ee=(0,a.Z)(Y,4),ne=ee[0],te=ee[1],re=ee[2],ue=ee[3],ie=(0,o.useRef)({}).current,ae=v(g)?t.fallback[D]:g,oe=function(e,n){for(var t in ie){var r=t;if("data"===r){if(!s(e[r],n[r])){if(!v(e[r]))return!1;if(!s(we,n[r]))return!1}}else if(n[r]!==e[r])return!1}return!0},ce=(0,o.useMemo)((function(){var e=!!D&&!!n&&(v(b)?!Q().isPaused()&&!l&&(!!v(w)||w):b),t=function(n){var t=h(n);return delete t._k,e?(0,i.Z)({isValidating:!0,isLoading:!0},t):t},r=ne(),u=ue(),a=t(r),o=r===u?a:t(u),c=a;return[function(){var e=t(ne());return oe(e,c)?(c.data=e.data,c.isLoading=e.isLoading,c.isValidating=e.isValidating,c.error=e.error,c):(c=e,e)},function(){return o}]}),[f,D]),fe=(0,c.useSyncExternalStore)((0,o.useCallback)((function(e){return re(D,(function(n,t){oe(t,n)||e()}))}),[f,D]),ce[0],ce[1]),le=!W.current,ve=Z[D]&&Z[D].length>0,pe=fe.data,he=v(pe)?ae:pe,ge=fe.error,be=(0,o.useRef)(he),we=E?v(pe)?be.current:pe:he,ye=!(ve&&!v(ge))&&(le&&!v(b)?b:!Q().isPaused()&&(l?!v(he)&&w:v(he)||w)),me=!!(D&&n&&le&&ye),ke=v(fe.isValidating)?me:fe.isValidating,_e=v(fe.isLoading)?me:fe.isLoading,Ee=(0,o.useCallback)(function(){var e=(0,u.Z)((0,r.Z)().mark((function e(n){var u,i,o,c,f,l,h,g,b,w,y,m,k,_,E,S;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=B.current,D&&u&&!q.current&&!Q().isPaused()){e.next=3;break}return e.abrupt("return",!1);case 3:return c=!0,f=n||{},l=!L[D]||!f.dedupe,h=function(){return I?!q.current&&D===N.current&&W.current:D===N.current},g={isValidating:!1,isLoading:!1},b=function(){te(g)},w=function(){var e=L[D];e&&e[1]===o&&delete L[D]},y={isValidating:!0},v(ne().data)&&(y.isLoading=!0),e.prev=12,l&&(te(y),t.loadingTimeout&&v(ne().data)&&setTimeout((function(){c&&h()&&Q().onLoadingSlow(D,t)}),t.loadingTimeout),L[D]=[u(F),J()]),m=(0,a.Z)(L[D],2),i=m[0],o=m[1],e.next=19,i;case 19:if(i=e.sent,l&&setTimeout(w,t.dedupingInterval),L[D]&&L[D][1]===o){e.next=24;break}return l&&h()&&Q().onDiscarded(D),e.abrupt("return",!1);case 24:if(g.error=d,k=R[D],v(k)||!(o<=k[0]||o<=k[1]||0===k[1])){e.next=30;break}return b(),l&&h()&&Q().onDiscarded(D),e.abrupt("return",!1);case 30:_=ne().data,g.data=s(_,i)?_:i,l&&h()&&Q().onSuccess(i,D,t),e.next=41;break;case 35:e.prev=35,e.t0=e.catch(12),w(),E=Q(),S=E.shouldRetryOnError,E.isPaused()||(g.error=e.t0,l&&h()&&(E.onError(e.t0,D,E),(!0===S||p(S)&&S(e.t0))&&X()&&E.onErrorRetry(e.t0,D,E,(function(e){var n=Z[D];n&&n[0]&&n[0](U,e)}),{retryCount:(f.retryCount||0)+1,dedupe:!0})));case 41:return c=!1,b(),e.abrupt("return",!0);case 44:case"end":return e.stop()}}),e,null,[[12,35]])})));return function(n){return e.apply(this,arguments)}}(),[D,f]),Se=(0,o.useCallback)((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return z.apply(void 0,[f,N.current].concat(n))}),[]);if(M((function(){B.current=n,K.current=t,v(pe)||(be.current=pe)})),M((function(){if(D){var e=Ee.bind(d,de),n=0,t=function(e,n,t){var r=n[e]||(n[e]=[]);return r.push(t),function(){var e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}}(D,Z,(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t==$){var u=Date.now();Q().revalidateOnFocus&&u>n&&X()&&(n=u+Q().focusThrottleInterval,e())}else if(t==H)Q().revalidateOnReconnect&&X()&&e();else{if(t==G)return Ee();if(t==U)return Ee(r)}}));return q.current=!1,N.current=D,W.current=!0,te({_k:F}),ye&&(v(he)||P?e():A(e)),function(){q.current=!0,t()}}}),[D]),M((function(){var e;function n(){var n=p(y)?y(ne().data):y;n&&-1!==e&&(e=setTimeout(t,n))}function t(){ne().error||!k&&!Q().isVisible()||!_&&!Q().isOnline()?n():Ee(de).then(n)}return n(),function(){e&&(clearTimeout(e),e=-1)}}),[y,k,_,D]),(0,o.useDebugValue)(we),l&&v(he)&&D){if(!I&&P)throw new Error("Fallback data is required when using suspense in SSR.");B.current=n,K.current=t,q.current=!1;var xe=T[D];if(!v(xe)){var Oe=Se(xe);se(Oe)}if(!v(ge))throw ge;var Ze=Ee(de);v(we)||(Ze.status="fulfilled",Ze.value=!0),se(Ze)}return{mutate:Se,get data(){return ie.data=!0,we},get error(){return ie.error=!0,ge},get isValidating(){return ie.isValidating=!0,ke},get isLoading(){return ie.isLoading=!0,_e}}},function(){for(var e=h(te,(0,o.useContext)(ue)),n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];for(var u=oe(t),i=(0,a.Z)(u,3),c=i[0],f=i[1],s=i[2],d=re(e,s),l=fe,v=(d.use||[]).concat(ce),p=v.length;p--;)l=v[p](l);return l(c,f||d.fetcher||null,d)})}}]);