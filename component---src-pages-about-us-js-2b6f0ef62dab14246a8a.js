(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(153),o=n(151);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"About Us"}),r.a.createElement("h1",null,"About Us"),r.a.createElement("p",null,"MIDASH provides functional  IT skills to Veterans thus improving their quality of life. MIDASH is a social enterprise that promotes the cause of advancement of veterans who have sacrificed their time, talent  and laid their lives for our country United State of America (USA) and also for under-served communities through training in technology, skill acquisitions, entrepreneurship, mentoring and internship/job placement."),r.a.createElement("p",null,"MIDASH has a community of both women and men in Information Technology field including ethics, leadership skills, self empowerment/development and self esteem which leads to economic independence."),r.a.createElement("p",null,"MIDASH believe that everyone , irrespective of your background should be given another opportunity to be self sufficient economically and be part of a positive change to the community, city, state and country as a whole."),r.a.createElement("div",{style:{lineHeight:"2em",marginBottom:"1.45rem",textAlign:"center"}},r.a.createElement("p",{className:"hero-text",style:{textAlign:"center",fontSize:"22px",fontStyle:"italic"}},"As the world changes all around us, acquiring technical skills is what brings opportunity and the promise of education is what offers hope. Who will teach and nurture these world changers of tomorrow, these global problem solvers? We will. Together with our education, instructor, training and employment partners we’ve made a commitment to developing the workforce of the future. Join us as we change the world – one student at a time.")),r.a.createElement("section",{className:"padding-bottom",style:{display:"flex",justifyContent:"space-around"}},r.a.createElement("article",{className:"center-flex"},r.a.createElement("h2",null,"Our Mission"),r.a.createElement("p",null,"MIDASH provides Veterans and Under-Served men/women an opportunity for greater future through IT training, Skills Acquisition, Mentorships and Job placement.")),r.a.createElement("article",{className:"center-flex"},r.a.createElement("h2",null,"Our Vision"),r.a.createElement("p",null,"MIDASH is dedicated to bring life changing experience for veterans and under-served community by restoring hope through life skills empowerment so as to bring reduction in homeless community and elimination of poverty."))),r.a.createElement("h2",null,"The Team"),r.a.createElement("em",{style:{backgroundColor:"pink"}},"team images go here"))}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(143),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(145),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},147:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(51),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){"use strict";var a=n(152),r=n(0),i=n.n(r),o=n(4),s=n.n(o),l=n(154),c=n.n(l),u=n(144);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var m="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},153:function(e,t,n){"use strict";var a=n(146),r=n(0),i=n.n(r),o=n(4),s=n.n(o),l=n(144),c=function(e){e.siteTitle;return i.a.createElement("header",{className:"dark-bg"},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",justifyContent:"space-between"}},i.a.createElement("h1",{style:{margin:0,color:"#FEFBF5"}},"⏣"),i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/",style:{color:"#FEFBF5",textDecoration:"none",fontSize:"22px"}},"Home")),i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/about-us",style:{color:"#FEFBF5",textDecoration:"none",fontSize:"22px"}},"About Us")),i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/programs",style:{color:"#FEFBF5",textDecoration:"none",fontSize:"22px"}},"Programs")),i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/contact",style:{color:"#FEFBF5",textDecoration:"none",fontSize:"22px"}},"Contact")),i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/donate",style:{color:"#FEFBF5",textDecoration:"none",fontSize:"22px"}},"Donate"))))};c.propTypes={siteTitle:s.a.string},c.defaultProps={siteTitle:""};var u=c,d=(n(148),n(149),n(150),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("footer",{className:"dark-bg",style:{position:"absolute",bottom:"0",paddingBottom:"1.45rem",paddingTop:"1.45rem",color:"#FEFBF5",width:"100%",paddingLeft:"5%",fontSize:"12px",display:"none"}},"© ",(new Date).getFullYear(),", Midash Ministry, Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")),i.a.createElement("div",{className:"light-bg",style:{margin:"0 auto",maxWidth:960,padding:"24px"}},t))},data:a})});d.propTypes={children:s.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-about-us-js-2b6f0ef62dab14246a8a.js.map