(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{8649:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-models",function(){return n(60255)}])},16347:function(e,t,n){"use strict";var i=n(85893),s=n(40645),a=n.n(s);n(67294),t.Z=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"fixed inset-0 bg-white/50 backdrop-filter backdrop-blur-sm z-40"})," ",(0,i.jsxs)("div",{className:"jsx-6c26e5cf3cb4035c fixed inset-0 flex items-center justify-center z-50",children:[(0,i.jsx)("div",{className:"jsx-6c26e5cf3cb4035c loader",children:(0,i.jsx)("div",{className:"jsx-6c26e5cf3cb4035c spinner"})}),(0,i.jsx)(a(),{id:"6c26e5cf3cb4035c",children:".loader.jsx-6c26e5cf3cb4035c{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.spinner.jsx-6c26e5cf3cb4035c{width:48px;height:48px;border:6px solid rgba(255,255,255,.3);border-top-color:#e53e3e;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-o-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}"})]})]})},23254:function(e,t,n){"use strict";var i=n(67294),s=n(62850);t.Z=e=>{let{switchNetwork:t,currentChainId:n,isSwitchingNetwork:a,setIsSwitchingNetwork:r}=(0,s.L)();(0,i.useEffect)(()=>{(async()=>{if(n!==e&&!a){r(!0);try{await t(e)}catch(e){console.error("Error switching network:",e)}finally{r(!1)}}})()},[n,e,a,t,r])}},60190:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});let i=[{inputs:[{internalType:"uint256",name:"newFee",type:"uint256"}],name:"changeTrainingFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"requestId",type:"uint256"}],name:"completeTrainingRequest",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"model",type:"string"},{internalType:"string",name:"dataset",type:"string"}],name:"createTrainingRequest",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"requestId",type:"uint256"},{indexed:!1,internalType:"string",name:"model",type:"string"},{indexed:!1,internalType:"string",name:"dataset",type:"string"},{indexed:!1,internalType:"uint256",name:"amountPaid",type:"uint256"}],name:"NewTrainingRequest",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"requestId",type:"uint256"}],name:"TrainingCompleted",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"newFee",type:"uint256"}],name:"TrainingFeeChanged",type:"event"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"requestId",type:"uint256"}],name:"getTrainingRequest",outputs:[{components:[{internalType:"uint256",name:"requestId",type:"uint256"},{internalType:"string",name:"model",type:"string"},{internalType:"string",name:"dataset",type:"string"},{internalType:"uint256",name:"amountPaid",type:"uint256"},{internalType:"bool",name:"isCompleted",type:"bool"}],internalType:"struct DestraAILLMTrainingPlatform.TrainingRequest",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getTrainingRequestsByUser",outputs:[{components:[{internalType:"uint256",name:"requestId",type:"uint256"},{internalType:"string",name:"model",type:"string"},{internalType:"string",name:"dataset",type:"string"},{internalType:"uint256",name:"amountPaid",type:"uint256"},{internalType:"bool",name:"isCompleted",type:"bool"}],internalType:"struct DestraAILLMTrainingPlatform.TrainingRequest[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextRequestId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"requestIdToUser",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"trainingFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"trainingRequestsByUser",outputs:[{internalType:"uint256",name:"requestId",type:"uint256"},{internalType:"string",name:"model",type:"string"},{internalType:"string",name:"dataset",type:"string"},{internalType:"uint256",name:"amountPaid",type:"uint256"},{internalType:"bool",name:"isCompleted",type:"bool"}],stateMutability:"view",type:"function"}]},60255:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var i=n(85893),s=n(67294),a=n(7583),r=n(31376),l={src:"/_next/static/media/coin-img.aa57c579.png",height:14,width:14,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEU7gPbbQlbCS5Y8hfpLd+vqQ07sR1U5e/Q8gfdMaXE9hfo6gPRKZfpxbsPPTmhsU/rjN5OtXYvsO32kR/p3a7fEQOA/if9Nc/lCe/KCVfLDQOlucdpjZe2dUt6gXKvMRp/sO7rAXob/P2OQV+3nAAAAFnRSTlP+Mi+2/fuwMPMAqrqu+v79+/Dv96+61i29igAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEVJREFUeJwFwQcCgCAMBLADgbYunEz3/x9pAqHer7sWEMdcnkWhCSaX6XNgpOO8rQWAWK/Rog2AGV4H4oBUZwWhjs2m5QeBsQNgxeU9OAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},o=n(25675),d=n.n(o),c={src:"/nomodel.090c765d.svg",height:108,width:152,blurWidth:0,blurHeight:0},u=n(83253),p=n.n(u),m=n(60190),x=n(7654),g=n(11358),y=n.n(g),f=n(39332),h=n(16347),b=n(41664),w=n.n(b),j=n(62850),C=n(23254),A=()=>{let[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(""),[u,g]=(0,s.useState)(""),[b,A]=(0,s.useState)([]),[v,T]=(0,s.useState)(""),[N,k]=(0,s.useState)(null),{walletProvider:M}=(0,x.B0)();(0,f.useRouter)();let[F,q]=(0,s.useState)(0),[L,E]=(0,s.useState)(!0),S=async e=>{try{let t=await e.getSigner(),n=new a.CH("0x55587e75E9f1ea0C3Ec58442f82C0f2d3fED9c91",m.H,t),i=await t.getAddress();T(i);let s=await n.getTrainingRequestsByUser(i);console.log({trainingRequests:s});let r=s.map((e,t)=>({name:e.model,datetime:new Date().toLocaleString(),datasetname:e.dataset,isCompleted:e.isCompleted,requestId:e.requestId}));A(r)}catch(e){console.error("Error fetching training requests:",e)}finally{E(!1)}};function R(){t(!1)}async function I(e){if(e.preventDefault(),!M||null===N)return;let t=new r.Q(M).getSigner(),i=await (await t).getAddress(),s=await (await t).signMessage("Verify ownership of request ID: ".concat(N)),a=JSON.parse(JSON.stringify({botName:n,apiKey:u,userAddress:i,requestId:N,signature:s},(e,t)=>"bigint"==typeof t?t.toString():t));try{let e=await fetch("https://llmapi.destranetwork.io/api/tg",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),t=await e.text();console.log(t),e.ok?alert("Bot setup successfully!"):alert("Error: ".concat(t))}catch(e){console.error("Error setting up bot:",e),alert("An error occurred while setting up the bot.")}finally{R()}}(0,s.useEffect)(()=>{if(M){let e=new r.Q(M);E(!0),S(e)}else console.error("WalletConnect provider not found")},[M]);let B=(F+1)*12,P=b.slice(B-12,B),{open:O}=(0,x.k_)(),{isConnected:D,address:U}=(0,x.Zc)(),{switchNetwork:_,currentChainId:z}=(0,j.L)();return(0,C.Z)(11155111),(0,s.useEffect)(()=>{M&&11155111===z&&S(new r.Q(M))},[M,z]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:" md:w-[1200px] w-[320px] items-center mx-auto",children:D?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{className:"font-semibold text-xl text-[#262626]",children:"My Trained Models"}),(0,i.jsx)("p",{className:"text-[#1D2939] mt-1 text-sm max-w-[762px]",children:"Explore and manage the models you've trained. Evaluate their performance, integrate them with telegram bot, or retrain them to improve accuracy."}),L?(0,i.jsxs)("div",{className:"flex justify-center items-center",children:[(0,i.jsx)("div",{className:"loader"})," ",(0,i.jsx)(h.Z,{})]}):(0,i.jsx)("div",{className:"grid grid-cols-1 items-center md:grid-cols-3 mx-auto gap-4 mt-6",children:P.length>0?P.map((e,n)=>(0,i.jsx)("div",{className:"bg-white rounded-[16px] p-7 shadow",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsxs)("div",{className:"flex items-center gap-1",children:[(0,i.jsx)(d(),{className:"flex-shrink-0",width:15,height:15,alt:"CoinImg",src:l}),(0,i.jsxs)("h3",{className:"text-[15px]",children:[e.name," / ",(0,i.jsx)("span",{children:e.datasetname})]})]}),(0,i.jsxs)("p",{className:"text-[#9CA3AF] mt-1 text-sm",children:["Job ID: ",e.requestId.toString()]}),(0,i.jsxs)("div",{className:"text-[#9CA3AF] mt-1 items-start text-sm flex gap-2 ",children:["Status: ",e.isCompleted?"Completed":"Pending",(0,i.jsxs)("div",{children:[!e.isCompleted&&(0,i.jsx)("button",{className:"text-blue-500 underline",children:(0,i.jsx)(w(),{href:"/training/logs/".concat(e.requestId),children:"View Logs"})})," "]})]})]}),(0,i.jsx)("div",{className:"ml-auto flex gap-4",children:(0,i.jsxs)("button",{className:"bot-badge flex items-center gap-2 border bg-[#EFF8FF] border-[#0BA5EC] text-[#0BA5EC] py-2 px-2 rounded-[12px] cursor-pointer ".concat(e.isCompleted?"":"opacity-50 cursor-not-allowed"),onClick:()=>e.isCompleted&&void(k(e.requestId),t(!0)),disabled:!e.isCompleted,children:[(0,i.jsx)("svg",{width:19,height:24,viewBox:"0 0 19 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M16.379 14.3338C17.8288 14.3338 19.004 15.5091 19.004 16.9588V18.0147C19.004 19.2907 18.447 20.503 17.4789 21.3343C15.6525 22.9021 13.0388 23.6685 9.66712 23.6685C6.29601 23.6685 3.68405 22.9025 1.86071 21.3348C0.893983 20.5037 0.337891 19.2922 0.337891 18.0173V16.9588C0.337891 15.5091 1.51314 14.3338 2.96289 14.3338H16.379ZM9.5487 0.342453L9.66747 0.334473C10.1105 0.334473 10.4766 0.663648 10.5345 1.09074L10.5425 1.20947L10.5415 2.08331L14.6255 2.08389C16.0752 2.08389 17.2505 3.25914 17.2505 4.70889V9.96428C17.2505 11.414 16.0752 12.5893 14.6255 12.5893H4.70876C3.25901 12.5893 2.08376 11.414 2.08376 9.96428V4.70889C2.08376 3.25914 3.25901 2.08389 4.70876 2.08389L8.79153 2.08331L8.79247 1.20947C8.79247 0.766489 9.1217 0.400401 9.5487 0.342453ZM7.04127 5.58389C6.2363 5.58389 5.58376 6.23644 5.58376 7.04139C5.58376 7.84635 6.2363 8.4989 7.04127 8.4989C7.84619 8.4989 8.49882 7.84635 8.49882 7.04139C8.49882 6.23644 7.84619 5.58389 7.04127 5.58389ZM12.2828 5.58389C11.4778 5.58389 10.8253 6.23644 10.8253 7.04139C10.8253 7.84635 11.4778 8.4989 12.2828 8.4989C13.0878 8.4989 13.7403 7.84635 13.7403 7.04139C13.7403 6.23644 13.0878 5.58389 12.2828 5.58389Z",fill:"#2E90FA"})}),(0,i.jsx)("span",{children:"Bot"})]})})]})},n)):(0,i.jsxs)("div",{className:"inline-flex flex-col items-center justify-center self-center gap-5",children:[(0,i.jsx)(d(),{src:c,alt:"No models available"}),(0,i.jsxs)("div",{className:"flex flex-col items-center gap-1.5 ",children:[(0,i.jsx)("h5",{children:"No Models available"}),(0,i.jsx)("h6",{children:"Start training your first model now"})]}),(0,i.jsxs)("button",{className:"bg-[#FF3838] flex py-3 px-6 justify-center items-center gap-2.5  rounded-[32px]",children:[(0,i.jsx)("div",{className:"text-[#FCFCFC] text-sm font-semibold not-italic",children:(0,i.jsx)(w(),{href:"/train-models",children:"Start training"})}),(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,i.jsx)("path",{d:"M14.4297 5.93018L20.4997 12.0002L14.4297 18.0702",stroke:"#FCFCFD",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M3.5 12H20.33",stroke:"#FCFCFD",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})}),b.length>12&&(0,i.jsx)(y(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:Math.ceil(b.length/12),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{q(e.selected)},containerClassName:"pagination",className:"flex gap-2 justify-center items-center mt-2 text-[#FF3838] text-sm font-semibold not-italic",activeClassName:"active"}),(0,i.jsxs)(p(),{isOpen:e,onRequestClose:R,contentLabel:"Add Telegram Bot",className:"Modal max-w-[300px] w-full md:max-w-[440px] rounded-3xl",overlayClassName:"Overlay",children:[(0,i.jsx)("button",{onClick:R,className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),(0,i.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Add Telegram Bot"}),(0,i.jsxs)("form",{onSubmit:I,children:[(0,i.jsxs)("label",{className:"block mb-2",children:["Bot Name",(0,i.jsx)("input",{type:"text",value:n,onChange:e=>o(e.target.value),className:"mt-1 block w-full p-2 border rounded-md",required:!0})]}),(0,i.jsxs)("label",{className:"block mb-4",children:["API Key",(0,i.jsx)("input",{type:"text",value:u,onChange:e=>g(e.target.value),className:"mt-1 block w-full p-2 border rounded-md",required:!0})]}),(0,i.jsx)("button",{type:"submit",className:"bg-[#FF3838] w-full text-white py-3 px-6 rounded-[32px] flex justify-center items-center gap-2.5 self-stretch",children:"Add"})]})]})]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"flex flex-col gap-4 items-center",children:[(0,i.jsx)("h1",{className:"text-2xl font-semibold text-center",children:"Connect your account to see your models"}),(0,i.jsx)("button",{className:"bg-[#FF3838] self-center text-white py-3 px-6 rounded-[32px] flex justify-center items-center gap-2.5  ",onClick:()=>O(),children:"Connect"})]})})})})}}},function(e){e.O(0,[253,261,888,774,179],function(){return e(e.s=8649)}),_N_E=e.O()}]);