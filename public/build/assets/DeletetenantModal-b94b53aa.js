import{j as e,y as i}from"./app-7b82f02a.js";import{B as c}from"./react-toastify.esm-e877018a.js";/* empty css                      */function u({tenantId:s,TenantName:a,onClose:t,show:l}){const n=d=>{d.preventDefault(),i.delete(`/delete/tenants/${s}`,{}),c.success("Deleted Tenant Successfully!"),t()};return e.jsx("div",{className:"modal fade",id:"modal-deletetenant",show:l,children:e.jsx("div",{className:"modal-dialog",children:e.jsxs("div",{className:"modal-content",children:[e.jsx("div",{className:"modal-header",children:e.jsx("h4",{className:"modal-title",children:"Delete Tenant"})}),e.jsxs("form",{onSubmit:n,children:[e.jsx("div",{className:"modal-body",children:e.jsx("div",{className:"mb-3",children:e.jsxs("p",{className:"text-center",children:["Are you sure you want to delete Tenant: ",e.jsx("b",{children:a})," ?"]})})}),e.jsxs("div",{className:"modal-footer justify-content-between",children:[e.jsx("button",{type:"button",className:"btn btn-default","data-dismiss":"modal",onClick:t,children:"Close"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Delete"})]})]})]})})})}export{u as default};
