(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{422:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(1),a=n.n(r),o=n(30),i=n.n(o),c=(n(2),n(23)),s=n.n(c),l=n(141),d=n.n(l),p=n(7),b=n(5),u=["name","isOutlined","isFlipped","className"];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={add:"add",arrow:"play_arrow",check:"check","check-in-circle":"check_circle",close:"close",delete:"delete","empty-heart":"favorite_border","expand-down":"expand_more","expand-up":"expand_less",heart:"favorite",info:"info",undo:"undo",redo:"redo",share:"share",link:"link",search:"search","more-vert":"more_vert","shopping-cart":"shopping_cart","up-arrow":"arrow_drop_up","down-arrow":"arrow_drop_down","left-arrow":"arrow_back","right-arrow":"arrow_forward","expand-more":"expand_more","expand-less":"expand_less","left-chevron":"keyboard_arrow_left",lock:"lock",menu:"menu",phone:"phone","right-chevron":"keyboard_arrow_right",star:"star",subtract:"remove","download-file":"sim_card_download","file-copy":"file_copy",print:"print",settings:"settings",visibility:"visibility","visibility-off":"visibility_off",error:"error"},f={flipped:Object(p.a)({name:"13fmgtn",styles:"transform:scaleX(-1)"})};function O(e){var t,n=e.name,r=e.isOutlined,o=void 0!==r&&r,c=e.isFlipped,s=void 0!==c&&c,l=e.className,p=i()(e,u),j=d()((t={},a()(t,o?"material-icons-outlined":"material-icons",!0),a()(t,l,!0),t));return Object(b.jsx)("i",h(h({className:"".concat(j," ").concat(s&&f.fli)},p),{},{children:m[n]}))}O.propTypes={name:s.a.string,className:s.a.oneOfType([s.a.string,s.a.object]),isOutlined:s.a.bool,isFlipped:s.a.bool}},453:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r=n(46),a=n.n(r),o=n(47),i=n.n(o),c=n(117),s=n.n(c),l=n(68),d=n.n(l),p=n(69),b=n.n(p),u=n(48),j=n.n(u),h=n(1),m=n.n(h),f=n(2),O=n(7),v=n(57),x=n(141),g=n.n(x),y=n(140),w=n.n(y),k=n(5);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j()(e);if(t){var a=j()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b()(this,n)}}var S={container:Object(O.a)({name:"bjn8wh",styles:"position:relative"}),toolTip:Object(O.a)(m()({opacity:0,visibility:"hidden",position:"absolute",top:"calc(100% + 5px)",left:"50%",transform:"translateX(-50%)",transition:"opacity 600ms ease",backgroundColor:"#222",color:"#fff",padding:"10px 12px",borderRadius:4,fontSize:14,fontWeight:500,zIndex:99999,whiteSpace:"nowrap",":after":{content:'""',position:"absolute",bottom:"100%",left:"50%",border:"solid transparent",height:0,width:0,borderColor:" rgba(34, 34, 34, 0)",borderBottomColor:"#222",borderWidth:5,marginLeft:-5}},"@media (max-width: ".concat(v.c,"px)"),{display:"none"}),"",""),activeTooltip:Object(O.a)({name:"nk3zlf",styles:"opacity:1;visibility:visible"})},P=function(e){d()(n,e);var t=N(n);function n(e){var r;return a()(this,n),r=t.call(this,e),w()(s()(r)),r.state={hovered:!1},r}return i()(n,[{key:"onMouseEnter",value:function(){this.setState({hovered:!0})}},{key:"onMouseLeave",value:function(){this.setState({hovered:!1})}},{key:"render",value:function(){var e,t=this.props,n=t.text,r=t.children,a=t.className,o=t.isDisabled;if(!n)return r;var i=(e={},m()(e,S.toolTip,!0),m()(e,S.activeTooltip,this.state.hovered),e);a&&(i["".concat(a)]=!0);var c=g()(i);return Object(k.jsx)(k.Fragment,{children:o?r:Object(k.jsxs)("span",{className:S.container,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,children:[r,Object(k.jsx)("div",{className:c,children:n})]})})}}]),n}(f.Component)},468:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(13),a=n(14),o=function(){return Object(a.action)(r.k)},i=function(){return Object(a.action)(r.b)}},488:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=(n(2),n(7)),i=n(23),c=n.n(i),s=n(76),l=n(5);var d={container:Object(o.a)({name:"1rdddp1",styles:"position:fixed;top:0;z-index:111;pointer-events:none;overflow:hidden;width:100%;height:100%"}),activeContainer:Object(o.a)({name:"n07k1x",styles:"pointer-events:all"}),overlay:Object(o.a)({name:"1wuf8po",styles:"position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, .4);opacity:0;pointer-events:none;transition:all 0.3s linear"}),activeOverlay:Object(o.a)({name:"1lqb9h0",styles:"opacity:1;pointer-events:all"}),root:function(e){return Object(o.a)({transition:"all 500ms cubic-bezier(0.45, 0.01, 0.04, 0.98)",willChange:"transform",width:420,top:10,height:"calc(100% - 20px)",overflow:"hidden",borderRadius:e.styles.borderRadius,background:e.palette.ui.background,position:"fixed","@media (max-width: 425px)":{width:"calc(100% - 20px)"}},"","")},left:Object(o.a)({name:"1agdezb",styles:"transform:translateX(-420px)"}),leftActive:Object(o.a)({name:"13ktg2f",styles:"transform:translateX(10px)"}),right:Object(o.a)({name:"1vo0297",styles:"right:0;transform:translateX(420px)"}),rightActive:Object(o.a)({name:"1wkahce",styles:"transform:translateX(-10px)"}),scroll:Object(o.a)({name:"19z1nbw",styles:"overflow:scroll"})},p=function(e){var t,n,r,i=e.theme,c=e.children,s=e.isOpen,p=e.onCloseSidebar,b=e.scroll,u=e.side,j=Object(o.b)((t={},a()(t,d.overlay,!0),a()(t,d.activeOverlay,s),t)),h=Object(o.b)((n={},a()(n,d.root(i),!0),a()(n,d[u],!0),a()(n,d.activeSidebar,s),a()(n,d["".concat(u,"Active")],s),a()(n,d.scroll,b),n)),m=Object(o.b)((r={},a()(r,d.container,!0),a()(r,d.activeContainer,s),r));return Object(l.jsxs)("div",{className:m,children:[Object(l.jsx)("div",{onClick:p,className:j}),Object(l.jsx)("div",{className:h,children:c})]})};p.propTypes={children:c.a.node,isOpen:c.a.bool,onCloseSidebar:c.a.func,side:c.a.string,scroll:c.a.bool,theme:c.a.object.isRequired},p.defaultProps={side:"right"},t.a=Object(s.b)(p)},571:function(e,t,n){"use strict";n(2);var r=n(7),a=n(422),o=n(53),i=n(5);var c={button:Object(r.a)({name:"644ij0",styles:"cursor:pointer;padding:8px;border:0;font-size:0;z-index:1"}),icon:function(e,t){return Object(r.a)({color:t?e.editor.palette.ui[300]:e.palette.text.primary},"","")}};t.a=function(e){var t=e.onOpenSidebar,n=e.darkMode,r=Object(o.a)();return Object(i.jsx)("button",{onClick:t,className:c.button,"data-cy":"hamburger-menu",children:Object(i.jsx)(a.a,{className:c.icon(r,n),name:"menu"})})}},582:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(30),i=n.n(o),c=(n(2),n(7)),s=n(587),l=n(605),d=n(53),p=n(5),b=["children"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){return Object(c.a)({background:e.palette.ui.background,width:"100%",minHeight:"100%",position:"absolute"},"","")};t.a=function(e){var t=e.children,n=i()(e,b),r=Object(d.a)();return Object(p.jsxs)("div",{className:h(r),children:[Object(p.jsx)("div",{children:t}),Object(p.jsx)(l.a,j({},n)),Object(p.jsx)(s.a,{})]})}},587:function(e,t,n){"use strict";var r=n(25),a=n(468),o=n(40),i=n(1),c=n.n(i),s=n(30),l=n.n(s),d=(n(2),n(7)),p=n(429),b=n.n(p),u=n(488),j=n(34),h=n(422),m=n(0),f=n(53),O=n(5),v=["isAuthenticated","userName","onLogin","onRegister","onLogout","onCloseSidebar","brands","hasMore"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={root:Object(d.a)({name:"d3v9zr",styles:"overflow:hidden"}),footer:function(e){return Object(d.a)({position:"absolute",bottom:0,width:"100%",background:e.palette.ui.divider,padding:"10px 10px 10px 30px",margin:0},"","")},footerDiv:Object(d.a)({name:"1u4hpl4",styles:"display:inline"}),footerItem:function(e){return Object(d.a)({listStyle:"none",display:"inline-block",fontSize:13,cursor:"pointer",color:e.palette.text.primary,padding:"5px 0",paddingRight:"20px"," a":{color:e.palette.text.primary}},"","")},headerLinkItem:function(e){return Object(d.a)({listStyle:"none",display:"inline-block",cursor:"pointer",color:e.palette.primary.main,padding:"5px 0",paddingRight:"20px"},"","")},header:function(e){return Object(d.a)({background:e.palette.primary.main,padding:10},"","")},username:function(e){return Object(d.a)({color:e.palette.primary.contrastText,fontSize:16,fontWeight:600},"","")},menu:Object(d.a)({name:"xiifce",styles:"height:calc(100vh - 131px);margin-top:30px;padding-bottom:40px;position:relative;overflow:auto"}),linkItem:Object(d.a)({name:"g65o95",styles:"text-decoration:none"}),menuItem:function(e){return Object(d.a)({color:e.palette.text.primary,fontSize:16,padding:"12px 30px",margin:0,fontWeight:600,cursor:"pointer",letterSpacing:0,":hover":{background:e.palette.ui.divider}},"","")},activeHeader:Object(d.a)({name:"1bvbw6e",styles:"padding:30px"}),close:function(e){return Object(d.a)({color:e.palette.primary.contrastText,fontSize:"5px",paddingLeft:"15px",marginLeft:"auto"},"","")},icon:Object(d.a)({name:"e0dnmk",styles:"cursor:pointer"}),divider:function(e){return Object(d.a)({position:"relative",marginBottom:50,"&:after":{content:'""',width:"calc(100% - 60px)",height:"1px",position:"absolute",background:e.palette.ui.divider,bottom:-25,left:30}},"","")},dividerHeader:Object(d.a)({name:"sijoc7",styles:"padding-left:25px;font-size:20px"}),headerLayout:Object(d.a)({name:"1auicq3",styles:"display:flex;justify-content:space-between;align-items:baseline"})},w=function(e){var t=e.isAuthenticated,n=e.onLogout,r=Object(f.a)();return Object(O.jsxs)("ul",{className:y.footer(r),children:[t?Object(O.jsxs)("div",{className:y.footerDiv,children:[Object(O.jsx)(b.a,{to:"/account-settings",children:Object(O.jsx)("li",{className:y.footerItem(r),"data-cy":"user-account",children:"Account"})}),Object(O.jsx)("li",{onClick:n,className:y.footerItem(r),"data-cy":"log-out",children:"Log Out"})]}):null,Object(O.jsx)("li",{className:y.footerItem(r),children:Object(O.jsx)("a",{href:"/terms",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"})}),Object(O.jsx)("li",{className:y.footerItem(r),children:Object(O.jsx)("a",{href:"/privacy",target:"_blank",rel:"noopener noreferrer",children:"Privacy"})})]})},k=function(e){var t,n=e.isAuthenticated,r=e.userName,a=e.onLogin,o=e.onRegister,i=e.onLogout,s=e.onCloseSidebar,p=e.brands,x=void 0===p?[]:p,k=e.hasMore,N=l()(e,v),S=Object(f.a)(),P=Object(d.b)((t={},c()(t,y.header(S),!0),c()(t,y.activeHeader,n),t)),_=x&&0!==x.length;return Object(O.jsx)(u.a,g(g({onCloseSidebar:s},N),{},{theme:S,children:Object(O.jsxs)("div",{className:y.root,"data-cy":"app-sidebar",children:[Object(O.jsxs)(j.a,{className:P,justify:"start",align:"end",children:[Object(O.jsx)("span",{className:y.username(S),children:r}),Object(O.jsx)("div",{className:y.close(S),children:Object(O.jsx)(h.a,{className:y.icon,name:"close",onClick:s})})]}),Object(O.jsxs)(j.a,{className:y.menu,column:!0,children:[n&&Object(O.jsxs)("div",{children:[_&&Object(O.jsxs)("div",{className:y.divider(S),children:[Object(O.jsxs)("div",{className:y.headerLayout,children:[Object(O.jsx)("h4",{className:y.dividerHeader,children:"Brands"}),k&&Object(O.jsx)(b.a,{to:"/dashboard",className:y.linkItem,children:Object(O.jsx)("p",{className:y.headerLinkItem(S),children:"View all"})})]}),x.slice(0,12).map((function(e){var t=e.id,n=e.name;return Object(O.jsx)(b.a,{to:"/brandkit/".concat(t),className:y.linkItem,children:Object(O.jsx)("p",{className:y.menuItem(S),children:n})},"sidebar-".concat(t))}))]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{className:y.dividerHeader,children:"Logos"}),Object(O.jsx)(b.a,{to:"/dashboard",className:y.linkItem,children:Object(O.jsx)("p",{className:y.menuItem(S),children:"Saved logos"})}),Object(O.jsx)(b.a,{to:{type:m.Ib,meta:{shouldResetGenerator:!0}},className:y.linkItem,children:Object(O.jsx)("p",{className:y.menuItem(S),children:"Logo Generator"})}),Object(O.jsx)(b.a,{to:"/byol",className:y.linkItem,children:Object(O.jsx)("p",{className:y.menuItem(S),children:"Upload New Logo"})}),!1]})]}),!n&&Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{onClick:a,className:y.menuItem(S),children:"Log in"}),Object(O.jsx)("p",{onClick:o,className:y.menuItem(S),children:"Register"})]})]}),Object(O.jsx)(w,{isAuthenticated:n,onLogout:i})]})}))},N=n(58),S=n(158),P=n(70),_=n(11),L=function(e){var t,n,r;if(!Object(N.a)(e))return"";var a=(null===(t=e.auth.user)||void 0===t?void 0:t.display_name)||(null===(n=e.auth.user)||void 0===n?void 0:n.full_name);return(null===(r=e.auth.user)||void 0===r?void 0:r.displayName)||a},I={onCloseSidebar:a.a,onLogin:o.b,onRegister:o.d,onLogout:_.a.onLogout,requestPurchasedBrands:P.a.onRequestBrands};t.a=Object(r.connect)((function(e){var t;return{isOpen:e.ui.isSidebarOpen,isAuthenticated:Object(N.a)(e),userName:L(e),brands:e.brands,hasMore:e.brands.length>12,isBrandkitUser:Object(S.a)(null===(t=e.auth.user)||void 0===t?void 0:t.id)}}),I)(k)},605:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(2),i=n(7),c=n(429),s=n.n(c),l=n(34),d=n(422),p=n(453),b=n(571),u=n(57),j=n(53),h=n(468),m=n(25),f=n(5);var O={root:Object(i.a)({name:"1be0cko",styles:"position:fixed;top:0;left:0;width:100%;height:70px;padding:0 20px;z-index:110;justify-content:space-between;flex-direction:row;display:flex;align-items:center;backdrop-filter:saturate(180%) blur(20px);background-color:rgba(255, 255, 255, 0.85);box-shadow:0 1px 0 0 rgba(0,0,0,0.05)"}),horizontalExplore:Object(i.a)(a()({},"@media screen and (min-width: ".concat(u.d,"px)"),{width:"100vw"}),"",""),button:function(e){return Object(i.a)({height:"36px",cursor:"pointer",border:"none",float:"left",padding:"0 15px",borderRadius:e.styles.borderRadius,":hover":{background:"#F5F6F8"}},"","")},logo:function(e){return Object(i.a)({position:"relative",top:2,"& img":{width:e.logo.width}},"","")},fav:function(e){return Object(i.a)({width:"0px",height:"0px",background:e.palette.common.error,borderRadius:"100%",fontSize:"0px",lineHeight:"0px",color:e.palette.common.white,textAlign:"center",position:"absolute",left:"20px",top:"0px"},"","")},newFav:Object(i.a)({name:"dv6ldl",styles:"transition:all 0.3s cubic-bezier(0.510, 0.190, 0.000, 1.570);width:18px;font-size:10px;line-height:18px;height:18px;left:11px;top:-5px"}),headerIcon:Object(i.a)({name:"jixqcp",styles:"min-width:50px"}),icon:function(e){return Object(i.a)({color:e.palette.text.primary},"","")},appLabel:function(e){return Object(i.a)(a()({color:e.palette.text.primary,fontSize:18,fontWeight:"bold",position:"absolute",lineHeight:"70px",top:0},"@media screen and (max-width: ".concat(u.d,"px)"),{display:"none"}),"","")}};t.a=function(e){var t,n=e.onOpenFavouriter,r=e.onBack,c=void 0===r?function(){}:r,u=e.hasBack,v=e.hasFavourite,x=e.hasNewFavourite,g=void 0===x?0:x,y=e.appLabel,w=Object(j.a)(),k=Object(m.useDispatch)(),N=Object(o.useCallback)((function(){k(Object(h.b)())}),[k]),S=Object(i.b)(a()({},O.root,!0)),P=Object(i.b)((t={},a()(t,O.fav(w),!0),a()(t,O.newFav,Boolean(g>0)),t));return Object(f.jsxs)("div",{className:S,children:[Object(f.jsxs)("div",{className:O.headerIcon,children:[u&&Object(f.jsx)(l.a,{onClick:c,className:O.button(w),justify:"start",align:"center",children:Object(f.jsx)(d.a,{className:O.icon(w),name:"left-arrow","data-cy":"header-icon-back"})}),v&&Object(f.jsx)(l.a,{onClick:n,className:O.button(w),justify:"start",align:"center",tagName:"button",children:Object(f.jsxs)(p.a,{text:"Saveds",children:[Object(f.jsx)("img",{src:"https://cdn.logojoy.com/app/editor/ic_heart.svg",alt:"Save your logo"}),Object(f.jsx)("div",{className:P,children:g>0?g:""})]})}),y&&Object(f.jsx)("span",{className:O.appLabel(w),children:y})]}),Object(f.jsx)(l.a,{className:O.logo(w),align:"center",justify:"center",auto:!0,children:Object(f.jsx)(s.a,{to:"/dashboard",children:Object(f.jsx)("img",{src:"light"===w.palette.type?w.logo.dark:w.logo.light,alt:"Navigate to dashboard. Caution: this will navigate you away from your current page"})})}),Object(f.jsx)(b.a,{onOpenSidebar:N})]})}}}]);
//# sourceMappingURL=6.95d8e0b72bc93bbabc32.looka.js.map