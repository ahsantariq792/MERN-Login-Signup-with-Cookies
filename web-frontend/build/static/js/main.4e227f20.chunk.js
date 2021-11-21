(this["webpackJsonpweb-frontend"]=this["webpackJsonpweb-frontend"]||[]).push([[0],{210:function(e,a,t){},339:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(42),i=t.n(c),o=(t(210),t(70),t(82)),r=t(38),l=t(389),d=t(382),j=t(31),b=t.n(j),h="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5000":"",u=t(1),m=function(e,a){var t=a.resetForm;console.log("values",e),b.a.post("".concat(h,"/api/v1/signup"),{name:e.name,email:e.email,phone:e.phone,password:e.password}).then((function(e){console.log(e.data),t({})}))},p=r.a({email:r.b("Enter your email").email("Enter a valid email").required("Email is required"),name:r.b("Enter your password").min(4,"Name should be of minimum 4 characters length").required("Name is required"),phone:r.b("Enter your phone no.").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").min(11,"Phone should contain 11 digits").max(11,"Phone should contain 11 digits").required("phone number is required"),password:r.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")});var O=function(){var e=Object(o.a)({validationSchema:p,initialValues:{email:"",name:"",phone:"",password:""},onSubmit:m});return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"app-main",children:Object(u.jsx)("div",{className:"main",children:Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsx)("h3",{children:" Sign up Form "}),Object(u.jsx)(d.a,{id:"outlined-basic",name:"name",label:"name",className:"inputbox",value:e.values.name,onChange:e.handleChange,error:e.touched.name&&Boolean(e.errors.name),helperText:e.touched.name&&e.errors.name,variant:"outlined"}),Object(u.jsx)(d.a,{id:"outlined-basic",name:"email",label:"email",className:"inputbox",value:e.values.email,onChange:e.handleChange,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email,variant:"outlined"}),Object(u.jsx)(d.a,{id:"outlined-basic",name:"phone",label:"phone",className:"inputbox",value:e.values.phone,onChange:e.handleChange,error:e.touched.phone&&Boolean(e.errors.phone),helperText:e.touched.phone&&e.errors.phone,variant:"outlined"}),Object(u.jsx)(d.a,{id:"outlined-basic",name:"password",label:"password",type:"password",className:"inputbox",value:e.values.password,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password,variant:"outlined"}),Object(u.jsx)(l.a,{id:"btn",variant:"contained",color:"success",type:"submit",children:"Submit"})]})})})})},x=t(8),v=t(6),g=function(e,a){switch(a.type){case"USER_LOGIN":return a.payload.name&&a.payload.email?Object(v.a)(Object(v.a)({},e),{},{user:a.payload}):(console.log("invalid data in USER_LOGIN reducer "),e);case"USER_LOGOUT":return Object(v.a)(Object(v.a)({},e),{},{user:null});case"TOGGLE_THEME":return Object(v.a)(Object(v.a)({},e),{},{darkTheme:!e.darkTheme});default:return e}},f=Object(n.createContext)("Initial Value"),w={user:void 0};function N(e){var a=e.children,t=Object(n.useReducer)(g,w),s=Object(x.a)(t,2),c=s[0],i=s[1];return Object(u.jsx)(f.Provider,{value:{state:c,dispatch:i},children:a})}var y=r.a({email:r.b("Enter your email").email("Enter a valid email").required("Email is required"),password:r.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")});var C=function(){var e=Object(n.useContext)(f),a=(e.state,e.dispatch),t=Object(o.a)({validationSchema:y,initialValues:{email:"",password:""},onSubmit:function(e){console.log("values",e),b.a.post("".concat(h,"/api/v1/login"),{email:e.email,password:e.password},{withCredentials:!0}).then((function(e){console.log(e.data),alert("User Logined"),e.data.email&&a({type:"USER_LOGIN",payload:{name:e.data.name,email:e.data.email,_id:e.data._id}})}))}});return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"app-main",children:Object(u.jsx)("div",{className:"main",children:Object(u.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(u.jsx)("h3",{children:" Login Form "}),Object(u.jsx)(d.a,{id:"outlined-basic",name:"email",label:"email",className:"inputbox",value:t.values.email,onChange:t.handleChange,error:t.touched.email&&Boolean(t.errors.email),helperText:t.touched.email&&t.errors.email,variant:"outlined"}),Object(u.jsx)(d.a,{id:"outlined-basic",name:"password",label:"password",type:"password",className:"inputbox",value:t.values.password,onChange:t.handleChange,error:t.touched.password&&Boolean(t.errors.password),helperText:t.touched.password&&t.errors.password,variant:"outlined"}),Object(u.jsx)(l.a,{id:"btn",variant:"contained",color:"success",type:"submit",children:"Login"})]})})})})},E=(t(128),t(383)),S=t(381),T=t(384),F=t(48);var P=function(){var e=Object(n.useContext)(f),a=(e.state,e.dispatch);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(E.a,{bg:"success",expand:"lg",children:Object(u.jsxs)(S.a,{children:[Object(u.jsx)(E.a.Brand,{className:"nav-main",children:"React-Form"}),Object(u.jsx)(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(E.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(T.a,{className:"me-auto",children:[Object(u.jsx)("li",{children:Object(u.jsx)(F.b,{to:"/",className:"nav-itms",children:"Profile"})}),Object(u.jsx)("li",{children:Object(u.jsx)(F.b,{to:"/dashboard",className:"nav-itms",children:"Dashboard"})}),Object(u.jsx)("li",{children:Object(u.jsx)(F.b,{to:"/myposts",className:"nav-itms",children:"MyPosts"})}),Object(u.jsx)("li",{children:Object(u.jsx)(F.b,{to:"/",onClick:function(){b.a.post("".concat(h,"/api/v1/logout"),{},{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),a({type:"USER_LOGOUT"})}))},className:"nav-itms",style:{fontWeight:"600"},children:"Logout"})})]})})]})})})},L=t(4),q=t(18),R=t(391),M=t(392),U=t(393),_=t(394),B=t(388),G=t(395),I=t(387),k=t(75),Y=t(189),A=t.n(Y),D=t(187),V=t.n(D),W=t(188),J=t.n(W);function H(e){var a=e.post,t=(e.email,e.name),n=e.time;return Object(u.jsx)("div",{className:"postcard",children:Object(u.jsxs)(R.a,{sx:{maxWidth:"80%"},children:[Object(u.jsx)(M.a,{avatar:Object(u.jsx)(B.a,{sx:{bgcolor:k.a[500]},"aria-label":"recipe",children:t[0]}),id:"post-name",title:t,subheader:n}),Object(u.jsx)("hr",{style:{width:"100%"}}),Object(u.jsx)(U.a,{children:Object(u.jsx)(I.a,{variant:"body2",color:"text.secondary",id:"post-item",children:a})}),Object(u.jsx)(_.a,{children:Object(u.jsxs)("div",{className:"cardfooter",children:[Object(u.jsx)(G.a,{className:"cardicon","aria-label":"React",children:Object(u.jsx)(V.a,{style:{marginRight:"40px"}})}),Object(u.jsx)(G.a,{className:"cardicon","aria-label":"Comment",children:Object(u.jsx)(J.a,{style:{marginRight:"40px"}})}),Object(u.jsx)(G.a,{className:"cardicon","aria-label":"share",children:Object(u.jsx)(A.a,{})})]})})]})})}var Q=t(190),X=t.n(Q),$=t(194),z=r.a({post:r.b("Enter your password").min(4,"Name should be of minimum 4 characters length").required("Name is required")});var K=function(){var e,a=Object(n.useContext)(f),t=(a.state,a.dispatch,Object(n.useState)([])),s=Object(x.a)(t,2),c=s[0],i=s[1],r=Object(n.useState)(!0),j=Object(x.a)(r,2),m=j[0],p=j[1];Object(n.useEffect)((function(){b.a.get("".concat(h,"/api/v1/post?page=0"),{withCredentials:!0}).then((function(e){console.log(e.data),i(e.data)})).catch((function(e){return alert("Error in getting data")}))}),[]),Object(n.useEffect)((function(){var e=Object($.a)("http://localhost:5000");return e.on("connect",(function(){console.log("connected to server")})),e.on("disconnect",(function(e){console.log("disconnected from server: ",e)})),e.on("POSTS",(function(e){console.log(e),i((function(a){return[e].concat(Object(q.a)(a))}))})),function(){e.close()}}),[]);var O=Object(o.a)({validationSchema:z,initialValues:{post:""},onSubmit:function(e,a){var t=a.resetForm;console.log("values",e);var n=X()().format("MMMM Do YYYY");console.log(n),b.a.post("".concat(h,"/api/v1/post"),{post:e.post,time:n},{withCredentials:!0}).then((function(e){console.log("postdata",e.data),t({})}))}});return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"app-main",children:[Object(u.jsx)("div",{className:"post-main",children:Object(u.jsxs)("form",{id:"post-form",onSubmit:O.handleSubmit,children:[Object(u.jsx)("h3",{style:{padding:"5%"},children:" What's on Your Mind "}),Object(u.jsx)(d.a,(e={id:"outlined-basic",name:"post",label:"post",type:"post",className:"box"},Object(L.a)(e,"id","postbox"),Object(L.a)(e,"value",O.values.caption),Object(L.a)(e,"onChange",O.handleChange),Object(L.a)(e,"error",O.touched.caption&&Boolean(O.errors.caption)),Object(L.a)(e,"helperText",O.touched.caption&&O.errors.caption),Object(L.a)(e,"variant","outlined"),e)),Object(u.jsx)(l.a,{id:"btn",variant:"contained",color:"success",type:"submit",children:"Post"})]})}),Object(u.jsxs)("div",{id:"posts",children:[null===c||void 0===c?void 0:c.map((function(e,a){return Object(u.jsx)("div",{className:"postcard",children:Object(u.jsx)(H,{name:null===e||void 0===e?void 0:e.name,time:null===e||void 0===e?void 0:e.time,post:null===e||void 0===e?void 0:e.post},a)})})),m?Object(u.jsx)(l.a,{id:"loadmorebtn",onClick:function(){b.a.get("".concat(h,"/api/v1/post?page=").concat(c.length),{withCredentials:!0}).then((function(e){var a;if(console.log("res +++: ",e.data),null===(a=e.data)||void 0===a?void 0:a.length){var t=[].concat(Object(q.a)(c),Object(q.a)(e.data));i(t)}else p(!1)}))},children:" \u2193 Load More"}):Object(u.jsx)("p",{id:"nopost",children:"No More Posts"})]})]})})};var Z=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"splashscreen",children:Object(u.jsx)("img",{src:"https://c.tenor.com/sOcqo6-1sXQAAAAM/loading-bar.gif",alt:"splashscreen"})})})},ee=t.p+"static/media/profile.fa9c4bd1.jpg";var ae=function(){var e=Object(n.useState)({}),a=Object(x.a)(e,2),t=a[0],s=a[1];return Object(n.useEffect)((function(){b.a.get("".concat(h,"/api/v1/profile"),{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),s(e.data)}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"profile",children:[Object(u.jsx)("h1",{id:"profileheader",children:"My Profile"}),Object(u.jsx)("img",{id:"profilepic",src:ee,alt:"profilepic"}),Object(u.jsx)("h2",{id:"personaldtl",children:"Personal Details"}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("h4",{children:["Name: ",Object(u.jsxs)("span",{children:[" ",null===t||void 0===t?void 0:t.name," "]})," "]}),Object(u.jsxs)("h4",{children:["Email: ",null===t||void 0===t?void 0:t.email," "]}),Object(u.jsxs)("h4",{children:["Phone: ",null===t||void 0===t?void 0:t.phone]})]})]})})};var te=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(E.a,{bg:"success",expand:"lg",children:Object(u.jsxs)(S.a,{children:[Object(u.jsx)(E.a.Brand,{className:"nav-main",children:"React-Form"}),Object(u.jsx)(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(E.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(T.a,{className:"me-auto",children:[Object(u.jsx)("li",{children:Object(u.jsx)(F.b,{to:"/signup",className:"nav-itms",children:"Signup"})}),Object(u.jsx)("li",{children:Object(u.jsx)(F.b,{to:"/",className:"nav-itms",children:"Login"})})]})})]})})})};var ne=function(){var e=Object(n.useContext)(f),a=(e.state,e.dispatch,Object(n.useState)([])),t=Object(x.a)(a,2),s=t[0],c=t[1];return Object(n.useEffect)((function(){b.a.get("".concat(h,"/api/v1/mypost"),{withCredentials:!0}).then((function(e){console.log(e.data),c(e.data),console.log(s)})).catch((function(e){return alert("Error in getting data")}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"app-main",children:[Object(u.jsx)("h1",{children:" My Posts "}),Object(u.jsx)("div",{id:"post",children:null===s||void 0===s?void 0:s.map((function(e,a){return Object(u.jsx)("div",{className:"postcard",children:Object(u.jsx)(H,{name:null===e||void 0===e?void 0:e.name,time:null===e||void 0===e?void 0:e.time,post:null===e||void 0===e?void 0:e.post},a)})}))})]})})},se=t(26);var ce=function(){Object(se.g)();var e,a=Object(n.useContext)(f),t=a.state,s=a.dispatch;return Object(n.useEffect)((function(){return b.a.get("".concat(h,"/api/v1/profile"),{withCredentials:!0}).then((function(e){console.log("res: ",e.data),e.data.email?s({type:"USER_LOGIN",payload:{name:e.data.name,email:e.data.email,_id:e.data._id}}):s({type:"USER_LOGOUT"})})).catch((function(e){s({type:"USER_LOGOUT"})})),function(){}}),[]),Object(u.jsxs)(u.Fragment,{children:[(null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.email)?Object(u.jsx)(P,{}):Object(u.jsx)(te,{}),void 0===t.user?Object(u.jsx)(se.d,{children:Object(u.jsx)(se.b,{exact:!0,path:"/",children:Object(u.jsx)(Z,{})})}):null,null===t.user?Object(u.jsxs)(se.d,{children:[Object(u.jsx)(se.b,{exact:!0,path:"/",component:C}),Object(u.jsx)(se.b,{exact:!0,path:"/signup",component:O}),Object(u.jsx)(se.a,{to:"/"})]}):null,t.user?Object(u.jsxs)(se.d,{children:[Object(u.jsx)(se.b,{exact:!0,path:"/",children:Object(u.jsx)(ae,{})}),Object(u.jsx)(se.b,{path:"/dashboard",children:Object(u.jsx)(K,{})}),Object(u.jsx)(se.b,{path:"/myposts",children:Object(u.jsx)(ne,{})}),Object(u.jsx)(se.a,{to:"/"})]}):null]})},ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,396)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(N,{children:Object(u.jsx)(F.a,{children:Object(u.jsx)(ce,{})})})}),document.getElementById("root")),ie()},70:function(e,a,t){}},[[339,1,2]]]);
//# sourceMappingURL=main.4e227f20.chunk.js.map