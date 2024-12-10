import{j as e,L as u,r as m}from"./index-v36-dgWy.js";import{m as d,f as c,H as v,F as g}from"./Footer-BRFGjZc0.js";import{B as l,F as x,d as j,e as f,G as h}from"./index-BzAnlepc.js";import{S as w}from"./index-bQ3zVKll.js";/* empty css                 */const b=()=>e.jsxs("div",{children:[e.jsxs(d.div,{variants:c("left",.7),initial:"hidden",animate:"show",whileInView:"show",viewport:{once:!1,amount:.8},className:"service-hero",children:[e.jsx(d.h1,{variants:c("left",.7),initial:"hidden",animate:"show",whileInView:"show",viewport:{once:!1,amount:.8},children:"Our Services"}),e.jsxs(l,{variants:c("left",.7),initial:"hidden",animate:"show",whileInView:"show",viewport:{once:!1,amount:.8},children:[e.jsx(l.Item,{className:"breadcrumb",children:e.jsx(u,{to:"/",children:"Home"})}),e.jsx("span",{className:"breadcrumb-separator",children:e.jsx(x,{className:`icon\r
            `})}),e.jsx(l.Item,{className:"breadcrumb",children:"Our Services"})]})]}),e.jsxs("div",{className:"overview",children:[e.jsx("div",{className:"left-service"}),e.jsx("div",{id:"slash"}),e.jsxs("div",{className:"right-service",children:[e.jsx("h1",{children:"Overview of Plasma Cutting Services"}),e.jsx("p",{children:"We provide professional plasma cutting services for custom projects, industrial applications, and more. Our advanced machinery can handle a variety of materials with precision."})]})]})]}),N=()=>{const s=[{title:"Custom Plasma Cutting",content:"From small parts to large sheets, we provide custom cutting solutions to meet your specifications."},{title:"Industrial Fabrication",content:"Specializing in high-volume production runs for industries such as manufacturing, construction, and automotive."},{title:"Prototype",content:"Bringing your designs to life with precision cutting for prototypes and small-batch production."},{title:"Material Handling",content:"We work with a wide range of metals including stainless steel, mild steel, aluminum, and more."}];return e.jsx(S,{data:s})},S=({data:s})=>{const[n,i]=m.useState(s.map(t=>({...t,open:!1}))),a=t=>{i(r=>r.map((o,p)=>({...o,open:p===t?!o.open:o.open})))};return e.jsxs("div",{className:"categories",children:[e.jsx("h1",{children:"Service Categories"}),e.jsx("div",{className:"accordion",children:n.map((t,r)=>e.jsxs("div",{children:[e.jsxs("div",{className:"title",onClick:()=>a(r),children:[e.jsx("div",{className:"arrow-wrapper",children:t.open?e.jsx(j,{}):e.jsx(f,{})}),e.jsx("span",{className:"title-text",children:t.title})]}),e.jsx("div",{className:t.open?"content content-open":"content",children:e.jsx("div",{className:t.open?"content-text content-text-open":"content-text",children:t.content})})]},r))})]})};function y(s){return h({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.414 5.586c-.78-.781-2.048-.781-2.828 0l-6.415 6.414 6.415 6.414c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-3.585-3.586 3.585-3.586c.781-.781.781-2.047 0-2.828z"},child:[]}]})(s)}function k(s){return h({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.586 5.586c-.781.781-.781 2.047 0 2.828l3.585 3.586-3.585 3.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l6.415-6.414-6.415-6.414c-.78-.781-2.048-.781-2.828 0z"},child:[]}]})(s)}const A=({onClick:s})=>e.jsx("div",{className:"custom-arrow next-arrow",onClick:s,children:e.jsx(k,{})}),C=({onClick:s})=>e.jsx("div",{className:"custom-arrow prev-arrow",onClick:s,children:e.jsx(y,{})}),I=()=>{const s={autoplay:!0,autoplaySpeed:3e3,speed:800,infinite:!0,slidesToShow:3,slidesToScroll:1,nextArrow:e.jsx(A,{}),prevArrow:e.jsx(C,{}),responsive:[{breakpoint:991,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]},n=[{title:"Automotive",image:"https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Precision cutting for vehicle components and custom fabrication for body panels and frames."},{title:"Construction",image:"https://img.freepik.com/free-photo/construction-silhouette_1127-3246.jpg?ga=GA1.1.1058617071.1704534102&semt=ais_hybrid-rr-similar",description:"Accurate steel and metal cutting for structural integrity and custom metal parts for building frameworks."},{title:"Aerospace",image:"https://img.freepik.com/free-photo/aircraft-rest-hangar-lined-up-like-steel-birds_157027-3856.jpg?t=st=1728882760~exp=1728886360~hmac=ffc3222e53b9f610d1cce560491920148b267812e49497ea115a36f84d9cc3e9&w=900",description:"High-precision cutting for aircraft components and lightweight and durable material processing."},{title:"Manufacturing",image:"https://img.freepik.com/premium-photo/technician-working-outdoor-air-conditioning-unit_1297251-4366.jpg?w=740",description:"Streamlined production of metal components and custom tooling and part design."}];return e.jsxs("div",{className:"serve",children:[e.jsx("h1",{children:"Industries We Serve"}),e.jsx(w,{...s,children:n.map((i,a)=>e.jsx("div",{className:"service-slide",children:e.jsxs("div",{className:"service-card",children:[e.jsx("img",{src:i.image,alt:i.title,className:"service-image"}),e.jsxs("div",{className:"service-content",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.description})]})]})},a))})]})},M=()=>(m.useEffect(()=>{document.title="Service"},[]),e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(b,{}),e.jsx(N,{}),e.jsx(I,{}),e.jsx(g,{})]}));export{M as default};