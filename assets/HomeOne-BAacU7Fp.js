import{r,j as e}from"./index-D2bqcZe8.js";import{m as o,f as c,H as m,F as v}from"./Footer-C4NqeBl-.js";const x=()=>{const[a,i]=r.useState(0),t=[{title:"Ipower Plasma Cutting Services for All Your Metal Needs",image:"https://images.pexels.com/photos/27084612/pexels-photo-27084612/free-photo-of-close-up-of-sparks-flying-from-metal-grinding-process.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"speed."},{title:"Ipower Plasma Cutting Services for All Your Metal Needs",image:"https://images.pexels.com/photos/4315559/pexels-photo-4315559.jpeg?auto=compress&cs=tinysrgb&w=600",description:"accuracy."},{title:"Ipower Plasma Cutting Services for All Your Metal Needs",image:"https://images.pexels.com/photos/3678226/pexels-photo-3678226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"cost-efficiency."}],n=()=>{i(l=>(l+1)%t.length)},d=()=>{i(l=>l===0?t.length-1:l-1)},h={hidden:{x:-100,opacity:0,filter:"blur(10px)"},show:{x:0,opacity:1,filter:"blur(0px)",transition:{duration:.6}}},s={hidden:{x:100,opacity:0,filter:"blur(10px)"},show:{x:0,opacity:1,filter:"blur(0px)",transition:{duration:.6}}},p={hover:{scale:1.1,transition:{duration:.3}},tap:{scale:.95,transition:{duration:.3}}};return e.jsxs("div",{className:"carousel-container",style:{backgroundImage:`url(${t[a].image})`},children:[e.jsxs(o.div,{className:"carousel-content",children:[e.jsx(o.h1,{className:"carousel-title",variants:h,initial:"hidden",animate:"show",children:t[a].title}),e.jsxs(o.h2,{className:"carousel-description",variants:s,initial:"hidden",animate:"show",children:["Offering high-quality custom metal cutting with ",t[a].description]}),e.jsx(o.button,{className:"Btn-success",variants:p,whileHover:"hover",whileTap:"tap",children:"View Our Services"})]},a),e.jsxs("div",{className:"carousel-navigation",children:[e.jsx("button",{className:"custom-arrow left",onClick:d,children:"<"}),e.jsx("button",{className:"custom-arrow right",onClick:n,children:">"})]}),e.jsx("div",{className:"carousel-dots",children:t.map((l,u)=>e.jsx("button",{className:`carousel-navigation-button ${u===a?"active":""}`,onClick:()=>i(u),children:u+1},u))})]})},f=()=>{const a=[{title:"Precision Metal Cutting",buttonText:"Get Quote",image:"https://amandagabbardbeauty.com/c/img/promo-1.jpg"},{title:"Custom designs and prototypes",buttonText:"Get Quote",image:"https://amandagabbardbeauty.com/c/img/promo-2.jpg"},{title:"Fast turn around times",buttonText:"Get Quote",image:"https://amandagabbardbeauty.com/c/img/promo-3.jpg"},{title:"Large-scale production capabilities",buttonText:"Get Quote",image:"https://st3.depositphotos.com/1000647/12893/i/450/depositphotos_128939658-stock-photo-cnc-laser-plasma-cutting-of.jpg"}];return r.useEffect(()=>{const i=()=>{const t=document.querySelector(".service-parent"),n=window.pageYOffset;t.style.backgroundPositionY=`${n*.01}px`};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]),e.jsxs("div",{className:"service-parent",children:[e.jsx("div",{className:"service-head",children:e.jsx("h1",{children:"Our Plasma Cutting Capabilities"})}),e.jsx(o.div,{variants:c("left",.2),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.1},className:"service-cards-container",children:a.map((i,t)=>e.jsx("div",{className:"service-card",style:{backgroundImage:`url(${i.image})`},children:e.jsx(o.div,{variants:c("left",.9),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.1},className:"service-card-overlay",children:e.jsxs("div",{className:"service-border",children:[e.jsx("h3",{children:i.title}),e.jsx("button",{className:"quote-button",children:i.buttonText})]})})},t))})]})},g="/vite-react-deploy/assets/1-C7i3j_3o.png",w="/vite-react-deploy/assets/2-BTdBWFnZ.png",j="/vite-react-deploy/assets/3-BfvxnVPf.png",y="/vite-react-deploy/assets/4-B15zkLv_.png",b="/vite-react-deploy/assets/5-ClJx9T0C.png",N="/vite-react-deploy/assets/6-D8_WnP93.png",C=()=>{const[a,i]=r.useState(null),t=s=>{i(s)},n=()=>{i(null)},d=["#ffcccc","#ccffcc","#ffcccc","#ffffcc","#ccffff","#ffffcc"],h=[{id:"card1",head:1,title:"State-of-the-art CNC plasma cutting machines",icon:g},{id:"card2",head:2,title:"Expertise in handling various materials",icon:w},{id:"card3",head:3,title:"Competitive pricing",icon:j},{id:"card4",head:4,title:"Skilled technicians with years of experience",icon:y},{id:"card5",head:5,title:"On-time delivery guaranteed",icon:b},{id:"card6",head:6,title:"Excellent customer service and support",icon:N}];return e.jsx("div",{className:"why-choose-us",children:e.jsxs("div",{className:"why",children:[e.jsx("h1",{children:"Why Work with Us"}),e.jsx(o.div,{variants:c("left",.2),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.1},className:"cards-container1",children:h.slice(0,3).map(s=>e.jsxs(o.div,{variants:c("left",.2),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.1},className:`card ${a===s.id?"focused":""}`,onMouseOver:()=>t(s.id),onMouseOut:n,children:[e.jsx(o.div,{variants:c("right",.2),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.1},className:"cards1-head",children:e.jsx("div",{className:"head-img",style:{backgroundColor:d[s.head-1]},children:e.jsx("img",{src:s.icon,alt:s.title,className:"card-icon"})})}),e.jsx("h2",{children:s.title})]},s.id))}),e.jsx(o.div,{variants:c("right",.2),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.1},className:"cards-container2",children:h.slice(3,6).map(s=>e.jsxs(o.div,{variants:c("right",.2),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.1},className:`card ${a===s.id?"focused":""}`,onMouseOver:()=>t(s.id),onMouseOut:n,children:[e.jsx(o.div,{variants:c("left",.2),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.1},className:"cards1-head",children:e.jsx("div",{className:"head-img",style:{backgroundColor:d[s.head-1]},children:e.jsx("img",{src:s.icon,alt:s.title,className:"card-icon"})})}),e.jsx("h2",{children:s.title})]},s.id))})]})})},I=()=>{const[a,i]=r.useState({x:0,y:0});return r.useEffect(()=>{const t=n=>{i({x:n.clientX,y:n.clientY})};return window.addEventListener("mousemove",t),()=>{window.removeEventListener("mousemove",t)}},[]),e.jsx("div",{className:"custom-cursor",style:{left:`${a.x}px`,top:`${a.y}px`}})},V=()=>(r.useEffect(()=>{document.title="Home"},[]),e.jsxs("div",{children:[e.jsx(m,{}),e.jsx(x,{}),e.jsx(f,{}),e.jsx(C,{}),e.jsx(I,{}),e.jsx(v,{})]}));export{V as default};
