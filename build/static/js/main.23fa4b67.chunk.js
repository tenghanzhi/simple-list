(this["webpackJsonpsimple-list"]=this["webpackJsonpsimple-list"]||[]).push([[0],{34:function(e,t,a){e.exports=a(67)},61:function(e,t,a){},62:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=a(9),i=a(11),s=a(32),u=a(8),m=a(33),d=a.n(m),y="FETCH_DATA",E="SETTINGS",p=function(e){return{type:y,payload:e}},h={fetchData:p,changeSettings:function(e){return{type:E,payload:e}}},b={myList:[],sortBy:"ID"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object(u.a)(Object(u.a)({},e),{},{myList:t.payload.cases});case E:var a=e.myList.slice(0);if("CREATED_AT"===t.payload)return Object(u.a)(Object(u.a)({},e),{},{myList:a.sort((function(e,t){return e.created_at>t.created_at?-1:1})),sortBy:t.payload});if("ID"===t.payload)return Object(u.a)(Object(u.a)({},e),{},{myList:a.sort((function(e,t){return e.id>t.id?1:-1})),sortBy:t.payload});break;default:return e}},f=(a(61),a(14)),v=a(15),j=a(17),O=a(16),k=a(18),C=a(2),B=(a(62),{getMyList:function(e){return e.myList},getSettings:function(e){return e.sortBy}}),L=function(e){var t=e.data,a=e.sortBy,n=e.page;return r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"ID"),r.a.createElement("td",null,"Created At")),t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.created_at))})),r.a.createElement("tr",null,r.a.createElement("td",null,"Sort by: ",a),r.a.createElement("td",null,"page: ",n))))},S=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){e.props.actions.changeSettings(t.target.value)},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this.props.page;return r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Sort"),r.a.createElement("td",null,r.a.createElement("select",{id:"sortBy",value:this.props.sortBy,onChange:this.handleChange},r.a.createElement("option",{value:"ID"},"ID"),r.a.createElement("option",{value:"CREATED_AT"},"Created at")))),r.a.createElement("tr",null,r.a.createElement("td",null,"Sort by: ",this.props.sortBy),r.a.createElement("td",null,"page: ",e))))}}]),a}(r.a.Component),w=Object(i.b)((function(e){return{sortBy:B.getSettings(e)}}),(function(e){return{actions:Object(o.b)(Object(u.a)({},h),e)}}))(S),D=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).handleClick=function(e){n.setState({onPage:e.target.innerHTML})},n.state={onPage:""},n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){I.dispatch((function(e){d.a.get("data.json").then((function(t){var a=t.data;e(p(a))})).catch((function(){alert("Error: fetching data")}))}))}},{key:"render",value:function(){var e=this.props,t=e.myList,a=e.sortBy,n=this.state.onPage;return r.a.createElement(k.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"menu"},r.a.createElement(k.b,{to:"/list",onClick:this.handleClick,style:"List"===n?{color:"red"}:{color:"black"}},"List")),r.a.createElement("td",{className:"menu"},r.a.createElement(k.b,{to:"/settings",onClick:this.handleClick,style:"Settings"===n?{color:"red"}:{color:"black"}},"Settings"))))),r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/list"},r.a.createElement(L,{data:t,sortBy:a,page:1})),r.a.createElement(C.a,{path:"/settings"},r.a.createElement(w,{page:2})),r.a.createElement(C.a,{path:"/"}))))}}]),a}(r.a.Component),T=Object(i.b)((function(e){return{myList:B.getMyList(e),sortBy:B.getSettings(e)}}),(function(e){return{actions:Object(o.b)(Object(u.a)({},h),e)}}))(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=Object(o.c)(g,Object(o.a)(s.a)),I=t.default=A;c.a.render(r.a.createElement(i.a,{store:A},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.23fa4b67.chunk.js.map