"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[286],{81851:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(36459),i=n(1413),s=n(45987),o=(n(79956),n(73874)),a=n(15546),l=n(65242),c=n(99901),d=n(90891),h=n(98880),x=n(12435),u=n(4942),p=n(17592),m=n(17551),Z=(0,p.ZP)("div")((function(e){var t,n=e.theme,r="light"===n.palette.mode;return{h1:(0,i.Z)({margin:0},n.typography.h1),h2:(0,i.Z)({margin:0},n.typography.h2),h3:(0,i.Z)({margin:0},n.typography.h3),h4:(0,i.Z)({margin:0},n.typography.h4),h5:(0,i.Z)({margin:0},n.typography.h5),h6:(0,i.Z)({margin:0},n.typography.h6),p:(0,i.Z)({margin:0},n.typography.body1),br:{display:"grid",content:'""',marginTop:"0.75em"},hr:{margin:0,flexShrink:0,borderWidth:0,msFlexNegative:0,WebkitFlexShrink:0,borderStyle:"solid",borderBottomWidth:"thin",borderColor:n.palette.divider},"& ul, & ol":{margin:0,"& li":{lineHeight:2}},"& blockquote":(t={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:n.spacing(3,3,3,8),color:n.palette.text.secondary,borderRadius:2*n.shape.borderRadius,backgroundColor:n.palette.background.neutral},(0,u.Z)(t,n.breakpoints.up("md"),{width:"80%"}),(0,u.Z)(t,"& p, & span",{marginBottom:0,fontSize:"inherit",fontFamily:"inherit"}),(0,u.Z)(t,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:n.palette.text.disabled}),t),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:n.spacing(2),color:n.palette.common.white,borderRadius:n.shape.borderRadius,backgroundColor:r?n.palette.grey[900]:(0,m.Fq)(n.palette.grey[500],.16)},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:n.spacing(.2,.5),color:n.palette.warning[r?"darker":"lighter"],backgroundColor:n.palette.warning[r?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}},table:{width:"100%",borderCollapse:"collapse",border:"1px solid ".concat(n.palette.divider),"th, td":{padding:n.spacing(1),border:"1px solid ".concat(n.palette.divider)},"tbody tr:nth-of-type(odd)":{backgroundColor:n.palette.background.neutral}},input:{"&[type=checkbox]":{position:"relative",cursor:"pointer","&:before":{content:'""',top:-2,left:-2,width:17,height:17,borderRadius:3,position:"absolute",backgroundColor:n.palette.grey[r?300:700]},"&:checked":{"&:before":{backgroundColor:n.palette.primary.main},"&:after":{content:'""',top:1,left:5,width:4,height:9,position:"absolute",transform:"rotate(45deg)",msTransform:"rotate(45deg)",WebkitTransform:"rotate(45deg)",border:"solid ".concat(n.palette.common.white),borderWidth:"0 2px 2px 0"}}}}}})),j=n(46417),g=["sx"];function f(e){var t=e.sx,n=(0,s.Z)(e,g);return(0,j.jsx)(Z,{sx:t,children:(0,j.jsx)(o.D,(0,i.Z)({rehypePlugins:[a.Z,c.Z,[l.Z,{singleTilde:!1}]],components:v},n))})}var v={img:function(e){var t=Object.assign({},((0,r.Z)(e),e));return(0,j.jsx)(x.Z,(0,i.Z)({alt:t.alt,ratio:"16/9",sx:{borderRadius:2}},t))},a:function(e){var t=Object.assign({},((0,r.Z)(e),e));return t.href.includes("http")?(0,j.jsx)(d.Z,(0,i.Z)({target:"_blank",rel:"noopener"},t)):(0,j.jsx)(d.Z,(0,i.Z)((0,i.Z)({component:h.r,href:t.href},t),{},{children:t.children}))}}},68891:function(e,t,n){n.d(t,{Z:function(){return u},t:function(){return s}});var r=n(19860),i=n(3826);function s(e){var t,n=(0,r.Z)(),s=(0,i.z)(),o=n.breakpoints.up("xl"===s?"lg":s),a=("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e)&&n.typography[e][o]?n.typography[e][o]:n.typography[e],l=(t=a.fontSize,Math.round(16*parseFloat(t))),c=Number(n.typography[e].lineHeight)*l,d=n.typography[e];return{fontSize:l,lineHeight:c,fontWeight:d.fontWeight,letterSpacing:d.letterSpacing}}var o=n(1413),a=n(45987),l=n(47313),c=n(90891),d=n(47605),h=n(46417),x=["asLink","variant","line","persistent","children","sx"],u=(0,l.forwardRef)((function(e,t){var n=e.asLink,r=e.variant,i=void 0===r?"body1":r,l=e.line,u=void 0===l?2:l,p=e.persistent,m=void 0!==p&&p,Z=e.children,j=e.sx,g=(0,a.Z)(e,x),f=s(i).lineHeight,v=(0,o.Z)((0,o.Z)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:u,WebkitBoxOrient:"vertical"},m&&{height:f*u}),j);return n?(0,h.jsx)(c.Z,(0,o.Z)((0,o.Z)({color:"inherit",ref:t,variant:i,sx:(0,o.Z)({},v)},g),{},{children:Z})):(0,h.jsx)(d.Z,(0,o.Z)((0,o.Z)({ref:t,variant:i,sx:(0,o.Z)({},v)},g),{},{children:Z}))}))},27247:function(e,t,n){n.d(t,{N:function(){return s}});var r=n(29439),i=n(47313);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=(0,i.useState)(e),s=(0,r.Z)(n,2),o=s[0],a=s[1];return(0,i.useEffect)((function(){var n=setTimeout((function(){a(e)}),t);return function(){clearTimeout(n)}}),[e,t]),o}},30286:function(e,t,n){n.d(t,{UY:function(){return _e},bP:function(){return ct},FB:function(){return tt},mv:function(){return De},Ns:function(){return at},Nr:function(){return xe}});var r=n(4942),i=n(1413),s=n(29439),o=n(68520),a=n.n(o),l=n(47313),c=n(67176),d=n(5297),h=n(42832),x=n(71003),u=n(47825),p=n(76025),m=n(98880),Z=n(27247),j=n(26797),g=n(1010),f=n(59864);function v(){var e=f.Hv.post.list,t=(0,g.ZP)(e,f._i),n=t.data,r=t.isLoading,i=t.error,s=t.isValidating;return(0,l.useMemo)((function(){return{posts:(null===n||void 0===n?void 0:n.posts)||[],postsLoading:r,postsError:i,postsValidating:s,postsEmpty:!r&&!(null!==n&&void 0!==n&&n.posts.length)}}),[null===n||void 0===n?void 0:n.posts,i,r,s])}function b(e){var t=e?[f.Hv.post.details,{params:{title:e}}]:null,n=(0,g.ZP)(t,f._i),r=n.data,i=n.isLoading,s=n.error,o=n.isValidating;return(0,l.useMemo)((function(){return{post:null===r||void 0===r?void 0:r.post,postLoading:i,postError:s,postValidating:o}}),[null===r||void 0===r?void 0:r.post,s,i,o])}function w(e){var t=e?[f.Hv.post.search,{params:{query:e}}]:null,n=(0,g.ZP)(t,f._i,{keepPreviousData:!0}),r=n.data,i=n.isLoading,s=n.error,o=n.isValidating;return(0,l.useMemo)((function(){return{searchResults:(null===r||void 0===r?void 0:r.results)||[],searchLoading:i,searchError:s,searchValidating:o,searchEmpty:!i&&!(null!==r&&void 0!==r&&r.results.length)}}),[null===r||void 0===r?void 0:r.results,s,i,o])}var y=n(11062),k=n(35736),C=n(36622),S=n(14368),I=n(57829),P=n(97741),F=n(27480),L=n(46417);function U(e){var t=e.sort,n=e.sortOptions,r=e.onSort,i=(0,F.S)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(x.Z,{disableRipple:!0,color:"inherit",onClick:i.onOpen,endIcon:(0,L.jsx)(k.Z,{icon:i.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold",textTransform:"capitalize"},children:["Sort By:",(0,L.jsx)(I.Z,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold"},children:t})]}),(0,L.jsx)(F.Z,{open:i.open,onClose:i.onClose,sx:{width:140},children:n.map((function(e){return(0,L.jsx)(P.Z,{selected:t===e.value,onClick:function(){i.onClose(),r(e.value)},children:e.label},e.value)}))})]})}var T=n(83870),W=n.n(T),H=n(46642),z=n.n(H),q=n(90891),A=n(63585),E=n(24631),O=n(47605),V=n(41727),B=n(48182),R=n(29339),D=n(31087),_=n(74873);function M(e){var t=e.query,n=e.results,s=e.onSearch,o=e.hrefItem,a=e.loading,c=(0,D.tv)(),d=function(e){c.push(o(e))},h=function(e){t&&"Enter"===e.key&&d(t)};return(0,L.jsx)(B.Z,{sx:{width:{xs:1,sm:260}},loading:a,autoHighlight:!0,popupIcon:null,options:n,onInputChange:function(e,t){return s(t)},getOptionLabel:function(e){return e.title},noOptionsText:(0,L.jsx)(_.Z,{query:t,sx:{bgcolor:"unset"}}),isOptionEqualToValue:function(e,t){return e.id===t.id},slotProps:{popper:{placement:"bottom-start",sx:{minWidth:320}},paper:{sx:(0,r.Z)({}," .".concat(R.Z.option),{pl:.75})}},renderInput:function(e){return(0,L.jsx)(E.Z,(0,i.Z)((0,i.Z)({},e),{},{placeholder:"Search...",onKeyUp:h,InputProps:(0,i.Z)((0,i.Z)({},e.InputProps),{},{startAdornment:(0,L.jsx)(V.Z,{position:"start",children:(0,L.jsx)(k.Z,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})}),endAdornment:(0,L.jsxs)(L.Fragment,{children:[a?(0,L.jsx)(k.Z,{icon:"svg-spinners:8-dots-rotate",sx:{mr:-3}}):null,e.InputProps.endAdornment]})})}))},renderOption:function(e,t,n){var r=n.inputValue,s=z()(t.title,r),o=W()(t.title,s);return(0,l.createElement)("li",(0,i.Z)((0,i.Z)({},e),{},{key:t.id}),(0,L.jsx)(A.Z,{alt:t.title,src:t.coverUrl,variant:"rounded",sx:{width:48,height:48,flexShrink:0,mr:1.5,borderRadius:1}},t.id),(0,L.jsx)(q.Z,{underline:"none",onClick:function(){return d(t.title)},children:o.map((function(e,t){return(0,L.jsx)(O.Z,{component:"span",color:e.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:e.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:e.text},t)}))},r))}})}var G=n(93433),K=n(396),N=n(50738),X=n(36459),$=n(45987),Q=n(61792),Y=n(84488),J=["variant","sx"];function ee(e){var t=e.variant,n=void 0===t?"vertical":t,r=e.sx,s=(0,$.Z)(e,J);return"horizontal"===n?(0,L.jsxs)(h.Z,(0,i.Z)((0,i.Z)({component:Q.Z,direction:"row",variant:"outlined",sx:(0,i.Z)({borderRadius:2},r)},s),{},{children:[(0,L.jsxs)(h.Z,{spacing:2,flexGrow:1,sx:{p:3},children:[(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,L.jsx)(Y.Z,{variant:"circular",sx:{width:40,height:40}}),(0,L.jsx)(Y.Z,{sx:{width:24,height:12}})]}),(0,L.jsx)(Y.Z,{sx:{width:1,height:10}}),(0,L.jsx)(Y.Z,{sx:{width:"calc(100% - 40px)",height:10}}),(0,L.jsx)(Y.Z,{sx:{width:"calc(100% - 80px)",height:10}})]}),(0,L.jsx)(h.Z,{sx:{p:1},children:(0,L.jsx)(Y.Z,{sx:{width:170,height:240,flexShrink:0}})})]})):(0,L.jsxs)(h.Z,(0,i.Z)((0,i.Z)({component:Q.Z,variant:"outlined",sx:(0,i.Z)({borderRadius:2},r)},s),{},{children:[(0,L.jsx)(h.Z,{sx:{p:1},children:(0,L.jsx)(Y.Z,{sx:{paddingTop:"100%"}})}),(0,L.jsxs)(h.Z,{spacing:2,direction:"row",alignItems:"center",sx:{p:3,pt:2},children:[(0,L.jsx)(Y.Z,{variant:"circular",sx:{width:40,height:40,flexShrink:0}}),(0,L.jsxs)(h.Z,{flexGrow:1,spacing:1,children:[(0,L.jsx)(Y.Z,{sx:{height:10}}),(0,L.jsx)(Y.Z,{sx:{width:.5,height:10}})]})]})]}))}function te(e){var t=Object.assign({},((0,X.Z)(e),e));return(0,L.jsxs)(h.Z,(0,i.Z)((0,i.Z)({},t),{},{children:[(0,L.jsx)(Y.Z,{variant:"rectangular",sx:{height:480}}),(0,L.jsxs)(h.Z,{sx:{width:1,maxWidth:720,mx:"auto"},children:[(0,L.jsxs)(h.Z,{spacing:2,direction:"row",alignItems:"center",sx:{my:8},children:[(0,L.jsx)(Y.Z,{variant:"circular",sx:{width:64,height:64,flexShrink:0}}),(0,L.jsxs)(h.Z,{spacing:1,flexGrow:1,children:[(0,L.jsx)(Y.Z,{height:10}),(0,L.jsx)(Y.Z,{height:10,sx:{width:.9}}),(0,L.jsx)(Y.Z,{height:10,sx:{width:.8}})]})]}),(0,L.jsx)(Y.Z,{sx:{height:720}})]})]}))}var ne=n(73428),re=n(47131),ie=n(3826),se=n(29047),oe=n(78794),ae=n(12435),le=n(68891);function ce(e){var t=e.post,n=(0,F.S)(),r=(0,D.tv)(),i=(0,ie.F)("up","md"),s=t.title,o=t.author,a=t.publish,l=t.coverUrl,c=t.createdAt,d=t.totalViews,x=t.totalShares,u=t.totalComments,Z=t.description;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(h.Z,{component:ne.Z,direction:"row",children:[(0,L.jsxs)(h.Z,{sx:{p:function(e){return e.spacing(3,3,2,3)}},children:[(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:2},children:[(0,L.jsx)(y.Z,{variant:"soft",color:"published"===a?"info":"default",children:a}),(0,L.jsx)(I.Z,{component:"span",sx:{typography:"caption",color:"text.disabled"},children:(0,se.Mu)(c)})]}),(0,L.jsxs)(h.Z,{spacing:1,flexGrow:1,children:[(0,L.jsx)(q.Z,{color:"inherit",component:m.r,href:p.H.dashboard.post.details(s),children:(0,L.jsx)(le.Z,{variant:"subtitle2",line:2,children:s})}),(0,L.jsx)(le.Z,{variant:"body2",sx:{color:"text.secondary"},children:Z})]}),(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,L.jsx)(re.Z,{color:n.open?"inherit":"default",onClick:n.onOpen,children:(0,L.jsx)(k.Z,{icon:"eva:more-horizontal-fill"})}),(0,L.jsxs)(h.Z,{spacing:1.5,flexGrow:1,direction:"row",justifyContent:"flex-end",sx:{typography:"caption",color:"text.disabled"},children:[(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,L.jsx)(k.Z,{icon:"eva:message-circle-fill",width:16,sx:{mr:.5}}),(0,oe.v1)(u)]}),(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,L.jsx)(k.Z,{icon:"solar:eye-bold",width:16,sx:{mr:.5}}),(0,oe.v1)(d)]}),(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,L.jsx)(k.Z,{icon:"solar:share-bold",width:16,sx:{mr:.5}}),(0,oe.v1)(x)]})]})]})]}),i&&(0,L.jsxs)(I.Z,{sx:{width:180,height:240,position:"relative",flexShrink:0,p:1},children:[(0,L.jsx)(A.Z,{alt:o.name,src:o.avatarUrl,sx:{position:"absolute",top:16,right:16,zIndex:9}}),(0,L.jsx)(ae.Z,{alt:s,src:l,sx:{height:1,borderRadius:1.5}})]})]}),(0,L.jsxs)(F.Z,{open:n.open,onClose:n.onClose,arrow:"bottom-center",sx:{width:140},children:[(0,L.jsxs)(P.Z,{onClick:function(){n.onClose(),r.push(p.H.dashboard.post.details(s))},children:[(0,L.jsx)(k.Z,{icon:"solar:eye-bold"}),"View"]}),(0,L.jsxs)(P.Z,{onClick:function(){n.onClose(),r.push(p.H.dashboard.post.edit(s))},children:[(0,L.jsx)(k.Z,{icon:"solar:pen-bold"}),"Edit"]}),(0,L.jsxs)(P.Z,{onClick:function(){n.onClose()},sx:{color:"error.main"},children:[(0,L.jsx)(k.Z,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}function de(e){var t=e.posts,n=e.loading,i=(0,L.jsx)(L.Fragment,{children:(0,G.Z)(Array(16)).map((function(e,t){return(0,L.jsx)(ee,{variant:"horizontal"},t)}))}),s=(0,L.jsx)(L.Fragment,{children:t.map((function(e){return(0,L.jsx)(ce,{post:e},e.id)}))});return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(I.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:n?i:s}),t.length>8&&(0,L.jsx)(K.Z,{count:8,sx:(0,r.Z)({mt:8},"& .".concat(N.Z.ul),{justifyContent:"center"})})]})}var he={publish:"all"};function xe(){var e=(0,C.K$)(),t=(0,l.useState)("latest"),n=(0,s.Z)(t,2),o=n[0],a=n[1],g=(0,l.useState)(he),f=(0,s.Z)(g,2),b=f[0],I=f[1],P=(0,l.useState)(""),F=(0,s.Z)(P,2),T=F[0],W=F[1],H=(0,Z.N)(T),z=v(),q=z.posts,A=z.postsLoading,E=w(H),O=E.searchResults,V=E.searchLoading,B=ue({inputData:q,filters:b,sortBy:o}),R=(0,l.useCallback)((function(e){a(e)}),[]),D=(0,l.useCallback)((function(e,t){I((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,r.Z)({},e,t))}))}),[]),_=(0,l.useCallback)((function(e){W(e)}),[]),G=(0,l.useCallback)((function(e,t){D("publish",t)}),[D]);return(0,L.jsxs)(u.Z,{maxWidth:!e.themeStretch&&"lg",children:[(0,L.jsx)(S.Z,{heading:"List",links:[{name:"Dashboard",href:p.H.dashboard.root},{name:"Blog",href:p.H.dashboard.post.root},{name:"List"}],action:(0,L.jsx)(x.Z,{component:m.r,href:p.H.dashboard.post.new,variant:"contained",startIcon:(0,L.jsx)(k.Z,{icon:"mingcute:add-line"}),children:"New Post"}),sx:{mb:{xs:3,md:5}}}),(0,L.jsxs)(h.Z,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[(0,L.jsx)(M,{query:H,results:O,onSearch:_,loading:V,hrefItem:function(e){return p.H.dashboard.post.details(e)}}),(0,L.jsx)(U,{sort:o,onSort:R,sortOptions:j.k})]}),(0,L.jsx)(d.Z,{value:b.publish,onChange:G,sx:{mb:{xs:3,md:5}},children:["all","published","draft"].map((function(e){return(0,L.jsx)(c.Z,{iconPosition:"end",value:e,label:e,icon:(0,L.jsxs)(y.Z,{variant:"all"===e||e===b.publish?"filled":"soft",color:"published"===e?"info":"default",children:["all"===e&&q.length,"published"===e&&q.filter((function(e){return"published"===e.publish})).length,"draft"===e&&q.filter((function(e){return"draft"===e.publish})).length]}),sx:{textTransform:"capitalize"}},e)}))}),(0,L.jsx)(de,{posts:B,loading:A})]})}var ue=function(e){var t=e.inputData,n=e.filters,r=e.sortBy,i=n.publish;return"latest"===r&&(t=a()(t,["createdAt"],["desc"])),"oldest"===r&&(t=a()(t,["createdAt"],["asc"])),"popular"===r&&(t=a()(t,["totalViews"],["desc"])),"all"!==i&&(t=t.filter((function(e){return e.publish===i}))),t},pe=n(74165),me=n(15861),Ze=n(21933),je=n(62563),ge=n(75627),fe=n(89708),ve=n(44610),be=n(67426),we=n(43717),ye=n(54641),ke=n(69173),Ce=n(77599),Se=n(25921),Ie=n(54796),Pe=n(94469),Fe=n(19536),Le=n(4117),Ue=n(81851),Te=n(30127),We=n(76996),He=n(19860),ze=n(17551),qe=n(60876),Ae=n(83213),Ee=n(11686),Oe=n(93999);function Ve(e){var t=e.title,n=e.author,r=e.coverUrl,s=e.createdAt,o=(0,He.Z)(),a=(0,ie.F)("up","sm");return(0,L.jsx)(I.Z,{sx:(0,i.Z)({height:480,overflow:"hidden"},(0,Oe.v3)({imgUrl:r,startColor:"".concat((0,ze.Fq)(o.palette.grey[900],.64)," 0%"),endColor:"".concat((0,ze.Fq)(o.palette.grey[900],.64)," 100%")})),children:(0,L.jsxs)(u.Z,{sx:{height:1,position:"relative"},children:[(0,L.jsx)(O.Z,{variant:"h3",component:"h1",sx:{zIndex:9,color:"common.white",position:"absolute",maxWidth:480,pt:{xs:2,md:8}},children:t}),(0,L.jsxs)(h.Z,{sx:{left:0,width:1,bottom:0,position:"absolute"},children:[n&&s&&(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",sx:{px:{xs:2,md:3},pb:{xs:3,md:8}},children:[(0,L.jsx)(A.Z,{alt:n.name,src:n.avatarUrl,sx:{width:64,height:64,mr:2}}),(0,L.jsx)(Ae.Z,{sx:{color:"common.white"},primary:n.name,secondary:(0,se.Mu)(s),primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{color:"inherit",sx:{opacity:.64}}})]}),(0,L.jsx)(qe.Z,{direction:a?"left":"up",ariaLabel:"Share post",icon:(0,L.jsx)(k.Z,{icon:"solar:share-bold"}),FabProps:{size:"medium"},sx:{position:"absolute",bottom:{xs:32,md:64},right:{xs:16,md:24}},children:j._I.map((function(e){return(0,L.jsx)(Ee.Z,{icon:(0,L.jsx)(k.Z,{icon:e.icon,sx:{color:e.color}}),tooltipTitle:e.name,tooltipPlacement:"top",FabProps:{color:"default"}},e.name)}))})]})]})})}function Be(e){var t=e.title,n=e.coverUrl,r=e.content,i=e.description,s=e.open,o=e.isValid,a=e.onClose,l=e.onSubmit,c=e.isSubmitting,d=t||i||r||n,p=t||n;return(0,L.jsxs)(Pe.Z,{fullScreen:!0,open:s,onClose:a,children:[(0,L.jsxs)(Le.Z,{sx:{py:2,px:3},children:[(0,L.jsx)(O.Z,{variant:"h6",sx:{flexGrow:1},children:"Preview"}),(0,L.jsx)(x.Z,{variant:"outlined",color:"inherit",onClick:a,children:"Cancel"}),(0,L.jsx)(fe.Z,{type:"submit",variant:"contained",disabled:!o,loading:c,onClick:l,children:"Post"})]}),(0,L.jsx)(Fe.Z,{}),d?(0,L.jsxs)(Te.Z,{children:[p&&(0,L.jsx)(Ve,{title:t,coverUrl:n}),(0,L.jsx)(u.Z,{sx:{mt:5,mb:10},children:(0,L.jsxs)(h.Z,{sx:{maxWidth:720,mx:"auto"},children:[(0,L.jsx)(O.Z,{variant:"h6",sx:{mb:5},children:i}),(0,L.jsx)(Ue.Z,{children:r})]})})]}):(0,L.jsx)(We.Z,{filled:!0,title:"Empty Content!"})]})}function Re(e){var t,n=e.currentPost,r=(0,D.tv)(),s=(0,ie.F)("up","md"),o=(0,Se.Ds)().enqueueSnackbar,a=(0,Ce.k)(),c=Ze.Ry().shape({title:Ze.Z_().required("Title is required"),description:Ze.Z_().required("Description is required"),content:Ze.Z_().required("Content is required"),coverUrl:Ze.nK().nullable().required("Cover is required"),tags:Ze.IX().min(2,"Must have at least 2 tags"),metaKeywords:Ze.IX().min(1,"Meta keywords is required"),metaTitle:Ze.Z_(),metaDescription:Ze.Z_()}),d=(0,l.useMemo)((function(){return{title:(null===n||void 0===n?void 0:n.title)||"",description:(null===n||void 0===n?void 0:n.description)||"",content:(null===n||void 0===n?void 0:n.content)||"",coverUrl:(null===n||void 0===n?void 0:n.coverUrl)||null,tags:(null===n||void 0===n?void 0:n.tags)||[],metaKeywords:(null===n||void 0===n?void 0:n.metaKeywords)||[],metaTitle:(null===n||void 0===n?void 0:n.metaTitle)||"",metaDescription:(null===n||void 0===n?void 0:n.metaDescription)||""}}),[n]),u=(0,ge.cI)({resolver:(0,je.X)(c),defaultValues:d}),m=u.reset,Z=u.watch,g=u.setValue,f=u.handleSubmit,v=u.formState,b=v.isSubmitting,w=v.isValid,y=Z();(0,l.useEffect)((function(){n&&m(d)}),[n,d,m]);var k=f(function(){var e=(0,me.Z)((0,pe.Z)().mark((function e(t){return(0,pe.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:m(),a.onFalse(),o(n?"Update success!":"Create success!"),r.push(p.H.dashboard.post.root),console.info("DATA",t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),C=(0,l.useCallback)((function(e){var t=e[0],n=Object.assign(t,{preview:URL.createObjectURL(t)});t&&g("coverUrl",n,{shouldValidate:!0})}),[g]),S=(0,l.useCallback)((function(){g("coverUrl",null)}),[g]),I=(0,L.jsxs)(L.Fragment,{children:[s&&(0,L.jsxs)(we.Z,{md:4,children:[(0,L.jsx)(O.Z,{variant:"h6",sx:{mb:.5},children:"Details"}),(0,L.jsx)(O.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),(0,L.jsx)(we.Z,{xs:12,md:8,children:(0,L.jsxs)(ne.Z,{children:[!s&&(0,L.jsx)(ye.Z,{title:"Details"}),(0,L.jsxs)(h.Z,{spacing:3,sx:{p:3},children:[(0,L.jsx)(Ie.au,{name:"title",label:"Post Title"}),(0,L.jsx)(Ie.au,{name:"description",label:"Description",multiline:!0,rows:3}),(0,L.jsxs)(h.Z,{spacing:1.5,children:[(0,L.jsx)(O.Z,{variant:"subtitle2",children:"Content"}),(0,L.jsx)(Ie.LM,{simple:!0,name:"content"})]}),(0,L.jsxs)(h.Z,{spacing:1.5,children:[(0,L.jsx)(O.Z,{variant:"subtitle2",children:"Cover"}),(0,L.jsx)(Ie.rd,{name:"coverUrl",maxSize:3145728,onDrop:C,onDelete:S})]})]})]})})]}),P=(0,L.jsxs)(L.Fragment,{children:[s&&(0,L.jsxs)(we.Z,{md:4,children:[(0,L.jsx)(O.Z,{variant:"h6",sx:{mb:.5},children:"Properties"}),(0,L.jsx)(O.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),(0,L.jsx)(we.Z,{xs:12,md:8,children:(0,L.jsxs)(ne.Z,{children:[!s&&(0,L.jsx)(ye.Z,{title:"Properties"}),(0,L.jsxs)(h.Z,{spacing:3,sx:{p:3},children:[(0,L.jsx)(Ie.Fl,{name:"tags",label:"Tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:j.Qw.map((function(e){return e})),getOptionLabel:function(e){return e},renderOption:function(e,t){return(0,l.createElement)("li",(0,i.Z)((0,i.Z)({},e),{},{key:t}),t)},renderTags:function(e,t){return e.map((function(e,n){return(0,l.createElement)(ve.Z,(0,i.Z)((0,i.Z)({},t({index:n})),{},{key:e,label:e,size:"small",color:"info",variant:"soft"}))}))}}),(0,L.jsx)(Ie.au,{name:"metaTitle",label:"Meta title"}),(0,L.jsx)(Ie.au,{name:"metaDescription",label:"Meta description",fullWidth:!0,multiline:!0,rows:3}),(0,L.jsx)(Ie.Fl,{name:"metaKeywords",label:"Meta keywords",placeholder:"+ Keywords",multiple:!0,freeSolo:!0,disableCloseOnSelect:!0,options:j.Qw.map((function(e){return e})),getOptionLabel:function(e){return e},renderOption:function(e,t){return(0,l.createElement)("li",(0,i.Z)((0,i.Z)({},e),{},{key:t}),t)},renderTags:function(e,t){return e.map((function(e,n){return(0,l.createElement)(ve.Z,(0,i.Z)((0,i.Z)({},t({index:n})),{},{key:e,label:e,size:"small",color:"info",variant:"soft"}))}))}}),(0,L.jsx)(ke.Z,{control:(0,L.jsx)(be.Z,{defaultChecked:!0}),label:"Enable comments"})]})]})})]}),F=(0,L.jsxs)(L.Fragment,{children:[s&&(0,L.jsx)(we.Z,{md:4}),(0,L.jsxs)(we.Z,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:[(0,L.jsx)(ke.Z,{control:(0,L.jsx)(be.Z,{defaultChecked:!0}),label:"Publish",sx:{flexGrow:1,pl:3}}),(0,L.jsx)(x.Z,{color:"inherit",variant:"outlined",size:"large",onClick:a.onTrue,children:"Preview"}),(0,L.jsx)(fe.Z,{type:"submit",variant:"contained",size:"large",loading:b,sx:{ml:2},children:n?"Save Changes":"Create Post"})]})]});return(0,L.jsxs)(Ie.ZP,{methods:u,onSubmit:k,children:[(0,L.jsxs)(we.Z,{container:!0,spacing:3,children:[I,P,F]}),(0,L.jsx)(Be,{title:y.title,content:y.content,description:y.description,coverUrl:"string"===typeof y.coverUrl?y.coverUrl:"".concat(null===(t=y.coverUrl)||void 0===t?void 0:t.preview),open:a.value,isValid:w,isSubmitting:b,onClose:a.onFalse,onSubmit:k})]})}function De(e){var t=e.title,n=(0,C.K$)(),r=b(t).post;return(0,L.jsxs)(u.Z,{maxWidth:!n.themeStretch&&"lg",children:[(0,L.jsx)(S.Z,{heading:"Edit",links:[{name:"Dashboard",href:p.H.dashboard.root},{name:"Blog",href:p.H.dashboard.post.root},{name:null===r||void 0===r?void 0:r.title}],sx:{mb:{xs:3,md:5}}}),(0,L.jsx)(Re,{currentPost:r})]})}function _e(){var e=(0,C.K$)();return(0,L.jsxs)(u.Z,{maxWidth:!e.themeStretch&&"lg",children:[(0,L.jsx)(S.Z,{heading:"Create a new post",links:[{name:"Dashboard",href:p.H.dashboard.root},{name:"Blog",href:p.H.dashboard.post.root},{name:"Create"}],sx:{mb:{xs:3,md:5}}}),(0,L.jsx)(Re,{})]})}var Me=n(49969),Ge=n(13490),Ke=n(32828),Ne=n(60194);function Xe(e){var t=e.name,n=e.avatarUrl,r=e.message,s=e.tagUser,o=e.postedAt,a=e.hasReply,l=(0,Ce.k)();return(0,L.jsxs)(Ne.ZP,{sx:(0,i.Z)({p:0,pt:3,alignItems:"flex-start"},a&&{pl:8}),children:[(0,L.jsx)(A.Z,{alt:t,src:n,sx:{mr:2,width:48,height:48}}),(0,L.jsxs)(h.Z,{flexGrow:1,sx:{pb:3,borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)}},children:[(0,L.jsx)(O.Z,{variant:"subtitle2",sx:{mb:.5},children:t}),(0,L.jsx)(O.Z,{variant:"caption",sx:{color:"text.disabled"},children:(0,se.Mu)(o)}),(0,L.jsxs)(O.Z,{variant:"body2",sx:{mt:1},children:[s&&(0,L.jsxs)(I.Z,{component:"strong",sx:{mr:.5},children:["@",s]}),r]}),l.value&&(0,L.jsx)(I.Z,{sx:{mt:2},children:(0,L.jsx)(E.Z,{fullWidth:!0,autoFocus:!0,placeholder:"Write comment..."})})]}),!a&&(0,L.jsx)(x.Z,{size:"small",color:l.value?"primary":"inherit",startIcon:(0,L.jsx)(k.Z,{icon:"solar:pen-bold",width:16}),onClick:l.onToggle,sx:{right:0,position:"absolute"},children:"Reply"})]})}function $e(e){var t=e.comments;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(L.Fragment,{children:t.map((function(e){var t=e.id,n=e.replyComment,r=e.name,i=e.users,s=e.message,o=e.avatarUrl,a=e.postedAt,l=!!n.length;return(0,L.jsxs)(I.Z,{children:[(0,L.jsx)(Xe,{name:r,message:s,postedAt:a,avatarUrl:o}),l&&n.map((function(e){var t=i.find((function(t){return t.id===e.userId}));return(0,L.jsx)(Xe,{name:(null===t||void 0===t?void 0:t.name)||"",message:e.message,postedAt:e.postedAt,avatarUrl:(null===t||void 0===t?void 0:t.avatarUrl)||"",tagUser:e.tagUser,hasReply:!0},e.id)}))]},t)}))}),(0,L.jsx)(K.Z,{count:8,sx:{my:5,mx:"auto"}})]})}function Qe(){var e=Ze.Ry().shape({comment:Ze.Z_().required("Comment is required"),name:Ze.Z_().required("Name is required"),email:Ze.Z_().required("Email is required").email("Email must be a valid email address")}),t=(0,ge.cI)({resolver:(0,je.X)(e),defaultValues:{comment:"",name:"",email:""}}),n=t.reset,r=t.handleSubmit,i=t.formState.isSubmitting,s=r(function(){var e=(0,me.Z)((0,pe.Z)().mark((function e(t){return(0,pe.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:n(),console.info("DATA",t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}());return(0,L.jsx)(Ie.ZP,{methods:t,onSubmit:s,children:(0,L.jsxs)(h.Z,{spacing:3,children:[(0,L.jsx)(Ie.au,{name:"comment",placeholder:"Write some of your comments...",multiline:!0,rows:4}),(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",flexGrow:1,children:[(0,L.jsx)(re.Z,{children:(0,L.jsx)(k.Z,{icon:"solar:gallery-add-bold"})}),(0,L.jsx)(re.Z,{children:(0,L.jsx)(k.Z,{icon:"eva:attach-2-fill"})}),(0,L.jsx)(re.Z,{children:(0,L.jsx)(k.Z,{icon:"eva:smiling-face-fill"})})]}),(0,L.jsx)(fe.Z,{type:"submit",variant:"contained",loading:i,children:"Post comment"})]})]})})}var Ye=n(61689),Je=["publish","backLink","editLink","liveLink","publishOptions","onChangePublish","sx"];function et(e){var t=e.publish,n=e.backLink,r=e.editLink,s=e.liveLink,o=e.publishOptions,a=e.onChangePublish,l=e.sx,c=(0,$.Z)(e,Je),d=(0,F.S)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(h.Z,(0,i.Z)((0,i.Z)({spacing:1.5,direction:"row",sx:(0,i.Z)({mb:{xs:3,md:5}},l)},c),{},{children:[(0,L.jsx)(x.Z,{component:m.r,href:n,startIcon:(0,L.jsx)(k.Z,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),(0,L.jsx)(I.Z,{sx:{flexGrow:1}}),"published"===t&&(0,L.jsx)(Ye.Z,{title:"Go Live",children:(0,L.jsx)(re.Z,{component:m.r,href:s,children:(0,L.jsx)(k.Z,{icon:"eva:external-link-fill"})})}),(0,L.jsx)(Ye.Z,{title:"Edit",children:(0,L.jsx)(re.Z,{component:m.r,href:r,children:(0,L.jsx)(k.Z,{icon:"solar:pen-bold"})})}),(0,L.jsx)(fe.Z,{color:"inherit",variant:"contained",loading:!t,loadingIndicator:"Loading\u2026",endIcon:(0,L.jsx)(k.Z,{icon:"eva:arrow-ios-downward-fill"}),onClick:d.onOpen,sx:{textTransform:"capitalize"},children:t})]})),(0,L.jsx)(F.Z,{open:d.open,onClose:d.onClose,arrow:"top-right",sx:{width:140},children:o.map((function(e){return(0,L.jsxs)(P.Z,{selected:e.value===t,onClick:function(){d.onClose(),a(e.value)},children:["published"===e.value&&(0,L.jsx)(k.Z,{icon:"eva:cloud-upload-fill"}),"draft"===e.value&&(0,L.jsx)(k.Z,{icon:"solar:file-text-bold"}),e.label]},e.value)}))})]})}function tt(e){var t=e.title,n=(0,l.useState)(""),i=(0,s.Z)(n,2),o=i[0],a=i[1],c=b(t),d=c.post,Z=c.postLoading,g=c.postError,f=(0,l.useCallback)((function(e){a(e)}),[]);(0,l.useEffect)((function(){d&&a(null===d||void 0===d?void 0:d.publish)}),[d]);var v=(0,L.jsx)(te,{}),w=(0,L.jsx)(We.Z,{filled:!0,title:"".concat(null===g||void 0===g?void 0:g.message),action:(0,L.jsx)(x.Z,{component:m.r,href:p.H.dashboard.post.root,startIcon:(0,L.jsx)(k.Z,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:20}}),y=d&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(et,{backLink:p.H.dashboard.post.root,editLink:p.H.dashboard.post.edit("".concat(null===d||void 0===d?void 0:d.title)),liveLink:p.H.post.details("".concat(null===d||void 0===d?void 0:d.title)),publish:o||"",onChangePublish:f,publishOptions:j.TZ}),(0,L.jsx)(Ve,{title:d.title,coverUrl:d.coverUrl}),(0,L.jsxs)(h.Z,{sx:{maxWidth:720,mx:"auto",mt:{xs:5,md:10}},children:[(0,L.jsx)(O.Z,{variant:"subtitle1",sx:{mb:5},children:d.description}),(0,L.jsx)(Ue.Z,{children:d.content}),(0,L.jsxs)(h.Z,{spacing:3,sx:{py:3,borderTop:function(e){return"dashed 1px ".concat(e.palette.divider)},borderBottom:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:[(0,L.jsx)(h.Z,{direction:"row",flexWrap:"wrap",spacing:1,children:d.tags.map((function(e){return(0,L.jsx)(ve.Z,{label:e,variant:"soft"},e)}))}),(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,L.jsx)(ke.Z,{control:(0,L.jsx)(Me.Z,{defaultChecked:!0,size:"small",color:"error",icon:(0,L.jsx)(k.Z,{icon:"solar:heart-bold"}),checkedIcon:(0,L.jsx)(k.Z,{icon:"solar:heart-bold"})}),label:(0,oe.v1)(d.totalFavorites),sx:{mr:1}}),(0,L.jsx)(Ge.Z,{sx:(0,r.Z)({},"& .".concat(Ke.Z.avatar),{width:32,height:32}),children:d.favoritePerson.map((function(e){return(0,L.jsx)(A.Z,{alt:e.name,src:e.avatarUrl},e.name)}))})]})]}),(0,L.jsxs)(h.Z,{direction:"row",sx:{mb:3,mt:5},children:[(0,L.jsx)(O.Z,{variant:"h4",children:"Comments"}),(0,L.jsxs)(O.Z,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",d.comments.length,")"]})]}),(0,L.jsx)(Qe,{}),(0,L.jsx)(Fe.Z,{sx:{mt:5,mb:2}}),(0,L.jsx)($e,{comments:d.comments})]})]});return(0,L.jsxs)(u.Z,{maxWidth:!1,children:[Z&&v,g&&w,d&&y]})}var nt=n(93405),rt=n(81472);function it(e){var t=e.post,n=e.index,r=(0,He.Z)(),i=(0,ie.F)("up","md"),s=t.coverUrl,o=t.title,a=t.totalViews,l=t.totalComments,c=t.totalShares,d=t.author,h=t.createdAt;return i&&(0===n||1===n||2===n)?(0,L.jsxs)(ne.Z,{children:[(0,L.jsx)(A.Z,{alt:d.name,src:d.avatarUrl,sx:{top:24,left:24,zIndex:9,position:"absolute"}}),(0,L.jsx)(st,{title:o,createdAt:h,totalViews:a,totalShares:c,totalComments:l,index:n}),(0,L.jsx)(ae.Z,{alt:o,src:s,overlay:(0,ze.Fq)(r.palette.grey[900],.48),sx:{width:1,height:360}})]}):(0,L.jsxs)(ne.Z,{children:[(0,L.jsxs)(I.Z,{sx:{position:"relative"},children:[(0,L.jsx)(rt.oG,{sx:{left:0,zIndex:9,width:88,height:36,bottom:-16,position:"absolute"}}),(0,L.jsx)(A.Z,{alt:d.name,src:d.avatarUrl,sx:{left:24,zIndex:9,bottom:-24,position:"absolute"}}),(0,L.jsx)(ae.Z,{alt:o,src:s,ratio:"4/3"})]}),(0,L.jsx)(st,{title:o,totalViews:a,totalComments:l,totalShares:c,createdAt:h})]})}function st(e){var t=e.title,n=e.createdAt,r=e.totalViews,s=e.totalShares,o=e.totalComments,a=e.index,l=(0,ie.F)("up","md"),c=p.H.post.details(t),d=0===a,x=1===a||2===a;return(0,L.jsxs)(nt.Z,{sx:(0,i.Z)({pt:6,width:1},(d||x)&&{pt:0,zIndex:9,bottom:0,position:"absolute",color:"common.white"}),children:[(0,L.jsx)(O.Z,{variant:"caption",component:"div",sx:(0,i.Z)({mb:1,color:"text.disabled"},(d||x)&&{opacity:.64,color:"common.white"}),children:(0,se.Mu)(n)}),(0,L.jsx)(q.Z,{color:"inherit",component:m.r,href:c,children:(0,L.jsx)(le.Z,{variant:l&&d?"h5":"subtitle2",line:2,persistent:!0,children:t})}),(0,L.jsxs)(h.Z,{spacing:1.5,direction:"row",justifyContent:"flex-end",sx:(0,i.Z)({mt:3,typography:"caption",color:"text.disabled"},(d||x)&&{opacity:.64,color:"common.white"}),children:[(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,L.jsx)(k.Z,{icon:"eva:message-circle-fill",width:16,sx:{mr:.5}}),(0,oe.v1)(o)]}),(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,L.jsx)(k.Z,{icon:"solar:eye-bold",width:16,sx:{mr:.5}}),(0,oe.v1)(r)]}),(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,L.jsx)(k.Z,{icon:"solar:share-bold",width:16,sx:{mr:.5}}),(0,oe.v1)(s)]})]})]})}function ot(e){var t=e.posts,n=e.loading,r=e.disabledIndex,i=(0,L.jsx)(L.Fragment,{children:(0,G.Z)(Array(16)).map((function(e,t){return(0,L.jsx)(we.Z,{xs:12,sm:6,md:3,children:(0,L.jsx)(ee,{})},t)}))}),s=(0,L.jsx)(L.Fragment,{children:t.map((function(e,t){return(0,L.jsx)(we.Z,{xs:12,sm:6,md:r||0!==t?3:6,children:(0,L.jsx)(it,{post:e,index:r?void 0:t})},e.id)}))});return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(we.Z,{container:!0,spacing:3,children:n?i:s}),t.length>8&&(0,L.jsx)(h.Z,{alignItems:"center",sx:{mt:8,mb:{xs:10,md:15}},children:(0,L.jsx)(x.Z,{size:"large",variant:"outlined",startIcon:(0,L.jsx)(k.Z,{icon:"svg-spinners:12-dots-scale-rotate",width:24}),children:"Load More"})})]})}function at(){var e=(0,C.K$)(),t=(0,l.useState)("latest"),n=(0,s.Z)(t,2),r=n[0],i=n[1],o=(0,l.useState)(""),a=(0,s.Z)(o,2),c=a[0],d=a[1],x=(0,Z.N)(c),m=v(),g=m.posts,f=m.postsLoading,b=w(x),y=b.searchResults,k=b.searchLoading,S=lt({inputData:g,sortBy:r}),I=(0,l.useCallback)((function(e){i(e)}),[]),P=(0,l.useCallback)((function(e){d(e)}),[]);return(0,L.jsxs)(u.Z,{maxWidth:!e.themeStretch&&"lg",children:[(0,L.jsx)(O.Z,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Blog"}),(0,L.jsxs)(h.Z,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[(0,L.jsx)(M,{query:x,results:y,onSearch:P,loading:k,hrefItem:function(e){return p.H.post.details(e)}}),(0,L.jsx)(U,{sort:r,onSort:I,sortOptions:j.k})]}),(0,L.jsx)(ot,{posts:S,loading:f})]})}var lt=function(e){var t=e.inputData,n=e.sortBy;return"latest"===n?a()(t,["createdAt"],["desc"]):"oldest"===n?a()(t,["createdAt"],["asc"]):"popular"===n?a()(t,["totalViews"],["desc"]):t};function ct(e){var t=e.title,n=b(t),r=n.post,i=n.postError,s=n.postLoading,o=function(e){var t=e?[f.Hv.post.latest,{params:{title:e}}]:null,n=(0,g.ZP)(t,f._i),r=n.data,i=n.isLoading,s=n.error,o=n.isValidating;return(0,l.useMemo)((function(){return{latestPosts:(null===r||void 0===r?void 0:r.latestPosts)||[],latestPostsLoading:i,latestPostsError:s,latestPostsValidating:o,latestPostsEmpty:!i&&!(null!==r&&void 0!==r&&r.latestPosts.length)}}),[null===r||void 0===r?void 0:r.latestPosts,s,i,o])}(t),a=o.latestPosts,c=o.latestPostsLoading,d=(0,L.jsx)(te,{}),Z=(0,L.jsx)(u.Z,{sx:{my:10},children:(0,L.jsx)(We.Z,{filled:!0,title:"".concat(null===i||void 0===i?void 0:i.message),action:(0,L.jsx)(x.Z,{component:m.r,href:p.H.post.root,startIcon:(0,L.jsx)(k.Z,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:10}})}),j=r&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ve,{title:r.title,author:r.author,coverUrl:r.coverUrl,createdAt:r.createdAt}),(0,L.jsx)(u.Z,{maxWidth:!1,sx:{py:3,mb:5,borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)}},children:(0,L.jsx)(S.Z,{links:[{name:"Home",href:"/"},{name:"Blog",href:p.H.post.root},{name:null===r||void 0===r?void 0:r.title}],sx:{maxWidth:720,mx:"auto"}})}),(0,L.jsx)(u.Z,{maxWidth:!1,children:(0,L.jsxs)(h.Z,{sx:{maxWidth:720,mx:"auto"},children:[(0,L.jsx)(O.Z,{variant:"subtitle1",sx:{mb:5},children:r.description}),(0,L.jsx)(Ue.Z,{children:r.content}),(0,L.jsxs)(h.Z,{spacing:3,sx:{py:3,borderTop:function(e){return"dashed 1px ".concat(e.palette.divider)},borderBottom:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:[(0,L.jsx)(h.Z,{direction:"row",flexWrap:"wrap",spacing:1,children:r.tags.map((function(e){return(0,L.jsx)(ve.Z,{label:e,variant:"soft"},e)}))}),(0,L.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,L.jsx)(ke.Z,{control:(0,L.jsx)(Me.Z,{defaultChecked:!0,size:"small",color:"error",icon:(0,L.jsx)(k.Z,{icon:"solar:heart-bold"}),checkedIcon:(0,L.jsx)(k.Z,{icon:"solar:heart-bold"})}),label:(0,oe.v1)(r.totalFavorites),sx:{mr:1}}),(0,L.jsx)(Ge.Z,{children:r.favoritePerson.map((function(e){return(0,L.jsx)(A.Z,{alt:e.name,src:e.avatarUrl},e.name)}))})]})]}),(0,L.jsxs)(h.Z,{direction:"row",sx:{mb:3,mt:5},children:[(0,L.jsx)(O.Z,{variant:"h4",children:"Comments"}),(0,L.jsxs)(O.Z,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",r.comments.length,")"]})]}),(0,L.jsx)(Qe,{}),(0,L.jsx)(Fe.Z,{sx:{mt:5,mb:2}}),(0,L.jsx)($e,{comments:r.comments})]})})]}),v=(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(O.Z,{variant:"h4",sx:{mb:5},children:"Recent Posts"}),(0,L.jsx)(ot,{posts:a.slice(a.length-4),loading:c,disabledIndex:!0})]});return(0,L.jsxs)(L.Fragment,{children:[s&&d,i&&Z,r&&j,(0,L.jsx)(u.Z,{sx:{pb:15},children:!!a.length&&v})]})}}}]);