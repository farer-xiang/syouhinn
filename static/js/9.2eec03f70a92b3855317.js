webpackJsonp([9],{HLwG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("woOf"),l=i.n(n),o=i("MVsr"),s={pageNum:1,pageSize:5,firm:null,stock:null,model:null},a={name:"sotckList",data:function(){return{listQuery:l()({},s),list:null,total:null,listLoading:!0,firmOptions:[],editInfo:{dialogVisible:!1,stock:{}},rules:{firm:[{required:!0,message:"请输入",trigger:"blur"}],stock:[{required:!0,message:"请输入",trigger:"blur"}],model:[{required:!0,message:"请输入",trigger:"blur"}],unit:[{required:!0,message:"请输入",trigger:"blur"}],num:[{required:!0,message:"请输入",trigger:"blur"}],price:[{required:!0,message:"请输入",trigger:"blur"}],other:[{required:!1,message:"请输入",trigger:"blur"}]}}},created:function(){this.getStockList(),this.getFirmList()},watch:{},filters:{},methods:{handleSearchList:function(){this.listQuery.pageNum=1,this.getStockList()},handleSizeChange:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getStockList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getStockList()},handleResetSearch:function(){this.listQuery=l()({},s)},getStockList:function(){var t=this;this.listLoading=!0,Object(o.c)(this.listQuery).then(function(e){t.listLoading=!1,t.list=e.data.list,t.total=e.data.total})},getTotalPrice:function(t,e){var i=t*e;return i<0&&(i=0),i},getFirmList:function(){var t=this;Object(o.b)().then(function(e){t.firmOptions=[];var i=e.data.list;console.log(i);for(var n=0;n<i.length;n++)t.firmOptions.push({label:i[n].firm,value:i[n].firm})})},handleUpdateStock:function(t,e){var i=this;this.$nextTick(function(){null!=i.$refs.stockInfoForm&&i.$refs.stockInfoForm.resetFields()}),this.editInfo.stock=l()({},e),this.editInfo.dialogVisible=!0},handleDeleteStock:function(t,e){var i=this;this.$confirm("是否要进行删除操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.a)(e.stockId).then(function(t){i.$message({message:"删除成功",type:"success",duration:1e3}),i.getStockList(),i.getFirmList()})})},handleEditStock:function(t){var e=this;this.$refs[t].validate(function(t){t&&e.$confirm("是否要进行修改","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.d)(e.editInfo.stock.stockId,e.editInfo.stock).then(function(t){e.$message({message:"修改成功",type:"success",duration:1e3}),e.editInfo.dialogVisible=!1,e.getStockList(),e.getFirmList()})})})},handleAddStock:function(){this.$router.push({path:"/stock/cStock"})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[i("div",[i("i",{staticClass:"el-icon-search"}),t._v(" "),i("span",[t._v("筛选搜索")]),t._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.handleSearchList()}}},[t._v("\n        查询结果\n      ")]),t._v(" "),i("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(e){t.handleResetSearch()}}},[t._v("\n        重置\n      ")])],1),t._v(" "),i("div",{staticStyle:{"margin-top":"25px"}},[i("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"140px"}},[i("el-form-item",{attrs:{label:"供货商："}},[i("el-select",{attrs:{placeholder:"请选择供货商",clearable:""},model:{value:t.listQuery.firm,callback:function(e){t.$set(t.listQuery,"firm",e)},expression:"listQuery.firm"}},t._l(t.firmOptions,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"货品名称："}},[i("el-input",{attrs:{placeholder:"货品名称"},model:{value:t.listQuery.stock,callback:function(e){t.$set(t.listQuery,"stock",e)},expression:"listQuery.stock"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"规格型号："}},[i("el-input",{attrs:{placeholder:"规格型号"},model:{value:t.listQuery.model,callback:function(e){t.$set(t.listQuery,"model",e)},expression:"listQuery.model"}})],1)],1)],1)]),t._v(" "),i("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[i("i",{staticClass:"el-icon-tickets"}),t._v(" "),i("span",[t._v("数据列表")]),t._v(" "),i("el-button",{staticClass:"btn-add",staticStyle:{"margin-left":"20px"},attrs:{size:"mini"},on:{click:function(e){t.handleAddStock()}}},[t._v("\n      添加\n    ")])],1),t._v(" "),i("div",{staticClass:"table-container"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"stockTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[i("el-table-column",{attrs:{label:"供货商",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.firm))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"货品名称",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.stock))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"规格型号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.model))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"单位",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.unit))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"数量",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.num))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"单价",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.price))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"总价",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.getTotalPrice(e.row.num,e.row.price)))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"备注",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.other))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){t.handleUpdateStock(e.$index,e.row)}}},[t._v("编辑\n            ")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.handleDeleteStock(e.$index,e.row)}}},[t._v("删除\n            ")])]}}])})],1)],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{layout:"total, sizes,prev, pager, next,jumper","page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":t.listQuery.pageNum,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"pageNum",e)}}})],1),t._v(" "),i("el-dialog",{attrs:{title:"编辑货品信息",visible:t.editInfo.dialogVisible,top:"10vh",width:"60%"},on:{"update:visible":function(e){t.$set(t.editInfo,"dialogVisible",e)}}},[i("el-form",{ref:"stockInfoForm",staticStyle:{width:"90%",margin:"auto"},attrs:{model:t.editInfo.stock,rules:t.rules,"label-width":"15%",size:"small"}},[i("el-form-item",{attrs:{label:"供货商：",prop:"firm"}},[i("el-input",{model:{value:t.editInfo.stock.firm,callback:function(e){t.$set(t.editInfo.stock,"firm",e)},expression:"editInfo.stock.firm"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"货品名称：",prop:"stock"}},[i("el-input",{model:{value:t.editInfo.stock.stock,callback:function(e){t.$set(t.editInfo.stock,"stock",e)},expression:"editInfo.stock.stock"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"规格型号：",prop:"model"}},[i("el-input",{model:{value:t.editInfo.stock.model,callback:function(e){t.$set(t.editInfo.stock,"model",e)},expression:"editInfo.stock.model"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"单位：",prop:"unit"}},[i("el-input",{model:{value:t.editInfo.stock.unit,callback:function(e){t.$set(t.editInfo.stock,"unit",e)},expression:"editInfo.stock.unit"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"数量：",prop:"num"}},[i("el-input-number",{model:{value:t.editInfo.stock.num,callback:function(e){t.$set(t.editInfo.stock,"num",e)},expression:"editInfo.stock.num"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"单价：",prop:"price"}},[i("el-input-number",{model:{value:t.editInfo.stock.price,callback:function(e){t.$set(t.editInfo.stock,"price",e)},expression:"editInfo.stock.price"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注：",prop:"other"}},[i("el-input",{attrs:{type:"textarea",rows:5},model:{value:t.editInfo.stock.other,callback:function(e){t.$set(t.editInfo.stock,"other",e)},expression:"editInfo.stock.other"}})],1),t._v(" "),i("el-form-item",{staticStyle:{"text-align":"center"}},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.handleEditStock("stockInfoForm")}}},[t._v("确 定")])],1)],1)],1)],1)},staticRenderFns:[]};var c=i("VU/8")(a,r,!1,function(t){i("eH8a")},null,null);e.default=c.exports},eH8a:function(t,e){}});
//# sourceMappingURL=9.2eec03f70a92b3855317.js.map