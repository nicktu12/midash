(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(153),i=n(151);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Programs"}),r.a.createElement("h1",null,"Programs"),r.a.createElement("p",null,"An incredible opportunity is waiting for you. Technology is changing the world by connecting billions of devices and improving how we live, work, play and treat our planet. No Industry is immune. Are you ready to change your life, and possible make the world a better place?"),r.a.createElement("em",{style:{backgroundColor:"pink"}},"insert programs icons"),r.a.createElement("h2",null,"Networking"),r.a.createElement("p",null,"Begin preparing for a networking career with this introduction to how networks operate. This includes learning the architecture, structure, and functions needed to support the operations and priorities of Fortune 500 companies to small innovative retailers. You will even get the chance to configure a network yourself, such as a simple LAN (Local Area Network). After completing this course, you will have a working knowledge of routing, switching, network applications and protocols. This is the first course in designed to prepare you for entry-level networking jobs. No prerequisites required."),r.a.createElement("h2",null,"Programming"),r.a.createElement("p",null,"The ever-popular C programming language is considered one of the best “first” languages to learn. It's proven itself for more than 40 years as the absolute essential for entry-level and software development jobs. Known for building operating systems and tens of thousands of applications, it continues to earn new devotees due to its fast and portable nature. Become a devotee yourself, and enjoy the rewards it brings! Course is designed for beginners. No prior knowledge of programming is required."),r.a.createElement("h2",null,"Security"),r.a.createElement("p",null,"Uncovering cybercrime, cyber espionage and other threats to the integrity of networks is an exciting new area that spans all industries. Learn the skills to qualify for exciting and growing opportunities in security operation centers as an analyst or incident responder. And most importantly, help make the world a safer place. The course focuses on how to monitor, detect and respond to cybersecurity threats. Plus, covers cryptography, host-based security analysis, security monitoring, computer forensics, attack methods and incident reporting and handling."))}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(143),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(145),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},147:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(51),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){"use strict";var a=n(152),r=n(0),o=n.n(r),i=n(4),s=n.n(i),l=n(154),c=n.n(l),u=n(144);function d(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,s=e.title;return o.a.createElement(u.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},153:function(e,t,n){"use strict";var a=n(146),r=n(0),o=n.n(r),i=n(4),s=n.n(i),l=n(144),c=function(e){e.siteTitle;return o.a.createElement("header",{className:"dark-bg"},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",justifyContent:"space-between"}},o.a.createElement("h1",{style:{margin:0,color:"#FEFBF5"}},"⏣"),o.a.createElement("h1",{style:{margin:0}},o.a.createElement(l.Link,{to:"/",style:{color:"#FEFBF5",textDecoration:"none",fontSize:"22px"}},"Home")),o.a.createElement("h1",{style:{margin:0}},o.a.createElement(l.Link,{to:"/about-us",style:{color:"#FEFBF5",textDecoration:"none",fontSize:"22px"}},"About Us")),o.a.createElement("h1",{style:{margin:0}},o.a.createElement(l.Link,{to:"/programs",style:{color:"#FEFBF5",textDecoration:"none",fontSize:"22px"}},"Programs")),o.a.createElement("h1",{style:{margin:0}},o.a.createElement(l.Link,{to:"/contact",style:{color:"#FEFBF5",textDecoration:"none",fontSize:"22px"}},"Contact")),o.a.createElement("h1",{style:{margin:0}},o.a.createElement(l.Link,{to:"/donate",style:{color:"#FEFBF5",textDecoration:"none",fontSize:"22px"}},"Donate"))))};c.propTypes={siteTitle:s.a.string},c.defaultProps={siteTitle:""};var u=c,d=(n(148),n(149),n(150),function(e){var t=e.children;return o.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("footer",{className:"dark-bg",style:{position:"absolute",bottom:"0",paddingBottom:"1.45rem",paddingTop:"1.45rem",color:"#FEFBF5",width:"100%",paddingLeft:"5%",fontSize:"12px",display:"none"}},"© ",(new Date).getFullYear(),", Midash Ministry, Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")),o.a.createElement("div",{className:"light-bg",style:{margin:"0 auto",maxWidth:960,padding:"24px"}},t))},data:a})});d.propTypes={children:s.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-programs-js-c1e776af2ebdf27d3253.js.map