import{s as n,j as N,r as L,u as R,R as u,W as O,a as E}from"./vendor.664a13a7.js";const M=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function p(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(i){if(i.ep)return;i.ep=!0;const t=p(i);fetch(i.href,t)}};M();const _=n.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden
  `,I=n.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }
`,g=n.div`
  width: 100%;
  height: 100%;
  background: url('${({src:s})=>s}') no-repeat center center/cover;
`,f=n.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,v=n.p`
  font-size: 0.9rem;
  letter-spacing: 2px;
  font-weight: 300;
  margin-bottom: 1rem;

  span:first-child {
    margin-right: 1rem;
  }
  `,x=n.h1`
  font-weight: 800;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  `,b=n.p`
  font-size: 0.8rem;
  color: #929292;
  line-height: 1.7;
  width: 60%;
  margin-bottom: 2rem;
`,w=n.a`
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  color: pink;
  border-bottom: 2px solid;
`,$=n.div`
    display: flex;
    ${({direction:s="horizontal"})=>s==="vertical"?"flex-direction: column;":""}
    align-items: center;
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 10;
    transform: translateY(-50%);

    & > div:not(:last-child) {
        ${({direction:s="horizontal"})=>s==="vertical"?"margin-bottom: 7px;":"margin-right: 7px;"}
        
    }
`,z=n.div`
    width: 12px;
    height: 12px;
    background-color: ${({active:s})=>s?"black":"#929292"};
    border-radius: 50%; 
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        background-color: black;
    }
`;var C="/assets/shop.30a76796.webp";const e=N.exports.jsx,r=N.exports.jsxs,j=()=>e(g,{className:"keen-slider__slide",src:C}),W=()=>r(f,{className:"keen-slider__slide",children:[r(v,{children:[e("span",{children:"NEW YORK"})," ",e("span",{children:"SINCE 2004"})]}),e(x,{children:"SHOP NOW"}),e(b,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus maiores impedit doloremque esse dolorum repellat reprehenderit veniam totam vel!"}),e(w,{href:"#",children:"READ MORE"})]});var A=[j,W],K="/assets/hair.c6a73ac6.webp";const Y=()=>r(f,{className:"keen-slider__slide",children:[r(v,{children:[e("span",{children:"NEW YORK"})," ",e("span",{children:"SINCE 2004"})]}),e(x,{children:"YOUR HAIR EXPERTS"}),e(b,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus maiores impedit doloremque esse dolorum repellat reprehenderit veniam totam vel!"}),e(w,{href:"#",children:"READ MORE"})]}),P=()=>e(g,{className:"keen-slider__slide",src:K});var D=[Y,P],T="/assets/city.18e48b72.webp";const B=n(f)`
    background-color: black;
    color: white;
    text-align: left;
`,H=n.div`
    width: 60%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    grid-gap: 1rem;
`,m=n.div`
    h4 {
        font-size: 1.3rem;
        margin-bottom: 0.8rem;
    }
    p {
        font-weight: 300;
        font-size: 0.7rem;
        line-height: 1.5;
    }
`,q=()=>r(B,{className:"keen-slider__slide",children:[r(v,{children:[e("span",{children:"NEW YORK"})," ",e("span",{children:"SINCE 2004"})]}),e(x,{children:"NEW LOACTION"}),e(b,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus maiores"}),r(H,{children:[r(m,{children:[e("h4",{children:"NEW YORK"}),e("p",{children:"Lorem ipsum dolor sit amet (consectetur) adipisicing elit. Maxime necessitatibus maiores"})]}),r(m,{children:[e("h4",{children:"BROOKLYN"}),e("p",{children:"Lorem ipsum dolor sit amet (consectetur) adipisicing elit. Maxime necessitatibus maiores"})]}),r(m,{children:[e("h4",{children:"SOHO"}),e("p",{children:"Lorem ipsum dolor sit amet (consectetur) adipisicing elit. Maxime necessitatibus maiores"})]}),r(m,{children:[e("h4",{children:"Park ave"}),e("p",{children:"Lorem ipsum dolor sit amet (consectetur) adipisicing elit. Maxime necessitatibus maiores"})]})]})]}),F=()=>e(g,{className:"keen-slider__slide",src:T});var V=[F,q];const h=[A,D,V];function G(){const[s,a]=L.exports.useState(!1),[p,d]=L.exports.useState(0),[i,t]=R({initial:0,loop:!0,drag:!1,slides:{origin:"center",perView:1,spacing:0},vertical:!0,slideChanged(c){d(c.track.details.rel)},created(){a(!0)}}),[l,y]=R({initial:h.length-1,loop:!0,drag:!1,slides:{origin:"center",perView:1,spacing:0},vertical:!0});return r(_,{children:[r(I,{children:[e("div",{ref:i,className:"keen-slider",children:h.map((c,o)=>e(u.Fragment,{children:c[0]()},`left-${o}`))}),e("div",{ref:l,className:"keen-slider",children:[...h].reverse().map((c,o)=>e(u.Fragment,{children:c[1]()},`left-${o}`))})]}),e($,{direction:"vertical",children:s&&t.current&&[...Array(t.current.track.details.slides.length).keys()].map((c,o)=>e(z,{onClick:()=>{var S,k;(S=t.current)==null||S.moveToIdx(o),(k=y.current)==null||k.moveToIdx(h.length-1-o)},active:p===o},o))})]})}const U=O`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;E.render(r(u.StrictMode,{children:[e(G,{}),e(U,{})]}),document.getElementById("root"));
