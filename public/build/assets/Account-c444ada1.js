import{r as s,j as e,y as g}from"./app-338178ea.js";import N from"./ContentWrapper-cbd23533.js";import{Q as M}from"./react-toastify.esm-dc17bc4d.js";/* empty css                      *//* empty css              */import"./lodash-93e59f5d.js";import c from"./AddaccountModal-b9030cc4.js";import v from"./EditaccountModal-362474c7.js";import C from"./DeleteaccountModal-dbd5bb17.js";import"./Sidebar-72433e02.js";import"./Navbar-0c9169e2.js";import"./ResponsiveNavLink-2663ad68.js";function W({accounts:l}){s.useRef(l.per_page),s.useState(""),s.useState(!1);const[r,i]=s.useState(!1),[m,h]=s.useState(!1),[p,n]=s.useState(!1),[t,d]=s.useState(""),x=a=>{g.visit(a)},o=()=>{i(!1)},j=a=>{d(a),h(!0)},u=a=>{d(a),n(!0)},b=()=>{n(!1),d(null)};return e.jsxs(N,{header:e.jsxs("h1",{className:"m-0",children:[e.jsx("i",{className:"nav-icon fas fa-user",style:{color:"#525252"}})," Accounts"]}),children:[e.jsx("button",{type:"button",className:"mb-2 btn btn-primary","data-toggle":"modal","data-target":"#modal-addaccount",children:"Add Room"}),e.jsx("hr",{}),e.jsx(c,{}),e.jsx(M,{}),e.jsx("div",{id:"loader"}),e.jsxs("div",{className:"mt-3 table-responsive",children:[e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:l.data.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.id}),e.jsx("td",{children:a.uname}),e.jsx("td",{children:a.email}),e.jsx("td",{children:a.status==="active"?e.jsx("span",{className:"badge badge-success",children:"Active"}):e.jsx("span",{className:"badge badge-warning text-light",children:"Inactive"})}),e.jsxs("td",{children:[e.jsx("button",{className:"btn btn-primary btn-sm me-2","data-toggle":"modal","data-target":"#modal-editaccount",onClick:()=>u(a),children:e.jsx("i",{className:"fas fa-pen"})}),e.jsx("button",{className:"btn btn-danger btn-sm","data-toggle":"modal","data-target":"#modal-deleteaccount",onClick:()=>j(a),children:e.jsx("i",{className:"fas fa-trash"})})]})]},a.id))})]}),e.jsx("div",{className:"mb-3 pagination",children:l.links.map((a,f)=>e.jsx("button",{onClick:()=>x(a.url),disabled:!a.url||a.active,className:a.active?"active":"",children:a.label},f))})]}),r&&e.jsx(c,{onClose:o}),p&&e.jsx(v,{account:t,onClose:b}),m&&e.jsx(C,{onClose:o,AccountId:t==null?void 0:t.id,AccountName:t==null?void 0:t.uname})]})}export{W as default};
