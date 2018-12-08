(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{55:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s,o=i(t(2)),r=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};s.get||s.set?Object.defineProperty(a,t,s):a[t]=e[t]}return a.default=e,a}(t(0));i(t(1)),i(t(61));function i(e){return e&&e.__esModule?e:{default:e}}function n(e,a,t,o){s||(s="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(a||0===i||(a={children:void 0}),a&&r)for(var n in r)void 0===a[n]&&(a[n]=r[n]);else a||(a=r||{});if(1===i)a.children=o;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:s,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,s,o=function(e,a){if(null==e)return{};var t,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const h=e=>{let{to:a}=e,t=c(e,["to"]);return a.includes("http")?r.default.createElement("a",d({},e,{href:a})):("#"===a[0]&&(a=o.default.join("/auto-release/","pages/autorc.html")+a),r.default.createElement("a",d({},t,{href:a,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const s=new URL(o.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(s),null,a),e.onClick();const r=new CustomEvent("changeLocation",{detail:s});return dispatchEvent(r),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const u=e=>{var a,t;return t=a=class extends r.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?r.default.createElement(e,this.props,this.props.children||null):null}},l(a,"defaultProps",{shouldLoad:!0}),t};u(()=>t.e(23).then(t.bind(null,62))),u(()=>t.e(23).then(t.bind(null,63)));var p=n("h1",{},void 0,n("code",{},void 0,"auto")," RC File"),v=n("p",{},void 0,"All options for the CLI tools can also be configured via the ",n("code",{},void 0,".autorc"),"."),g=n("ul",{},void 0,n("li",{},void 0,"a package.json property"),n("li",{},void 0,'a JSON or YAML, extension-less "rc file"'),n("li",{},void 0,'an "rc file" with the extensions .json, .yaml, .yml, or .js.'),n("li",{},void 0,"a .config.js CommonJS module")),m=n("p",{},void 0,"To interactively create an ",n("code",{},void 0,".autorc")," use the ",n("code",{},void 0,"init")," command. You can configure most flags and all labels/changelogTitles."),f=n("pre",{},void 0,n("code",{className:"language-sh"},void 0,"auto init",n("br",{}))),b=n("p",{},void 0,"These options can be set exclusively in the ",n("code",{},void 0,".autorc")," and do not exist as CLI flags."),j=n("p",{},void 0,"To override the label text used for versioning define new labels in the ",n("code",{},void 0,".autorc"),"."),N=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"labels"'),": {",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"major"'),": ",n("span",{className:"hljs-string"},void 0,'"Version: Major"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"minor"'),": ",n("span",{className:"hljs-string"},void 0,'"Version: Minor"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"patch"'),": ",n("span",{className:"hljs-string"},void 0,'"Version: Patch"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"no-release"'),": ",n("span",{className:"hljs-string"},void 0,'"NO!"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"release"'),": ",n("span",{className:"hljs-string"},void 0,'"Autobots, rollout!"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"prerelease"'),": ",n("span",{className:"hljs-string"},void 0,'"beta"'),n("br",{}),"  }",n("br",{}),"}",n("br",{}))),y=n("p",{},void 0,"To configure the titles used in the changelog add ",n("code",{},void 0,"changelogTitles")," to the ",n("code",{},void 0,".autorc"),"."),P=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"changelogTitles"'),": {",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"major"'),": ",n("span",{className:"hljs-string"},void 0,'"Breaking"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"minor"'),": ",n("span",{className:"hljs-string"},void 0,'"Feature"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"patch"'),": ",n("span",{className:"hljs-string"},void 0,'"Fix"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"internal"'),": ",n("span",{className:"hljs-string"},void 0,'"Internal"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"documentation"'),": ",n("span",{className:"hljs-string"},void 0,'"Docz"'),n("br",{}),"  }",n("br",{}),"}",n("br",{}))),w=n("p",{},void 0,"If you want more sections in your changelog to further detail the change set you can use the ",n("code",{},void 0,"changelogTitles")," to add more."),k=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"changelogTitles"'),": {",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"typescript"'),": ",n("span",{className:"hljs-string"},void 0,'"Typescript Rewrite"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"front-end"'),": ",n("span",{className:"hljs-string"},void 0,'"Front End Updates"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"back-end"'),": ",n("span",{className:"hljs-string"},void 0,'"Back End Updates"'),n("br",{}),"  }",n("br",{}),"}",n("br",{}))),L=n("p",{},void 0,"You can set where ",n("code",{},void 0,"auto")," posts for slack messages."),O=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"slack"'),": ",n("span",{className:"hljs-string"},void 0,'"https://url-to-slack.com"'),n("br",{}),"}",n("br",{}))),C=n("p",{},void 0,"You can set any CLI option in the ",n("code",{},void 0,".autorc")," these options will get overridden by the CLI flags."),x=n("p",{},void 0,"The following are options that might be more useful to set in the ",n("code",{},void 0,".autorc")," rather than with a flag."),T=n("p",{},void 0,"To include Jira story information in your changelogs you must include a URL to your hosted JIRA instance."),I=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"jira"'),": ",n("span",{className:"hljs-string"},void 0,'"https://url-to-jira.com"'),n("br",{}),"}",n("br",{}))),S=n("p",{},void 0,"If you are using enterprise github ",n("code",{},void 0,"auto-release")," lets you configure the github API URL that it uses."),E=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"jira"'),": ",n("span",{className:"hljs-string"},void 0,'"https://url-to-jira.com"'),n("br",{}),"}",n("br",{}))),J=n("p",{},void 0,"Git name to commit and release with. Defaults to package.json. Used in ",n("code",{},void 0,"auto changelog")," and ",n("code",{},void 0,"auto release")),U=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"name"'),": ",n("span",{className:"hljs-string"},void 0,'"Joe Schmo"'),n("br",{}),"}",n("br",{}))),_=n("p",{},void 0,"Git email to commit and release with. Defaults to package.json. Used in ",n("code",{},void 0,"auto changelog")," and ",n("code",{},void 0,"auto release")),A=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"email"'),": ",n("span",{className:"hljs-string"},void 0,'"joe@schmo.com"'),n("br",{}),"}",n("br",{})));var D=e=>n("div",{className:e.className},void 0,n("section",{},void 0,p,v,n("p",{},void 0,"We use ",n(h,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/davidtheclark/cosmiconfig",className:"external-link"},void 0,"cosmiconfig")," to find your config, so that means you can define this file a variety of ways. By default, Cosmiconfig will start at the root of your project and start to search up the directory tree for the following:"),g,n("h2",{id:"initialization"},void 0,"Initialization ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#initialization","aria-hidden":"true"})),m,f,n("h2",{id:"exclusive"},void 0,"Exclusive ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#exclusive","aria-hidden":"true"})),b,n("h3",{id:"versioning-labels"},void 0,"Versioning Labels ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#versioning-labels","aria-hidden":"true"})),j,N,n("h3",{id:"changelog-titles"},void 0,"Changelog Titles ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#changelog-titles","aria-hidden":"true"})),y,P,w,k,n("h3",{id:"slack-url"},void 0,"Slack URL ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#slack-url","aria-hidden":"true"})),L,O,n("h2",{id:"cli-args"},void 0,"CLI args ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#cli-args","aria-hidden":"true"})),C,x,n("h3",{id:"jira"},void 0,"Jira ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#jira","aria-hidden":"true"})),T,I,n("h3",{id:"githubapi"},void 0,"githubApi ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#githubapi","aria-hidden":"true"})),S,E,n("h3",{id:"name"},void 0,"name ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#name","aria-hidden":"true"})),J,U,n("h3",{id:"email"},void 0,"email ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#email","aria-hidden":"true"})),_,A));a.default=D,e.exports=a.default}}]);
//# sourceMappingURL=autorc.js.map