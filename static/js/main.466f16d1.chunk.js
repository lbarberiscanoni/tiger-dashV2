(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,a,t){e.exports=t(625)},625:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(113),s=t.n(r),c=t(27),i=t(28),o=t(30),m=t(29),d=t(31),u=t(628),h=t(627),p=t(629),E=t(48),v=(t(114),t(36)),b=function(e){function a(e){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"col s12 m12 l12 center-align"},n.a.createElement("a",{href:"#",className:"dropdown-trigger btn","data-target":"dropdown"},"Chart Type"),n.a.createElement("ul",{id:"dropdown",className:"dropdown-content"},n.a.createElement("li",{onClick:this.props.changeChart("line")},n.a.createElement("a",{href:"#"},"Line",n.a.createElement("i",{className:"material-icons right"},"show_chart"))),n.a.createElement("li",{className:"divider"}),n.a.createElement("li",{onClick:this.props.changeChart("bar")},n.a.createElement("a",{href:"#"},"Bar",n.a.createElement("i",{className:"material-icons right"},"insert_chart"))),n.a.createElement("li",{className:"divider"}),n.a.createElement("li",{onClick:this.props.changeChart("radar")},n.a.createElement("a",{href:"#"},"Radar",n.a.createElement("i",{className:"material-icons right"},"bubble_chart")))))}}]),a}(l.Component),y=function(e){function a(e){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("table",{className:"highlight striped"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,"Mean"),n.a.createElement("th",null,"Median"),n.a.createElement("th",null,"Standard Deviation"),n.a.createElement("th",null,"Max"),n.a.createElement("th",null,"Min"))),n.a.createElement("tbody",null,this.props.dataPoints.datasets.map(function(e){return n.a.createElement("tr",null,n.a.createElement("th",null,e.label," "),n.a.createElement("td",null," ",v.round(v.mean(e.data),2)," "),n.a.createElement("td",null," ",v.round(v.median(e.data),2)," "),n.a.createElement("td",null," ",v.round(v.std(e.data),2)," "),n.a.createElement("td",null," ",v.round(v.max(e.data),2)," "),n.a.createElement("td",null," ",v.round(v.min(e.data),2)," "))})))}}]),a}(l.Component),g=function(e){function a(e){var t;Object(c.a)(this,a);var l=(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).props.global[Object.keys(t.props.global)[0]].values,n=[];Object.keys(l).map(function(e){!0===l[e].display&&n.push(e)});var r={possibleLabels:l,labels:n,datasets:[]};return Object.keys(t.props.global).map(function(e){if(!0===t.props.global[e].display){var a=[];Object.keys(t.props.global[e].values).map(function(l){!0===t.props.global[e].values[l].display&&a.push(t.props.global[e].values[l].data)}),r.datasets.push({label:e,fillColor:"rgba(220,220,220,0.2)",strokeColor:"rgba(220,220,220,1)",pointColor:"rgba(220,220,220,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",pointHoverRadius:5,pointRadius:1,pointHitRadius:10,spanGaps:!1,data:a})}}),t.state={chartType:"line",dataPoints:r},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"changeChart",value:function(e){this.setState({chartType:e})}},{key:"render",value:function(){var e,a=this;return"line"===this.state.chartType?e=n.a.createElement(E.Line,{data:this.state.dataPoints,height:"300px",width:"600px"}):"bar"===this.state.chartType?e=n.a.createElement(E.Bar,{data:this.state.dataPoints,height:"300px",width:"600px"}):"radar"===this.state.chartType&&(e=n.a.createElement(E.Radar,{data:this.state.dataPoints,height:"300px",width:"600px"})),n.a.createElement("div",null,n.a.createElement("div",{className:"col s3 m3 l3"}),n.a.createElement("div",{className:"col s6 m6 l6"},n.a.createElement("div",{className:"row"},n.a.createElement(b,{changeChart:function(e){return a.changeChart.bind(a,e)}})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m12 l12"},n.a.createElement("form",null,n.a.createElement("div",{className:"col s4 m4 l4"},Object.keys(this.state.dataPoints.possibleLabels).map(function(e){return n.a.createElement("div",{key:e},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",className:"filled-in",defaultChecked:a.state.dataPoints.possibleLabels[e].display,onClick:a.props.toggle("month",e)}),n.a.createElement("span",null,e)))})),n.a.createElement("div",{className:"col s4 m4 l4"},Object.keys(this.props.global).map(function(e){return n.a.createElement("div",{key:e},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",defaultChecked:a.props.global[e].display,onClick:a.props.toggle("year",e)}),n.a.createElement("span",null,e)))})),n.a.createElement("div",{className:"col s4 m4 l4"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m12 l12"},e)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s1 m1 l1"}),n.a.createElement("div",{className:"col s10 m10 l10"},n.a.createElement("ul",{className:"collapsible"},n.a.createElement("li",null,n.a.createElement("div",{className:"collapsible-header"},"REPORT",n.a.createElement("i",{className:"material-icons right"},"subject")),n.a.createElement("div",{className:"collapsible-body"},n.a.createElement(y,{dataPoints:this.state.dataPoints}))))),n.a.createElement("div",{className:"col s1 m1 l1"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4 m4 l4"}),n.a.createElement("div",{className:"col s4 m4 l4"},n.a.createElement("button",{className:"btn waves-effect waves-light",onClick:this.props.saveQuery(this.state)},"SAVE",n.a.createElement("i",{className:"material-icons right"},"save"))),n.a.createElement("div",{className:"col s4 m4 l4"}))),n.a.createElement("div",{className:"col s3 m3 l3"}))}}]),a}(l.Component),f=t(173),N=t.n(f),j=t(174),w=t.n(j),k=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={status:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=new w.a({options:{request:{endpoint:"upload/"},callbacks:{onComplete:function(a,t,l){e.setState({status:!e.state.status})}}}});return n.a.createElement("div",{className:"row"},n.a.createElement("h2",{className:"center-align"},this.state.status?"Success!":"Upload New Data to the App"),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"col s4 m4 l4"}),n.a.createElement("div",{className:"col s4 m4 l4"},n.a.createElement(N.a,{multiple:!0,accept:"csv/*",uploader:a},n.a.createElement("span",{className:"btn-large"},n.a.createElement("i",{class:"material-icons left"},"cloud"),this.state.status?"Upload Another":"Choose File"))),n.a.createElement("div",{className:"col s4 m4 l4"})))}}]),a}(l.Component),O=t(175),C=t.n(O),x=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={major:"chemistry",data:[{type:"bar",orientation:"h",x:[20,14],y:["available","needed"],category:"chemistry",title:"CHEM 101",marker:{color:"#26a69a"}},{type:"bar",orientation:"h",x:[20,14],y:["available","needed"],category:"history",title:"HIST 102",marker:{color:"#26a69a"}},{type:"bar",orientation:"h",x:[17,30],y:["available","needed"],category:"chemistry",title:"CHEM 201",marker:{color:"#ee6e73"}},{type:"bar",orientation:"h",x:[16,14],y:["available","needed"],category:"history",title:"HIST 405",marker:{color:"#26a69a"}},{type:"bar",orientation:"h",x:[17,30],y:["available","needed"],category:"history",title:"HIST 301",marker:{color:"#ee6e73"}}]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;console.log(this.state.major);var a=[];return this.state.data.map(function(e){!1===a.includes(e.category)&&a.push(e.category)}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m12 l12 center-align"},n.a.createElement("a",{className:"dropdown-trigger btn-large","data-target":"dropdown"},"Majors"),n.a.createElement("ul",{id:"dropdown",className:"dropdown-content"},a.map(function(a){return n.a.createElement("li",{onClick:function(){return e.setState({major:a})}},n.a.createElement("a",null," ",a," "))})))),n.a.createElement("div",{className:"row"},this.state.data.map(function(a){return a.category===e.state.major&&n.a.createElement("div",{className:"col s4 m4 l4"},n.a.createElement(C.a,{data:[a],layout:{width:400,height:250,bargap:.5,title:a.title}}))})))}}]),a}(l.Component),P=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={queries:t.props.queries,currentGraph:{graphType:"",date:""}},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"updateGraph",value:function(e){this.setState({currentGraph:e})}},{key:"render",value:function(){var e,a=this;return e="line"===this.state.currentGraph.chartType?n.a.createElement(E.Line,{data:this.state.currentGraph.dataPoints,options:null,height:"300px",width:"500px"}):"bar"===this.state.currentGraph.chartType?n.a.createElement(E.Bar,{data:this.state.currentGraph.dataPoints,options:null,height:"300px",width:"500px"}):"radar"===this.state.currentGraph.chartType?n.a.createElement(E.Radar,{data:this.state.currentGraph.dataPoints,options:null,height:"300px",width:"500px"}):n.a.createElement("h3",null,"Your Saved Graph"),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"col s6 m6 l6"},this.state.queries.map(function(e){return n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{className:"btn-large",graphtype:e.chartType,date:e.date,onClick:a.updateGraph.bind(a,e)}," ",e.chartType+" graph saved on "+e.date," ")))})),n.a.createElement("div",{className:"col s6 m6 l6"},n.a.createElement("h4",{className:"center-align"}," ",this.state.currentGraph.date," "),e))}}]),a}(l.Component),S=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={dataPoints:{2017:{display:!0,values:{January:{display:!0,data:65},February:{display:!0,data:65},March:{display:!0,data:59},April:{display:!0,data:80},May:{display:!0,data:45}}},2018:{display:!0,values:{January:{display:!0,data:45},February:{display:!0,data:25},March:{display:!0,data:59},April:{display:!0,data:30},May:{display:!0,data:45}}}},queries:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"saveQuery",value:function(e){alert("Saved!");var a=new Date;e.date=a.toString().split(" ").slice(1,5).join(" ");var t=this.state.queries;t.push(e),this.setState({queries:t})}},{key:"toggle",value:function(e,a){var t=this;console.log(e,a),"month"===e?(Object.keys(this.state.dataPoints).map(function(e){t.state.dataPoints[e].values[a].display=!t.state.dataPoints[e].values[a].display}),this.setState(this.state)):(this.state.dataPoints[a].display=!this.state.dataPoints[a].display,this.setState(this.state))}},{key:"render",value:function(){var e=this;return console.log(this.state),n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("h5",{className:"brand-logo center"},"Tiger Dash")),n.a.createElement(u.a,{basename:"/tiger-dashV2"},n.a.createElement("div",{className:"row",style:{display:"flex"}},n.a.createElement("div",{className:"col s1 m2 l1",style:{width:"20%"}},n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("nav",{style:{height:250}},n.a.createElement("ul",{style:{padding:0}},n.a.createElement("li",{style:{float:"none"}},n.a.createElement(h.a,{to:"/",className:"center-align"},"Charts and Visualizations")),n.a.createElement("li",{style:{float:"none"}},n.a.createElement(h.a,{to:"/map/",className:"center-align"},"Resource Availability")),n.a.createElement("li",{style:{float:"none"}},n.a.createElement(h.a,{to:"/saved/",className:"center-align"},"Saved Queries")),n.a.createElement("li",{style:{float:"none"}},n.a.createElement(h.a,{to:"/upload/",className:"center-align"},"Upload Data")))))),n.a.createElement("div",{className:"col s11 m10 l11",style:{flex:1}},n.a.createElement(p.a,{path:"/",exact:!0,component:function(){return n.a.createElement("div",{className:"row"},n.a.createElement(g,{global:e.state.dataPoints,saveQuery:function(a){return e.saveQuery.bind(e,a)},toggle:function(a,t){return e.toggle.bind(e,a,t)}}))}}),n.a.createElement(p.a,{path:"/map/",component:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("h2",{className:"center-align"},"Resource Availability"),n.a.createElement(x,null))}}),n.a.createElement(p.a,{path:"/saved/",component:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("h2",{className:"center-align"},"All of Your Queries in One Place"),n.a.createElement(P,{queries:e.state.queries}))}}),n.a.createElement(p.a,{path:"/upload/",component:function(){return n.a.createElement(k,null)}})))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[177,2,1]]]);
//# sourceMappingURL=main.466f16d1.chunk.js.map