(this.webpackJsonpredux_pokemons=this.webpackJsonpredux_pokemons||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){},25:function(e,t,s){"use strict";s.r(t);s(0);var n=s(4),a=s.n(n),i=(s(16),s(17),s(11)),c=s(2),o=s(1);var d=Object(c.b)(null,null)((function(e){var t=e.name,s=e.status,n=e.id,a=e.shouldDismiss,c=e.shouldCatch,d="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),r="should_catch"===s?["\u041f\u043e\u0439\u043c\u0430\u0442\u044c","green"]:["\u041e\u0442\u043f\u0443\u0441\u0442\u0438\u0442\u044c","red"],u=Object(i.a)(r,2),l=u[0],m=u[1];return Object(o.jsxs)("div",{style:{background:m},className:"pokemon",children:[Object(o.jsx)("div",{className:"name",children:t}),Object(o.jsx)("img",{src:d,alt:t}),Object(o.jsx)("button",{"data-id":n,onClick:function(e){"should_catch"===s?c(e.target.dataset.id):a(e.target.dataset.id)},children:l})]})}));var r=Object(c.b)((function(e){return{pokemonsArray:e}}),(function(e){return{shouldCatch:function(t){e({type:"should_catch",id:t})},shouldDismiss:function(t){e({type:"should_dismiss",id:t})}}}))((function(e){var t=e.pokemonsArray,s=e.shouldCatch,n=e.shouldDismiss,a=t.allPokemons.length,i=t.catched.length;return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"App-wrapper",children:[Object(o.jsx)("h1",{children:"\u041f\u043e\u0439\u043c\u0430\u043d\u043e \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u043e\u0432"}),Object(o.jsxs)("h2",{className:"count_pokemons",children:[i," / ",a]}),Object(o.jsx)("div",{className:"pokemons_block",children:t.allPokemons.map((function(e){return Object(o.jsx)(d,{shouldCatch:s,shouldDismiss:n,id:e.id,name:e.name,status:e.status},e.id)}))})]})})}));console.log(function(){return 1}());var u=s(3),l=s(5),m={allPokemons:[{name:"bulbasaur",id:"1"},{name:"ivysaur",id:"2"},{name:"venusaur",id:"3"},{name:"charmander",id:"4"},{name:"charmeleon",id:"5"},{name:"charizard",id:"6"},{name:"squirtle",id:"7"},{name:"wartortle",id:"8"},{name:"blastoise",id:"9"},{name:"caterpie",id:"10"},{name:"metapod",id:"11"},{name:"butterfree",id:"12"},{name:"weedle",id:"13"},{name:"kakuna",id:"14"},{name:"beedrill",id:"15"},{name:"pidgey",id:"16"},{name:"pidgeotto",id:"17"},{name:"pidgeot",id:"18"},{name:"rattata",id:"19"},{name:"raticate",id:"20"}].map((function(e){return Object(u.a)(Object(u.a)({},e),{},{status:"should_catch"})})),catched:[]};function h(e,t,s){var n=Object(u.a)({},t);return n.allPokemons.map((function(t){return t.id===s.id?(t.status=e,Object(u.a)({},t)):t})),n.catched=n.allPokemons.filter((function(e){return"should_dismiss"===e.status})),n}var b=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return"should_catch"===t.type?h("should_dismiss",e,t):"should_dismiss"===t.type?h("should_catch",e,t):e}));b.subscribe((function(){console.log(b.getState())})),a.a.render(Object(o.jsx)(c.a,{store:b,children:Object(o.jsx)(r,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d5f03328.chunk.js.map