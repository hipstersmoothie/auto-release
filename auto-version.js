(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{55:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a,r=n(t(2)),s=function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(o,t,a):o[t]=e[t]}return o.default=e,o}(t(0));n(t(1)),n(t(63));function n(e){return e&&e.__esModule?e:{default:e}}function i(e,o,t,r){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,n=arguments.length-3;if(o||0===n||(o={children:void 0}),o&&s)for(var i in s)void 0===o[i]&&(o[i]=s[i]);else o||(o=s||{});if(1===n)o.children=r;else if(n>1){for(var l=new Array(n),u=0;u<n;u++)l[u]=arguments[u+3];o.children=l}return{$$typeof:a,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}function l(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function u(){return(u=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function d(e,o){if(null==e)return{};var t,a,r=function(e,o){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const c=e=>{let{to:o}=e,t=d(e,["to"]);return o.includes("http")?s.default.createElement("a",u({},e,{href:o})):("#"===o[0]&&(o=r.default.join("/auto-release/","pages/auto-version.html")+o),s.default.createElement("a",u({},t,{href:o,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const a=new URL(r.default.join(window.location.origin,o));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(a),null,o),e.onClick();const s=new CustomEvent("changeLocation",{detail:a});return dispatchEvent(s),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var o,t;return t=o=class extends s.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?s.default.createElement(e,this.props,this.props.children||null):null}},l(o,"defaultProps",{shouldLoad:!0}),t};h(()=>t.e(24).then(t.bind(null,64))),h(()=>t.e(24).then(t.bind(null,65)));var p=i("h1",{},void 0,i("code",{},void 0,"auto version")),v=i("p",{},void 0,"Get the semantic version bump for the given changes. Requires all PRs to have labels for the change type. If a PR does not have a label associated with it, it will default to ",i("code",{},void 0,"patch"),"."),f=i("pre",{},void 0,i("code",{className:"language-bash"},void 0,">  auto version -h",i("br",{}),i("br",{}),"Options",i("br",{}),i("br",{}),"  --onlyPublishWithReleaseLabel    Only bump version ",i("span",{className:"hljs-keyword"},void 0,"if")," ",i("span",{className:"hljs-string"},void 0,"'release'")," label is on pull request",i("br",{}),"  --major string                   The name of the tag ",i("span",{className:"hljs-keyword"},void 0,"for")," a major version bump",i("br",{}),"  --minor string                   The name of the tag ",i("span",{className:"hljs-keyword"},void 0,"for")," a minor version bump",i("br",{}),"  --patch string                   The name of the tag ",i("span",{className:"hljs-keyword"},void 0,"for")," a patch version bump",i("br",{}),"  --noReleaseLabels string[]       Labels that will not create a release. Defaults to just ",i("span",{className:"hljs-string"},void 0,"'no-release'"),i("br",{}),i("br",{}),"Global Options",i("br",{}),i("br",{}),"  -h, --",i("span",{className:"hljs-built_in"},void 0,"help"),"            Display the ",i("span",{className:"hljs-built_in"},void 0,"help")," output ",i("span",{className:"hljs-keyword"},void 0,"for")," the ",i("span",{className:"hljs-built_in"},void 0,"command"),i("br",{}),"  -v, --verbose         Show some more logs",i("br",{}),"  -w, --very-verbose    Show a lot more logs",i("br",{}),"  --repo string         The repo to ",i("span",{className:"hljs-built_in"},void 0,"set")," the status on. Defaults to looking ",i("span",{className:"hljs-keyword"},void 0,"in")," the package.json",i("br",{}),"  --owner string        Version number to publish as. Defaults to reading from the package.json",i("br",{}),"  --githubApi string    Github API to use",i("br",{}),i("br",{}),"Examples",i("br",{}),i("br",{}),"  Get the new version using the last release to head   $ auto version",i("br",{}),"  Skip releases with multiple labels                   $ auto version --noReleaseLabels documentation CI",i("br",{}))),b=i("p",{},void 0,"Useful in conjunction with ",i("code",{},void 0,"npm version")," to auto-version releases."),m=i("p",{},void 0,"To create a prerelease add the ",i("code",{},void 0,"prerelease")," label to your pull request."),g=i("p",{},void 0,"To not create a release for a pull request add the ",i("code",{},void 0,"no-release")," label. Any pull request with this tag will make ",i("code",{},void 0,"auto version")," return ",i("code",{},void 0,"''"),"."),y=i("article",{className:"message column is-warning"},void 0,i("div",{className:"message-body"},void 0,i("p",{},void 0,"⚠️ You must check the return value of ",i("code",{},void 0,"auto version")," in a bash script like in the example configuration for the ",i("code",{},void 0,"no-release")," label to function properly."))),w=i("code",{},void 0,"noReleaseLabels"),j=i("pre",{},void 0,i("code",{className:"language-sh"},void 0,"auto version --noReleaseLabels project-files --noReleaseLabels documentation",i("br",{}))),P=i("code",{},void 0,".autorc");var k=e=>i("div",{className:e.className},void 0,i("section",{},void 0,p,v,f,b,i("h2",{id:"prerelease"},void 0,"Prerelease ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#prerelease","aria-hidden":"true"})),m,i("h2",{id:"no-release"},void 0,"No Release ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#no-release","aria-hidden":"true"})),g,y,i("h3",{id:"multiple"},void 0,"Multiple ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#multiple","aria-hidden":"true"})),i("p",{},void 0,"You can configure multiple labels to skip releasing as well. To do this use the ",w," options. This can also be configured via the ",i(c,{currentPage:e.currentPage,to:"/auto-release/pages/autorc.html#multiple-no-version"},void 0,".autorc"),"."),j,i("h2",{id:"configure-versioning-labels"},void 0,"Configure Versioning Labels ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#configure-versioning-labels","aria-hidden":"true"})),i("p",{},void 0,"You can customize the versioning labels in the ",P,". To see configuration ",i(c,{currentPage:e.currentPage,to:"/auto-release/pages/autorc.html#versioning-labels"},void 0,"go here"),".")));o.default=k,e.exports=o.default}}]);
//# sourceMappingURL=auto-version.js.map