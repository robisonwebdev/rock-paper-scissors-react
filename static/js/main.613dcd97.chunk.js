(this["webpackJsonprock-paper-scissors-react"]=this["webpackJsonprock-paper-scissors-react"]||[]).push([[0],[,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(4),r=a.n(n),o=a(2),i=(a(9),a(0)),l=function(e){var t=e.playerScore,a=e.computerScore;return Object(i.jsxs)("div",{className:"scoreboard",children:[Object(i.jsx)("p",{children:t}),Object(i.jsx)("p",{children:"|"}),Object(i.jsx)("p",{children:a})]})},u=(a(11),function(e){var t=e.computerScore,a=e.playerScore;return Object(i.jsx)("header",{children:Object(i.jsx)(l,{computerScore:t,playerScore:a})})}),j=(a(12),function(e){var t=e.data_value,a=e.className,c=e.icon,s=e.onClick;return Object(i.jsx)("i",{className:"gamePiece ".concat(c," ").concat(a),data_value:t,onClick:s})}),m=(a(13),function(e){var t,a=e.className,c=e.competitor,s=e.gamePieceClick;return e.gameStart&&(t="iconHover"),Object(i.jsxs)("div",{className:"gameInterface ".concat(a),children:[Object(i.jsx)("h2",{children:c||a}),Object(i.jsxs)("div",{className:"gamePieces",children:[Object(i.jsx)(j,{data_value:"rock",className:t,icon:"las la-hand-rock",onClick:s}),Object(i.jsx)(j,{data_value:"paper",className:t,icon:"las la-hand-paper",onClick:s}),Object(i.jsx)(j,{data_value:"scissors",className:t,icon:"las la-hand-scissors",onClick:s})]})]})}),b=(a(14),function(e){var t=e.className,a=e.onClick,c=e.text,s=e.type;return Object(i.jsx)("button",{className:t,onClick:a,type:s,children:c})}),p=(a(15),function(e){var t=e.handleChange,a=e.handleSubmit,c=e.inputValue;return Object(i.jsxs)("form",{className:"gameForm",onSubmit:a,children:[Object(i.jsx)("input",{type:"text",name:"name",onChange:t,placeholder:"Enter your name",value:c}),Object(i.jsx)(b,{className:"submitBtn",type:"submit",text:"Start Game!"})]})}),d=(a(16),function(e){var t=e.message,a=e.winner;return Object(i.jsxs)("div",{className:"gameStatus",children:[Object(i.jsx)("h3",{children:a}),Object(i.jsx)("p",{children:t})]})}),h=(a(17),function(e){var t=e.handleChange,a=e.handleSubmit,c=e.inputValue,s=e.message,n=e.showGameForm,r=e.showGameStatus,o=e.winner;return Object(i.jsxs)("div",{className:"gameInfo",children:[n?Object(i.jsx)(p,{handleChange:t,handleSubmit:a,inputValue:c}):null,r?Object(i.jsx)(d,{message:s,winner:o}):null]})}),O=(a(18),function(e){var t=e.gamePieceClick,a=e.gameStart,c=e.handleChange,s=e.handleSubmit,n=e.inputValue,r=e.message,o=e.playerName,l=e.showGameForm,u=e.showGameStatus,j=e.winner;return Object(i.jsxs)("div",{className:"gameboard",children:[Object(i.jsx)(m,{className:"Player",competitor:o,gamePieceClick:t,gameStart:a}),Object(i.jsx)(h,{handleChange:c,handleSubmit:s,inputValue:n,message:r,showGameForm:l,showGameStatus:u,winner:j}),Object(i.jsx)(m,{className:"Computer",competitor:"Computer"})]})}),x=(a(19),function(e){var t=e.handleScoreUpdate,a=e.playerName,s=e.setPlayerName,n=Object(c.useState)(null),r=Object(o.a)(n,2),l=r[0],u=r[1],j=Object(c.useState)(!1),m=Object(o.a)(j,2),p=m[0],d=m[1],h=Object(c.useState)(!1),x=Object(o.a)(h,2),S=x[0],f=x[1],g=Object(c.useState)(""),v=Object(o.a)(g,2),k=v[0],N=v[1],w=Object(c.useState)("Select Rock, Paper, or Scissors"),y=Object(o.a)(w,2),C=y[0],P=y[1],G=Object(c.useState)(null),_=Object(o.a)(G,2),V=_[0],F=_[1],R=Object(c.useState)(!1),B=Object(o.a)(R,2),D=B[0],E=B[1],I=Object(c.useState)(!0),M=Object(o.a)(I,2),J=M[0],U=M[1],A=Object(c.useState)(!1),H=Object(o.a)(A,2),T=H[0],q=H[1],z=Object(c.useState)(""),K=Object(o.a)(z,2),L=K[0],Q=K[1];Object(c.useEffect)((function(){p&&W(V,l)}),[p]);var W=function(e,c){console.log("Player Pick:",e),console.log("Computer Pick:",c),e===c&&(Q("Tie Game!"),P("No winners, try again!"),d(!1)),"rock"===e&&("scissors"===c?(Q("".concat(a," wins!")),P("Rock beats scissors!"),d(!1),t("player")):"paper"===c&&(Q("Computer wins!"),P("Paper beats rock!"),d(!1),t("computer"))),"paper"===e&&("rock"===c?(Q("".concat(a," wins!")),P("Paper beats rock!"),d(!1),t("player")):"scissors"===c&&(Q("Computer wins!"),P("Scissors beats paper!"),d(!1),t("computer"))),"scissors"===e&&("paper"===c?(Q("".concat(a," wins!")),P("Scissors beats paper!"),d(!1),t("player")):"rock"===c&&(Q("Computer wins!"),P("Rock beats scissors!"),d(!1),t("computer")))};return Object(i.jsxs)("main",{children:[Object(i.jsx)(O,{gamePieceClick:function(e){S&&(F(e.target.getAttribute("data_value")),function(){switch(Math.floor(3*Math.random())){case 0:u("rock");break;case 1:u("paper");break;case 2:u("scissors")}}(),d(!0))},gameStart:S,handleChange:function(e){N(e.target.value)},handleSubmit:function(e){e.preventDefault(),""!==k&&(f(!0),s(k),E(!0),U(!1),q(!0),N(""))},inputValue:k,message:C,playerName:a,showGameStatus:T,showGameForm:J,winner:L}),D?Object(i.jsx)(b,{className:"resetBtn",onClick:function(){t("reset"),s(""),U(!0),q(!1),E(!1),f(!1)},text:"Reset Game",type:"button"}):null]})}),S=(a(20),function(e){var t=e.address,a=e.name,c=e.text;return Object(i.jsx)("footer",{children:Object(i.jsxs)("small",{children:[c,Object(i.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:a})]})})}),f=(a(21),function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(o.a)(n,2),l=r[0],j=r[1],m=Object(c.useState)(0),b=Object(o.a)(m,2),p=b[0],d=b[1];return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(u,{computerScore:a,playerScore:p}),Object(i.jsx)(x,{handleScoreUpdate:function(e){"player"===e&&d(p+1),"computer"===e&&s(a+1),"reset"===e&&(s(0),d(0))},playerName:l,setPlayerName:j}),Object(i.jsx)(S,{address:"https://github.com/robisonwebdev",name:"David Robison",text:"Developed by "})]})});a(22);r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.613dcd97.chunk.js.map