import{r as t,j as e,a as f}from"./app-7b82f02a.js";import g from"./ContentWrapper-fee6d174.js";import{Q as N}from"./react-toastify.esm-e877018a.js";/* empty css                      *//* empty css              */import"./lodash-83807276.js";import r from"./AddaccountModal-f569f55b.js";import M from"./EditaccountModal-41132938.js";import v from"./DeleteaccountModal-08da502a.js";import"./Sidebar-909f7619.js";import"./Navbar-383bdc3e.js";import"./ResponsiveNavLink-a6fa4178.js";function w({accounts:l}){t.useRef(l.per_page),t.useState(""),t.useState(!1);const[c,i]=t.useState(!1),[m,h]=t.useState(!1),[p,d]=t.useState(!1),[s,n]=t.useState(""),o=()=>{i(!1)},x=a=>{n(a),h(!0)},j=a=>{n(a),d(!0)},u=()=>{d(!1),n(null)};return e.jsxs(g,{header:e.jsxs("h1",{className:"m-0",children:[e.jsx("i",{className:"nav-icon fas fa-user",style:{color:"#525252"}})," Accounts"]}),children:[e.jsx("button",{type:"button",className:"mb-2 btn btn-primary","data-toggle":"modal","data-target":"#modal-addaccount",children:"Add Room"}),e.jsx("hr",{}),e.jsx(r,{}),e.jsx(N,{}),e.jsx("div",{id:"loader"}),e.jsxs("div",{className:"mt-3 table-responsive",children:[e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:l.data.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.id}),e.jsx("td",{children:a.uname}),e.jsx("td",{children:a.email}),e.jsx("td",{children:a.status==="active"?e.jsx("span",{className:"badge badge-success",children:"Active"}):e.jsx("span",{className:"badge badge-warning text-light",children:"Inactive"})}),e.jsxs("td",{children:[e.jsx("button",{className:"btn btn-primary btn-sm me-2","data-toggle":"modal","data-target":"#modal-editaccount",onClick:()=>j(a),children:e.jsx("i",{className:"fas fa-pen"})}),e.jsx("button",{className:"btn btn-danger btn-sm","data-toggle":"modal","data-target":"#modal-deleteaccount",onClick:()=>x(a),children:e.jsx("i",{className:"fas fa-trash"})})]})]},a.id))})]}),e.jsx("nav",{children:e.jsx("ul",{className:"pagination mb-3",children:l.links.map((a,b)=>e.jsx("li",{className:`page-item ${a.active?"active":""}`,children:e.jsx(f,{href:a.url,className:"page-link",dangerouslySetInnerHTML:{__html:a.label}})},b))})})]}),c&&e.jsx(r,{onClose:o}),p&&e.jsx(M,{account:s,onClose:u}),m&&e.jsx(v,{onClose:o,AccountId:s==null?void 0:s.id,AccountName:s==null?void 0:s.uname})]})}export{w as default};
