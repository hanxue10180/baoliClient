webpackJsonp([1],{86:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(94),a=i(95),o=i(0),c=o(n.a,a.a,!1,null,null,null);e.default=c.exports},94:function(t,e,i){"use strict";e.a={data:function(){return{columns:[{type:"selection",width:60,align:"center"},{title:"企业名称",key:"companyName"},{title:"联系人",key:"contacts"},{title:"手机号",key:"mobileNumber"},{title:"邮箱",key:"email"},{title:"授信额度",key:"creditLine"},{title:"融资比例",key:"financingRatio"},{title:"授信期限",key:"creditLimit"}],list:[{companyName:"非常有财",contacts:"韩雪",mobileNumber:"1232333223",email:"12300@a.com",creditLine:1203210,financingRatio:"20%",creditLimit:"2018-01-01"}]}},methods:{toNewPath:function(t){this.$router.push({path:"/content/myPartners/"+t})}}}},95:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card",{staticStyle:{height:"100%"}},[i("p",{attrs:{slot:"title"},slot:"title"},[t._v("合作伙伴")]),t._v(" "),i("div",{attrs:{slot:"extra"},slot:"extra"},[i("Button",{on:{click:function(e){t.toNewPath("invitation")}}},[t._v("发起邀请")]),t._v(" "),i("Button",{on:{click:function(e){t.toNewPath("activeEnterprise")}}},[t._v("激活企业")]),t._v(" "),i("Button",{on:{click:function(e){t.toNewPath("tradeInitiation")}}},[t._v("贸易发起")])],1),t._v(" "),i("Table",{attrs:{border:"",columns:t.columns,data:t.list}})],1)},a=[],o={render:n,staticRenderFns:a};e.a=o}});