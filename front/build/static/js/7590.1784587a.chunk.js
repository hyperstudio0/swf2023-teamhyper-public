"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[7590],{43190:function(e,n,t){function r(e,n,t){return e?Math.max(0,(1+e)*n-t):0}function s(e,n,t){return null===e[t]?1:null===n[t]||n[t]<e[t]?-1:n[t]>e[t]?1:0}function o(e,n){return"desc"===e?function(e,t){return s(e,t,n)}:function(e,t){return-s(e,t,n)}}t.d(n,{$W:function(){return w},K:function(){return S},et:function(){return Z},S_:function(){return _},Z4:function(){return I},hM:function(){return f},fQ:function(){return r},sQ:function(){return o},x6:function(){return c}});var i=t(93433),l=t(29439),a=t(47313);function c(e){var n=(0,a.useState)(!(null===e||void 0===e||!e.defaultDense)),t=(0,l.Z)(n,2),r=t[0],s=t[1],o=(0,a.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),c=(0,l.Z)(o,2),d=c[0],x=c[1],h=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),u=(0,l.Z)(h,2),p=u[0],Z=u[1],g=(0,a.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),j=(0,l.Z)(g,2),m=j[0],f=j[1],w=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),y=(0,l.Z)(w,2),b=y[0],v=y[1],C=(0,a.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),k=(0,l.Z)(C,2),S=k[0],P=k[1],D=(0,a.useCallback)((function(e){""!==e&&(v(p===e&&"asc"===b?"desc":"asc"),Z(e))}),[b,p]),R=(0,a.useCallback)((function(e){var n=S.includes(e)?S.filter((function(n){return n!==e})):[].concat((0,i.Z)(S),[e]);P(n)}),[S]),I=(0,a.useCallback)((function(e){x(0),f(parseInt(e.target.value,10))}),[]),A=(0,a.useCallback)((function(e){s(e.target.checked)}),[]),F=(0,a.useCallback)((function(e,n){P(e?n:[])}),[]),O=(0,a.useCallback)((function(e,n){x(n)}),[]),T=(0,a.useCallback)((function(){x(0)}),[]),_=(0,a.useCallback)((function(e){P([]),d&&e<2&&x(d-1)}),[d]),W=(0,a.useCallback)((function(e){var n=e.totalRows,t=e.totalRowsInPage,r=e.totalRowsFiltered,s=S.length;if(P([]),d)if(s===t)x(d-1);else if(s===r)x(0);else if(s>t){var o=Math.ceil((n-s)/m)-1;x(o)}}),[d,m,S.length]);return{dense:r,order:b,page:d,orderBy:p,rowsPerPage:m,selected:S,onSelectRow:R,onSelectAllRows:F,onSort:D,onChangePage:O,onChangeDense:A,onResetPage:T,onChangeRowsPerPage:I,onUpdatePageDeleteRow:_,onUpdatePageDeleteRows:W,setPage:x,setDense:s,setOrder:v,setOrderBy:Z,setSelected:P,setRowsPerPage:f}}var d=t(1413),x=t(42988),h=t(70941),u=t(76996),p=t(46417);function Z(e){var n=e.notFound,t=e.sx;return(0,p.jsx)(x.Z,{children:n?(0,p.jsx)(h.Z,{colSpan:12,children:(0,p.jsx)(u.Z,{filled:!0,title:"No Data",sx:(0,d.Z)({py:10},t)})}):(0,p.jsx)(h.Z,{colSpan:12,sx:{p:0}})})}var g=t(36459),j=t(42832),m=t(84488);function f(e){var n=Object.assign({},((0,g.Z)(e),e));return(0,p.jsx)(x.Z,(0,d.Z)((0,d.Z)({},n),{},{children:(0,p.jsx)(h.Z,{colSpan:12,children:(0,p.jsxs)(j.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,p.jsx)(m.Z,{sx:{borderRadius:1.5,width:48,height:48,flexShrink:0}}),(0,p.jsx)(m.Z,{sx:{width:1,height:12}}),(0,p.jsx)(m.Z,{sx:{width:180,height:12}}),(0,p.jsx)(m.Z,{sx:{width:160,height:12}}),(0,p.jsx)(m.Z,{sx:{width:140,height:12}}),(0,p.jsx)(m.Z,{sx:{width:120,height:12}})]})})}))}function w(e){var n=e.emptyRows,t=e.height;return n?(0,p.jsx)(x.Z,{sx:(0,d.Z)({},t&&{height:t*n}),children:(0,p.jsx)(h.Z,{colSpan:9})}):null}var y=t(57829),b=t(49969),v=t(23477),C=t(82558),k={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function S(e){var n=e.order,t=e.orderBy,r=e.rowCount,s=void 0===r?0:r,o=e.headLabel,i=e.numSelected,l=void 0===i?0:i,a=e.onSort,c=e.onSelectAllRows,u=e.sx;return(0,p.jsx)(v.Z,{sx:u,children:(0,p.jsxs)(x.Z,{children:[c&&(0,p.jsx)(h.Z,{padding:"checkbox",children:(0,p.jsx)(b.Z,{indeterminate:!!l&&l<s,checked:!!s&&l===s,onChange:function(e){return c(e.target.checked)}})}),o.map((function(e){return(0,p.jsx)(h.Z,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:a?(0,p.jsxs)(C.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:function(){return a(e.id)},children:[e.label,t===e.id?(0,p.jsx)(y.Z,{sx:(0,d.Z)({},k),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var P=t(45987),D=t(47605),R=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function I(e){var n=e.dense,t=e.action,r=e.rowCount,s=e.numSelected,o=e.onSelectAllRows,i=e.sx,l=(0,P.Z)(e,R);return s?(0,p.jsxs)(j.Z,(0,d.Z)((0,d.Z)({direction:"row",alignItems:"center",sx:(0,d.Z)((0,d.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},n&&{height:38}),i)},l),{},{children:[(0,p.jsx)(b.Z,{indeterminate:!!s&&s<r,checked:!!r&&s===r,onChange:function(e){return o(e.target.checked)}}),(0,p.jsxs)(D.Z,{variant:"subtitle2",sx:(0,d.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[s," selected"]}),t&&t]})):null}var A=t(67426),F=t(69173),O=t(41493),T=["dense","onChangeDense","rowsPerPageOptions","sx"];function _(e){var n=e.dense,t=e.onChangeDense,r=e.rowsPerPageOptions,s=void 0===r?[5,10,25]:r,o=e.sx,i=(0,P.Z)(e,T);return(0,p.jsxs)(y.Z,{sx:(0,d.Z)({position:"relative"},o),children:[(0,p.jsx)(O.Z,(0,d.Z)((0,d.Z)({rowsPerPageOptions:s,component:"div"},i),{},{sx:{borderTopColor:"transparent"}})),t&&(0,p.jsx)(F.Z,{label:"Dense",control:(0,p.jsx)(A.Z,{checked:n,onChange:t}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},37590:function(e,n,t){t.d(n,{H:function(){return Ce},C:function(){return ie}});var r=t(4942),s=t(1413),o=t(29439),i=t(93433),l=t(47313),a=t(17551),c=t(67176),d=t(5297),x=t(73428),h=t(66835),u=t(71003),p=t(61689),Z=t(47825),g=t(57861),j=t(47131),m=t(51629),f=t(76025),w=t(31087),y=t(26797),b=t(29047),v=t(77599),C=t(11062),k=t(35736),S=t(30127),P=t(76522),D=t(36622),R=t(14368),I=t(43190),A=t(89600),F=t(57829),O=t(61792),T=t(42832),_=t(63585),W=t(65033),Q=t(97741),M=t(42988),z=t(49969),B=t(70941),L=t(83213),N=t(78794),U=t(27480),E=t(46417);function H(e){var n=e.row,t=e.selected,r=e.onViewRow,o=e.onSelectRow,i=e.onDeleteRow,l=n.items,a=n.status,c=n.orderNumber,d=n.createdAt,x=n.customer,h=n.totalQuantity,p=n.subTotal,Z=(0,v.k)(),g=(0,v.k)(),m=(0,U.S)(),f=(0,E.jsxs)(M.Z,{hover:!0,selected:t,children:[(0,E.jsx)(B.Z,{padding:"checkbox",children:(0,E.jsx)(z.Z,{checked:t,onClick:o})}),(0,E.jsx)(B.Z,{children:(0,E.jsx)(F.Z,{onClick:r,sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:c})}),(0,E.jsxs)(B.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,E.jsx)(_.Z,{alt:x.name,src:x.avatarUrl,sx:{mr:2}}),(0,E.jsx)(L.Z,{primary:x.name,secondary:x.email,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),(0,E.jsx)(B.Z,{children:(0,E.jsx)(L.Z,{primary:(0,A.Z)(new Date(d),"dd MMM yyyy"),secondary:(0,A.Z)(new Date(d),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),(0,E.jsxs)(B.Z,{align:"center",children:[" ",h," "]}),(0,E.jsxs)(B.Z,{children:[" ",(0,N.e_)(p)," "]}),(0,E.jsx)(B.Z,{children:(0,E.jsx)(C.Z,{variant:"soft",color:("completed"===a?"success":"pending"===a&&"warning")||"cancelled"===a&&"error"||"default",children:a})}),(0,E.jsxs)(B.Z,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[(0,E.jsx)(j.Z,{color:g.value?"inherit":"default",onClick:g.onToggle,sx:(0,s.Z)({},g.value&&{bgcolor:"action.hover"}),children:(0,E.jsx)(k.Z,{icon:"eva:arrow-ios-downward-fill"})}),(0,E.jsx)(j.Z,{color:m.open?"inherit":"default",onClick:m.onOpen,children:(0,E.jsx)(k.Z,{icon:"eva:more-vertical-fill"})})]})]}),w=(0,E.jsx)(M.Z,{children:(0,E.jsx)(B.Z,{sx:{p:0,border:"none"},colSpan:8,children:(0,E.jsx)(W.Z,{in:g.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:(0,E.jsx)(T.Z,{component:O.Z,sx:{m:1.5},children:l.map((function(e){return(0,E.jsxs)(T.Z,{direction:"row",alignItems:"center",sx:{p:function(e){return e.spacing(1.5,2,1.5,1.5)},"&:not(:last-of-type)":{borderBottom:function(e){return"solid 2px ".concat(e.palette.background.neutral)}}},children:[(0,E.jsx)(_.Z,{src:e.coverUrl,variant:"rounded",sx:{width:48,height:48,mr:2}}),(0,E.jsx)(L.Z,{primary:e.name,secondary:e.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),(0,E.jsxs)(F.Z,{children:["x",e.quantity]}),(0,E.jsx)(F.Z,{sx:{width:110,textAlign:"right"},children:(0,N.e_)(e.price)})]},e.id)}))})})})});return(0,E.jsxs)(E.Fragment,{children:[f,w,(0,E.jsxs)(U.Z,{open:m.open,onClose:m.onClose,arrow:"right-top",sx:{width:140},children:[(0,E.jsxs)(Q.Z,{onClick:function(){Z.onTrue(),m.onClose()},sx:{color:"error.main"},children:[(0,E.jsx)(k.Z,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),(0,E.jsxs)(Q.Z,{onClick:function(){r(),m.onClose()},children:[(0,E.jsx)(k.Z,{icon:"solar:eye-bold"}),"View"]})]}),(0,E.jsx)(P.Q,{open:Z.value,onClose:Z.onFalse,title:"Delete",content:"Are you sure want to delete?",action:(0,E.jsx)(u.Z,{variant:"contained",color:"error",onClick:i,children:"Delete"})})]})}var G=t(63686),K=t(24631),$=t(41727);function q(e){var n=e.filters,t=e.onFilters,r=e.canReset,s=e.onResetFilters,o=(0,U.S)(),i=(0,l.useCallback)((function(e){t("name",e.target.value)}),[t]),a=(0,l.useCallback)((function(e){t("startDate",e)}),[t]),c=(0,l.useCallback)((function(e){t("endDate",e)}),[t]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(T.Z,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[(0,E.jsx)(G.M,{label:"Start date",value:n.startDate,onChange:a,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),(0,E.jsx)(G.M,{label:"End date",value:n.endDate,onChange:c,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),(0,E.jsxs)(T.Z,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[(0,E.jsx)(K.Z,{fullWidth:!0,value:n.name,onChange:i,placeholder:"Search customer or order number...",InputProps:{startAdornment:(0,E.jsx)($.Z,{position:"start",children:(0,E.jsx)(k.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),(0,E.jsx)(j.Z,{onClick:o.onOpen,children:(0,E.jsx)(k.Z,{icon:"eva:more-vertical-fill"})})]}),r&&(0,E.jsx)(u.Z,{color:"error",sx:{flexShrink:0},onClick:s,startIcon:(0,E.jsx)(k.Z,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]}),(0,E.jsxs)(U.Z,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:140},children:[(0,E.jsxs)(Q.Z,{onClick:function(){o.onClose()},children:[(0,E.jsx)(k.Z,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),(0,E.jsxs)(Q.Z,{onClick:function(){o.onClose()},children:[(0,E.jsx)(k.Z,{icon:"solar:import-bold"}),"Import"]}),(0,E.jsxs)(Q.Z,{onClick:function(){o.onClose()},children:[(0,E.jsx)(k.Z,{icon:"solar:export-bold"}),"Export"]})]})]})}var V=t(45987),J=t(44610),X=t(34202),Y=["filters","onFilters","onResetFilters","results"],ee=["label","children","sx"];function ne(e){var n=e.filters,t=e.onFilters,r=e.onResetFilters,o=e.results,i=(0,V.Z)(e,Y),l=(0,X.l2)(n.startDate,n.endDate);return(0,E.jsxs)(T.Z,(0,s.Z)((0,s.Z)({spacing:1.5},i),{},{children:[(0,E.jsxs)(F.Z,{sx:{typography:"body2"},children:[(0,E.jsx)("strong",{children:o}),(0,E.jsx)(F.Z,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),(0,E.jsxs)(T.Z,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:["all"!==n.status&&(0,E.jsx)(te,{label:"Status:",children:(0,E.jsx)(J.Z,{size:"small",label:n.status,onDelete:function(){t("status","all")}})}),n.startDate&&n.endDate&&(0,E.jsx)(te,{label:"Date:",children:(0,E.jsx)(J.Z,{size:"small",label:l,onDelete:function(){t("startDate",null),t("endDate",null)}})}),(0,E.jsx)(u.Z,{color:"error",onClick:r,startIcon:(0,E.jsx)(k.Z,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]}))}function te(e){var n=e.label,t=e.children,r=e.sx,o=(0,V.Z)(e,ee);return(0,E.jsxs)(T.Z,(0,s.Z)((0,s.Z)({component:O.Z,variant:"outlined",spacing:1,direction:"row",sx:(0,s.Z)({p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed"},r)},o),{},{children:[(0,E.jsx)(F.Z,{component:"span",sx:{typography:"subtitle2"},children:n}),(0,E.jsx)(T.Z,{spacing:1,direction:"row",flexWrap:"wrap",children:t})]}))}var re=[{value:"all",label:"All"}].concat((0,i.Z)(y.s8)),se=[{id:"orderNumber",label:"Order",width:116},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}],oe={name:"",status:"all",startDate:null,endDate:null};function ie(){var e=(0,I.x6)({defaultOrderBy:"orderNumber"}),n=(0,D.K$)(),t=(0,w.tv)(),i=(0,v.k)(),A=(0,l.useState)(y._Q),F=(0,o.Z)(A,2),O=F[0],T=F[1],_=(0,l.useState)(oe),W=(0,o.Z)(_,2),Q=W[0],M=W[1],z=!(!Q.startDate||!Q.endDate)&&Q.startDate.getTime()>Q.endDate.getTime(),B=function(e){var n=e.inputData,t=e.comparator,r=e.filters,s=e.dateError,o=r.status,i=r.name,l=r.startDate,a=r.endDate,c=n.map((function(e,n){return[e,n]}));c.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n=c.map((function(e){return e[0]})),i&&(n=n.filter((function(e){return-1!==e.orderNumber.toLowerCase().indexOf(i.toLowerCase())||-1!==e.customer.name.toLowerCase().indexOf(i.toLowerCase())||-1!==e.customer.email.toLowerCase().indexOf(i.toLowerCase())})));"all"!==o&&(n=n.filter((function(e){return e.status===o})));s||l&&a&&(n=n.filter((function(e){return(0,b.IO)(e.createdAt)>=(0,b.IO)(l)&&(0,b.IO)(e.createdAt)<=(0,b.IO)(a)})));return n}({inputData:O,comparator:(0,I.sQ)(e.order,e.orderBy),filters:Q,dateError:z}),L=B.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),N=e.dense?52:72,U=!!Q.name||"all"!==Q.status||!!Q.startDate&&!!Q.endDate,G=!B.length&&U||!B.length,K=(0,l.useCallback)((function(n,t){e.onResetPage(),M((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,r.Z)({},n,t))}))}),[e]),$=(0,l.useCallback)((function(n){var t=O.filter((function(e){return e.id!==n}));T(t),e.onUpdatePageDeleteRow(L.length)}),[L.length,e,O]),V=(0,l.useCallback)((function(){var n=O.filter((function(n){return!e.selected.includes(n.id)}));T(n),e.onUpdatePageDeleteRows({totalRows:O.length,totalRowsInPage:L.length,totalRowsFiltered:B.length})}),[B.length,L.length,e,O]),J=(0,l.useCallback)((function(){M(oe)}),[]),X=(0,l.useCallback)((function(e){t.push(f.H.dashboard.order.details(e))}),[t]),Y=(0,l.useCallback)((function(e,n){K("status",n)}),[K]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(Z.Z,{maxWidth:!n.themeStretch&&"lg",children:[(0,E.jsx)(R.Z,{heading:"List",links:[{name:"Dashboard",href:f.H.dashboard.root},{name:"Order",href:f.H.dashboard.order.root},{name:"List"}],sx:{mb:{xs:3,md:5}}}),(0,E.jsxs)(x.Z,{children:[(0,E.jsx)(d.Z,{value:Q.status,onChange:Y,sx:{px:2.5,boxShadow:function(e){return"inset 0 -2px 0 0 ".concat((0,a.Fq)(e.palette.grey[500],.08))}},children:re.map((function(e){return(0,E.jsx)(c.Z,{iconPosition:"end",value:e.value,label:e.label,icon:(0,E.jsxs)(C.Z,{variant:"all"===e.value||e.value===Q.status?"filled":"soft",color:("completed"===e.value?"success":"pending"===e.value&&"warning")||"cancelled"===e.value&&"error"||"default",children:["all"===e.value&&y._Q.length,"completed"===e.value&&y._Q.filter((function(e){return"completed"===e.status})).length,"pending"===e.value&&y._Q.filter((function(e){return"pending"===e.status})).length,"cancelled"===e.value&&y._Q.filter((function(e){return"cancelled"===e.status})).length,"refunded"===e.value&&y._Q.filter((function(e){return"refunded"===e.status})).length]})},e.value)}))}),(0,E.jsx)(q,{filters:Q,onFilters:K,canReset:U,onResetFilters:J}),U&&(0,E.jsx)(ne,{filters:Q,onFilters:K,onResetFilters:J,results:B.length,sx:{p:2.5,pt:0}}),(0,E.jsxs)(m.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,E.jsx)(I.Z4,{dense:e.dense,numSelected:e.selected.length,rowCount:O.length,onSelectAllRows:function(n){return e.onSelectAllRows(n,O.map((function(e){return e.id})))},action:(0,E.jsx)(p.Z,{title:"Delete",children:(0,E.jsx)(j.Z,{color:"primary",onClick:i.onTrue,children:(0,E.jsx)(k.Z,{icon:"solar:trash-bin-trash-bold"})})})}),(0,E.jsx)(S.Z,{children:(0,E.jsxs)(h.Z,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[(0,E.jsx)(I.K,{order:e.order,orderBy:e.orderBy,headLabel:se,rowCount:O.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:function(n){return e.onSelectAllRows(n,O.map((function(e){return e.id})))}}),(0,E.jsxs)(g.Z,{children:[B.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map((function(n){return(0,E.jsx)(H,{row:n,selected:e.selected.includes(n.id),onSelectRow:function(){return e.onSelectRow(n.id)},onDeleteRow:function(){return $(n.id)},onViewRow:function(){return X(n.id)}},n.id)})),(0,E.jsx)(I.$W,{height:N,emptyRows:(0,I.fQ)(e.page,e.rowsPerPage,O.length)}),(0,E.jsx)(I.et,{notFound:G})]})]})})]}),(0,E.jsx)(I.S_,{count:B.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),(0,E.jsx)(P.Q,{open:i.value,onClose:i.onFalse,title:"Delete",content:(0,E.jsxs)(E.Fragment,{children:["Are you sure want to delete ",(0,E.jsxs)("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:(0,E.jsx)(u.Z,{variant:"contained",color:"error",onClick:function(){V(),i.onFalse()},children:"Delete"})})]})}var le=t(43717),ae=t(90891),ce=t(19536),de=t(54641),xe=t(47605);function he(e){var n=e.customer,t=e.delivery,r=e.payment,s=e.shippingAddress,o=(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(de.Z,{title:"Customer Info",action:(0,E.jsx)(j.Z,{children:(0,E.jsx)(k.Z,{icon:"solar:pen-bold"})})}),(0,E.jsxs)(T.Z,{direction:"row",sx:{p:3},children:[(0,E.jsx)(_.Z,{alt:n.name,src:n.avatarUrl,sx:{width:48,height:48,mr:2}}),(0,E.jsxs)(T.Z,{spacing:.5,alignItems:"flex-start",sx:{typography:"body2"},children:[(0,E.jsx)(xe.Z,{variant:"subtitle2",children:n.name}),(0,E.jsx)(F.Z,{sx:{color:"text.secondary"},children:n.email}),(0,E.jsxs)(F.Z,{children:["IP Address:",(0,E.jsx)(F.Z,{component:"span",sx:{color:"text.secondary",ml:.25},children:n.ipAddress})]}),(0,E.jsx)(u.Z,{size:"small",color:"error",startIcon:(0,E.jsx)(k.Z,{icon:"mingcute:add-line"}),sx:{mt:1},children:"Add to Blacklist"})]})]})]}),i=(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(de.Z,{title:"Delivery",action:(0,E.jsx)(j.Z,{children:(0,E.jsx)(k.Z,{icon:"solar:pen-bold"})})}),(0,E.jsxs)(T.Z,{spacing:1.5,sx:{p:3,typography:"body2"},children:[(0,E.jsxs)(T.Z,{direction:"row",alignItems:"center",children:[(0,E.jsx)(F.Z,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Ship by"}),t.shipBy]}),(0,E.jsxs)(T.Z,{direction:"row",alignItems:"center",children:[(0,E.jsx)(F.Z,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Speedy"}),t.speedy]}),(0,E.jsxs)(T.Z,{direction:"row",alignItems:"center",children:[(0,E.jsx)(F.Z,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Tracking No."}),(0,E.jsx)(ae.Z,{underline:"always",color:"inherit",children:t.trackingNumber})]})]})]}),l=(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(de.Z,{title:"Shipping",action:(0,E.jsx)(j.Z,{children:(0,E.jsx)(k.Z,{icon:"solar:pen-bold"})})}),(0,E.jsxs)(T.Z,{spacing:1.5,sx:{p:3,typography:"body2"},children:[(0,E.jsxs)(T.Z,{direction:"row",alignItems:"center",children:[(0,E.jsx)(F.Z,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Address"}),s.fullAddress]}),(0,E.jsxs)(T.Z,{direction:"row",alignItems:"center",children:[(0,E.jsx)(F.Z,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Phone number"}),s.phoneNumber]})]})]}),a=(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(de.Z,{title:"Payment",action:(0,E.jsx)(j.Z,{children:(0,E.jsx)(k.Z,{icon:"solar:pen-bold"})})}),(0,E.jsxs)(T.Z,{direction:"row",alignItems:"center",sx:{p:3,typography:"body2"},children:[(0,E.jsx)(F.Z,{component:"span",sx:{color:"text.secondary",flexGrow:1},children:"Phone number"}),r.cardNumber,(0,E.jsx)(k.Z,{icon:"logos:mastercard",width:24,sx:{ml:.5}})]})]});return(0,E.jsxs)(x.Z,{children:[o,(0,E.jsx)(ce.Z,{sx:{borderStyle:"dashed"}}),i,(0,E.jsx)(ce.Z,{sx:{borderStyle:"dashed"}}),l,(0,E.jsx)(ce.Z,{sx:{borderStyle:"dashed"}}),a]})}function ue(e){var n=e.items,t=e.shipping,r=e.discount,o=e.taxes,i=e.subTotal,l=e.totalAmount,a=(0,E.jsxs)(T.Z,{spacing:2,alignItems:"flex-end",sx:{my:3,textAlign:"right",typography:"body2"},children:[(0,E.jsxs)(T.Z,{direction:"row",children:[(0,E.jsx)(F.Z,{sx:{color:"text.secondary"},children:"Subtotal"}),(0,E.jsx)(F.Z,{sx:{width:160,typography:"subtitle2"},children:(0,N.e_)(i)||"-"})]}),(0,E.jsxs)(T.Z,{direction:"row",children:[(0,E.jsx)(F.Z,{sx:{color:"text.secondary"},children:"Shipping"}),(0,E.jsx)(F.Z,{sx:(0,s.Z)({width:160},t&&{color:"error.main"}),children:t?"- ".concat((0,N.e_)(t)):"-"})]}),(0,E.jsxs)(T.Z,{direction:"row",children:[(0,E.jsx)(F.Z,{sx:{color:"text.secondary"},children:"Discount"}),(0,E.jsx)(F.Z,{sx:(0,s.Z)({width:160},r&&{color:"error.main"}),children:r?"- ".concat((0,N.e_)(r)):"-"})]}),(0,E.jsxs)(T.Z,{direction:"row",children:[(0,E.jsx)(F.Z,{sx:{color:"text.secondary"},children:"Taxes"}),(0,E.jsx)(F.Z,{sx:{width:160},children:o?(0,N.e_)(o):"-"})]}),(0,E.jsxs)(T.Z,{direction:"row",sx:{typography:"subtitle1"},children:[(0,E.jsx)(F.Z,{children:"Total"}),(0,E.jsx)(F.Z,{sx:{width:160},children:(0,N.e_)(l)||"-"})]})]});return(0,E.jsxs)(x.Z,{children:[(0,E.jsx)(de.Z,{title:"Details"}),(0,E.jsxs)(T.Z,{sx:{px:3},children:[(0,E.jsx)(S.Z,{children:n.map((function(e){return(0,E.jsxs)(T.Z,{direction:"row",alignItems:"center",sx:{py:3,minWidth:640,borderBottom:function(e){return"dashed 2px ".concat(e.palette.background.neutral)}},children:[(0,E.jsx)(_.Z,{src:e.coverUrl,variant:"rounded",sx:{width:48,height:48,mr:2}}),(0,E.jsx)(L.Z,{primary:e.name,secondary:e.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),(0,E.jsxs)(F.Z,{sx:{typography:"body2"},children:["x",e.quantity]}),(0,E.jsx)(F.Z,{sx:{width:110,textAlign:"right",typography:"subtitle2"},children:(0,N.e_)(e.price)})]},e.id)}))}),a]})]})}var pe=t(98880);function Ze(e){var n=e.status,t=e.backLink,r=e.createdAt,s=e.orderNumber,o=e.statusOptions,i=e.onChangeStatus,l=(0,U.S)();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(T.Z,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:[(0,E.jsxs)(T.Z,{spacing:1,direction:"row",alignItems:"flex-start",children:[(0,E.jsx)(j.Z,{component:pe.r,href:t,children:(0,E.jsx)(k.Z,{icon:"eva:arrow-ios-back-fill"})}),(0,E.jsxs)(T.Z,{spacing:.5,children:[(0,E.jsxs)(T.Z,{spacing:1,direction:"row",alignItems:"center",children:[(0,E.jsxs)(xe.Z,{variant:"h4",children:[" Order ",s," "]}),(0,E.jsx)(C.Z,{variant:"soft",color:("completed"===n?"success":"pending"===n&&"warning")||"cancelled"===n&&"error"||"default",children:n})]}),(0,E.jsx)(xe.Z,{variant:"body2",sx:{color:"text.disabled"},children:(0,b.zM)(r)})]})]}),(0,E.jsxs)(T.Z,{flexGrow:1,spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[(0,E.jsx)(u.Z,{color:"inherit",variant:"outlined",endIcon:(0,E.jsx)(k.Z,{icon:"eva:arrow-ios-downward-fill"}),onClick:l.onOpen,sx:{textTransform:"capitalize"},children:n}),(0,E.jsx)(u.Z,{color:"inherit",variant:"outlined",startIcon:(0,E.jsx)(k.Z,{icon:"solar:printer-minimalistic-bold"}),children:"Print"}),(0,E.jsx)(u.Z,{color:"inherit",variant:"contained",startIcon:(0,E.jsx)(k.Z,{icon:"solar:pen-bold"}),children:"Edit"})]})]}),(0,E.jsx)(U.Z,{open:l.open,onClose:l.onClose,arrow:"top-right",sx:{width:140},children:o.map((function(e){return(0,E.jsx)(Q.Z,{selected:e.value===n,onClick:function(){l.onClose(),i(e.value)},children:e.label},e.value)}))})]})}var ge=t(48571),je=t(61414),me=t(88221),fe=t(83922),we=t(17945),ye=t(23355),be=t(99699);function ve(e){var n=e.history,t=(0,E.jsxs)(T.Z,{spacing:2,component:O.Z,variant:"outlined",sx:{p:2.5,minWidth:260,flexShrink:0,borderRadius:2,typography:"body2",borderStyle:"dashed"},children:[(0,E.jsxs)(T.Z,{spacing:.5,children:[(0,E.jsx)(F.Z,{sx:{color:"text.disabled"},children:"Order time"}),(0,b.zM)(n.orderTime)]}),(0,E.jsxs)(T.Z,{spacing:.5,children:[(0,E.jsx)(F.Z,{sx:{color:"text.disabled"},children:"Payment time"}),(0,b.zM)(n.orderTime)]}),(0,E.jsxs)(T.Z,{spacing:.5,children:[(0,E.jsx)(F.Z,{sx:{color:"text.disabled"},children:"Delivery time for the carrier"}),(0,b.zM)(n.orderTime)]}),(0,E.jsxs)(T.Z,{spacing:.5,children:[(0,E.jsx)(F.Z,{sx:{color:"text.disabled"},children:"Completion time"}),(0,b.zM)(n.orderTime)]})]}),s=(0,E.jsx)(ge.Z,{sx:(0,r.Z)({p:0,m:0},"& .".concat(ye.Z.root,":before"),{flex:0,padding:0}),children:n.timeline.map((function(e,t){var r=0===t,s=t===n.timeline.length-1;return(0,E.jsxs)(be.Z,{children:[(0,E.jsxs)(fe.Z,{children:[(0,E.jsx)(je.Z,{color:r?"primary":"grey"}),s?null:(0,E.jsx)(we.Z,{})]}),(0,E.jsxs)(me.Z,{children:[(0,E.jsx)(xe.Z,{variant:"subtitle2",children:e.title}),(0,E.jsx)(F.Z,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:(0,b.zM)(e.time)})]})]},e.title)}))});return(0,E.jsxs)(x.Z,{children:[(0,E.jsx)(de.Z,{title:"History"}),(0,E.jsxs)(T.Z,{spacing:3,alignItems:{md:"flex-start"},direction:{xs:"column-reverse",md:"row"},sx:{p:3},children:[s,t]})]})}function Ce(e){var n=e.id,t=(0,D.K$)(),r=y._Q.filter((function(e){return e.id===n}))[0],s=(0,l.useState)(r.status),i=(0,o.Z)(s,2),a=i[0],c=i[1],d=(0,l.useCallback)((function(e){c(e)}),[]);return(0,E.jsxs)(Z.Z,{maxWidth:!t.themeStretch&&"lg",children:[(0,E.jsx)(Ze,{backLink:f.H.dashboard.order.root,orderNumber:r.orderNumber,createdAt:r.createdAt,status:a,onChangeStatus:d,statusOptions:y.s8}),(0,E.jsxs)(le.Z,{container:!0,spacing:3,children:[(0,E.jsx)(le.Z,{xs:12,md:8,children:(0,E.jsxs)(T.Z,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:[(0,E.jsx)(ue,{items:r.items,taxes:r.taxes,shipping:r.shipping,discount:r.discount,subTotal:r.subTotal,totalAmount:r.totalAmount}),(0,E.jsx)(ve,{history:r.history})]})}),(0,E.jsx)(le.Z,{xs:12,md:4,children:(0,E.jsx)(he,{customer:r.customer,delivery:r.delivery,payment:r.payment,shippingAddress:r.shippingAddress})})]})]})}}}]);