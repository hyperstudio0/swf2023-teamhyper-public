"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[636],{30636:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var o=n(65964),r=n(82403),i=n(17551),a=n(57829),l=n(60636),s=n(71003),c=n(47825),u=n(33249),d=n(76025),h=n(14368),f=n(64332),m=n(46417),p=["info","success","warning","error"];function v(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,m.jsx)(c.Z,{children:(0,m.jsx)(h.Z,{heading:"Alert",links:[{name:"Components",href:d.H.components},{name:"Alert"}],moreLink:["https://mui.com/components/alert"]})})}),(0,m.jsx)(c.Z,{sx:{my:10},children:(0,m.jsxs)(r.ZP,{columns:{xs:1,sm:2},spacing:3,children:[(0,m.jsx)(f.Z,{title:"Standard",children:p.map((function(e){return(0,m.jsxs)(l.Z,{severity:e,onClose:function(){},sx:{width:1},children:["This is an ",e," alert \u2014 check it out!"]},e)}))}),(0,m.jsx)(f.Z,{title:"Filled",children:p.map((function(e){return(0,m.jsxs)(l.Z,{severity:e,variant:"filled",onClose:function(){},sx:{width:1},children:["This is an ",e," alert \u2014 check it out!"]},e)}))}),(0,m.jsx)(f.Z,{title:"Outlined",children:p.map((function(e){return(0,m.jsxs)(l.Z,{severity:e,variant:"outlined",onClose:function(){},sx:{width:1},children:["This is an ",e," alert \u2014 check it out!"]},e)}))}),(0,m.jsx)(f.Z,{title:"Description",children:p.map((function(e){return(0,m.jsxs)(l.Z,{severity:e,onClose:function(){},sx:{width:1},children:[(0,m.jsxs)(u.Z,{sx:{textTransform:"capitalize"},children:[" ",e," "]}),"This is an ",e," alert \u2014 ",(0,m.jsx)("strong",{children:"check it out!"})]},e)}))}),(0,m.jsxs)(f.Z,{title:"Actions",children:[(0,m.jsx)(l.Z,{severity:"info",sx:{width:1},action:(0,m.jsx)(s.Z,{color:"info",size:"small",variant:"soft",children:"Action"}),children:"This is an info alert \u2014 check it out!"}),(0,m.jsx)(l.Z,{severity:"info",variant:"filled",sx:{width:1},action:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s.Z,{color:"inherit",size:"small",variant:"outlined",sx:{mr:1,border:function(e){return"1px solid ".concat((0,i.Fq)(e.palette.common.white,.48))}},children:"Undo"}),(0,m.jsx)(s.Z,{size:"small",color:"info",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert \u2014 check it out!"}),(0,m.jsx)(l.Z,{severity:"info",variant:"outlined",sx:{width:1},action:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s.Z,{color:"info",size:"small",variant:"outlined",sx:{mr:1},children:"Undo"}),(0,m.jsx)(s.Z,{color:"info",size:"small",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert \u2014 check it out!"})]})]})})]})}function x(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.ql,{children:(0,m.jsx)("title",{children:" MUI: Alert"})}),(0,m.jsx)(v,{})]})}},64332:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(1413),r=n(45987),i=n(17551),a=n(61792),l=n(54641),s=n(42832),c=n(46417),u=["title","sx","children"];function d(e){var t=e.title,n=e.sx,d=e.children,h=(0,r.Z)(e,u);return(0,c.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,c.jsx)(l.Z,{title:t}),(0,c.jsx)(s.Z,(0,o.Z)((0,o.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,o.Z)({p:5,minHeight:180},n)},h),{},{children:d}))]})}},82403:function(e,t,n){n.d(t,{ZP:function(){return M}});var o=n(93433),r=n(29439),i=n(63366),a=n(87462),l=n(21921),s=n(1168),c=n(17592),u=n(77342),d=n(54929),h=n(86886),f=n(13019),m=n(55094),p=n(71577),v=n(83061),x=n(47313),g=n(32298);function Z(e){return(0,g.Z)("MuiMasonry",e)}(0,n(77430).Z)("MuiMasonry",["root"]);var j=n(46417),y=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],b=function(e){return Number(e.replace("px",""))},C={flexBasis:"100%",width:0,margin:0,padding:0},w=(0,c.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,o={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},r={};if(t.isSSR){for(var i={},l=b(n.spacing(t.defaultSpacing)),s=1;s<=t.defaultColumns;s+=1)i["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(s%t.defaultColumns,")")]={order:s};return r.height=t.defaultHeight,r.margin=-l/2,r["& > *"]=(0,a.Z)({},o["& > *"],i,{margin:l/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(l,"px)")}),(0,a.Z)({},o,r)}var c=(0,d.P$)({values:t.spacing,breakpoints:n.breakpoints.values}),u=(0,h.hB)(n);o=(0,f.Z)(o,(0,d.k9)({theme:n},c,(function(e){var n;if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e){var o=Number(e);n=(0,h.NA)(u,o)}else n=e;return(0,a.Z)({margin:"calc(0px - (".concat(n," / 2))"),"& > *":{margin:"calc(".concat(n," / 2)")}},t.maxColumnHeight&&{height:"number"===typeof n?Math.ceil(t.maxColumnHeight+b(n)):"calc(".concat(t.maxColumnHeight,"px + ").concat(n,")")})})));var m=(0,d.P$)({values:t.columns,breakpoints:n.breakpoints.values});return o=(0,f.Z)(o,(0,d.k9)({theme:n},m,(function(e){var t=Number(e),n="".concat((100/t).toFixed(2),"%"),o="string"===typeof c&&!Number.isNaN(Number(c))||"number"===typeof c?(0,h.NA)(u,Number(c)):"0px";return{"& > *":{width:"calc(".concat(n," - ").concat(o,")")}}}))),"object"===typeof c&&(o=(0,f.Z)(o,(0,d.k9)({theme:n},c,(function(e,t){if(t){var n=Number(e),o=Object.keys(m).pop(),r=(0,h.NA)(u,n),i="object"===typeof m?m[t]||m[o]:m,a="".concat((100/i).toFixed(2),"%");return{"& > *":{width:"calc(".concat(a," - ").concat(r,")")}}}return null})))),o})),M=x.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMasonry"}),c=n.children,d=n.className,h=n.component,f=void 0===h?"div":h,g=n.columns,M=void 0===g?4:g,A=n.spacing,N=void 0===A?1:A,S=n.defaultColumns,k=n.defaultHeight,z=n.defaultSpacing,R=(0,i.Z)(n,y),T=x.useRef(),H=x.useState(),F=(0,r.Z)(H,2),L=F[0],P=F[1],I=!L&&k&&void 0!==S&&void 0!==z,_=x.useState(I?S-1:0),B=(0,r.Z)(_,2),O=B[0],W=B[1],E=(0,a.Z)({},n,{spacing:N,columns:M,maxColumnHeight:L,defaultColumns:S,defaultHeight:k,defaultSpacing:z,isSSR:I}),q=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},Z,t)}(E),$=function(e){if(T.current&&e&&0!==e.length){var t=T.current,n=T.current.firstChild,r=t.clientWidth,i=n.clientWidth;if(0!==r&&0!==i){var a=window.getComputedStyle(n),l=b(a.marginLeft),c=b(a.marginRight),u=Math.round(r/(i+l+c)),d=new Array(u).fill(0),h=!1;t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!h){var t=window.getComputedStyle(e),n=b(t.marginTop),r=b(t.marginBottom),i=b(t.height)?Math.ceil(b(t.height))+n+r:0;if(0!==i){for(var a=0;a<e.childNodes.length;a+=1){var l=e.childNodes[a];if("IMG"===l.tagName&&0===l.clientHeight){h=!0;break}}if(!h){var s=d.indexOf(Math.min.apply(Math,(0,o.Z)(d)));d[s]+=i;var c=s+1;e.style.order=c}}else h=!0}})),h||s.flushSync((function(){P(Math.max.apply(Math,(0,o.Z)(d))),W(u>0?u-1:0)}))}}};(0,m.Z)((function(){if("undefined"!==typeof ResizeObserver){var e,t=new ResizeObserver((function(){e=window.requestAnimationFrame($)}));return T.current&&T.current.childNodes.forEach((function(e){t.observe(e)})),function(){e&&window.cancelAnimationFrame(e),t&&t.disconnect()}}}),[M,N,c]);var U=(0,p.Z)(t,T),V=new Array(O).fill("").map((function(e,t){return(0,j.jsx)("span",{"data-class":"line-break",style:(0,a.Z)({},C,{order:t+1})},t)}));return(0,j.jsxs)(w,(0,a.Z)({as:f,className:(0,v.Z)(q.root,d),ref:U,ownerState:E},R,{children:[c,V]}))}))},60636:function(e,t,n){n.d(t,{Z:function(){return k}});var o=n(4942),r=n(63366),i=n(87462),a=n(47313),l=n(83061),s=n(21921),c=n(17551),u=n(17592),d=n(77342),h=n(91615),f=n(61792),m=n(23774),p=n(47131),v=n(54750),x=n(46417),g=(0,v.Z)((0,x.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Z=(0,v.Z)((0,x.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),j=(0,v.Z)((0,x.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),y=(0,v.Z)((0,x.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),b=n(91251),C=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],w=(0,u.ZP)(f.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,h.Z)(n.color||n.severity))]]}})((function(e){var t=e.theme,n=e.ownerState,r="light"===t.palette.mode?c._j:c.$n,a="light"===t.palette.mode?c.$n:c._j,l=n.color||n.severity;return(0,i.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},l&&"standard"===n.variant&&(0,o.Z)({color:t.vars?t.vars.palette.Alert["".concat(l,"Color")]:r(t.palette[l].light,.6),backgroundColor:t.vars?t.vars.palette.Alert["".concat(l,"StandardBg")]:a(t.palette[l].light,.9)},"& .".concat(m.Z.icon),t.vars?{color:t.vars.palette.Alert["".concat(l,"IconColor")]}:{color:t.palette[l].main}),l&&"outlined"===n.variant&&(0,o.Z)({color:t.vars?t.vars.palette.Alert["".concat(l,"Color")]:r(t.palette[l].light,.6),border:"1px solid ".concat((t.vars||t).palette[l].light)},"& .".concat(m.Z.icon),t.vars?{color:t.vars.palette.Alert["".concat(l,"IconColor")]}:{color:t.palette[l].main}),l&&"filled"===n.variant&&(0,i.Z)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert["".concat(l,"FilledColor")],backgroundColor:t.vars.palette.Alert["".concat(l,"FilledBg")]}:{backgroundColor:"dark"===t.palette.mode?t.palette[l].dark:t.palette[l].main,color:t.palette.getContrastText(t.palette[l].main)}))})),M=(0,u.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),A=(0,u.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),N=(0,u.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),S={success:(0,x.jsx)(g,{fontSize:"inherit"}),warning:(0,x.jsx)(Z,{fontSize:"inherit"}),error:(0,x.jsx)(j,{fontSize:"inherit"}),info:(0,x.jsx)(y,{fontSize:"inherit"})},k=a.forwardRef((function(e,t){var n,o,a,c,u,f,v=(0,d.Z)({props:e,name:"MuiAlert"}),g=v.action,Z=v.children,j=v.className,y=v.closeText,k=void 0===y?"Close":y,z=v.color,R=v.components,T=void 0===R?{}:R,H=v.componentsProps,F=void 0===H?{}:H,L=v.icon,P=v.iconMapping,I=void 0===P?S:P,_=v.onClose,B=v.role,O=void 0===B?"alert":B,W=v.severity,E=void 0===W?"success":W,q=v.slotProps,$=void 0===q?{}:q,U=v.slots,V=void 0===U?{}:U,D=v.variant,G=void 0===D?"standard":D,J=(0,r.Z)(v,C),K=(0,i.Z)({},v,{color:z,severity:E,variant:G}),Q=function(e){var t=e.variant,n=e.color,o=e.severity,r=e.classes,i={root:["root","".concat(t).concat((0,h.Z)(n||o)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return(0,s.Z)(i,m.t,r)}(K),X=null!=(n=null!=(o=V.closeButton)?o:T.CloseButton)?n:p.Z,Y=null!=(a=null!=(c=V.closeIcon)?c:T.CloseIcon)?a:b.Z,ee=null!=(u=$.closeButton)?u:F.closeButton,te=null!=(f=$.closeIcon)?f:F.closeIcon;return(0,x.jsxs)(w,(0,i.Z)({role:O,elevation:0,ownerState:K,className:(0,l.Z)(Q.root,j),ref:t},J,{children:[!1!==L?(0,x.jsx)(M,{ownerState:K,className:Q.icon,children:L||I[E]||S[E]}):null,(0,x.jsx)(A,{ownerState:K,className:Q.message,children:Z}),null!=g?(0,x.jsx)(N,{ownerState:K,className:Q.action,children:g}):null,null==g&&_?(0,x.jsx)(N,{ownerState:K,className:Q.action,children:(0,x.jsx)(X,(0,i.Z)({size:"small","aria-label":k,title:k,color:"inherit",onClick:_},ee,{children:(0,x.jsx)(Y,(0,i.Z)({fontSize:"small"},te))}))}):null]}))}))},33249:function(e,t,n){n.d(t,{Z:function(){return x}});var o=n(87462),r=n(63366),i=n(47313),a=n(83061),l=n(21921),s=n(17592),c=n(77342),u=n(47605),d=n(77430),h=n(32298);function f(e){return(0,h.Z)("MuiAlertTitle",e)}(0,d.Z)("MuiAlertTitle",["root"]);var m=n(46417),p=["className"],v=(0,s.ZP)(u.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{fontWeight:e.theme.typography.fontWeightMedium,marginTop:-2}})),x=i.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiAlertTitle"}),i=n.className,s=(0,r.Z)(n,p),u=n,d=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},f,t)}(u);return(0,m.jsx)(v,(0,o.Z)({gutterBottom:!0,component:"div",ownerState:u,ref:t,className:(0,a.Z)(d.root,i)},s))}))}}]);