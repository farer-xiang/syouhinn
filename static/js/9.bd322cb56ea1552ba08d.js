webpackJsonp([9],{"+eBa":function(e,t){},aRJ7:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("woOf"),a=r.n(s),o=(r("MVsr"),r("mMlH")),n={name:"addCustomer",data:function(){return{listLoading:!1,updateLoading:!1,defaultCustomer:{customerName:null,customerTel:null,other:null},customer:{},rules:{customerName:[{required:!0,message:"请输入",trigger:"blur"}],customerTel:[{required:!0,message:"请输入",trigger:"blur"}],other:[{required:!1,message:"请输入",trigger:"blur"}]}}},created:function(){this.customer=a()({},this.defaultCustomer)},methods:{handleResetAdd:function(){this.customer=a()({},this.defaultCustomer)},handleAddCustomer:function(e){var t=this;this.$refs[e].validate(function(e){e&&t.$confirm("是否要进行添加","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.updateLoading=!0,Object(o.a)(t.customer).then(function(e){t.$message({message:"添加成功",type:"success",duration:1e3}),t.handleResetAdd(),t.updateLoading=!1}).catch(function(){return t.updateLoading=!1})})})}}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[r("i",{staticClass:"el-icon-tickets"}),e._v(" "),r("span",[e._v("客户信息")]),e._v(" "),r("el-button",{staticClass:"btn-add",staticStyle:{"margin-left":"20px"},attrs:{size:"mini"},on:{click:function(t){e.handleResetAdd()}}},[e._v("重置")])],1),e._v(" "),r("div",{staticClass:"table-container"},[r("el-form",{ref:"customerInfoForm",staticStyle:{width:"70%",margin:"auto"},attrs:{model:e.customer,rules:e.rules,"label-width":"15%",size:"small"}},[r("el-form-item",{attrs:{label:"名字：",prop:"customerName"}},[r("el-input",{model:{value:e.customer.customerName,callback:function(t){e.$set(e.customer,"customerName",t)},expression:"customer.customerName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"联系方式：",prop:"customerTel"}},[r("el-input",{model:{value:e.customer.customerTel,callback:function(t){e.$set(e.customer,"customerTel",t)},expression:"customer.customerTel"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"备注：",prop:"other"}},[r("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.customer.other,callback:function(t){e.$set(e.customer,"other",t)},expression:"customer.other"}})],1),e._v(" "),r("el-form-item",{staticStyle:{"text-align":"center"}},[r("el-button",{attrs:{type:"primary",size:"medium",loading:e.updateLoading,disabled:e.updateLoading},on:{click:function(t){e.handleAddCustomer("customerInfoForm")}}},[e._v("添 加")])],1)],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")(n,u,!1,function(e){r("+eBa")},null,null);t.default=l.exports}});
//# sourceMappingURL=9.bd322cb56ea1552ba08d.js.map