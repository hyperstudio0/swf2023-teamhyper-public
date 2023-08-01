"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[9585],{89585:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var r=n(65964),i=n(57829),o=n(61792),a=n(42832),s=n(47825),c=n(76025),l=n(14368),d=n(29439),u=n(1413),h=n(4942),p=n(47313),x=n(17592),Z=n(17551),m=n(78490),f=n(71003),j=n(54982),g=n(40426),v=n(47605),S=n(80123),w=n(29701),y=n(93999),C=n(35736),b=n(46417),k=["Select campaign settings","Create an ad group","Create an ad"],F=(0,x.ZP)(S.Z)((function(e){var t,n=e.theme;return t={},(0,h.Z)(t,"&.".concat(w.Z.alternativeLabel),{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"}),(0,h.Z)(t,"&.".concat(w.Z.active),(0,h.Z)({},"& .".concat(w.Z.line),{borderColor:n.palette.success.main})),(0,h.Z)(t,"&.".concat(w.Z.completed),(0,h.Z)({},"& .".concat(w.Z.line),{borderColor:n.palette.success.main})),(0,h.Z)(t,"& .".concat(w.Z.line),{borderRadius:1,borderTopWidth:3,borderColor:n.palette.divider}),t})),I=(0,x.ZP)("div")((function(e){var t=e.theme,n=e.ownerState;return(0,u.Z)((0,u.Z)({height:22,display:"flex",alignItems:"center",color:t.palette.text.disabled},n.active&&{color:t.palette.success.main}),{},{"& .QontoStepIcon-completedIcon":{zIndex:1,fontSize:18,color:t.palette.success.main},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})}));function L(e){var t=e.active,n=e.completed,r=e.className;return(0,b.jsx)(I,{ownerState:{active:t},className:r,children:n?(0,b.jsx)(C.Z,{icon:"eva:checkmark-fill",className:"QontoStepIcon-completedIcon",width:24,height:24}):(0,b.jsx)("div",{className:"QontoStepIcon-circle"})})}var R=(0,x.ZP)(S.Z)((function(e){var t,n=e.theme;return t={},(0,h.Z)(t,"&.".concat(w.Z.alternativeLabel),{top:22}),(0,h.Z)(t,"&.".concat(w.Z.active),(0,h.Z)({},"& .".concat(w.Z.line),(0,u.Z)({},(0,y.v3)({startColor:n.palette.error.light,endColor:n.palette.error.main})))),(0,h.Z)(t,"&.".concat(w.Z.completed),(0,h.Z)({},"& .".concat(w.Z.line),(0,u.Z)({},(0,y.v3)({startColor:n.palette.error.light,endColor:n.palette.error.main})))),(0,h.Z)(t,"& .".concat(w.Z.line),{height:3,border:0,borderRadius:1,backgroundColor:n.palette.divider}),t})),N=(0,x.ZP)("div")((function(e){var t=e.theme,n=e.ownerState;return(0,u.Z)((0,u.Z)({zIndex:1,width:50,height:50,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:t.palette.text.disabled,backgroundColor:"light"===t.palette.mode?t.palette.grey[300]:t.palette.grey[700]},n.active&&(0,u.Z)({boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)",color:t.palette.common.white},(0,y.v3)({startColor:t.palette.error.light,endColor:t.palette.error.main}))),n.completed&&(0,u.Z)({color:t.palette.common.white},(0,y.v3)({startColor:t.palette.error.light,endColor:t.palette.error.main})))}));function q(e){var t=e.active,n=e.completed,r=e.className,i=e.icon,o={1:(0,b.jsx)(C.Z,{icon:"eva:settings-2-outline",width:24}),2:(0,b.jsx)(C.Z,{icon:"eva:person-add-outline",width:24}),3:(0,b.jsx)(C.Z,{icon:"eva:monitor-outline",width:24})};return(0,b.jsx)(N,{ownerState:{completed:n,active:t},className:r,children:o[String(i)]})}function H(e){switch(e){case 0:return"Select campaign settings...";case 1:return"What is an ad group anyways?";case 2:return"This is the bit I really care about!";default:return"Unknown step"}}function A(){var e=(0,p.useState)(0),t=(0,d.Z)(e,2),n=t[0],r=t[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(j.Z,{alternativeLabel:!0,activeStep:n,connector:(0,b.jsx)(F,{}),children:k.map((function(e){return(0,b.jsx)(m.Z,{children:(0,b.jsx)(g.Z,{StepIconComponent:L,children:e})},e)}))}),(0,b.jsx)(i.Z,{sx:{mb:5}}),(0,b.jsx)(j.Z,{alternativeLabel:!0,activeStep:n,connector:(0,b.jsx)(R,{}),children:k.map((function(e){return(0,b.jsx)(m.Z,{children:(0,b.jsx)(g.Z,{StepIconComponent:q,children:e})},e)}))}),n===k.length?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:function(e){return(0,Z.Fq)(e.palette.grey[500],.12)}},children:(0,b.jsx)(v.Z,{sx:{my:1},children:"All steps completed - you're finished"})}),(0,b.jsx)(f.Z,{color:"inherit",onClick:function(){r(0)},sx:{mr:1},children:"Reset"})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:function(e){return(0,Z.Fq)(e.palette.grey[500],.12)}},children:(0,b.jsx)(v.Z,{sx:{my:1},children:H(n)})}),(0,b.jsxs)(i.Z,{sx:{textAlign:"right"},children:[(0,b.jsx)(f.Z,{disabled:0===n,onClick:function(){r((function(e){return e-1}))},sx:{mr:1},children:"Back"}),(0,b.jsx)(f.Z,{variant:"contained",onClick:function(){r((function(e){return e+1}))},sx:{mr:1},children:n===k.length-1?"Finish":"Next"})]})]})]})}var P=n(63366),T=n(87462),_=n(83061),M=n(21921),z=n(77342),B=n(65033),G=n(23054),Q=n(70984),E=n(77430),W=n(32298);function D(e){return(0,W.Z)("MuiStepContent",e)}(0,E.Z)("MuiStepContent",["root","last","transition"]);var O=["children","className","TransitionComponent","transitionDuration","TransitionProps"],U=(0,x.ZP)("div",{name:"MuiStepContent",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.last&&t.last]}})((function(e){var t=e.ownerState,n=e.theme;return(0,T.Z)({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:n.vars?"1px solid ".concat(n.vars.palette.StepContent.border):"1px solid ".concat("light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600])},t.last&&{borderLeft:"none"})})),Y=(0,x.ZP)(B.Z,{name:"MuiStepContent",slot:"Transition",overridesResolver:function(e,t){return t.transition}})({}),V=p.forwardRef((function(e,t){var n=(0,z.Z)({props:e,name:"MuiStepContent"}),r=n.children,i=n.className,o=n.TransitionComponent,a=void 0===o?B.Z:o,s=n.transitionDuration,c=void 0===s?"auto":s,l=n.TransitionProps,d=(0,P.Z)(n,O),u=(p.useContext(G.Z).orientation,p.useContext(Q.Z)),h=u.active,x=u.last,Z=u.expanded,m=(0,T.Z)({},n,{last:x}),f=function(e){var t=e.classes,n={root:["root",e.last&&"last"],transition:["transition"]};return(0,M.Z)(n,D,t)}(m);var j=c;return"auto"!==c||a.muiSupportAuto||(j=void 0),(0,b.jsx)(U,(0,T.Z)({className:(0,_.Z)(f.root,i),ref:t,ownerState:m},d,{children:(0,b.jsx)(Y,(0,T.Z)({as:a,in:h||Z,className:f.transition,ownerState:m,timeout:j,unmountOnExit:!0},l,{children:r}))}))})),J=[{label:"Select campaign settings",description:"For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more."},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:"Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues."}];function K(){var e=(0,p.useState)(0),t=(0,d.Z)(e,2),n=t[0],r=t[1],a=function(){r((function(e){return e+1}))},s=function(){r((function(e){return e-1}))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(j.Z,{activeStep:n,orientation:"vertical",children:J.map((function(e,t){return(0,b.jsxs)(m.Z,{children:[(0,b.jsx)(g.Z,{optional:2===t?(0,b.jsx)(v.Z,{variant:"caption",children:"Last step"}):null,children:e.label}),(0,b.jsxs)(V,{children:[(0,b.jsx)(v.Z,{children:e.description}),(0,b.jsxs)(i.Z,{sx:{mt:3},children:[(0,b.jsx)(f.Z,{variant:"contained",onClick:a,children:t===J.length-1?"Finish":"Continue"}),(0,b.jsx)(f.Z,{disabled:0===t,onClick:s,children:"Back"})]})]})]},e.label)}))}),n===J.length&&(0,b.jsxs)(o.Z,{sx:{p:3,mt:3,bgcolor:function(e){return(0,Z.Fq)(e.palette.grey[500],.12)}},children:[(0,b.jsx)(v.Z,{sx:{mb:2},children:"All steps completed - you're finished"}),(0,b.jsx)(f.Z,{onClick:function(){r(0)},children:"Reset"})]})]})}var X=["Select campaign settings","Create an ad group","Create an ad"];function $(){var e=(0,p.useState)(0),t=(0,d.Z)(e,2),n=t[0],r=t[1],a=(0,p.useState)(new Set),s=(0,d.Z)(a,2),c=s[0],l=s[1],h=function(e){return 1===e},x=function(e){return c.has(e)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(j.Z,{activeStep:n,children:X.map((function(e,t){var n={},r={};return h(t)&&(r.optional=(0,b.jsx)(v.Z,{variant:"caption",children:"Optional"})),x(t)&&(n.completed=!1),(0,b.jsx)(m.Z,(0,u.Z)((0,u.Z)({},n),{},{children:(0,b.jsx)(g.Z,(0,u.Z)((0,u.Z)({},r),{},{children:e}))}),e)}))}),n===X.length?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:function(e){return(0,Z.Fq)(e.palette.grey[500],.12)}},children:(0,b.jsx)(v.Z,{sx:{my:1},children:"All steps completed - you're finished"})}),(0,b.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,b.jsx)(i.Z,{sx:{flexGrow:1}}),(0,b.jsx)(f.Z,{onClick:function(){r(0)},children:"Reset"})]})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:function(e){return(0,Z.Fq)(e.palette.grey[500],.12)}},children:(0,b.jsxs)(v.Z,{sx:{my:1},children:[" Step ",n+1]})}),(0,b.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,b.jsx)(f.Z,{color:"inherit",disabled:0===n,onClick:function(){r((function(e){return e-1}))},sx:{mr:1},children:"Back"}),(0,b.jsx)(i.Z,{sx:{flexGrow:1}}),h(n)&&(0,b.jsx)(f.Z,{color:"inherit",onClick:function(){if(!h(n))throw new Error("You can't skip a step that isn't optional.");r((function(e){return e+1})),l((function(e){var t=new Set(e.values());return t.add(n),t}))},sx:{mr:1},children:"Skip"}),(0,b.jsx)(f.Z,{variant:"contained",onClick:function(){var e=c;x(n)&&(e=new Set(e.values())).delete(n),r((function(e){return e+1})),l(e)},children:n===X.length-1?"Finish":"Next"})]})]})]})}var ee=["Select campaign settings","Create an ad group","Create an ad"];function te(){var e=(0,p.useState)(0),t=(0,d.Z)(e,2),n=t[0],r=t[1],a=(0,p.useState)(new Set),s=(0,d.Z)(a,2),c=s[0],l=s[1],h=function(e){return 1===e},x=function(e){return c.has(e)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(j.Z,{activeStep:n,alternativeLabel:!0,children:ee.map((function(e,t){var n={};return x(t)&&(n.completed=!1),(0,b.jsx)(m.Z,(0,u.Z)((0,u.Z)({},n),{},{children:(0,b.jsx)(g.Z,(0,u.Z)((0,u.Z)({},{}),{},{children:e}))}),e)}))}),n===ee.length?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:function(e){return(0,Z.Fq)(e.palette.grey[500],.12)}},children:(0,b.jsx)(v.Z,{sx:{my:1},children:"All steps completed - you're finished"})}),(0,b.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,b.jsx)(i.Z,{sx:{flexGrow:1}}),(0,b.jsx)(f.Z,{onClick:function(){r(0)},children:"Reset"})]})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:function(e){return(0,Z.Fq)(e.palette.grey[500],.12)}},children:(0,b.jsxs)(v.Z,{sx:{my:1},children:[" Step ",n+1]})}),(0,b.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,b.jsx)(f.Z,{color:"inherit",disabled:0===n,onClick:function(){r((function(e){return e-1}))},sx:{mr:1},children:"Back"}),(0,b.jsx)(i.Z,{sx:{flexGrow:1}}),h(n)&&(0,b.jsx)(f.Z,{color:"inherit",onClick:function(){if(!h(n))throw new Error("You can't skip a step that isn't optional.");r((function(e){return e+1})),l((function(e){var t=new Set(e.values());return t.add(n),t}))},sx:{mr:1},children:"Skip"}),(0,b.jsx)(f.Z,{variant:"contained",onClick:function(){var e=c;x(n)&&(e=new Set(e.values())).delete(n),r((function(e){return e+1})),l(e)},children:n===ee.length-1?"Finish":"Next"})]})]})]})}var ne=n(64332);function re(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,b.jsx)(s.Z,{children:(0,b.jsx)(l.Z,{heading:"Stepper",links:[{name:"Components",href:c.H.components},{name:"Stepper"}],moreLink:["https://mui.com/components/steppers"]})})}),(0,b.jsx)(s.Z,{sx:{my:10},children:(0,b.jsxs)(a.Z,{spacing:3,children:[(0,b.jsx)(ne.Z,{title:"Horizontal Linear Stepper",children:(0,b.jsx)(o.Z,{variant:"outlined",sx:{p:3,width:1},children:(0,b.jsx)($,{})})}),(0,b.jsx)(ne.Z,{title:"Linear Alternative Label",children:(0,b.jsx)(o.Z,{variant:"outlined",sx:{p:3,width:1},children:(0,b.jsx)(te,{})})}),(0,b.jsx)(ne.Z,{title:"Vertical Linear Stepper",children:(0,b.jsx)(o.Z,{variant:"outlined",sx:{p:3,width:1},children:(0,b.jsx)(K,{})})}),(0,b.jsx)(ne.Z,{title:"Customized Stepper",children:(0,b.jsx)(o.Z,{variant:"outlined",sx:{p:3,width:1},children:(0,b.jsx)(A,{})})})]})})]})}function ie(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r.ql,{children:(0,b.jsx)("title",{children:" MUI: Stepper"})}),(0,b.jsx)(re,{})]})}},64332:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1413),i=n(45987),o=n(17551),a=n(61792),s=n(54641),c=n(42832),l=n(46417),d=["title","sx","children"];function u(e){var t=e.title,n=e.sx,u=e.children,h=(0,i.Z)(e,d);return(0,l.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,o.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,l.jsx)(s.Z,{title:t}),(0,l.jsx)(c.Z,(0,r.Z)((0,r.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,r.Z)({p:5,minHeight:180},n)},h),{},{children:u}))]})}}}]);