(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{70:function(e,t,n){e.exports=n(84)},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),s=n.n(o),c=(n(75),n(6)),u=n.n(c),i=n(30),l=n(92),m=n(86),d=n(97),p=n(96),h=n(87),f=n(11),v=n(12),b=n(9),E={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://pbs.twimg.com/profile_images/2958377871/1badc51c9ffa183c28ecefec1bc8a1a5_400x400.jpeg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionOne",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://pbs.twimg.com/profile_images/1138547910524588034/4R6jdBch_400x400.png",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://pbs.twimg.com/profile_images/582222032739266561/GVZk2caU_400x400.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionOne"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},w={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:["johndoe","sarahedo"],text:"become a superhero"},optionTwo:{votes:[],text:"become a supervillian"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function O(e){return new Promise((function(t,n){var a=e.author,r=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){w=Object(b.a)({},w,Object(v.a)({},r.id,r)),E=Object(b.a)({},E,Object(v.a)({},a,Object(b.a)({},E[a],{questions:E[a].questions.concat([r.id])}))),t(r)}),1e3)}))}function g(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise((function(e,r){setTimeout((function(){E=Object(b.a)({},E,Object(v.a)({},t,Object(b.a)({},E[t],{answers:Object(b.a)({},E[t].answers,Object(v.a)({},n,a))}))),w=Object(b.a)({},w,Object(v.a)({},n,Object(b.a)({},w[n],Object(v.a)({},a,Object(b.a)({},w[n][a],{votes:w[n][a].votes.concat([t])}))))),e()}),500)}))}function y(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.awrap(new Promise((function(e,t){setTimeout((function(){return e(Object(b.a)({},w))}),1e3)})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))}function j(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(O(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}function x(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(g(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}function q(e){return{type:"SET_AUTHED_USER",user:e}}var T=Object(f.b)((function(e){return{authedUser:e.authedUser,users:e.users}}),{setAuthedUser:q,usersReceived:function(e){return{type:"USERS_RECEIVED",users:e}}})((function(e){var t=e.authedUser,n=e.setAuthedUser,o=e.users,s=e.usersReceived,c=null===t,f=Object(a.useState)(null),v=Object(i.a)(f,2),w=v[0],O=v[1];return Object(a.useEffect)((function(){o||function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.awrap(new Promise((function(e,t){setTimeout((function(){return e(Object(b.a)({},E))}),1e3)})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})));case 2:e=t.sent,s(e);case 4:case"end":return t.stop()}}))}()})),r.a.createElement(l.a,{show:c,onHide:function(){}},r.a.createElement(l.a.Header,null,r.a.createElement(l.a.Title,null,"Select a user to login")),r.a.createElement(l.a.Body,null,!o&&r.a.createElement("div",{className:"text-center mb-1"},r.a.createElement(m.a,{animation:"border"})),o&&r.a.createElement(d.a,{className:"mb-3 w-100"},Object.keys(o).map((function(e){return o[e]})).map((function(e){return r.a.createElement(d.a.Item,{key:e.id,eventKey:e.id,active:w&&w.id===e.id,onClick:function(){return O(e)}},r.a.createElement(p.a.Image,{width:50,height:50,src:e.avatarURL,roundedCircle:!0,thumbnail:!0,className:"mr-2"}),"".concat(e.name," (").concat(e.id,")"))}))),r.a.createElement(h.a,{className:"w-100",onClick:function(){return n(w)},disabled:null===w},"Login")))})),S=n(95),U=n(68),N=n(25),I=n(88),k=n(89),R=n(66),C=n(98),A=n(93),_=n(94);function z(e){return{type:"QUESTIONS_RECEIVED",questions:e}}var Q=Object(f.b)((function(e){return{authedUser:e.authedUser}}),{addQuestion:function(e){return{type:"ADD_QUESTION",question:e}}})((function(e){var t=e.authedUser,n=e.addQuestion,o=Object(a.useState)({}),s=Object(i.a)(o,2),c=s[0],l=c.lastOption1,m=c.lastOption2,d=s[1],p=Object(a.useState)(""),f=Object(i.a)(p,2),v=f[0],b=f[1],E=Object(a.useState)(""),w=Object(i.a)(E,2),O=w[0],g=w[1],y=Object(a.useState)(!1),x=Object(i.a)(y,2),q=x[0],T=x[1],S=null;Object(a.useEffect)((function(){return clearTimeout(S)}));var U=function(e,t){e.preventDefault(),t(e.target.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,r.a.createElement(k.a,null,r.a.createElement(R.a,null),r.a.createElement(R.a,{xs:10},r.a.createElement(C.a,{className:"text-center"},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Title,null,"Create New Question")),r.a.createElement(C.a.Body,null,r.a.createElement(A.a,null,r.a.createElement(A.a.Group,null,r.a.createElement(A.a.Text,null,"Would you rather..."),r.a.createElement(A.a.Control,{type:"text",placeholder:"Type 1st option here",value:v,onChange:function(e){return U(e,b)}}),r.a.createElement(A.a.Text,null,"OR"),r.a.createElement(A.a.Control,{type:"text",placeholder:"Type 2nd option here",value:O,onChange:function(e){return U(e,g)}})),r.a.createElement(h.a,{disabled:0===v.trim().length||0===O.trim().length,onClick:function(){return function(){var e,a;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e={optionOneText:v.trim(),optionTwoText:O.trim(),author:t.id},b(""),g(""),r.next=5,u.a.awrap(j(e));case 5:a=r.sent,n(a),d({lastOption1:a.optionOne.text,lastOption2:a.optionTwo.text}),T(!0),S=setTimeout((function(){return T(!1)}),1500);case 10:case"end":return r.stop()}}))}()},className:"w-100"},"Submit"))))),r.a.createElement(R.a,null))),r.a.createElement(_.a,{show:q,style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)"},onClose:function(){return T(!1)}},r.a.createElement(_.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Would you rather..."),r.a.createElement("small",{className:"ml-4"},"just added")),r.a.createElement(_.a.Body,{className:"text-center"},r.a.createElement("p",null,l),r.a.createElement("p",null,"OR"),r.a.createElement("p",null,m))))})),D=n(99),V=n(91),J=n(90);var L=Object(f.b)((function(e){return{authedUser:e.authedUser}}))((function(e){var t=e.authedUser,n=e.message;return t?r.a.createElement("div",{className:"text-center",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%)"}},r.a.createElement("h1",null,"404"),r.a.createElement("h1",null,n||"Page not found")):r.a.createElement("div",null)}));var B=Object(f.b)((function(e){return{authedUser:e.authedUser,questions:e.questions,users:e.users}}),{answerQuestion:function(e){return{type:"ANSWER_QUESTION",qid:e.qid,answer:e.answer,authedUserId:e.authedUserId}},questionsReceived:z})((function(e){var t=e.users,n=e.questions,o=e.questionsReceived,s=e.questionId,c=e.question,i=e.authedUser,l=e.answerQuestion,d=e.showVotes,f=e.disableVoteAction,v=e.showTotalVotes,b=(e.showAuthor,Object(N.f)());if(Object(a.useEffect)((function(){null===n&&function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(y());case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}))}()})),!n)return r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(m.a,{animation:"border"}));if(!(c=c||n[s]))return r.a.createElement(L,{message:"Question not found"});v=v||null!=s;var E=i&&i.answers&&i.answers[c.id],w=null!=E,O=c.optionOne.votes.length+c.optionTwo.votes.length,g=t&&t[c.author],j=function(e){switch(e){case 0:return"no votes";case 1:return"1 vote";default:return"".concat(e," votes")}},q=function(e){var t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={qid:c.id,answer:e,authedUser:i.id},l(t),n.next=4,u.a.awrap(x(t));case 4:case"end":return n.stop()}}))};return r.a.createElement(C.a,null,r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,null,"Would you rather...",null==s&&r.a.createElement(h.a,{className:"ml-2",variant:"secondary",size:"sm",onClick:function(e){e.preventDefault(),b.push("/questions/".concat(c.id))}},"Details")),r.a.createElement(I.a,{className:"mw-100 p-0"},r.a.createElement(k.a,null,r.a.createElement(R.a,{sm:8},r.a.createElement(h.a,{disabled:f||w,onClick:function(){return q("optionOne")}},c.optionOne.text),(d||w)&&r.a.createElement("span",{className:"ml-3"},Math.round(c.optionOne.votes.length/O*100),"% (",j(c.optionOne.votes.length),")"),E&&"optionOne"===E&&r.a.createElement(J.a,{variant:"secondary",className:"ml-2"},"my vote"),r.a.createElement(C.a.Text,{className:"mt-3"},"OR"),r.a.createElement(h.a,{disabled:f||w,onClick:function(){return q("optionTwo")}},c.optionTwo.text),(d||w)&&r.a.createElement("span",{className:"ml-3"},Math.round(c.optionTwo.votes.length/O*100),"% (",j(c.optionTwo.votes.length),")"),E&&"optionTwo"===E&&r.a.createElement(J.a,{variant:"secondary",className:"ml-2"},"my vote")),v&&r.a.createElement(R.a,{sm:4},g&&r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(p.a.Image,{width:50,height:50,src:g.avatarURL,roundedCircle:!0,thumbnail:!0,className:"mr-2"}),g&&g.name),r.a.createElement("h6",null,g.id)),r.a.createElement("h1",null,(d||w)&&j(O)))))))}));var H=Object(f.b)((function(e){return{authedUser:e.authedUser,questions:e.questions}}),{questionsReceived:z})((function(e){var t=e.authedUser,n=e.questions,o=e.questionsReceived;if(Object(a.useEffect)((function(){null===n&&function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(y());case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}))}()})),null==n)return r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(m.a,{animation:"border"}));var s=Object.keys(n).map((function(e){return n[e]})).sort((function(e,t){return t.timestamp-e.timestamp})),c=function(e){return!!t&&Object.keys(t.answers).includes(e.id)},i=s.filter((function(e){return!c(e)})),l=s.filter((function(e){return c(e)}));return r.a.createElement(D.a,{defaultActiveKey:"unanswer"},r.a.createElement(V.a,{eventKey:"unanswer",title:"Unanswer Questions (".concat(i.length,")")},r.a.createElement(d.a,{variant:"flush"},i.map((function(e){return r.a.createElement(d.a.Item,{key:e.id},r.a.createElement(B,{question:e}))})))),r.a.createElement(V.a,{eventKey:"answered",title:"Answered Questions (".concat(l.length,")")},r.a.createElement(d.a,{variant:"flush"},l.map((function(e){return r.a.createElement(d.a.Item,{key:e.id},r.a.createElement(B,{question:e,showTotalVotes:!0}))})))))}));var W=Object(f.b)((function(e){return{questions:e.questions}}),{questionsReceived:z})((function(e){var t=e.questions,n=e.questionsReceived;if(Object(a.useEffect)((function(){null===t&&function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(y());case 2:e=t.sent,n(e);case 4:case"end":return t.stop()}}))}()})),null==t)return r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(m.a,{animation:"border"}));var o=Object.keys(t).map((function(e){return t[e]})).sort((function(e,t){return t.timestamp-e.timestamp})).sort((function(e,t){return t.optionOne.votes.length+t.optionTwo.votes.length-(e.optionOne.votes.length+e.optionTwo.votes.length)}));return r.a.createElement(d.a,{variant:"flush"},o.map((function(e){return r.a.createElement(d.a.Item,{key:e.id},r.a.createElement(B,{question:e,showVotes:!0,disableVoteAction:!0,showTotalVotes:!0,showAuthor:!0}))})))}));var K=Object(f.b)((function(e){return{authedUser:e.authedUser}}),{setAuthedUser:q})((function(e){var t=e.authedUser,n=e.setAuthedUser,a=Object(N.g)(),o=Object(N.f)();return r.a.createElement("div",null,null===t&&r.a.createElement(T,null),r.a.createElement(S.a,{bg:"light",expand:"lg",collapseOnSelect:!0},r.a.createElement(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(S.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(U.a,{className:"mr-auto",activeKey:a.pathname},r.a.createElement(U.a.Link,{onClick:function(){return o.push("/questions")}},"Questions"),r.a.createElement(U.a.Link,{onClick:function(){return o.push("/add")}},"New Question"),r.a.createElement(U.a.Link,{onClick:function(){return o.push("/leaderboard")}},"Leaderboard")),t&&r.a.createElement(U.a,null,r.a.createElement(S.a.Text,{className:"mr-2"},t&&"Signed in as: ".concat(t.name," (").concat(t.id,")")),r.a.createElement(p.a.Image,{width:40,height:32,src:t.avatarURL,roundedCircle:!0,thumbnail:!0,className:"mr-2 mt-0 mb-0"}),r.a.createElement(h.a,{disabled:null===t,onClick:function(){return n(null)}},"Logout")))),r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/questions",component:H}),r.a.createElement(N.a,{exact:!0,path:"/questions/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(B,{questionId:t,showVotes:!0,disableVoteAction:!0,showTotalVotes:!0,showAuthor:!0})}}),r.a.createElement(N.a,{exact:!0,path:"/add",component:Q}),r.a.createElement(N.a,{exact:!0,path:"/leaderboard",component:W}),r.a.createElement(N.a,{component:L})))})),M=n(27);var P=Object(M.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(localStorage.getItem("authedUser")),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHED_USER":var n=t.user;return n?localStorage.setItem("authedUser",JSON.stringify(n)):localStorage.removeItem("authedUser"),n;case"ADD_QUESTION":return Object(b.a)({},e,{questions:e.questions.concat([t.question.id])});case"ANSWER_QUESTION":return Object(b.a)({},e,{answers:Object(b.a)({},e.answers,Object(v.a)({},t.qid,t.answer))});default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(localStorage.getItem("questions")),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUESTIONS_RECEIVED":var n=Object(b.a)({},e,{},t.questions);return localStorage.setItem("questions",JSON.stringify(n)),n;case"ADD_QUESTION":var a=Object(b.a)({},e,Object(v.a)({},t.question.id,t.question));return localStorage.setItem("questions",JSON.stringify(a)),a;case"ANSWER_QUESTION":var r=Object(b.a)({},e,Object(v.a)({},t.qid,Object(b.a)({},e[t.qid],Object(v.a)({},t.answer,Object(b.a)({},e[t.qid][t.answer],{votes:e[t.qid][t.answer].votes.concat(t.authedUser)})))));return localStorage.setItem("questions",JSON.stringify(r)),r;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(localStorage.getItem("users")),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_RECEIVED":var n=t.users;return localStorage.setItem("users",JSON.stringify(n)),n;default:return e}}}),G=n(37),F=n(69),$=Object(M.d)(P,Object(M.a)(F.a,(function(e){return function(t){return function(n){console.group(n.type),console.log("Action:",n);var a=t(n);return console.log("New State:",e.getState()),console.groupEnd(),a}}})));s.a.render(r.a.createElement(G.a,{basename:"/"},r.a.createElement(f.a,{store:$},r.a.createElement(K,null))),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.5089b2a4.chunk.js.map