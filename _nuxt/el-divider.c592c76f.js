import{K as g,L as _,M as B,N as E,h as C,r as D,e as O,u as v,j as w,o as h,a as N,q as P,k as K,t as z,O as j}from"./entry.658d57fc.js";function q(e){for(var n=-1,t=e==null?0:e.length,r={};++n<t;){var o=e[n];r[o[0]]=o[1]}return r}const S="__epPropKey",I=e=>e,J=e=>g(e)&&!!e[S],T=(e,n)=>{if(!g(e)||J(e))return e;const{values:t,required:r,default:o,type:c,validator:p}=e,m={type:c,required:!!r,validator:t||p?f=>{let i=!1,d=[];if(t&&(d=Array.from(t),_(e,"default")&&d.push(o),i||(i=d.includes(f))),p&&(i||(i=p(f))),!i&&d.length>0){const y=[...new Set(d)].map($=>JSON.stringify($)).join(", ");B(`Invalid prop: validation failed${n?` for prop "${n}"`:""}. Expected one of [${y}], got value ${JSON.stringify(f)}.`)}return i}:void 0,[S]:!0};return _(e,"default")&&(m.default=o),m},A=e=>q(Object.entries(e).map(([n,t])=>[n,T(t,n)])),G=(e,n)=>{if(e.install=t=>{for(const r of[e,...Object.values(n??{})])t.component(r.name,r)},n)for(const[t,r]of Object.entries(n))e[t]=r;return e},Z=e=>(e.install=E,e),V="el",L="is-",u=(e,n,t,r,o)=>{let c=`${e}-${n}`;return t&&(c+=`-${t}`),r&&(c+=`__${r}`),o&&(c+=`--${o}`),c},M=Symbol("namespaceContextKey"),k=e=>{const n=e||C(M,D(V));return O(()=>v(n)||V)},F=(e,n)=>{const t=k(n);return{namespace:t,b:(s="")=>u(t.value,e,s,"",""),e:s=>s?u(t.value,e,"",s,""):"",m:s=>s?u(t.value,e,"","",s):"",be:(s,a)=>s&&a?u(t.value,e,s,a,""):"",em:(s,a)=>s&&a?u(t.value,e,"",s,a):"",bm:(s,a)=>s&&a?u(t.value,e,s,"",a):"",bem:(s,a,l)=>s&&a&&l?u(t.value,e,s,a,l):"",is:(s,...a)=>{const l=a.length>=1?a[0]:!0;return s&&l?`${L}${s}`:""},cssVar:s=>{const a={};for(const l in s)s[l]&&(a[`--${t.value}-${l}`]=s[l]);return a},cssVarName:s=>`--${t.value}-${s}`,cssVarBlock:s=>{const a={};for(const l in s)s[l]&&(a[`--${t.value}-${e}-${l}`]=s[l]);return a},cssVarBlockName:s=>`--${t.value}-${e}-${s}`}};var H=(e,n)=>{const t=e.__vccOpts||e;for(const[r,o]of n)t[r]=o;return t};const Q=A({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:I(String),default:"solid"}}),R=w({name:"ElDivider"}),U=w({...R,props:Q,setup(e){const n=e,t=F("divider"),r=O(()=>t.cssVar({"border-style":n.borderStyle}));return(o,c)=>(h(),N("div",{class:P([v(t).b(),v(t).m(o.direction)]),style:j(v(r)),role:"separator"},[o.$slots.default&&o.direction!=="vertical"?(h(),N("div",{key:0,class:P([v(t).e("text"),v(t).is(o.contentPosition)])},[K(o.$slots,"default")],2)):z("v-if",!0)],6))}});var W=H(U,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const x=G(W);export{x as E,H as _,A as a,T as b,Z as c,I as d,F as u,G as w};