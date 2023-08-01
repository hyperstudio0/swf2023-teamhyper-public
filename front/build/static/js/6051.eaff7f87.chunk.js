"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[6051],{76051:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var a=t(65964),l=t(29439),r=t(47313),i=t(67176),o=t(57829),s=t(5297),d=t(47825),c=t(76025),u=t(14368),h=t(4441),x=t(63686),m=t(45023),p=t(58997),g=t(40662),j=t(82403),v=t(64332),f=t(46417);function Z(){var e=(0,r.useState)(new Date),n=(0,l.Z)(e,2),t=n[0],a=n[1];return(0,f.jsxs)(j.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,f.jsxs)(v.Z,{title:"Basic",children:[(0,f.jsx)(g.$,{label:"For desktop",value:t,minDate:new Date("2017-01-01"),onChange:function(e){a(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),(0,f.jsx)(p.O,{orientation:"portrait",label:"For mobile",value:t,onChange:function(e){a(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}})]}),(0,f.jsx)(v.Z,{title:"Static mode",children:(0,f.jsx)(m.w,{orientation:"landscape",openTo:"day",value:t,shouldDisableDate:h.Z,onChange:function(e){a(e)}})}),(0,f.jsxs)(v.Z,{title:"Views playground",children:[(0,f.jsx)(x.M,{views:["year"],label:"Year only",value:t,onChange:function(e){a(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),(0,f.jsx)(x.M,{views:["year","month"],label:"Year and Month",minDate:new Date("2012-03-01"),maxDate:new Date("2023-06-01"),value:t,onChange:function(e){a(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),(0,f.jsx)(x.M,{openTo:"year",views:["year","month","day"],label:"Year, month and date",value:t,onChange:function(e){a(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),(0,f.jsx)(x.M,{views:["day","month","year"],label:"Invert the order of views",value:t,onChange:function(e){a(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),(0,f.jsx)(x.M,{views:["day"],label:"Just date",value:t,onChange:function(e){a(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}})]})]})}var C=t(47410),D=t(12323),b=t(92180),y=t(46065),k=t(42832);function w(){var e=(0,r.useState)(new Date),n=(0,l.Z)(e,2),t=n[0],a=n[1];return(0,f.jsxs)(j.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,f.jsxs)(v.Z,{title:"Basic",children:[(0,f.jsx)(C.j,{label:"12 hours",value:t,onChange:function(e){a(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),(0,f.jsx)(C.j,{ampm:!1,label:"24 hours",value:t,onChange:function(e){a(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}})]}),(0,f.jsxs)(v.Z,{title:"Responsiveness",children:[(0,f.jsx)(D.d,{orientation:"portrait",label:"For mobile",value:t,onChange:function(e){a(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),(0,f.jsx)(y.k,{label:"For desktop",value:t,onChange:function(e){a(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),(0,f.jsx)(C.j,{value:t,onChange:a,slotProps:{textField:{fullWidth:!0,margin:"normal"}}})]}),(0,f.jsx)(v.Z,{title:"Static mode",children:(0,f.jsxs)(k.Z,{spacing:3,children:[(0,f.jsx)(b.K,{orientation:"portrait",value:t,onChange:function(e){a(e)}}),(0,f.jsx)(b.K,{ampm:!0,orientation:"landscape",openTo:"minutes",value:t,onChange:function(e){a(e)}})]})})]})}var F=t(66813),P=t(74359),W=t(60804);function S(){var e=(0,r.useState)(new Date),n=(0,l.Z)(e,2),t=n[0],a=n[1],i=(0,r.useState)(new Date("2018-01-01T00:00:00.000Z")),o=(0,l.Z)(i,2),s=o[0],d=o[1];return(0,f.jsxs)(k.Z,{spacing:3,direction:{xs:"column",md:"row"},children:[(0,f.jsx)(v.Z,{title:"Basic",children:(0,f.jsx)(F.x,{label:"DateTimePicker",value:t,onChange:a,slotProps:{textField:{fullWidth:!0}}})}),(0,f.jsxs)(v.Z,{title:"Responsiveness",children:[(0,f.jsx)(P.W,{value:s,onChange:function(e){d(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),(0,f.jsx)(W.h,{value:s,onChange:function(e){d(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}}),(0,f.jsx)(F.x,{value:s,onChange:function(e){d(e)},slotProps:{textField:{fullWidth:!0,margin:"normal"}}})]})]})}var M=t(90891),T=t(71003),E=t(34202),_=t(29047);function I(){var e=(0,E.wE)(new Date,new Date),n=(0,E.wE)(new Date,null);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(k.Z,{sx:{typography:"body2",mb:3,color:"text.secondary"},children:[(0,f.jsx)("div",{children:"This is the custom component from minimal."}),(0,f.jsx)("div",{children:"You can use more advanced components by MUI."}),(0,f.jsxs)(M.Z,{href:"https://mui.com/x/react-date-pickers/date-range-picker/",children:["https://mui.com/x/react-date-pickers/date-range-picker/"," "]})]}),(0,f.jsxs)(o.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[(0,f.jsxs)(v.Z,{title:"Input",children:[(0,f.jsx)(T.Z,{variant:"contained",onClick:e.onOpen,children:"Click me!"}),(0,f.jsxs)(k.Z,{sx:{typography:"body2",mt:3},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:"Start:"})," ",(0,_.Mu)(e.startDate)]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:"End:"})," ",(0,_.Mu)(e.endDate)]})]}),(0,f.jsx)(E.ZP,{open:e.open,startDate:e.startDate,endDate:e.endDate,onChangeStartDate:e.onChangeStartDate,onChangeEndDate:e.onChangeEndDate,onClose:e.onClose,error:e.error})]}),(0,f.jsxs)(v.Z,{title:"Calendar",children:[(0,f.jsx)(T.Z,{variant:"contained",onClick:n.onOpen,children:"Click me!"}),(0,f.jsxs)(k.Z,{sx:{typography:"body2",mt:3},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:"Start:"})," ",(0,_.Mu)(n.startDate)]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:"End:"})," ",(0,_.Mu)(n.endDate)]})]}),(0,f.jsx)(E.ZP,{variant:"calendar",open:n.open,startDate:n.startDate,endDate:n.endDate,onChangeStartDate:n.onChangeStartDate,onChangeEndDate:n.onChangeEndDate,onClose:n.onClose,error:n.error})]})]})]})}var R=[{value:"date",label:"Date",component:(0,f.jsx)(Z,{})},{value:"datetime",label:"DateTime",component:(0,f.jsx)(S,{})},{value:"time",label:"Time",component:(0,f.jsx)(w,{})},{value:"range",label:"Range",component:(0,f.jsx)(I,{})}];function Y(){var e=(0,r.useState)("date"),n=(0,l.Z)(e,2),t=n[0],a=n[1],h=(0,r.useCallback)((function(e,n){a(n)}),[]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,f.jsx)(d.Z,{children:(0,f.jsx)(u.Z,{heading:"Date / Time pickers",links:[{name:"Components",href:c.H.components},{name:"Date / Time pickers"}],moreLink:["https://mui.com/components/pickers","https://mui.com/x/react-date-pickers/getting-started/"]})})}),(0,f.jsxs)(d.Z,{sx:{my:10},children:[(0,f.jsx)(s.Z,{value:t,onChange:h,children:R.map((function(e){return(0,f.jsx)(i.Z,{value:e.value,label:e.label},e.value)}))}),R.map((function(e){return e.value===t&&(0,f.jsx)(o.Z,{sx:{mt:5},children:e.component},e.value)}))]})]})}function B(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.ql,{children:(0,f.jsx)("title",{children:" MUI: Picker"})}),(0,f.jsx)(Y,{})]})}},64332:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(1413),l=t(45987),r=t(17551),i=t(61792),o=t(54641),s=t(42832),d=t(46417),c=["title","sx","children"];function u(e){var n=e.title,t=e.sx,u=e.children,h=(0,l.Z)(e,c);return(0,d.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,r.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,d.jsx)(o.Z,{title:n}),(0,d.jsx)(s.Z,(0,a.Z)((0,a.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,a.Z)({p:5,minHeight:180},t)},h),{},{children:u}))]})}}}]);