"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[7033],{7033:function(e,t,o){o.r(t),o.d(t,{default:function(){return x}});var a=o(65964),r=o(93433),i=o(29439),n=o(47313),l=o(57829),s=o(73428),d=o(47825),c=o(54641),u=o(47605),p=o(2312),v=o(78770),h=o(76025),f=o(53666),m=o(36622),g=o(14368),b=o(46417);function Z(){var e=(0,m.K$)(),t=(0,n.useState)("admin"),o=(0,i.Z)(t,2),a=o[0],Z=o[1],x=(0,n.useCallback)((function(e,t){null!==t&&Z(t)}),[]);return(0,b.jsxs)(d.Z,{maxWidth:!e.themeStretch&&"lg",children:[(0,b.jsx)(g.Z,{heading:"Permission Denied",links:[{name:"Dashboard",href:h.H.dashboard.root},{name:"Permission Denied"}],sx:{mb:{xs:3,md:5}}}),(0,b.jsxs)(v.Z,{exclusive:!0,value:a,size:"small",onChange:x,sx:{mb:5},children:[(0,b.jsx)(p.Z,{value:"admin","aria-label":"admin role",children:"isAdmin"}),(0,b.jsx)(p.Z,{value:"user","aria-label":"user role",children:"isUser"})]}),(0,b.jsx)(f.jx,{hasContent:!0,roles:[a],sx:{py:10},children:(0,b.jsx)(l.Z,{gap:3,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:(0,r.Z)(Array(8)).map((function(e,t){return(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(c.Z,{title:"Card ".concat(t+1),subheader:"Proin viverra ligula"}),(0,b.jsx)(u.Z,{variant:"body2",sx:{px:3,py:2,color:"text.secondary"},children:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Vestibulum fringilla pede sit amet augue."})]},t)}))})})]})}function x(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.ql,{children:(0,b.jsx)("title",{children:" Dashboard: Permission Denied"})}),(0,b.jsx)(Z,{})]})}},2312:function(e,t,o){var a=o(4942),r=o(63366),i=o(87462),n=o(47313),l=o(83061),s=o(21921),d=o(17551),c=o(38743),u=o(91615),p=o(77342),v=o(17592),h=o(55424),f=o(46417),m=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],g=(0,v.ZP)(c.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["size".concat((0,u.Z)(o.size))]]}})((function(e){var t,o,r=e.theme,n=e.ownerState,l="standard"===n.color?r.palette.text.primary:r.palette[n.color].main;return r.vars&&(l="standard"===n.color?r.vars.palette.text.primary:r.vars.palette[n.color].main,o="standard"===n.color?r.vars.palette.text.primaryChannel:r.vars.palette[n.color].mainChannel),(0,i.Z)({},r.typography.button,{borderRadius:(r.vars||r).shape.borderRadius,padding:11,border:"1px solid ".concat((r.vars||r).palette.divider),color:(r.vars||r).palette.action.active},n.fullWidth&&{width:"100%"},(t={},(0,a.Z)(t,"&.".concat(h.Z.disabled),{color:(r.vars||r).palette.action.disabled,border:"1px solid ".concat((r.vars||r).palette.action.disabledBackground)}),(0,a.Z)(t,"&:hover",{textDecoration:"none",backgroundColor:r.vars?"rgba(".concat(r.vars.palette.text.primaryChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(r.palette.text.primary,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),(0,a.Z)(t,"&.".concat(h.Z.selected),{color:l,backgroundColor:r.vars?"rgba(".concat(o," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(l,r.palette.action.selectedOpacity),"&:hover":{backgroundColor:r.vars?"rgba(".concat(o," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,d.Fq)(l,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:r.vars?"rgba(".concat(o," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(l,r.palette.action.selectedOpacity)}}}),t),"small"===n.size&&{padding:7,fontSize:r.typography.pxToRem(13)},"large"===n.size&&{padding:15,fontSize:r.typography.pxToRem(15)})})),b=n.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiToggleButton"}),a=o.children,n=o.className,d=o.color,c=void 0===d?"standard":d,v=o.disabled,b=void 0!==v&&v,Z=o.disableFocusRipple,x=void 0!==Z&&Z,y=o.fullWidth,R=void 0!==y&&y,C=o.onChange,z=o.onClick,j=o.selected,k=o.size,T=void 0===k?"medium":k,W=o.value,w=(0,r.Z)(o,m),O=(0,i.Z)({},o,{color:c,disabled:b,disableFocusRipple:x,fullWidth:R,size:T}),B=function(e){var t=e.classes,o=e.fullWidth,a=e.selected,r=e.disabled,i=e.size,n=e.color,l={root:["root",a&&"selected",r&&"disabled",o&&"fullWidth","size".concat((0,u.Z)(i)),n]};return(0,s.Z)(l,h.a,t)}(O);return(0,f.jsx)(g,(0,i.Z)({className:(0,l.Z)(B.root,n),disabled:b,focusRipple:!x,ref:t,onClick:function(e){z&&(z(e,W),e.defaultPrevented)||C&&C(e,W)},onChange:C,value:W,ownerState:O,"aria-pressed":j},w,{children:a}))}));t.Z=b},78770:function(e,t,o){o.d(t,{Z:function(){return x}});var a=o(4942),r=o(63366),i=o(87462),n=o(47313),l=(o(96214),o(83061)),s=o(21921),d=o(17592),c=o(77342),u=o(91615);function p(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var v=o(77430),h=o(32298);function f(e){return(0,h.Z)("MuiToggleButtonGroup",e)}var m=(0,v.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),g=o(46417),b=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],Z=(0,d.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[(0,a.Z)({},"& .".concat(m.grouped),t.grouped),(0,a.Z)({},"& .".concat(m.grouped),t["grouped".concat((0,u.Z)(o.orientation))]),t.root,"vertical"===o.orientation&&t.vertical,o.fullWidth&&t.fullWidth]}})((function(e){var t=e.ownerState,o=e.theme;return(0,i.Z)({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},"vertical"===t.orientation&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},(0,a.Z)({},"& .".concat(m.grouped),(0,i.Z)({},"horizontal"===t.orientation?(0,a.Z)({"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&.".concat(m.selected," + .").concat(m.grouped,".").concat(m.selected),{borderLeft:0,marginLeft:0}):(0,a.Z)({"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}},"&.".concat(m.selected," + .").concat(m.grouped,".").concat(m.selected),{borderTop:0,marginTop:0}))))})),x=n.forwardRef((function(e,t){var o=(0,c.Z)({props:e,name:"MuiToggleButtonGroup"}),a=o.children,d=o.className,v=o.color,h=void 0===v?"standard":v,m=o.disabled,x=void 0!==m&&m,y=o.exclusive,R=void 0!==y&&y,C=o.fullWidth,z=void 0!==C&&C,j=o.onChange,k=o.orientation,T=void 0===k?"horizontal":k,W=o.size,w=void 0===W?"medium":W,O=o.value,B=(0,r.Z)(o,b),S=(0,i.Z)({},o,{disabled:x,fullWidth:z,orientation:T,size:w}),F=function(e){var t=e.classes,o=e.orientation,a=e.fullWidth,r=e.disabled,i={root:["root","vertical"===o&&"vertical",a&&"fullWidth"],grouped:["grouped","grouped".concat((0,u.Z)(o)),r&&"disabled"]};return(0,s.Z)(i,f,t)}(S),L=function(e,t){if(j){var o,a=O&&O.indexOf(t);O&&a>=0?(o=O.slice()).splice(a,1):o=O?O.concat(t):[t],j(e,o)}},N=function(e,t){j&&j(e,O===t?null:t)};return(0,g.jsx)(Z,(0,i.Z)({role:"group",className:(0,l.Z)(F.root,d),ref:t,ownerState:S},B,{children:n.Children.map(a,(function(e){return n.isValidElement(e)?n.cloneElement(e,{className:(0,l.Z)(F.grouped,e.props.className),onChange:R?N:L,selected:void 0===e.props.selected?p(e.props.value,O):e.props.selected,size:e.props.size||w,fullWidth:z,color:e.props.color||h,disabled:e.props.disabled||x}):null}))}))}))}}]);