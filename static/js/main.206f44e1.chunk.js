(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{70:function(e,t,n){e.exports=n(84)},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),s=n.n(o),c=(n(75),n(6)),i=n.n(c),u=n(27),l=n(92),m=n(86),d=n(97),p=n(96),f=n(87),h=n(12),v=n(11),b=n(9),E={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://pbs.twimg.com/profile_images/2958377871/1badc51c9ffa183c28ecefec1bc8a1a5_400x400.jpeg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionOne",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://pbs.twimg.com/profile_images/1138547910524588034/4R6jdBch_400x400.png",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://pbs.twimg.com/profile_images/582222032739266561/GVZk2caU_400x400.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionOne"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},O={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:["johndoe","sarahedo"],text:"become a superhero"},optionTwo:{votes:[],text:"become a supervillian"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function w(e){return new Promise((function(t,n){var a=e.author,r=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){O=Object(b.a)({},O,Object(v.a)({},r.id,r)),E=Object(b.a)({},E,Object(v.a)({},a,Object(b.a)({},E[a],{questions:E[a].questions.concat([r.id])}))),t(r)}),1e3)}))}function j(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise((function(e,r){setTimeout((function(){E=Object(b.a)({},E,Object(v.a)({},t,Object(b.a)({},E[t],{answers:Object(b.a)({},E[t].answers,Object(v.a)({},n,a))}))),O=Object(b.a)({},O,Object(v.a)({},n,Object(b.a)({},O[n],Object(v.a)({},a,Object(b.a)({},O[n][a],{votes:O[n][a].votes.concat([t])}))))),e()}),500)}))}function g(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(new Promise((function(e,t){setTimeout((function(){return e(Object(b.a)({},O))}),1e3)})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))}function x(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(w(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}function y(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(j(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}function q(e){return{type:"SET_AUTHED_USER",user:e}}var T=Object(h.b)((function(e){return{authedUser:e.authedUser}}),{setAuthedUser:q})((function(e){var t=e.authedUser,n=e.setAuthedUser,o=null===t,s=Object(a.useState)(null),c=Object(u.a)(s,2),h=c[0],v=c[1],O=Object(a.useState)(null),w=Object(u.a)(O,2),j=w[0],g=w[1];return Object(a.useEffect)((function(){h||function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(new Promise((function(e,t){setTimeout((function(){return e(Object(b.a)({},E))}),1e3)})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})));case 2:e=t.sent,v(e);case 4:case"end":return t.stop()}}))}()})),r.a.createElement(l.a,{show:o,onHide:function(){}},r.a.createElement(l.a.Header,null,r.a.createElement(l.a.Title,null,"Select a user to login")),r.a.createElement(l.a.Body,null,!h&&r.a.createElement("div",{className:"text-center mb-1"},r.a.createElement(m.a,{animation:"border"})),h&&r.a.createElement(d.a,{className:"mb-3 w-100"},Object.keys(h).map((function(e){return h[e]})).map((function(e){return r.a.createElement(d.a.Item,{key:e.id,eventKey:e.id,active:j&&j.id===e.id,onClick:function(){return g(e)}},r.a.createElement(p.a.Image,{width:50,height:50,src:e.avatarURL,roundedCircle:!0,thumbnail:!0,className:"mr-2"}),"".concat(e.name," (").concat(e.id,")"))}))),r.a.createElement(f.a,{className:"w-100",onClick:function(){return n(j)},disabled:null===j},"Login")))})),S=n(95),U=n(68),N=n(25),k=n(88),I=n(89),R=n(66),C=n(98),z=n(93),Q=n(94);function _(e){return{type:"QUESTIONS_RECEIVED",questions:e}}var A=Object(h.b)((function(e){return{authedUser:e.authedUser}}),{addQuestion:function(e){return{type:"ADD_QUESTION",question:e}}})((function(e){var t=e.authedUser,n=e.addQuestion,o=Object(a.useState)({}),s=Object(u.a)(o,2),c=s[0],l=c.lastOption1,m=c.lastOption2,d=s[1],p=Object(a.useState)(""),h=Object(u.a)(p,2),v=h[0],b=h[1],E=Object(a.useState)(""),O=Object(u.a)(E,2),w=O[0],j=O[1],g=Object(a.useState)(!1),y=Object(u.a)(g,2),q=y[0],T=y[1],S=null;Object(a.useEffect)((function(){return clearTimeout(S)}));var U=function(e,t){e.preventDefault(),t(e.target.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement(I.a,null,r.a.createElement(R.a,null),r.a.createElement(R.a,{xs:10},r.a.createElement(C.a,{className:"text-center"},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Title,null,"Create New Question")),r.a.createElement(C.a.Body,null,r.a.createElement(z.a,null,r.a.createElement(z.a.Group,null,r.a.createElement(z.a.Text,null,"Would you rather..."),r.a.createElement(z.a.Control,{type:"text",placeholder:"Type 1st option here",value:v,onChange:function(e){return U(e,b)}}),r.a.createElement(z.a.Text,null,"OR"),r.a.createElement(z.a.Control,{type:"text",placeholder:"Type 2nd option here",value:w,onChange:function(e){return U(e,j)}})),r.a.createElement(f.a,{disabled:0===v.trim().length||0===w.trim().length,onClick:function(){return function(){var e,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e={optionOneText:v.trim(),optionTwoText:w.trim(),author:t.id},b(""),j(""),r.next=5,i.a.awrap(x(e));case 5:a=r.sent,n(a),d({lastOption1:a.optionOne.text,lastOption2:a.optionTwo.text}),T(!0),S=setTimeout((function(){return T(!1)}),1500);case 10:case"end":return r.stop()}}))}()},className:"w-100"},"Submit"))))),r.a.createElement(R.a,null))),r.a.createElement(Q.a,{show:q,style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)"},onClose:function(){return T(!1)}},r.a.createElement(Q.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Would you rather..."),r.a.createElement("small",{className:"ml-4"},"just added")),r.a.createElement(Q.a.Body,{className:"text-center"},r.a.createElement("p",null,l),r.a.createElement("p",null,"OR"),r.a.createElement("p",null,m))))})),D=n(99),L=n(91),J=n(90);function V(e){var t=e.message;return r.a.createElement(k.a,{className:"text-center"},r.a.createElement(I.a,null,r.a.createElement(R.a,null,"404")),r.a.createElement(I.a,null,r.a.createElement(R.a,null,t||"Page not found")))}var B=Object(h.b)((function(e){return{authedUser:e.authedUser,questions:e.questions}}),{answerQuestion:function(e){return{type:"ANSWER_QUESTION",qid:e.qid,answer:e.answer,authedUserId:e.authedUserId}},questionsReceived:_})((function(e){var t=e.questions,n=e.questionsReceived,o=e.questionId,s=e.question,c=e.authedUser,u=e.answerQuestion,l=e.showVotes,d=e.disableVoteAction,p=e.showTotalVotes,h=Object(N.f)();if(Object(a.useEffect)((function(){null===t&&function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(g());case 2:e=t.sent,n(e);case 4:case"end":return t.stop()}}))}()})),!t)return r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(m.a,{animation:"border"}));if(!(s=s||t[o]))return r.a.createElement(V,{message:"Question not found"});p=p||null!=o;var v=c&&c.answers&&c.answers[s.id],b=null!=v,E=function(e){switch(e){case 0:return"no votes";case 1:return"1 vote";default:return"".concat(e," votes")}},O=function(e){var t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={qid:s.id,answer:e,authedUser:c.id},u(t),n.next=4,i.a.awrap(y(t));case 4:case"end":return n.stop()}}))};return r.a.createElement(C.a,null,r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,null,r.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),h.push("/questions/".concat(s.id))}},"Would you rather...")),r.a.createElement(k.a,{className:"mw-100 p-0"},r.a.createElement(I.a,null,r.a.createElement(R.a,{sm:8},r.a.createElement(f.a,{disabled:d||b,onClick:function(){return O("optionOne")}},s.optionOne.text),(l||b)&&r.a.createElement("span",{className:"ml-3"},E(s.optionOne.votes.length)),v&&"optionOne"===v&&r.a.createElement(J.a,{variant:"secondary",className:"ml-2"},"my vote"),r.a.createElement(C.a.Text,{className:"mt-3"},"OR"),r.a.createElement(f.a,{disabled:d||b,onClick:function(){return O("optionTwo")}},s.optionTwo.text),(l||b)&&r.a.createElement("span",{className:"ml-3"},E(s.optionTwo.votes.length)),v&&"optionTwo"===v&&r.a.createElement(J.a,{variant:"secondary",className:"ml-2"},"my vote")),p&&r.a.createElement(R.a,{sm:4},r.a.createElement("h1",null,(l||b)&&E(s.optionOne.votes.length+s.optionTwo.votes.length)))))))}));var H=Object(h.b)((function(e){return{authedUser:e.authedUser,questions:e.questions}}),{questionsReceived:_})((function(e){var t=e.authedUser,n=e.questions,o=e.questionsReceived;if(Object(a.useEffect)((function(){null===n&&function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(g());case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}))}()})),null==n)return r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(m.a,{animation:"border"}));var s=Object.keys(n).map((function(e){return n[e]})).sort((function(e,t){return t.timestamp-e.timestamp})),c=function(e){return!!t&&Object.keys(t.answers).includes(e.id)},u=s.filter((function(e){return!c(e)})),l=s.filter((function(e){return c(e)}));return r.a.createElement(D.a,{defaultActiveKey:"unanswer"},r.a.createElement(L.a,{eventKey:"unanswer",title:"Unanswer Questions (".concat(u.length,")")},r.a.createElement(d.a,{variant:"flush"},u.map((function(e){return r.a.createElement(d.a.Item,{key:e.id},r.a.createElement(B,{question:e}))})))),r.a.createElement(L.a,{eventKey:"answered",title:"Answered Questions (".concat(l.length,")")},r.a.createElement(d.a,{variant:"flush"},l.map((function(e){return r.a.createElement(d.a.Item,{key:e.id},r.a.createElement(B,{question:e,showTotalVotes:!0}))})))))}));var W=Object(h.b)((function(e){return{questions:e.questions}}),{questionsReceived:_})((function(e){var t=e.questions,n=e.questionsReceived;if(Object(a.useEffect)((function(){null===t&&function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(g());case 2:e=t.sent,n(e);case 4:case"end":return t.stop()}}))}()})),null==t)return r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(m.a,{animation:"border"}));var o=Object.keys(t).map((function(e){return t[e]})).sort((function(e,t){return t.timestamp-e.timestamp})).sort((function(e,t){return t.optionOne.votes.length+t.optionTwo.votes.length-(e.optionOne.votes.length+e.optionTwo.votes.length)}));return r.a.createElement(d.a,{variant:"flush"},o.map((function(e){return r.a.createElement(d.a.Item,{key:e.id},r.a.createElement(B,{question:e,showVotes:!0,disableVoteAction:!0,showTotalVotes:!0}))})))}));var K=Object(h.b)((function(e){return{authedUser:e.authedUser}}),{setAuthedUser:q})((function(e){var t=e.authedUser,n=e.setAuthedUser,a=Object(N.g)(),o=Object(N.f)();return r.a.createElement("div",null,null===t&&r.a.createElement(T,null),r.a.createElement(S.a,{bg:"light",expand:"lg",collapseOnSelect:!0},r.a.createElement(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(S.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(U.a,{className:"mr-auto",activeKey:a.pathname},r.a.createElement(U.a.Link,{onClick:function(){return o.push("/questions")}},"Questions"),r.a.createElement(U.a.Link,{onClick:function(){return o.push("/add")}},"New Question"),r.a.createElement(U.a.Link,{onClick:function(){return o.push("/leaderboard")}},"Leaderboard")),t&&r.a.createElement(U.a,null,r.a.createElement(S.a.Text,{className:"mr-2"},t&&"Signed in as: ".concat(t.name," (").concat(t.id,")")),r.a.createElement(p.a.Image,{width:40,height:32,src:t.avatarURL,roundedCircle:!0,thumbnail:!0,className:"mr-2 mt-0 mb-0"}),r.a.createElement(f.a,{disabled:null===t,onClick:function(){return n(null)}},"Logout")))),r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/questions",component:H}),r.a.createElement(N.a,{exact:!0,path:"/questions/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(B,{questionId:t})}}),r.a.createElement(N.a,{exact:!0,path:"/add",component:A}),r.a.createElement(N.a,{exact:!0,path:"/leaderboard",component:W}),r.a.createElement(N.a,{component:V})))})),P=n(28);var G=Object(P.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(localStorage.getItem("authedUser")),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHED_USER":var n=t.user;return n?localStorage.setItem("authedUser",JSON.stringify(n)):localStorage.removeItem("authedUser"),n;case"ADD_QUESTION":return Object(b.a)({},e,{questions:e.questions.concat([t.question.id])});case"ANSWER_QUESTION":return Object(b.a)({},e,{answers:Object(b.a)({},e.answers,Object(v.a)({},t.qid,t.answer))});default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(localStorage.getItem("questions")),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUESTIONS_RECEIVED":var n=Object(b.a)({},e,{},t.questions);return localStorage.setItem("questions",JSON.stringify(n)),n;case"ADD_QUESTION":var a=Object(b.a)({},e,Object(v.a)({},t.question.id,t.question));return localStorage.setItem("questions",JSON.stringify(a)),a;case"ANSWER_QUESTION":var r=Object(b.a)({},e,Object(v.a)({},t.qid,Object(b.a)({},e[t.qid],Object(v.a)({},t.answer,Object(b.a)({},e[t.qid][t.answer],{votes:e[t.qid][t.answer].votes.concat(t.authedUser)})))));return localStorage.setItem("questions",JSON.stringify(r)),r;default:return e}}}),M=n(37),$=n(69),F=Object(P.d)(G,Object(P.a)($.a,(function(e){return function(t){return function(n){console.group(n.type),console.log("Action:",n);var a=t(n);return console.log("New State:",e.getState()),console.groupEnd(),a}}})));s.a.render(r.a.createElement(M.a,null,r.a.createElement(h.a,{store:F},r.a.createElement(K,null))),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.206f44e1.chunk.js.map