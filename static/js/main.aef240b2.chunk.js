(this.webpackJsonpstandup=this.webpackJsonpstandup||[]).push([[0],{25:function(t,e,n){},27:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),s=n(17),i=n.n(s),r=(n(25),n(19)),o=(n.p,n(9)),l=n(10),u=n(12),d=n(11),b=n(2),m=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={teamname:"LCD",lcd:a.props.team.members},a.setState({lcd:a.state.lcd.sort((function(){return Math.random()-.5}))}),a}return Object(l.a)(n,[{key:"shuffleMembers",value:function(){this.setState({lcd:this.state.lcd.sort((function(){return Math.random()-.5}))})}},{key:"copy",value:function(t){t.preventDefault(),navigator.clipboard.writeText(this.state.lcd.toString().replace(/,/g,", "))}},{key:"render",value:function(){return Object(b.jsxs)("div",{class:"d-flex flex-column align-items-center",children:[Object(b.jsx)("h1",{style:{color:"#569CBF",margin:"20px"},children:this.props.team.name}),this.state.lcd.map((function(t){return Object(b.jsx)("h1",{children:Object(b.jsx)("span",{style:{width:"150px"},class:"badge badge-secondary",children:t})})})),Object(b.jsx)("button",{class:"btn btn-primary m-1",onClick:this.shuffleMembers.bind(this),children:"Shuffle"}),Object(b.jsxs)("form",{class:"m-5",onSubmit:this.copy.bind(this),children:[Object(b.jsx)("input",{style:{width:"400px"},value:this.state.lcd.toString().replace(/,/g,", ")}),Object(b.jsx)("input",{type:"submit",value:"Copy",className:"submitBtn"})]})]})}}]),n}(a.Component),p=n.p+"static/media/SUS_bold_top.b20eed7d.png",f=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={lcd:["DDM","Dorie","Jacob","Graham","Evan","Ivailo","Kim","Austin"]},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"d-flex border-bottom justify-content-center",children:Object(b.jsx)("img",{src:p,style:{width:"75px",margin:"10px"}})})}}]),n}(a.Component),j=(n(27),n(14)),h=(n(31),n(18));j.a.initializeApp({apiKey:"AIzaSyCz0qbMUPOmaFGR63mtCfMo5eaVW0UquKA",authDomain:"stand-up-shuffle.firebaseapp.com",projectId:"stand-up-shuffle",storageBucket:"stand-up-shuffle.appspot.com",messagingSenderId:"268887686235",appId:"1:268887686235:web:30c26272c1945fd6bfd37e"});var x=j.a.firestore();var O=function(){var t=x.collection("teams").orderBy("name"),e=Object(h.a)(t),n=Object(r.a)(e,1)[0],a={};return n&&n.map((function(t){return a[t.name]={name:t.name,members:t.members}})),console.log(a),Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{}),Object(b.jsx)("div",{class:"d-flex flex-column justify-content-center",children:n?Object(b.jsx)(m,{team:a.LCD}):null})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))};n(29);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.aef240b2.chunk.js.map