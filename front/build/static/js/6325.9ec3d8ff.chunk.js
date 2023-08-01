"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[6325],{13490:function(e,t,o){var a=o(4942),r=o(63366),i=o(87462),n=o(47313),l=(o(96214),o(83061)),c=o(21921),s=o(17592),d=o(77342),u=o(83382),p=o(63585),v=o(32828),f=o(46417),m=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],g={small:-16,medium:null},h=(0,s.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(e,t){return(0,i.Z)((0,a.Z)({},"& .".concat(v.Z.avatar),t.avatar),t.root)}})((function(e){var t,o=e.theme;return t={},(0,a.Z)(t,"& .".concat(u.Z.root),{border:"2px solid ".concat((o.vars||o).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),(0,a.Z)(t,"display","flex"),(0,a.Z)(t,"flexDirection","row-reverse"),t})),Z=(0,s.ZP)(p.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})((function(e){var t=e.theme;return{border:"2px solid ".concat((t.vars||t).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),b=n.forwardRef((function(e,t){var o,a=(0,d.Z)({props:e,name:"MuiAvatarGroup"}),s=a.children,u=a.className,p=a.component,b=void 0===p?"div":p,x=a.componentsProps,y=void 0===x?{}:x,R=a.max,z=void 0===R?5:R,C=a.slotProps,k=void 0===C?{}:C,w=a.spacing,T=void 0===w?"medium":w,N=a.total,W=a.variant,L=void 0===W?"circular":W,M=(0,r.Z)(a,m),O=z<2?2:z,S=(0,i.Z)({},a,{max:z,spacing:T,component:b,variant:L}),B=function(e){var t=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"]},v.m,t)}(S),A=n.Children.toArray(s).filter((function(e){return n.isValidElement(e)})),P=N||A.length;P===O&&(O+=1),O=Math.min(P+1,O);var _=Math.min(A.length,O-1),F=Math.max(P-O,P-_,0),G=T&&void 0!==g[T]?g[T]:-T,j=null!=(o=k.additionalAvatar)?o:y.additionalAvatar;return(0,f.jsxs)(h,(0,i.Z)({as:b,ownerState:S,className:(0,l.Z)(B.root,u),ref:t},M,{children:[F?(0,f.jsxs)(Z,(0,i.Z)({ownerState:S,variant:L},j,{className:(0,l.Z)(B.avatar,null==j?void 0:j.className),style:(0,i.Z)({marginLeft:G},null==j?void 0:j.style),children:["+",F]})):null,A.slice(0,_).reverse().map((function(e,t){return n.cloneElement(e,{className:(0,l.Z)(e.props.className,B.avatar),style:(0,i.Z)({marginLeft:t===_-1?void 0:G},e.props.style),variant:e.props.variant||L})}))]}))}));t.Z=b},2312:function(e,t,o){var a=o(4942),r=o(63366),i=o(87462),n=o(47313),l=o(83061),c=o(21921),s=o(17551),d=o(38743),u=o(91615),p=o(77342),v=o(17592),f=o(55424),m=o(46417),g=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],h=(0,v.ZP)(d.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["size".concat((0,u.Z)(o.size))]]}})((function(e){var t,o,r=e.theme,n=e.ownerState,l="standard"===n.color?r.palette.text.primary:r.palette[n.color].main;return r.vars&&(l="standard"===n.color?r.vars.palette.text.primary:r.vars.palette[n.color].main,o="standard"===n.color?r.vars.palette.text.primaryChannel:r.vars.palette[n.color].mainChannel),(0,i.Z)({},r.typography.button,{borderRadius:(r.vars||r).shape.borderRadius,padding:11,border:"1px solid ".concat((r.vars||r).palette.divider),color:(r.vars||r).palette.action.active},n.fullWidth&&{width:"100%"},(t={},(0,a.Z)(t,"&.".concat(f.Z.disabled),{color:(r.vars||r).palette.action.disabled,border:"1px solid ".concat((r.vars||r).palette.action.disabledBackground)}),(0,a.Z)(t,"&:hover",{textDecoration:"none",backgroundColor:r.vars?"rgba(".concat(r.vars.palette.text.primaryChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(r.palette.text.primary,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),(0,a.Z)(t,"&.".concat(f.Z.selected),{color:l,backgroundColor:r.vars?"rgba(".concat(o," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(l,r.palette.action.selectedOpacity),"&:hover":{backgroundColor:r.vars?"rgba(".concat(o," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,s.Fq)(l,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:r.vars?"rgba(".concat(o," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(l,r.palette.action.selectedOpacity)}}}),t),"small"===n.size&&{padding:7,fontSize:r.typography.pxToRem(13)},"large"===n.size&&{padding:15,fontSize:r.typography.pxToRem(15)})})),Z=n.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiToggleButton"}),a=o.children,n=o.className,s=o.color,d=void 0===s?"standard":s,v=o.disabled,Z=void 0!==v&&v,b=o.disableFocusRipple,x=void 0!==b&&b,y=o.fullWidth,R=void 0!==y&&y,z=o.onChange,C=o.onClick,k=o.selected,w=o.size,T=void 0===w?"medium":w,N=o.value,W=(0,r.Z)(o,g),L=(0,i.Z)({},o,{color:d,disabled:Z,disableFocusRipple:x,fullWidth:R,size:T}),M=function(e){var t=e.classes,o=e.fullWidth,a=e.selected,r=e.disabled,i=e.size,n=e.color,l={root:["root",a&&"selected",r&&"disabled",o&&"fullWidth","size".concat((0,u.Z)(i)),n]};return(0,c.Z)(l,f.a,t)}(L);return(0,m.jsx)(h,(0,i.Z)({className:(0,l.Z)(M.root,n),disabled:Z,focusRipple:!x,ref:t,onClick:function(e){C&&(C(e,N),e.defaultPrevented)||z&&z(e,N)},onChange:z,value:N,ownerState:L,"aria-pressed":k},W,{children:a}))}));t.Z=Z},78770:function(e,t,o){o.d(t,{Z:function(){return x}});var a=o(4942),r=o(63366),i=o(87462),n=o(47313),l=(o(96214),o(83061)),c=o(21921),s=o(17592),d=o(77342),u=o(91615);function p(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var v=o(77430),f=o(32298);function m(e){return(0,f.Z)("MuiToggleButtonGroup",e)}var g=(0,v.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),h=o(46417),Z=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],b=(0,s.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[(0,a.Z)({},"& .".concat(g.grouped),t.grouped),(0,a.Z)({},"& .".concat(g.grouped),t["grouped".concat((0,u.Z)(o.orientation))]),t.root,"vertical"===o.orientation&&t.vertical,o.fullWidth&&t.fullWidth]}})((function(e){var t=e.ownerState,o=e.theme;return(0,i.Z)({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},"vertical"===t.orientation&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},(0,a.Z)({},"& .".concat(g.grouped),(0,i.Z)({},"horizontal"===t.orientation?(0,a.Z)({"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&.".concat(g.selected," + .").concat(g.grouped,".").concat(g.selected),{borderLeft:0,marginLeft:0}):(0,a.Z)({"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}},"&.".concat(g.selected," + .").concat(g.grouped,".").concat(g.selected),{borderTop:0,marginTop:0}))))})),x=n.forwardRef((function(e,t){var o=(0,d.Z)({props:e,name:"MuiToggleButtonGroup"}),a=o.children,s=o.className,v=o.color,f=void 0===v?"standard":v,g=o.disabled,x=void 0!==g&&g,y=o.exclusive,R=void 0!==y&&y,z=o.fullWidth,C=void 0!==z&&z,k=o.onChange,w=o.orientation,T=void 0===w?"horizontal":w,N=o.size,W=void 0===N?"medium":N,L=o.value,M=(0,r.Z)(o,Z),O=(0,i.Z)({},o,{disabled:x,fullWidth:C,orientation:T,size:W}),S=function(e){var t=e.classes,o=e.orientation,a=e.fullWidth,r=e.disabled,i={root:["root","vertical"===o&&"vertical",a&&"fullWidth"],grouped:["grouped","grouped".concat((0,u.Z)(o)),r&&"disabled"]};return(0,c.Z)(i,m,t)}(O),B=function(e,t){if(k){var o,a=L&&L.indexOf(t);L&&a>=0?(o=L.slice()).splice(a,1):o=L?L.concat(t):[t],k(e,o)}},A=function(e,t){k&&k(e,L===t?null:t)};return(0,h.jsx)(b,(0,i.Z)({role:"group",className:(0,l.Z)(S.root,s),ref:t,ownerState:O},M,{children:n.Children.map(a,(function(e){return n.isValidElement(e)?n.cloneElement(e,{className:(0,l.Z)(S.grouped,e.props.className),onChange:R?A:B,selected:void 0===e.props.selected?p(e.props.value,L):e.props.selected,size:e.props.size||W,fullWidth:C,color:e.props.color||f,disabled:e.props.disabled||x}):null}))}))}))}}]);