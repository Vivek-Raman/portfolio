(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(7),o=a(9),c=a(8),r=a(0),i=a.n(r),s=a(18),u=a.n(s),m=a(11),d=a(1),p=(a(27),["MakerOfGames","ExtendedReality"]),h=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;Object(n.a)(this,a),l=t.call(this,e);var o=setInterval((function(){return l.CycleModes()}),5e3);return l.state={cycleCount:0,cycle:o},l.SetBodyClass(p[l.state.cycleCount]),l}return Object(l.a)(a,[{key:"CycleModes",value:function(){this.setState({cycleCount:(this.state.cycleCount+1)%p.length}),this.SetBodyClass(p[this.state.cycleCount]),this.SetActiveBigText(p[this.state.cycleCount])}},{key:"SetActiveBigText",value:function(e){document.getElementById(p[0]).classList.remove("Active"),document.getElementById(p[1]).classList.remove("Active"),"MakerOfGames"===e?document.getElementById(p[0]).classList.add("Active"):document.getElementById(p[1]).classList.add("Active")}},{key:"SetBodyClass",value:function(e){document.querySelector("body").classList=[],document.querySelector("body").classList.add(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"BigText"},i.a.createElement("ul",null,i.a.createElement("li",{id:p[0],onClick:function(){return e.MakerOfGames()}},"Maker of Games"),i.a.createElement("li",{id:p[1],onClick:function(){return e.ExtendedReality()}},"Extended Reality")))}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.cycle)}}]),a}(i.a.Component),f=a(19),E=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),l=t.call(this,e),document.querySelector("body").classList=[],l.state={isLoaded:!1,data:"err"},l.getPosts(),l}return Object(l.a)(a,[{key:"getPosts",value:function(){var e=this;try{fetch("https://graph.instagram.com/me/media?fields=permalink,caption&access_token=IGQVJVRHpqdGZAOZAlZADYzVXRm5LRnFKcmI0X3BGLW9sOXlndTg1OFFVT2tjamFkLUJwcFRHUnh4TjVuYUdpb1hPR2VhN1dPN3oxVVFCNFhrVDczb0M0WU5idGdIMEZAmY0JDTGdoR1FEbzNiVXJSTk15eAZDZD").then((function(e){return e.json()})).then((function(t){var a=t.data;e.setState({isLoaded:!0,data:t,posts:a})}))}catch(t){console.error(t)}}},{key:"render",value:function(){if(!this.state.isLoaded)return i.a.createElement("div",null,"wait");for(var e=[],t=0;t<this.state.posts.length;t++)e.push(i.a.createElement(v,{data:this.state.posts[t]}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"BlogIntro"},i.a.createElement("h1",null,"@gamedev.adventures"),"Welcome! This is my blog. I make posts on my Instagram page, sharing interesting things that I make and experiment with.",i.a.createElement("br",null),"If my content interests you, please do consider following me on Instagram!"),e)}}]),a}(i.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;Object(n.a)(this,a);var o=""+(l=t.call(this,e)).props.data.caption;return l.state={captionContent:o.split("FOLLOW",1)[0]},l}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"postContent"},i.a.createElement(f.a,{url:this.props.data.permalink,maxWidth:450,hideCaption:!0}),i.a.createElement("div",null,this.state.captionContent))}}]),a}(i.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement("div",{className:"TopBar"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(m.b,{to:"/portfolio/about"},"Vivek Raman")),i.a.createElement("li",null,i.a.createElement(m.b,{to:"/portfolio/blog"},"Blog")),i.a.createElement("li",null,i.a.createElement(m.b,{to:"/portfolio/work"},"Work")),i.a.createElement("li",null,i.a.createElement(m.b,{to:"/portfolio/contact"},"Contact")))))),i.a.createElement(d.d,null,i.a.createElement(d.b,{path:"/portfolio/about"},i.a.createElement(h,null)),i.a.createElement(d.b,{path:"/portfolio/blog"},i.a.createElement(E,null)),i.a.createElement(d.b,{path:"/portfolio/*"},i.a.createElement(d.a,{to:"/portfolio/about"}))))}}]),a}(i.a.Component);u.a.render(i.a.createElement(y,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ff6824f1.chunk.js.map