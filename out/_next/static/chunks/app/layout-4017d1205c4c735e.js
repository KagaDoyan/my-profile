(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{372:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(5155),l=r(2115);let i=e=>{let{children:t,dotColor:r="rgba(0, 0, 255, 0.8)",lineColor:i="rgba(0, 0, 255, 0.5)",speed:a=.5,dotCount:s=100}=e,o=(0,l.useRef)(null),c=(0,l.useRef)([]),h=()=>{let e=o.current;if(!e)return;let t=window.devicePixelRatio||1;e.width=window.innerWidth*t,e.height=window.innerHeight*t,e.style.width=window.innerWidth+"px",e.style.height=window.innerHeight+"px";let r=e.getContext("2d");r&&r.scale(t,t)};return(0,l.useEffect)(()=>(h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[]),(0,l.useEffect)(()=>{let e=o.current;if(!e)return;let t=e.getContext("2d");if(!t)return;(()=>{c.current=[];for(let t=0;t<s;t++)c.current.push({x:Math.random()*e.width,y:Math.random()*e.height,vx:(Math.random()-.5)*a,vy:(Math.random()-.5)*a})})();let n=()=>{t.clearRect(0,0,e.width,e.height);for(let e=0;e<c.current.length;e++)for(let r=e+1;r<c.current.length;r++){let n=c.current[e].x-c.current[r].x,l=c.current[e].y-c.current[r].y,a=Math.sqrt(n*n+l*l);if(a<150){let n=1-a/150;t.beginPath(),t.moveTo(c.current[e].x,c.current[e].y),t.lineTo(c.current[r].x,c.current[r].y),t.strokeStyle="".concat(i.replace("0.5",n.toString())),t.lineWidth=1,t.stroke()}}c.current.forEach(e=>{t.beginPath(),t.arc(e.x,e.y,3,0,2*Math.PI),t.fillStyle=r,t.fill()})},l=()=>{c.current.forEach(t=>{t.x+=t.vx,t.y+=t.vy,(t.x<0||t.x>e.width)&&(t.vx*=-1),(t.y<0||t.y>e.height)&&(t.vy*=-1)})},h=()=>{l(),n(),requestAnimationFrame(h)};h()},[r,i,a,s]),(0,n.jsxs)("div",{className:"relative w-full h-screen overflow-hidden",children:[(0,n.jsx)("canvas",{ref:o,className:"absolute top-0 left-0"}),(0,n.jsx)("div",{className:"relative z-10 overflow-y-scroll h-full",children:t})]})}},5688:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_2ecb94",variable:"__variable_2ecb94"}},9324:()=>{},9432:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_5e3acf",variable:"__variable_5e3acf"}},9930:(e,t,r)=>{Promise.resolve().then(r.bind(r,372)),Promise.resolve().then(r.t.bind(r,5688,23)),Promise.resolve().then(r.t.bind(r,9432,23)),Promise.resolve().then(r.t.bind(r,9324,23))}},e=>{var t=t=>e(e.s=t);e.O(0,[261,441,684,358],()=>t(9930)),_N_E=e.O()}]);