(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a(10),c=a(12),r=a(11),o=a(0),u=a.n(o),i=a(18),s=a.n(i),m=a(7),E=a(1),d=(a(26),["MakerOfGames","ExtendedReality"]),y=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement(m.a,null,u.a.createElement("div",{className:"TopBar"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(m.b,{to:"/about"},"Vivek Raman")),u.a.createElement("li",null,u.a.createElement(m.b,{to:"/blog"},"Blog")),u.a.createElement("li",null,u.a.createElement(m.b,{to:"/work"},"Work")),u.a.createElement("li",null,u.a.createElement(m.b,{to:"/contact"},"Contact")))),u.a.createElement(E.c,null,u.a.createElement(E.a,{path:"/about"},u.a.createElement(f,null)),u.a.createElement(E.a,{path:"/blog"},u.a.createElement(b,null)),u.a.createElement(E.a,{path:"/"},u.a.createElement(f,null))))}}]),a}(u.a.Component),b=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,"blog")}}]),a}(u.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={cycleCount:0},setInterval((function(){l.setState({cycleCount:(l.state.cycleCount+1)%d.length}),l.CycleModes()}),5e3),l.SetBodyClass(d[l.state.cycleCount]),l}return Object(l.a)(a,[{key:"CycleModes",value:function(){this.SetBodyClass(d[this.state.cycleCount])}},{key:"SetActiveBigText",value:function(e){}},{key:"SetBodyClass",value:function(e){document.querySelector("body").classList=[],document.querySelector("body").classList.add(e)}},{key:"render",value:function(){var e=this,t=u.a.createElement("li",{className:d[0],onClick:function(){return e.MakerOfGames()}},"Maker of Games"),a=u.a.createElement("li",{className:d[1],onClick:function(){return e.ExtendedReality()}},"Extended Reality");return u.a.createElement("div",{className:"BigText"},u.a.createElement("ul",null,t,a))}}]),a}(u.a.Component);s.a.render(u.a.createElement(y,null),document.getElementById("root"))},26:function(e,t,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.bd56fbb4.chunk.js.map