"use strict";(self.webpackChunkFinancePlanner=self.webpackChunkFinancePlanner||[]).push([[763],{6717:function(e,n,t){t.d(n,{Z:function(){return c}});var a="Section_vectorImg__zw3S9",s=t(184),c=function(e){var n=e.children;return(0,s.jsx)("section",{className:a,children:n})}},9899:function(e,n,t){t.d(n,{d:function(){return r}});var a=t(1413),s=t(7978),c=t(3145),o=t(4958),i=t(184),l=s.c.Option,r=function(e){return(0,i.jsxs)(l,(0,a.Z)((0,a.Z)({},e),{},{children:[(0,i.jsx)(c.Z,{name:e.data.value,width:18,height:18,secondaryClassName:o.Z.categoryIcon}),e.data.label]}))}},6763:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var a=t(3409),s=t(2791),c=t(9434),o=t(9104),i=t(4289),l=t(1413),r=t(9439),d=t(5705),m=t(8007),u="TransactionDataList_form__PQet4",x="TransactionDataList_lable__tgMqy",_="TransactionDataList_input__UYAuz",p="TransactionDataList_inputTitle__ZMOet",h="TransactionDataList_inputWrapper__NCwBF",j="TransactionDataList_errorSpan__qwVwx",f=t(184),v=function(e){var n=e.name,t=e.title,a=e.placeholder,s=e.disabled;return(0,f.jsxs)("label",{htmlFor:n,className:x,children:[(0,f.jsx)("p",{className:p,children:t}),(0,f.jsx)(d.gN,{className:_,type:"text",name:n,placeholder:a,disabled:s})]})},b="ExpensesLimits_expenses__aXlAh",N="ExpensesLimits_expensesWrapper__pVgmK",y="ExpensesLimits_list__P7L9Z",g="ExpensesLimits_item__z3Vxk",C="ExpensesLimits_sum__2nfRD",Z="ExpensesLimits_text__5Gmts",I="ExpensesLimits_buttonWrapper__Wr4Em",A="ExpensesLimits_buttonReady__uKK-W",M="ExpensesLimits_btnModal__Ev4l8",L=t(8811),E=function(e){var n=e.openModal,t=(0,c.v9)(L.AD),a=t.dailyLimit,s=t.monthLimit,o=t.totalByDay,i=t.totalByMounth,l=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};return(0,f.jsx)("div",{className:b,children:(0,f.jsxs)("div",{className:N,children:[(0,f.jsxs)("ul",{className:y,children:[(0,f.jsxs)("li",{className:g,children:[(0,f.jsxs)("p",{className:C,children:[l(Math.round(a-o))," \u20b4"]}),(0,f.jsx)("p",{className:Z,children:"Daily limit"})]}),(0,f.jsxs)("li",{className:g,children:[(0,f.jsxs)("p",{className:C,children:[l(Math.round(s-i))," \u20b4"]}),(0,f.jsx)("p",{className:Z,children:"Monthly limit"})]})]}),(0,f.jsxs)("div",{className:I,children:[(0,f.jsx)("button",{className:A,type:"submit",children:"Ready"}),(0,f.jsx)("button",{className:M,type:"button",onClick:n,children:"Add income"})]})]})})},w=t(3145),S=t(4958),D=t(4164),k=document.querySelector("#modal-root"),T=function(e){var n=e.closeModal,t=e.text,a=(0,c.I0)(),i=(0,s.useCallback)((function(e){"Escape"===e.code&&n()}),[n]);return(0,s.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[i]),(0,D.createPortal)((0,f.jsx)("div",{className:S.Z.overlayAddIncome,onClick:function(e){e.target===e.currentTarget&&n()},children:(0,f.jsxs)("div",{className:S.Z.modalWrapper,children:[(0,f.jsx)(d.J9,{onSubmit:function(e,t){a((0,o.U$)({sum:e.sum,type:"income"})),t.resetForm(),n()},initialValues:{sum:""},children:(0,f.jsxs)(d.l0,{className:S.Z.modalAddIncome,children:[(0,f.jsx)(d.gN,{className:S.Z.modalInput,type:"text",name:"sum",placeholder:t}),(0,f.jsxs)("div",{className:S.Z.btnContainer,children:[(0,f.jsx)("button",{className:S.Z.btnAdd,type:"submit",children:"Add"}),(0,f.jsx)("button",{className:S.Z.btnClose,type:"button",onClick:n,children:"Cancel"})]})]})}),(0,f.jsx)("button",{className:S.Z.btnSvg,onClick:n,children:(0,f.jsx)(w.Z,{name:"icon-close",width:24,height:24,secondaryClassName:S.Z.iconClose})})]})}),k)},P=t(8630),F=t(9899),W=function(e){var n=e.transformCategory,t=e.onChange,a=e.value;return(0,f.jsxs)("label",{className:"labelForSelector",children:[(0,f.jsx)("p",{className:"labelText",children:"Per category"}),(0,f.jsx)(P.ZP,{onChange:t,value:a,isSearchable:!1,placeholder:"Choose category",className:"select-container",classNamePrefix:"select",options:n,name:"category",components:{Option:F.d}})]})},B=t(6061),q={comment:"",sum:"",category:""},V=m.object().shape({comment:m.string().max(80),sum:m.number().positive("enter only a positive number").required("This field is required"),category:m.string()}),O=function(){var e,n=(0,s.useState)("other"),t=(0,r.Z)(n,2),a=t[0],m=t[1],x=(0,s.useState)(!1),_=(0,r.Z)(x,2),p=_[0],b=_[1],N=(0,c.v9)(L.nS),y=(0,c.v9)(L.Dw),g=(0,c.v9)(i.d5),C=(0,c.I0)(),Z=y.map((function(e){return{value:e.name,label:e.title}}));return(0,f.jsxs)("div",{children:[N&&(0,f.jsx)(B.Z,{}),(0,f.jsx)(d.J9,{onSubmit:function(e,n){C((0,o.U$)((0,l.Z)((0,l.Z)({},e),{},{comment:e.comment?e.comment:"no comment",sum:Number(e.sum),category:a,type:"expense"}))),n.resetForm()},validationSchema:V,initialValues:q,children:(0,f.jsxs)(d.l0,{autoComplete:"off",children:[(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("div",{className:h,children:(0,f.jsx)(v,{name:"balance",title:"From account",placeholder:"Account balance: \u20b4 ".concat((e=Math.round(g),e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))," "),disabled:!0})}),(0,f.jsx)("div",{className:h,children:(0,f.jsx)(W,{onChange:function(e){m(e.value)},value:a?Z.find((function(e){return e.value===a})):"",transformCategory:Z})}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)(v,{name:"comment",title:"Expense comment",placeholder:"Enter comment"}),(0,f.jsx)(d.Bc,{name:"comment",children:function(e){return(0,f.jsx)("span",{className:j,children:e})}})]}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)(v,{name:"sum",title:"Sum",placeholder:"00.00"}),(0,f.jsx)(d.Bc,{name:"sum",children:function(e){return(0,f.jsx)("span",{className:j,children:e})}})]})]}),(0,f.jsx)(E,{openModal:function(){b(!0)}})]})}),p&&(0,f.jsx)(T,{text:"Enter income",closeModal:function(){return b(!1)}})]})},U=t(6717),K=function(){var e=(0,c.I0)(),n=(0,c.v9)(i._);return(0,s.useEffect)((function(){n&&e((0,o.n3)()),n&&e((0,o.tq)())}),[e,n]),(0,f.jsx)(U.Z,{children:(0,f.jsx)(a.Z,{children:(0,f.jsx)(O,{})})})}},8811:function(e,n,t){t.d(n,{AD:function(){return a},Dw:function(){return s},nS:function(){return c}});var a=function(e){return e.expenses.presaving},s=function(e){return e.expenses.category},c=function(e){return e.expenses.isLoading}},4958:function(e,n){n.Z={overlayAddIncome:"MoadlAddIncome_overlayAddIncome__1P5D8",modalWrapper:"MoadlAddIncome_modalWrapper__TwlUa",modalAddIncome:"MoadlAddIncome_modalAddIncome__Od7vw",modalInput:"MoadlAddIncome_modalInput__ZH85Z",btnContainer:"MoadlAddIncome_btnContainer__ELtRK",btnAdd:"MoadlAddIncome_btnAdd__dTtCU",btnClose:"MoadlAddIncome_btnClose__nIubc",btnSvg:"MoadlAddIncome_btnSvg__Q6jjo",iconClose:"MoadlAddIncome_iconClose__owHnM",categoryIcon:"MoadlAddIncome_categoryIcon__C4OJV"}}}]);
//# sourceMappingURL=763.e07285f6.chunk.js.map