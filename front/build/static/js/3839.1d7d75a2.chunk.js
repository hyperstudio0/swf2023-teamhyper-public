"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[3839],{23839:function(e,n,r){r.r(n),r.d(n,{default:function(){return L}});var i=r(65964),a=r(93433),t=r(57829),l=r(90891),o=r(73428),s=r(42832),d=r(47825),c=r(54641),u=r(47605),m=r(76025),h=r(26797),f=r(14368),x=r(47131),g=r(60837),p=r(35736),b=r(46417),w=[{field:"id",headerName:"ID",width:120},{field:"firstName",headerName:"First name",width:160,editable:!0},{field:"lastName",headerName:"Last name",width:160,editable:!0},{field:"age",headerName:"Age",type:"number",width:120,editable:!0,align:"center",headerAlign:"center"},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",flex:1,valueGetter:function(e){return"".concat(e.row.firstName||""," ").concat(e.row.lastName||"")}},{field:"action",headerName:" ",width:80,align:"right",sortable:!1,disableColumnMenu:!0,renderCell:function(){return(0,b.jsx)(x.Z,{children:(0,b.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})}}];function j(e){var n=e.data;return(0,b.jsx)(g._,{columns:w,rows:n,checkboxSelection:!0,disableRowSelectionOnClick:!0})}var Z=r(1413),v=r(29439),C=r(47313),y=r(51885),N=r(63585),k=r(94149),A=r(30212),S=r(85833),_=r(78794),J=r(11062),Q=[{field:"id"},{field:"avatar",headerName:"Avatar",align:"center",headerAlign:"center",width:64,sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,b.jsx)(N.Z,{alt:e.row.name,sx:{width:36,height:36},children:e.row.name.charAt(0).toUpperCase()})}},{field:"name",headerName:"Name",flex:1,editable:!0},{field:"email",headerName:"Email",flex:1,editable:!0,renderCell:function(e){return(0,b.jsx)(u.Z,{variant:"body2",sx:{textDecoration:"underline"},noWrap:!0,children:e.row.email})}},{field:"lastLogin",type:"dateTime",headerName:"Last login",align:"right",headerAlign:"right",width:200},{field:"rating",type:"number",headerName:"Rating",width:160,disableColumnMenu:!0,renderCell:function(e){return(0,b.jsx)(y.Z,{size:"small",value:e.row.rating,precision:.5,readOnly:!0})}},{field:"status",type:"singleSelect",headerName:"Status",valueOptions:["online","alway","busy"],align:"center",headerAlign:"center",width:120,renderCell:function(e){return(0,b.jsx)(J.Z,{variant:"soft",color:("busy"===e.row.status?"error":"alway"===e.row.status&&"warning")||"success",sx:{mx:"auto"},children:e.row.status})}},{field:"isAdmin",type:"boolean",align:"center",headerAlign:"center",width:120,renderCell:function(e){return e.row.isAdmin?(0,b.jsx)(p.Z,{icon:"eva:checkmark-circle-2-fill",sx:{color:"primary.main"}}):"-"}},{field:"performance",type:"number",headerName:"Performance",align:"center",headerAlign:"center",width:160,renderCell:function(e){return(0,b.jsxs)(s.Z,{spacing:1,direction:"row",alignItems:"center",sx:{px:1,width:1,height:1},children:[(0,b.jsx)(k.Z,{value:e.row.performance,variant:"determinate",color:(e.row.performance<30?"error":e.row.performance>30&&e.row.performance<70&&"warning")||"primary",sx:{width:1,height:6}}),(0,b.jsx)(u.Z,{variant:"caption",sx:{width:80},children:(0,_.f2)(e.row.performance)})]})}},{field:"action",headerName:" ",align:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,b.jsx)(x.Z,{onClick:function(){return console.info("ID",e.row.id)},children:(0,b.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})}}];function M(e){var n=e.data,r=(0,C.useState)([]),i=(0,v.Z)(r,2),a=i[0],t=i[1],l=(0,C.useState)({id:!1}),o=(0,v.Z)(l,2),s=o[0],d=o[1];if(Q.length){var c=Q.find((function(e){return"rating"===e.field})),u=Q.findIndex((function(e){return"rating"===e.field})),m=(0,A.U)().map((function(e){return(0,Z.Z)((0,Z.Z)({},e),{},{InputComponent:I})}));Q[u]=(0,Z.Z)((0,Z.Z)({},c),{},{filterOperators:m})}var h=(0,C.useCallback)((function(e){d(e)}),[]),f=["id","action"],x=n.filter((function(e){return a.includes(e.id)}));return console.info("SELECTED ROWS",x),(0,b.jsx)(g._,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:n,columns:Q,onRowSelectionModelChange:function(e){t(e)},columnVisibilityModel:s,onColumnVisibilityModelChange:h,slots:{toolbar:S.n},slotProps:{columnsPanel:{getTogglableColumns:function(){return Q.filter((function(e){return!f.includes(e.field)})).map((function(e){return e.field}))}}}})}function I(e){var n=e.item,r=e.applyValue;return(0,b.jsx)(t.Z,{sx:{p:1,height:1,alignItems:"flex-end",display:"flex"},children:(0,b.jsx)(y.Z,{size:"small",precision:.5,placeholder:"Filter value",value:Number(n.value),onChange:function(e,i){r((0,Z.Z)((0,Z.Z)({},n),{},{value:i}))}})})}var D=(0,a.Z)(Array(20)).map((function(e,n){var r=(n%2?"online":n%3&&"alway")||n%4&&"busy"||"offline";return{id:h.QJ.id(n),status:r,email:h.QJ.email(n),name:h.QJ.fullName(n),age:h.QJ.number.age(n),lastLogin:h.QJ.time(n),isAdmin:h.QJ.boolean(n),lastName:h.QJ.lastName(n),rating:h.QJ.number.rating(n),firstName:h.QJ.firstName(n),performance:h.QJ.number.percent(n)}}));function F(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(f.Z,{heading:"DataGrid",links:[{name:"Components",href:m.H.components},{name:"DataGrid"}],moreLink:["https://mui.com/x/react-data-grid/"],sx:{mb:0}}),(0,b.jsxs)(u.Z,{variant:"body2",sx:{my:3},children:["This component includes 2 ",(0,b.jsx)("strong",{children:"Free"})," and ",(0,b.jsx)("strong",{children:"Paid"})," versions from MUI.",(0,b.jsx)("br",{}),"Paid version will have more features. Please read more"," ",(0,b.jsx)(l.Z,{href:"https://mui.com/x/react-data-grid/",target:"_blank",rel:"noopener",children:"here"})]})]})}),(0,b.jsx)(d.Z,{sx:{my:10},children:(0,b.jsxs)(s.Z,{spacing:5,children:[(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(c.Z,{title:"Basic",sx:{mb:2}}),(0,b.jsx)(t.Z,{sx:{height:390},children:(0,b.jsx)(j,{data:D})})]}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(c.Z,{title:"Custom",sx:{mb:2}}),(0,b.jsx)(t.Z,{sx:{height:720},children:(0,b.jsx)(M,{data:D})})]})]})})]})}function L(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.ql,{children:(0,b.jsx)("title",{children:" MUI: DataGrid"})}),(0,b.jsx)(F,{})]})}}}]);