"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[4129],{14129:function(e,n,i){i.r(n),i.d(n,{default:function(){return v}});var t=i(65964),l=i(29439),r=i(47313),o=i(57829),a=i(85582),c=i(3191),s=i(71003),u=i(97741),d=i(47825),h=i(47131),x=i(83213),m=i(89840),p=i(76025),f=i(35736),Z=i(14368),j=i(64332),g=i(46417),k=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],C=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function b(){var e=(0,r.useState)(1),n=(0,l.Z)(e,2),i=n[0],t=n[1],b=(0,r.useState)(null),v=(0,l.Z)(b,2),y=v[0],S=v[1],w=(0,r.useState)(null),_=(0,l.Z)(w,2),M=_[0],H=_[1],P=(0,r.useState)(null),T=(0,l.Z)(P,2),B=T[0],E=T[1],F=(0,r.useCallback)((function(e){E(e.currentTarget)}),[]),I=(0,r.useCallback)((function(e){H(e.currentTarget)}),[]),L=(0,r.useCallback)((function(e,n){t(n),H(null)}),[]),U=(0,r.useCallback)((function(e){S(e.currentTarget)}),[]),q=(0,r.useCallback)((function(){S(null)}),[]),A=(0,r.useCallback)((function(){E(null)}),[]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,g.jsx)(d.Z,{children:(0,g.jsx)(Z.Z,{heading:"Menu",links:[{name:"Components",href:p.H.components},{name:"Menu"}],moreLink:["https://mui.com/components/menus"]})})}),(0,g.jsx)(d.Z,{sx:{my:10},children:(0,g.jsxs)(o.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[(0,g.jsxs)(j.Z,{title:"Simple",children:[(0,g.jsx)(s.Z,{variant:"outlined",onClick:U,children:"Open Menu"}),(0,g.jsx)(a.Z,{id:"simple-menu",anchorEl:y,onClose:q,open:Boolean(y),children:["Profile","My account","Logout"].map((function(e){return(0,g.jsx)(u.Z,{selected:"Profile"===e,onClick:q,children:e},e)}))})]}),(0,g.jsxs)(j.Z,{title:"Selected",children:[(0,g.jsx)(c.Z,{component:"nav","aria-label":"Device settings",children:(0,g.jsx)(m.Z,{"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:I,children:(0,g.jsx)(x.Z,{primary:"When device is locked",secondary:k[i]})})}),(0,g.jsx)(a.Z,{id:"lock-menu",anchorEl:M,onClose:q,open:Boolean(M),children:k.map((function(e,n){return(0,g.jsx)(u.Z,{disabled:0===n,selected:n===i,onClick:function(e){return L(e,n)},children:e},e)}))})]}),(0,g.jsxs)(j.Z,{title:"Max height",children:[(0,g.jsx)(h.Z,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:F,children:(0,g.jsx)(f.Z,{icon:"eva:more-vertical-fill"})}),(0,g.jsx)(a.Z,{id:"long-menu",anchorEl:B,onClose:A,open:Boolean(B),slotProps:{paper:{sx:{width:"20ch",maxHeight:216}}},children:C.map((function(e){return(0,g.jsx)(u.Z,{selected:"Pyxis"===e,onClick:A,children:e},e)}))})]})]})})]})}function v(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.ql,{children:(0,g.jsx)("title",{children:" MUI: Accordion"})}),(0,g.jsx)(b,{})]})}},64332:function(e,n,i){i.d(n,{Z:function(){return d}});var t=i(1413),l=i(45987),r=i(17551),o=i(61792),a=i(54641),c=i(42832),s=i(46417),u=["title","sx","children"];function d(e){var n=e.title,i=e.sx,d=e.children,h=(0,l.Z)(e,u);return(0,s.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,r.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,s.jsx)(a.Z,{title:n}),(0,s.jsx)(c.Z,(0,t.Z)((0,t.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,t.Z)({p:5,minHeight:180},i)},h),{},{children:d}))]})}}}]);