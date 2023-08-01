"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[3665],{13665:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var a=t(65964),r=t(29439),i=t(47313),o=t(82403),s=t(57829),c=t(47825),u=t(396),l=t(41493),d=t(76025),f=t(14368),h=t(64332),m=t(46417),p=["standard","primary","secondary","info","success","warning","error"],x=["small","medium","large"];function g(){var n=(0,i.useState)(2),e=(0,r.Z)(n,2),t=e[0],a=e[1],g=(0,i.useState)(10),Z=(0,r.Z)(g,2),v=Z[0],b=Z[1],j=(0,i.useCallback)((function(n,e){a(e)}),[]),y=(0,i.useCallback)((function(n){b(parseInt(n.target.value,10)),a(0)}),[]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s.Z,{sx:{py:5,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:(0,m.jsx)(c.Z,{children:(0,m.jsx)(f.Z,{heading:"Pagination",links:[{name:"Components",href:d.H.components},{name:"Pagination"}],moreLink:["https://mui.com/components/pagination"]})})}),(0,m.jsx)(c.Z,{sx:{my:10},children:(0,m.jsxs)(o.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,m.jsxs)(h.Z,{title:"Circular",children:[(0,m.jsx)(u.Z,{shape:"circular",count:10,variant:"text"}),(0,m.jsx)(u.Z,{shape:"circular",count:10,variant:"text",disabled:!0}),(0,m.jsx)(u.Z,{shape:"circular",count:10,variant:"outlined"}),(0,m.jsx)(u.Z,{shape:"circular",count:10,variant:"outlined",disabled:!0}),(0,m.jsx)(u.Z,{shape:"circular",count:10,variant:"soft"}),(0,m.jsx)(u.Z,{shape:"circular",count:10,variant:"soft",disabled:!0})]}),(0,m.jsxs)(h.Z,{title:"Rounded",children:[(0,m.jsx)(u.Z,{shape:"rounded",count:10,variant:"text"}),(0,m.jsx)(u.Z,{shape:"rounded",count:10,variant:"text",disabled:!0}),(0,m.jsx)(u.Z,{shape:"rounded",count:10,variant:"outlined"}),(0,m.jsx)(u.Z,{shape:"rounded",count:10,variant:"outlined",disabled:!0}),(0,m.jsx)(u.Z,{shape:"rounded",count:10,variant:"soft"}),(0,m.jsx)(u.Z,{shape:"rounded",count:10,variant:"soft",disabled:!0})]}),(0,m.jsxs)(h.Z,{title:"Colors",children:[p.map((function(n){return(0,m.jsx)(u.Z,{color:n,count:10,variant:"text"},n)})),p.map((function(n){return(0,m.jsx)(u.Z,{color:n,count:10,variant:"outlined"},n)})),p.map((function(n){return(0,m.jsx)(u.Z,{color:n,count:10,variant:"soft"},n)}))]}),(0,m.jsx)(h.Z,{title:"Sizes",children:x.map((function(n){return(0,m.jsx)(u.Z,{count:10,size:n},n)}))}),(0,m.jsxs)(h.Z,{title:"Buttons",children:[(0,m.jsx)(u.Z,{count:10,showFirstButton:!0,showLastButton:!0}),(0,m.jsx)(u.Z,{count:10,hidePrevButton:!0,hideNextButton:!0})]}),(0,m.jsxs)(h.Z,{title:"Ranges",children:[(0,m.jsx)(u.Z,{count:11,defaultPage:6,siblingCount:0}),(0,m.jsx)(u.Z,{count:11,defaultPage:6}),(0,m.jsx)(u.Z,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),(0,m.jsx)(u.Z,{count:11,defaultPage:6,boundaryCount:2})]}),(0,m.jsx)(h.Z,{title:"Table",children:(0,m.jsx)(l.Z,{component:"div",count:100,page:t,onPageChange:j,rowsPerPage:v,onRowsPerPageChange:y})})]})})]})}function Z(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.ql,{children:(0,m.jsx)("title",{children:" MUI: Pagination"})}),(0,m.jsx)(g,{})]})}},64332:function(n,e,t){t.d(e,{Z:function(){return d}});var a=t(1413),r=t(45987),i=t(17551),o=t(61792),s=t(54641),c=t(42832),u=t(46417),l=["title","sx","children"];function d(n){var e=n.title,t=n.sx,d=n.children,f=(0,r.Z)(n,l);return(0,u.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(n){return(0,i.Fq)(n.palette.grey[500],.04)}},children:[e&&(0,u.jsx)(s.Z,{title:e}),(0,u.jsx)(c.Z,(0,a.Z)((0,a.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,a.Z)({p:5,minHeight:180},t)},f),{},{children:d}))]})}},82403:function(n,e,t){t.d(e,{ZP:function(){return N}});var a=t(93433),r=t(29439),i=t(63366),o=t(87462),s=t(21921),c=t(1168),u=t(17592),l=t(77342),d=t(54929),f=t(86886),h=t(13019),m=t(55094),p=t(71577),x=t(83061),g=t(47313),Z=t(32298);function v(n){return(0,Z.Z)("MuiMasonry",n)}(0,t(77430).Z)("MuiMasonry",["root"]);var b=t(46417),j=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],y=function(n){return Number(n.replace("px",""))},w={flexBasis:"100%",width:0,margin:0,padding:0},C=(0,u.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(n,e){return[e.root]}})((function(n){var e=n.ownerState,t=n.theme,a={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},r={};if(e.isSSR){for(var i={},s=y(t.spacing(e.defaultSpacing)),c=1;c<=e.defaultColumns;c+=1)i["&:nth-of-type(".concat(e.defaultColumns,"n+").concat(c%e.defaultColumns,")")]={order:c};return r.height=e.defaultHeight,r.margin=-s/2,r["& > *"]=(0,o.Z)({},a["& > *"],i,{margin:s/2,width:"calc(".concat((100/e.defaultColumns).toFixed(2),"% - ").concat(s,"px)")}),(0,o.Z)({},a,r)}var u=(0,d.P$)({values:e.spacing,breakpoints:t.breakpoints.values}),l=(0,f.hB)(t);a=(0,h.Z)(a,(0,d.k9)({theme:t},u,(function(n){var t;if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n){var a=Number(n);t=(0,f.NA)(l,a)}else t=n;return(0,o.Z)({margin:"calc(0px - (".concat(t," / 2))"),"& > *":{margin:"calc(".concat(t," / 2)")}},e.maxColumnHeight&&{height:"number"===typeof t?Math.ceil(e.maxColumnHeight+y(t)):"calc(".concat(e.maxColumnHeight,"px + ").concat(t,")")})})));var m=(0,d.P$)({values:e.columns,breakpoints:t.breakpoints.values});return a=(0,h.Z)(a,(0,d.k9)({theme:t},m,(function(n){var e=Number(n),t="".concat((100/e).toFixed(2),"%"),a="string"===typeof u&&!Number.isNaN(Number(u))||"number"===typeof u?(0,f.NA)(l,Number(u)):"0px";return{"& > *":{width:"calc(".concat(t," - ").concat(a,")")}}}))),"object"===typeof u&&(a=(0,h.Z)(a,(0,d.k9)({theme:t},u,(function(n,e){if(e){var t=Number(n),a=Object.keys(m).pop(),r=(0,f.NA)(l,t),i="object"===typeof m?m[e]||m[a]:m,o="".concat((100/i).toFixed(2),"%");return{"& > *":{width:"calc(".concat(o," - ").concat(r,")")}}}return null})))),a})),N=g.forwardRef((function(n,e){var t=(0,l.Z)({props:n,name:"MuiMasonry"}),u=t.children,d=t.className,f=t.component,h=void 0===f?"div":f,Z=t.columns,N=void 0===Z?4:Z,k=t.spacing,S=void 0===k?1:k,M=t.defaultColumns,P=t.defaultHeight,R=t.defaultSpacing,H=(0,i.Z)(t,j),F=g.useRef(),_=g.useState(),B=(0,r.Z)(_,2),A=B[0],z=B[1],E=!A&&P&&void 0!==M&&void 0!==R,O=g.useState(E?M-1:0),I=(0,r.Z)(O,2),L=I[0],T=I[1],q=(0,o.Z)({},t,{spacing:S,columns:N,maxColumnHeight:A,defaultColumns:M,defaultHeight:P,defaultSpacing:R,isSSR:E}),W=function(n){var e=n.classes;return(0,s.Z)({root:["root"]},v,e)}(q),$=function(n){if(F.current&&n&&0!==n.length){var e=F.current,t=F.current.firstChild,r=e.clientWidth,i=t.clientWidth;if(0!==r&&0!==i){var o=window.getComputedStyle(t),s=y(o.marginLeft),u=y(o.marginRight),l=Math.round(r/(i+s+u)),d=new Array(l).fill(0),f=!1;e.childNodes.forEach((function(n){if(n.nodeType===Node.ELEMENT_NODE&&"line-break"!==n.dataset.class&&!f){var e=window.getComputedStyle(n),t=y(e.marginTop),r=y(e.marginBottom),i=y(e.height)?Math.ceil(y(e.height))+t+r:0;if(0!==i){for(var o=0;o<n.childNodes.length;o+=1){var s=n.childNodes[o];if("IMG"===s.tagName&&0===s.clientHeight){f=!0;break}}if(!f){var c=d.indexOf(Math.min.apply(Math,(0,a.Z)(d)));d[c]+=i;var u=c+1;n.style.order=u}}else f=!0}})),f||c.flushSync((function(){z(Math.max.apply(Math,(0,a.Z)(d))),T(l>0?l-1:0)}))}}};(0,m.Z)((function(){if("undefined"!==typeof ResizeObserver){var n,e=new ResizeObserver((function(){n=window.requestAnimationFrame($)}));return F.current&&F.current.childNodes.forEach((function(n){e.observe(n)})),function(){n&&window.cancelAnimationFrame(n),e&&e.disconnect()}}}),[N,S,u]);var D=(0,p.Z)(e,F),G=new Array(L).fill("").map((function(n,e){return(0,b.jsx)("span",{"data-class":"line-break",style:(0,o.Z)({},w,{order:e+1})},e)}));return(0,b.jsxs)(C,(0,o.Z)({as:h,className:(0,x.Z)(W.root,d),ref:D,ownerState:q},H,{children:[u,G]}))}))}}]);