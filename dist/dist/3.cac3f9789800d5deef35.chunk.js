webpackJsonp([3],{293:function(e,t,n){n(792);var a=n(2)(n(510),n(846),null,null);a.options.__file="/Users/lizhigang/Documents/TD/iview-admin/src/views/tables/editable-table.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] editable-table.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},507:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(20),i=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(e,t,n,a){return t("Button",{props:{type:n.editting?"success":"primary",loading:n.saving},style:{margin:"0 5px"},on:{click:function(){if(n.editting){e.edittingStore[a].saving=!0,e.thisTableData=JSON.parse((0,i.default)(e.edittingStore));var t=e.edittingStore[a];t.editting=!1,t.saving=!1,e.thisTableData=JSON.parse((0,i.default)(e.edittingStore)),e.$emit("input",e.handleBackdata(e.thisTableData)),e.$emit("on-change",e.handleBackdata(e.thisTableData),a)}else{if(n.edittingCell)for(var l in n.edittingCell)n.edittingCell[l]=!1,e.edittingStore[a].edittingCell[l]=!1;e.edittingStore[a].editting=!0,e.thisTableData=JSON.parse((0,i.default)(e.edittingStore))}}}},n.editting?"保存":"编辑")},s=function(e,t,n,a){return t("Poptip",{props:{confirm:!0,title:"您确定要删除这条数据吗?",transfer:!0},on:{"on-ok":function(){e.thisTableData.splice(a,1),e.$emit("input",e.handleBackdata(e.thisTableData)),e.$emit("on-delete",e.handleBackdata(e.thisTableData),a)}}},[t("Button",{style:{margin:"0 5px"},props:{type:"error",placement:"top"}},"删除")])},o=function(e,t,n){return e.hoverShow?t("div",{class:{"show-edit-btn":e.hoverShow}},[t("Button",{props:{type:"text",icon:"edit"},on:{click:function(t){e.edittingStore[n.index].edittingCell[n.column.key]=!0,e.thisTableData=JSON.parse((0,i.default)(e.edittingStore))}}})]):t("Button",{props:{type:"text",icon:"edit"},on:{click:function(t){e.edittingStore[n.index].edittingCell[n.column.key]=!0,e.thisTableData=JSON.parse((0,i.default)(e.edittingStore))}}})},d=function(e,t,n){return t("Button",{props:{type:"text",icon:"checkmark"},on:{click:function(t){e.edittingStore[n.index].edittingCell[n.column.key]=!1,e.thisTableData=JSON.parse((0,i.default)(e.edittingStore)),e.$emit("input",e.handleBackdata(e.thisTableData)),e.$emit("on-cell-change",e.handleBackdata(e.thisTableData),n.index,n.column.key)}}})},r=function(e,t,n,a){return t("Input",{props:{type:"text",value:e.edittingStore[n.index][a.key]},on:{"on-change":function(t){var i=a.key;e.edittingStore[n.index][i]=t.target.value}}})};t.default={name:"canEditTable",props:{refs:String,columnsList:Array,value:Array,url:String,editIncell:{type:Boolean,default:!1},hoverShow:{type:Boolean,default:!1}},data:function(){return{columns:[],thisTableData:[],edittingStore:[]}},created:function(){this.init()},methods:{init:function(){var e=this,t=this,n=this.columnsList.filter(function(e){if(e.editable&&!0===e.editable)return e}),a=JSON.parse((0,i.default)(this.value)),c=[];c=a.map(function(t,a){var i=!1;if(e.thisTableData[a])if(e.thisTableData[a].editting)i=!0;else for(var l in e.thisTableData[a].edittingCell)!0===e.thisTableData[a].edittingCell[l]&&(i=!0);if(i)return e.thisTableData[a];e.$set(t,"editting",!1);var s={};return n.forEach(function(e){s[e.key]=!1}),e.$set(t,"edittingCell",s),t}),this.thisTableData=c,this.edittingStore=JSON.parse((0,i.default)(this.thisTableData)),this.columnsList.forEach(function(n){n.editable&&(n.render=function(a,i){var l=e.thisTableData[i.index];return l.editting?a("Input",{props:{type:"text",value:l[n.key]},on:{"on-change":function(e){var n=i.column.key;t.edittingStore[i.index][n]=e.target.value}}}):e.editIncell?a("Row",{props:{type:"flex",align:"middle",justify:"center"}},[a("Col",{props:{span:"22"}},[l.edittingCell[i.column.key]?r(e,a,i,n):a("span",l[n.key])]),a("Col",{props:{span:"2"}},[l.edittingCell[i.column.key]?d(e,a,i):o(e,a,i)])]):a("span",l[n.key])}),n.handle&&(n.render=function(t,a){var i=e.thisTableData[a.index];return 2===n.handle.length?t("div",[l(e,t,i,a.index),s(e,t,0,a.index)]):1===n.handle.length?"edit"===n.handle[0]?t("div",[l(e,t,i,a.index)]):t("div",[s(e,t,0,a.index)]):void 0})})},handleBackdata:function(e){var t=JSON.parse((0,i.default)(e));return t.forEach(function(e){delete e.editting,delete e.edittingCell,delete e.saving}),t}},watch:{value:function(e){this.init()}}}},510:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(830),l=a(i),s=n(517),o=a(s);t.default={name:"editable-table",components:{canEditTable:l.default},data:function(){return{columnsList:[],tableData:[],editInlineColumns:[],editInlineData:[],editIncellColumns:[],editIncellData:[],editInlineAndCellColumn:[],editInlineAndCellData:[],showCurrentColumns:[],showCurrentTableData:!1}},methods:{getData:function(){this.columnsList=o.default.table1Columns,this.tableData=o.default.table1Data,this.editInlineColumns=o.default.editInlineColumns,this.editInlineData=o.default.editInlineData,this.editIncellColumns=o.default.editIncellColumns,this.editIncellData=o.default.editIncellData,this.editInlineAndCellColumn=o.default.editInlineAndCellColumn,this.editInlineAndCellData=o.default.editInlineAndCellData,this.showCurrentColumns=o.default.showCurrentColumns},handleNetConnect:function(e){this.breakConnect=e},handleLowSpeed:function(e){this.lowNetSpeed=e},getCurrentData:function(){this.showCurrentTableData=!0},handleDel:function(e,t){this.$Message.success("删除了第"+(t+1)+"行数据")},handleCellChange:function(e,t,n){this.$Message.success("修改了第 "+(t+1)+" 行列名为 "+n+" 的数据")},handleChange:function(e,t){this.$Message.success("修改了第"+(t+1)+"行数据")}},created:function(){this.getData()}}},517:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.table1Columns=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",key:"work",editable:!0},{title:"操作",align:"center",width:120,key:"handle",handle:["delete"]}],i=t.table1Data=[{name:"Aresn",sex:"男",work:"前端开发"},{name:"Lison",sex:"男",work:"前端开发"},{name:"lisa",sex:"女",work:"程序员鼓励师"}],l=t.editInlineColumns=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",width:90,editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",key:"work",width:150,editable:!0},{title:"操作",align:"center",width:190,key:"handle",handle:["edit","delete"]}],s=t.editInlineData=[{name:"Aresn",sex:"男",work:"前端开发"},{name:"Lison",sex:"男",work:"前端开发"},{name:"lisa",sex:"女",work:"程序员鼓励师"}],o=t.editIncellColumns=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",width:120,editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",width:160,key:"work",editable:!0},{title:"操作",align:"center",width:120,key:"handle",handle:["delete"]}],d=t.editIncellData=[{name:"Aresn",sex:"男",work:"前端开发"},{name:"Lison",sex:"男",work:"前端开发"},{name:"lisa",sex:"女",work:"程序员鼓励师"}],r=t.editInlineAndCellColumn=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",width:300,editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",width:300,key:"work",editable:!0},{title:"操作",align:"center",width:200,key:"handle",handle:["edit","delete"]}],c=t.editInlineAndCellData=[{name:"Aresn",sex:"男",work:"前端开发"},{name:"Lison",sex:"男",work:"前端开发"},{name:"lisa",sex:"女",work:"程序员鼓励师"}],u=t.showCurrentColumns=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",width:300,editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",width:300,key:"work",editable:!0}],h={table1Columns:a,table1Data:i,editInlineColumns:l,editInlineData:s,editIncellColumns:o,editIncellData:d,editInlineAndCellColumn:r,editInlineAndCellData:c,showCurrentColumns:u};t.default=h},785:function(e,t){},792:function(e,t){},830:function(e,t,n){n(785);var a=n(2)(n(507),n(837),null,null);a.options.__file="/Users/lizhigang/Documents/TD/iview-admin/src/views/tables/components/canEditTable.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] canEditTable.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},837:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Table",{ref:e.refs,attrs:{columns:e.columnsList,data:e.thisTableData,border:"","disabled-hover":""}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},846:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Row",[n("Col",{attrs:{span:"6"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"load-b"}}),e._v("\n                    简单说明\n                ")],1),e._v(" "),n("div",{staticClass:"edittable-test-con"},[e._v("\n                    可编辑单元格可配置可编辑的列，可设置编辑整行的可编辑单元格，也可配置单个编辑可编辑单元格，也可两种形式同时可用。可配置单元格内编辑的图标显示方式。\n                ")])])],1),e._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"18"}},[n("Card",[n("div",{staticClass:"edittable-con-1"},[n("can-edit-table",{attrs:{refs:"table1","columns-list":e.columnsList},on:{"on-delete":e.handleDel},model:{value:e.tableData,callback:function(t){e.tableData=t},expression:"tableData"}})],1)])],1)],1),e._v(" "),n("Row",{staticClass:"margin-top-10"},[n("Col",{attrs:{span:"12"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"android-remove"}}),e._v("\n                    可编辑单元行\n                ")],1),e._v(" "),n("div",{staticClass:"edittable-table-height-con"},[n("can-edit-table",{attrs:{refs:"table2","columns-list":e.editInlineColumns},model:{value:e.editInlineData,callback:function(t){e.editInlineData=t},expression:"editInlineData"}})],1)])],1),e._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"12"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"android-more-horizontal"}}),e._v("\n                    可编辑单元格(鼠标移入显示编辑单元格按钮)\n                ")],1),e._v(" "),n("div",{staticClass:"edittable-table-height-con"},[n("can-edit-table",{attrs:{refs:"table3","hover-show":!0,"edit-incell":!0,"columns-list":e.editIncellColumns},model:{value:e.editIncellData,callback:function(t){e.editIncellData=t},expression:"editIncellData"}})],1)])],1)],1),e._v(" "),n("Row",{staticClass:"margin-top-10"},[n("Col",{attrs:{span:"24"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-keypad"}}),e._v("\n                     单元行和单元格两种方式编辑(始终显示编辑单元格按钮)\n                ")],1),e._v(" "),n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{span:"2"}},[n("Row",{staticClass:"edittable-table-get-currentdata-con",attrs:{type:"flex",justify:"center",align:"middle"}},[n("Button",{attrs:{type:"primary"},on:{click:e.getCurrentData}},[e._v("当前数据")])],1)],1),e._v(" "),n("Col",{attrs:{span:"22"}},[n("div",{staticClass:"edittable-table-height-con"},[n("can-edit-table",{attrs:{refs:"table4",editIncell:!0,"columns-list":e.editInlineAndCellColumn},on:{"on-cell-change":e.handleCellChange,"on-change":e.handleChange},model:{value:e.editInlineAndCellData,callback:function(t){e.editInlineAndCellData=t},expression:"editInlineAndCellData"}})],1)]),e._v(" "),n("Modal",{attrs:{width:900},model:{value:e.showCurrentTableData,callback:function(t){e.showCurrentTableData=t},expression:"showCurrentTableData"}},[n("can-edit-table",{attrs:{refs:"table5","columns-list":e.showCurrentColumns},model:{value:e.editInlineAndCellData,callback:function(t){e.editInlineAndCellData=t},expression:"editInlineAndCellData"}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});