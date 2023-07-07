import{E as w,a as O}from"./el-breadcrumb.9eb30fee.js";import{_ as T,g as f}from"./TrickDisplay.8c2df2f6.js";import{E as N,a as $}from"./el-divider.c416e3b3.js";import{E as q,a as x}from"./el-scrollbar.b0a8e1e3.js";import"./el-popper.83c421b2.js";import{i as B,b as m,f as t,w as s,e as h,t as S,o as n,h as r,c as y,j as b}from"./entry.aed250c1.js";const M=["S","K","A","T","E"],W={components:{TrickDisplay:T},data(){return{data:[],players:[],stances:[],obstacles:[],levels:[],currentTrick:{},gameWinner:""}},mounted(){if(this.$route.query.players===void 0||this.$route.query.stances===void 0||this.$route.query.obstacles===void 0||this.$route.query.levels===void 0){this.$router.push("/skate");return}this.players=JSON.parse(this.$route.query.players),this.players.forEach(e=>{this.data.push({name:e.name,letters:"",letterCount:0,hasTried:!1,isOut:!1})}),this.stances=JSON.parse(this.$route.query.stances),this.obstacles=JSON.parse(this.$route.query.obstacles),this.levels=JSON.parse(this.$route.query.levels),this.currentTrick=f(this.stances,this.obstacles,this.levels)},methods:{itsAMake(e){this.data[e].hasTried=!0,this.checkRound()},itsAMiss(e){this.data[e].letterCount++,this.data[e].letters+=M[this.data[e].letterCount-1],this.data[e].letterCount!==5?this.data[e].letters+=".":this.data[e].isOut=!0,this.data[e].hasTried=!0,this.checkRound()},checkRound(){let e=0,u=!0;if(this.data.forEach(a=>{a.hasTried||(u=!1),a.isOut&&e++}),u){if(this.players.length===1&&e===1||this.players.length>1&&e===this.players.length-1){const a=this.data.find(p=>!p.isOut);this.gameWinner=a?a.name:this.players[0].name}this.data.forEach(a=>{a.hasTried=a.isOut}),this.newTrick()}},restart(){this.data.forEach(e=>{e.letters="",e.letterCount=0,e.hasTried=!1,e.isOut=!1}),this.gameWinner=""},backToHomepage(){this.$router.push({path:"/"})},newTrick(){this.currentTrick=f(this.stances,this.obstacles,this.levels),this.$nextTick(()=>{if(window.innerWidth<=768){const e=document.querySelector(".heading");e&&e.scrollIntoView({behavior:"smooth"})}})}}};const R={key:0},A=h("p",null,"Remember: on the last letter you get two attempts!",-1),V=h("p",null,"If you want to swap the trick press this button",-1),D={key:1},I=h("h2",null,"Game Over!",-1);function J(e,u,a,p,l,i){const d=O,v=w,g=T,k=$,o=N,_=x,C=q;return n(),m("div",null,[t(v,{separator:"/"},{default:s(()=>[t(d,{to:{path:"/"}},{default:s(()=>[r("Home")]),_:1}),t(d,{to:{path:"/skate"}},{default:s(()=>[r("Skate")]),_:1}),t(d,{to:{path:"/skate/game"}},{default:s(()=>[r("Game")]),_:1})]),_:1}),l.gameWinner?(n(),m("div",D,[I,h("h3",null,S(l.gameWinner)+" wins!",1),t(o,{type:"primary",onClick:i.restart},{default:s(()=>[r("Restart")]),_:1},8,["onClick"]),t(o,{type:"warning",onClick:i.backToHomepage},{default:s(()=>[r("Back to Menu")]),_:1},8,["onClick"])])):(n(),m("div",R,[t(g,{trick:l.currentTrick},null,8,["trick"]),t(k,{"border-style":"solid"}),A,V,t(o,{type:"warning",onClick:i.newTrick},{default:s(()=>[r("GET NEW TRICK")]),_:1},8,["onClick"]),t(k,{"border-style":"dashed"}),t(C,{data:l.data,stripe:"","empty-text":"no players yet"},{default:s(()=>[t(_,{label:"Name",prop:"name"}),t(_,{label:"Letters",prop:"letters"}),t(_,{label:"",fixed:"right",width:"180"},{default:s(c=>[c.row.hasTried?b("",!0):(n(),y(o,{key:0,type:"primary",size:"small",onClick:E=>i.itsAMake(c.$index)},{default:s(()=>[r("Make")]),_:2},1032,["onClick"])),c.row.hasTried?b("",!0):(n(),y(o,{key:1,type:"danger",size:"small",onClick:E=>i.itsAMiss(c.$index)},{default:s(()=>[r("Miss")]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])]))])}const F=B(W,[["render",J]]);export{F as default};