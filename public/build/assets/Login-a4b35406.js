import{W as n,r as i,j as e}from"./app-338178ea.js";import{I as l}from"./TextInput-b7997328.js";function b({status:c,canResetPassword:x}){const{data:t,setData:a,post:m,processing:p,errors:r,reset:o}=n({email:"",password:"",remember:!1});i.useEffect(()=>()=>{o("password")},[]);const d=s=>{s.preventDefault(),m(route("login"))};return e.jsx("form",{onSubmit:d,className:"space-y-6",children:e.jsxs("section",{className:"flex flex-col items-center justify-center h-screen mx-5 my-2 space-y-10 md:flex-row md:space-y-0 md:space-x-16 md:mx-0 md:my-0",children:[e.jsx("div",{className:"max-w-sm md:w-1/3",children:e.jsx("img",{src:"https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp",class:"w-full",alt:"Sample image"})}),e.jsxs("div",{className:"max-w-sm md:w-1/3",children:[e.jsx("div",{className:"text-center md:text-left",children:e.jsx("label",{className:"mr-1",children:"Sign in here"})}),e.jsx("input",{id:"email",name:"email",type:"email",value:t.email,autoComplete:"email",isFocused:!0,onChange:s=>a("email",s.target.value),className:"w-full px-4 py-2 text-sm border border-gray-300 border-solid rounded",placeholder:"Email Address"}),e.jsx(l,{message:r.email,className:"mt-2"}),e.jsx("input",{id:"password",name:"password",type:"password",value:t.password,autoComplete:"current-password",onChange:s=>a("password",s.target.value),className:"w-full px-4 py-2 mt-4 text-sm border border-gray-300 border-solid rounded",placeholder:"Password"}),e.jsx(l,{message:r.password,className:"mt-2"}),e.jsxs("div",{className:"flex justify-between mt-4 text-sm font-semibold",children:[e.jsxs("label",{className:"flex cursor-pointer text-slate-500 hover:text-slate-600",children:[e.jsx("input",{className:"mr-1",type:"checkbox"}),e.jsx("span",{children:"Remember Me"})]}),e.jsx("a",{className:"text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4",href:"#",children:"Forgot Password?"})]}),e.jsx("div",{className:"text-center md:text-left",children:e.jsx("button",{className:"px-4 py-2 mt-4 mb-4 text-xs tracking-wider text-white uppercase bg-blue-600 rounded w-100 hover:bg-blue-700",type:"submit",children:"Login"})})]})]})})}export{b as default};
