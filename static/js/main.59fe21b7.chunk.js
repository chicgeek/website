(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(3),c=n.n(i),r=(n(15),n(4)),o=n(5),m=n(7),u=n(6),s=n(8),d=n(1),h=(n(17),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={activeId:""},n.getItems=n.getItems.bind(Object(d.a)(Object(d.a)(n))),n.focus=n.focus.bind(Object(d.a)(Object(d.a)(n))),n.blur=n.blur.bind(Object(d.a)(Object(d.a)(n))),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"focus",value:function(e,t){e.target.focus(),this.setState(function(e){return{activeId:t}})}},{key:"blur",value:function(){this.setState(function(e){return{activeId:""}})}},{key:"getItems",value:function(e){var t=this;return e.map(function(e){return l.a.createElement("section",{key:e.id,className:"section ".concat(t.state.activeId===e.id?"section--active":"")},l.a.createElement("h2",{className:"section__heading heading--".concat(e.id),children:e.title,tabIndex:"0",onClick:function(n){return t.focus(n,e.id)},onFocus:function(n){return t.focus(n,e.id)},onBlur:function(){return t.blur()}}),l.a.createElement("div",{className:"section__content",children:e.content}))})}},{key:"render",value:function(){return this.getItems(this.props.data)}}]),t}(a.Component)),p=[{id:"person",title:l.a.createElement(a.Fragment,null,"Personal ",l.a.createElement("span",null,"details")),content:l.a.createElement(a.Fragment,null,l.a.createElement("h3",null,"About me"),l.a.createElement("p",null,"I'm a Canadian living and working in Sheffield\xa0UK."),l.a.createElement("p",null,"I am a front end developer with over 10 years of experience as part of agency and in-house teams. In addition to technical excellence, I am a leader of people and advocate for inclusive work cultures."))},{id:"skills",title:l.a.createElement(a.Fragment,null,"Developer ",l.a.createElement("span",null,"skills")),content:l.a.createElement(a.Fragment,null,l.a.createElement("h3",null,"User-centric approach"),l.a.createElement("p",null,"I focus on the intersection of user need, client demand, and technical limitation. I prioritise user experience, accessibility, and brand identity in my work."),l.a.createElement("h3",null,"HTML, CSS, JavaScript"),l.a.createElement("p",null,"I write accessible HTML styled with SCSS. I have experience with React, Redux, Styled Components, and complex JavaScript applications. I work with my team to ensure quality code, modularity, and maintainability."))},{id:"leadership",title:l.a.createElement(a.Fragment,null,l.a.createElement("span",null,"People")," leadership"),content:l.a.createElement(a.Fragment,null,l.a.createElement("h3",null,"Leader and organiser"),l.a.createElement("p",null,"I am organised and proactive. I strive to create and encourage a safe and inclusive work environment for everyone."),l.a.createElement("h3",null,"Manager and mentor"),l.a.createElement("p",null,"I play an active role in recruitment and am an experienced line manager."))},{id:"jobs",title:l.a.createElement(a.Fragment,null,"Employment ",l.a.createElement("span",null,"history")),content:l.a.createElement(a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h3",null,"Inviqa"),"Technical team lead, Senior front end developer (2013\xa0\u2011\xa0present)"),l.a.createElement("li",null,l.a.createElement("h3",null,"Evoluted"),"Lead front end developer (2017\xa0\u2011\xa02018)"),l.a.createElement("li",null,l.a.createElement("h3",null,"Previous roles"),"Mountain Equipment Co-op, Vancity, University of York, University of Western Ontario")))},{id:"contact",title:l.a.createElement(a.Fragment,null,"Contact me ",l.a.createElement("span",null,"online")),content:l.a.createElement(a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.twitter.com/chicgeek"},"chicgeek on Twitter")),l.a.createElement("li",null,l.a.createElement("a",{rel:"me",href:"https://mastodon.social/@chicgeek"},"chicgeek on Mastodon.social")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.github.com/chicgeek"},"chicgeek on Github")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/chicgeek"},"chicgeek on LinkedIn")),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:hello@laurakishimoto.com?subject=An email from laurakishimoto.com"},"Email me at hello@laurakishimoto.com"))))}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(h,{data:p}),document.getElementById("main")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.59fe21b7.chunk.js.map