import{E as m,a as p}from"./el-divider.8d7322c3.js";import{i as _,o as n,b as s,e as c,j as i,c as f,w as h,h as y,f as a,G as k}from"./entry.9e7683a6.js";const x={methods:{redirectToHome(){this.$route.path==="/"?window.location.reload():this.$router.push({path:"/"})},redirectTo(t){this.$router.push({path:t})}},computed:{isHomePage(){return this.$route.path==="/"}}};const H={key:0};function $(t,e,r,d,N,o){const l=m;return n(),s("header",null,[c("h1",{class:"heading",onClick:e[0]||(e[0]=(...u)=>o.redirectToHome&&o.redirectToHome(...u))},"Steezy Helper"),o.isHomePage?(n(),s("p",H,"Steezy Helper helps you finding your next skateboarding trick to try")):i("",!0),o.isHomePage?(n(),f(l,{key:1,type:"danger",onClick:e[1]||(e[1]=()=>{o.redirectTo("/skate")})},{default:h(()=>[y("Wanna play skate?")]),_:1})):i("",!0)])}const g=_(x,[["render",$]]),v={},B=c("h2",null,"©Fabian Binder",-1);function T(t,e){const r=p;return n(),s("footer",null,[a(r),B])}const b=_(v,[["render",T]]);const w={},C={class:"content"};function E(t,e){const r=g,d=b;return n(),s("div",null,[a(r),c("div",C,[k(t.$slots,"default")]),a(d)])}const S=_(w,[["render",E]]);export{S as default};
