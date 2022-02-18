(this["webpackJsonpchicgeek.uk"]=this["webpackJsonpchicgeek.uk"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),i=t(3),r=t.n(i),c=(t(12),t(4)),o=t(5),m=t(1),u=t(7),d=t(6),s=(t(13),function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).getItems=a.getItems.bind(Object(m.a)(a)),a.handleBodyClick=a.handleBodyClick.bind(Object(m.a)(a)),a.handleTitleClick=a.handleTitleClick.bind(Object(m.a)(a)),a.focus=a.focus.bind(Object(m.a)(a)),a.blur=a.blur.bind(Object(m.a)(a)),a.handleEscapeKey=a.handleEscapeKey.bind(Object(m.a)(a)),a}return Object(o.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleBodyClick,!1),document.addEventListener("keydown",this.handleEscapeKey,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleBodyClick,!1),document.removeEventListener("keydown",this.handleEscapeKey,!1)}},{key:"handleBodyClick",value:function(e){this.node.contains(e.target)||this.blur()}},{key:"handleEscapeKey",value:function(e){"Escape"===e.key&&this.blur()}},{key:"handleTitleClick",value:function(e,n){}},{key:"focus",value:function(e,n){e.target.focus()}},{key:"blur",value:function(){document.activeElement.blur()}},{key:"getItems",value:function(e){var n=this;return e.map((function(e){return l.a.createElement("section",{key:e.id,className:"section"},l.a.createElement("h2",{className:"section__heading heading heading--".concat(e.id),children:e.title,tabIndex:"0",onFocus:function(t){return n.focus(t,e.id)},onMouseDown:function(t){return n.handleTitleClick(t,e.id)}}),l.a.createElement("div",{className:"section__content",children:e.content}))}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{ref:function(n){return e.node=n}},this.getItems(this.props.data))}}]),t}(a.Component)),h=[{id:"person",title:l.a.createElement(a.Fragment,null,"Personal ",l.a.createElement("span",null,"details")),content:l.a.createElement(a.Fragment,null,l.a.createElement("h3",null,"About me"),l.a.createElement("p",null,"I am a front end engineering manager with over 15 years of experience. In addition to being a technical authority, I am a leader of people and advocate for inclusive work cultures."),l.a.createElement("p",null,"I'm a Canadian living and working in Sheffield\xa0UK. I have an MA in vocal music and love design, the outdoors, games, and red pandas."))},{id:"skills",title:l.a.createElement(a.Fragment,null,"Developer ",l.a.createElement("span",null,"skills")),content:l.a.createElement(a.Fragment,null,l.a.createElement("h3",null,"User-centric approach"),l.a.createElement("p",null,"I focus on the intersection of user need, client demand, and technical limitation. I prioritise user experience, accessibility, and maintainability in my work."),l.a.createElement("h3",null,"Technologies and approaches"),l.a.createElement("p",null,"I work with my teams on modern architectures to deliver beautiful and efficient websites using HTML, CSS, JavaScript. I guide our component-driven approaches, ensuring quality code, modularity, and maintainability."))},{id:"leadership",title:l.a.createElement(a.Fragment,null,l.a.createElement("span",null,"People")," leadership"),content:l.a.createElement(a.Fragment,null,l.a.createElement("h3",null,"Leader and mentor"),l.a.createElement("p",null,"I am a reliable and trusted member of any team. I earn the respect of my coworkers through leadership and enabling and empowering others to do their best. I am an empathetic and supportive manager, guiding individuals and entire teams to learn, share, and become more efficient."),l.a.createElement("h3",null,"Culture and community"),l.a.createElement("p",null,"I strive to create and encourage a safe and inclusive work environment for everyone. Outside of work, I organise"," ",l.a.createElement("a",{href:"https://twitter.com/frontendsheff"},"Front\xa0End Sheffield"),", ",l.a.createElement("a",{href:"https://twitter.com/frontendnorth"},"Front\xa0End North"),", and have previously organised Sheffield\xa0JS."))},{id:"jobs",title:l.a.createElement(a.Fragment,null,"Employment ",l.a.createElement("span",null,"history")),content:l.a.createElement(a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h3",null,l.a.createElement("a",{href:"https://prolific.co/"},"Prolific")),"Head of engineering (interim), engineering\xa0manager (2021\xa0\u2011\xa0present)"),l.a.createElement("li",null,l.a.createElement("h3",null,l.a.createElement("a",{href:"https://inviqa.com/"},"Inviqa")),"Software\xa0engineering\xa0manager, technical\xa0team\xa0lead, front\xa0end\xa0developer (2013\xa0\u2011\xa02021)"),l.a.createElement("li",null,l.a.createElement("h3",null,l.a.createElement("a",{href:"https://www.evoluted.net/"},"Evoluted")),"Lead front end developer (2017\xa0\u2011\xa02018)"),l.a.createElement("li",null,l.a.createElement("h3",null,"My CV"),l.a.createElement("a",{href:"http://bit.ly/chicgeek-cv"},"Laura Kishimoto"))))},{id:"contact",title:l.a.createElement(a.Fragment,null,"Contact me ",l.a.createElement("span",null,"online")),content:l.a.createElement(a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.twitter.com/chicgeek"},"chicgeek on Twitter")),l.a.createElement("li",null,l.a.createElement("a",{rel:"me",href:"https://mastodon.social/@chicgeek"},"chicgeek on Mastodon.social")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.github.com/chicgeek"},"chicgeek on Github")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/chicgeek"},"chicgeek on LinkedIn")),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:laura@chicgeek.uk?subject=An email from chicgeek.uk"},"Email me at laura@chicgeek.uk"))))}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(s,{data:h}),document.getElementById("main")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.123146a7.chunk.js.map