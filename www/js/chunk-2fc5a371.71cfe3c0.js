(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fc5a371"],{"0a49":function(e,t,n){var r=n("9b43"),i=n("626a"),a=n("4bf8"),o=n("9def"),s=n("cd1c");e.exports=function(e,t){var n=1==e,c=2==e,l=3==e,d=4==e,u=6==e,v=5==e||u,f=t||s;return function(t,s,m){for(var h,S,p=a(t),g=i(p),w=r(s,m,3),b=o(g.length),D=0,y=n?f(t,b):c?f(t,0):void 0;b>D;D++)if((v||D in g)&&(h=g[D],S=w(h,D,p),e))if(n)y[D]=S;else if(S)switch(e){case 3:return!0;case 5:return h;case 6:return D;case 2:y.push(h)}else if(d)return!1;return u?-1:l||d?d:y}}},"20d6":function(e,t,n){"use strict";var r=n("5ca1"),i=n("0a49")(6),a="findIndex",o=!0;a in[]&&Array(1)[a](function(){o=!1}),r(r.P+r.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(a)},2864:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"node_service bg-gray",attrs:{"element-loading-text":e.$t("nodeService.nodeService0")}},[n("h3",{staticClass:"title"},[e._v(e._s(e.$t("nodeService.nodeService1")))]),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.nodeServiceLoading,expression:"nodeServiceLoading"}],staticClass:"w1200 mt_20"},[n("div",{staticClass:"top_ico"},[n("i",{staticClass:"el-icon-plus click",on:{click:e.addNodeService}})]),n("el-table",{attrs:{data:e.nodeServiceData,stripe:"",border:""}},[n("el-table-column",{attrs:{prop:"chainName",label:e.$t("nodeService.nodeService23"),align:"center"}}),n("el-table-column",{attrs:{label:e.$t("nodeService.nodeService2"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["Official"===t.row.name?n("span",[e._v(e._s(e.$t("nodeService.official")))]):n("span",[e._v(e._s(t.row.name))])]}}])}),n("el-table-column",{attrs:{prop:"urls",label:e.$t("nodeService.nodeService3"),align:"center","min-width":"180"}}),n("el-table-column",{attrs:{label:e.$t("nodeService.nodeService4"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1e5===t.row.delay?n("span",[e._v(e._s(e.$t("nodeService.nodeService17")))]):2e5===t.row.delay?n("span",[e._v(e._s(e.$t("nodeService.nodeService18")))]):3e5===t.row.delay?n("span",[n("i",{staticClass:"el-icon-loading"})]):n("span",[e._v(e._s(t.row.delay)+" ms")])]}}])}),n("el-table-column",{attrs:{prop:"state",label:e.$t("nodeService.nodeService5"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{on:{click:function(n){return e.editState(t.$index)}}},[n("i",{staticClass:"iconfont clicks",class:t.row.selection?"iconziyuan fCN":"iconduankailianjie flan"})])]}}])}),n("el-table-column",{attrs:{label:e.$t("nodeService.nodeService6"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isDelete?n("div",[n("label",{staticClass:"click tab_bn",on:{click:function(n){return e.edit(t.$index)}}},[e._v(e._s(e.$t("nodeService.nodeService7")))]),n("span",{staticClass:"tab_line"},[e._v("|")]),n("label",{staticClass:"click tab_bn",on:{click:function(n){return e.removeUrl(t.$index)}}},[e._v(e._s(e.$t("nodeService.nodeService8")))])]):e._e()]}}])})],1)],1),n("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.nodeServiceDialogLoading,expression:"nodeServiceDialogLoading"}],attrs:{title:e.$t("nodeService.nodeService9"),width:"40%",visible:e.nodeServiceDialog,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.nodeServiceDialog=t},close:function(t){return e.resetForm("nodeServiceForm")}}},[n("span",[e._v(e._s(e.$t("nodeService.nodeService10")))]),n("div",{staticClass:"bg-white"},[n("el-form",{ref:"nodeServiceForm",attrs:{model:e.nodeServiceForm,"status-icon":"",rules:e.nodeServiceRules}},[n("el-form-item",{attrs:{label:e.$t("nodeService.nodeService2"),prop:"name"}},[n("el-input",{attrs:{maxlength:"20"},model:{value:e.nodeServiceForm.name,callback:function(t){e.$set(e.nodeServiceForm,"name",e._n(t))},expression:"nodeServiceForm.name"}})],1),n("el-form-item",{attrs:{label:e.$t("nodeService.nodeService3"),prop:"urls"}},[n("el-input",{attrs:{type:"text",autocomplete:"off",maxlength:"50",placeholder:"http://192.168.1.108:18003"},on:{change:e.changeUrls},model:{value:e.nodeServiceForm.urls,callback:function(t){e.$set(e.nodeServiceForm,"urls",t)},expression:"nodeServiceForm.urls"}})],1),n("el-form-item",{staticClass:"btns tl",staticStyle:{"margin-top":"2.5rem"}},[n("el-button",{staticClass:"fl",attrs:{type:"success"},on:{click:function(t){return e.testSubmitForm("nodeServiceForm")}}},[e._v("\n            "+e._s(e.$t("nodeService.nodeService11"))+"\n          ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.testInfo.state,expression:"testInfo.state !==0"}],staticClass:"fl ml_50"},[n("i",{class:1===e.testInfo.state?"el-icon-circle-check fCN":"el-icon-circle-close fred"}),e._v(" \n            "),n("span",{directives:[{name:"show",rawName:"v-show",value:2===e.testInfo.state,expression:"testInfo.state ===2"}],staticClass:"fred font12"},[e._v(e._s(e.testInfo.result))])])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.testInfo.state,expression:"testInfo.state ===1"}]},[n("el-form-item",[n("el-checkbox",{model:{value:e.nodeServiceForm.resource,callback:function(t){e.$set(e.nodeServiceForm,"resource",t)},expression:"nodeServiceForm.resource"}},[e._v(e._s(e.$t("nodeService.nodeService12")))])],1),n("el-form-item",{staticClass:"btns tc"},[n("el-button",{on:{click:function(t){return e.resetForm("nodeServiceForm")}}},[e._v(e._s(e.$t("password.password2")))]),n("el-button",{attrs:{type:"success"},on:{click:function(t){return e.submitForm("nodeServiceForm")}}},[e._v(e._s(e.$t("password.password3")))])],1)],1),n("div",{staticClass:"cb"})],1)],1)])],1)},i=[],a=(n("7f7f"),n("c5f6"),n("20d6"),n("96cf"),n("3b8d")),o=(n("ac4d"),n("8a81"),n("ac6a"),n("bc3a")),s=n.n(o),c=n("db49"),l={data:function(){var e=this,t=function(t,n,r){if(!n)return r(new Error(e.$t("nodeService.nodeService13")));r()},n=function(t,n,r){var i=/(http|https):\/\/([\w.]+\/?)\S*/;""===n?r(new Error(e.$t("nodeService.nodeService14"))):i.exec(n)?r():r(new Error(e.$t("nodeService.nodeService15")))};return{loading:!1,urlName:c["f"]?"mainUrlData":"TestUrlData",nodeServiceData:[],nodeServiceLoading:!1,nodeServiceDialog:!1,nodeServiceDialogLoading:!1,nodeServiceForm:{name:"",urls:"",resource:!1},nodeServiceRules:{name:[{validator:t,trigger:"blur"}],urls:[{validator:n,trigger:"blur"}]},testInfo:{state:0,result:{}},editIndex:1e4}},created:function(){var e=this;this.loading=!0,setTimeout(function(){e.nodeServiceData=e.$store.getters.getUrlData},500)},mounted:function(){var e=this;setTimeout(function(){e.getDelay()},500)},methods:{editState:function(e){var t=this;if(2e5===this.nodeServiceData[e].delay||3e5===this.nodeServiceData[e].delay)this.$message({message:this.$t("nodeService.nodeService16"),type:"error",duration:1e3});else if(!this.nodeServiceData[e].selection){this.loading=!0;var n=!0,r=!1,i=void 0;try{for(var a,o=this.nodeServiceData[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.selection=!1}}catch(c){r=!0,i=c}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}this.nodeServiceData[e].selection=!0,this.$store.commit("setUrlData",this.nodeServiceData),setTimeout(function(){t.loading=!1},2e3)}},getDelay:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,n,r,i,a,o,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(t=[],n=!0,r=!1,i=void 0,e.prev=4,a=this.nodeServiceData[Symbol.iterator]();!(n=(o=a.next()).done);n=!0)s=o.value,s.delay=3e5,t.push(s);e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](4),r=!0,i=e.t0;case 12:e.prev=12,e.prev=13,n||null==a.return||a.return();case 15:if(e.prev=15,!r){e.next=18;break}throw i;case 18:return e.finish(15);case 19:return e.finish(12);case 20:this.nodeServiceData=t,this.nodeServiceLoading=!1,this.$store.commit("setUrlData",this.nodeServiceData),this.getDelays();case 24:case"end":return e.stop()}},e,this,[[4,8,12,20],[13,,15,19]])}));function t(){return e.apply(this,arguments)}return t}(),getDelays:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,n,r,i,a,o,c,l,d,u,v;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=[],n=!0,r=!1,i=void 0,e.prev=4,a=regeneratorRuntime.mark(function e(){var n,r,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=c.value,r=(new Date).valueOf(),i=0,a={jsonrpc:"2.0",method:"getChainInfo",params:[],id:Math.floor(1e3*Math.random())},e.next=6,s.a.post(n.urls,a).then(function(e){e.data.hasOwnProperty("result")?(i=(new Date).valueOf(),n.delay=i-r,n.chainId=e.data.result.chainId,n.chainName=e.data.result.chainName):(n.delay=1e5,n.selection=!1,n.state=0)}).catch(function(e){n.delay=2e5,n.selection=!1,n.state=0,console.log(e)});case 6:t.push(n);case 7:case"end":return e.stop()}},e)}),o=this.nodeServiceData[Symbol.iterator]();case 7:if(n=(c=o.next()).done){e.next=12;break}return e.delegateYield(a(),"t0",9);case 9:n=!0,e.next=7;break;case 12:e.next=18;break;case 14:e.prev=14,e.t1=e["catch"](4),r=!0,i=e.t1;case 18:e.prev=18,e.prev=19,n||null==o.return||o.return();case 21:if(e.prev=21,!r){e.next=24;break}throw i;case 24:return e.finish(21);case 25:return e.finish(18);case 26:if(this.nodeServiceData=t,this.nodeServiceLoading=!1,this.loading=!1,l=t.filter(function(e){return e.selection}),0===l.length)if(d=Math.min.apply(Math,t.map(function(e){return e.delay})),2e5!==d)for(v in u=t.map(function(e){return e.delay}).findIndex(function(e){return e===d}),t)Number(v)===u&&(t[u].selection=!0);else this.$message({message:this.$t("public.checkNetwork"),type:"error",duration:3e3});this.$store.commit("setUrlData",this.nodeServiceData);case 32:case"end":return e.stop()}},e,this,[[4,14,18,26],[19,,21,25]])}));function t(){return e.apply(this,arguments)}return t}(),getChainInfo:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={jsonrpc:"2.0",method:"getChainInfo",params:[],id:Math.floor(1e3*Math.random())},e.next=3,s.a.post(t,n).then(function(e){return e}).catch(function(e){console.log("getChainInfo:"+e)});case 3:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),testSubmitForm:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=this,this.$refs[t].validate(function(e){if(!e)return!1;n.nodeServiceDialogLoading=!0;var t={jsonrpc:"2.0",method:"getChainInfo",params:[],id:Math.floor(1e3*Math.random())};s.a.post(r.nodeServiceForm.urls,t).then(function(e){e.data.hasOwnProperty("result")?(n.testInfo.state=1,n.testInfo.result=e.data.result,n.nodeServiceDialogLoading=!1):(n.testInfo.state=2e5,n.testInfo.result=e.data,n.nodeServiceDialogLoading=!1)}).catch(function(e){console.log(n.testInfo.success),n.testInfo.state=3e5,n.testInfo.result=e,console.log("getBestBlockHeader:"+e),n.nodeServiceDialogLoading=!1})});case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),addNodeService:function(){this.nodeServiceDialog=!0,this.nodeServiceForm.name="",this.nodeServiceForm.urls=""},submitForm:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs[t].validate(function(e){if(!e)return!1;var r={name:n.nodeServiceForm.name,urls:n.nodeServiceForm.urls,delay:"",selection:!1,isDelete:!0,chainId:n.testInfo.result.chainId,assetId:n.testInfo.result.assetId,chainName:n.testInfo.result.chainName,decimals:n.testInfo.result.defaultAsset.decimals};if(n.nodeServiceForm.resource){for(var i in n.nodeServiceData)n.nodeServiceData[i].selection&&(n.nodeServiceData[i].selection=!1);r.selection=!0}1e4!==n.editIndex?(n.nodeServiceData[n.editIndex]=r,n.$store.commit("setUrlData",n.nodeServiceData)):(n.nodeServiceData.push(r),n.$store.commit("setUrlData",n.nodeServiceData)),n.getDelay(),n.nodeServiceDialog=!1,n.$refs[t].resetFields()});case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),changeUrls:function(e){console.log(e),this.testInfo.state=0,this.testInfo.result={}},resetForm:function(e){this.nodeServiceDialog=!1,this.testInfo.state=0,this.testInfo.result={},this.$refs[e].resetFields()},edit:function(e){this.editIndex=e,this.nodeServiceForm=this.nodeServiceData[e],this.nodeServiceDialog=!0},removeUrl:function(e){var t=this;this.$confirm(this.$t("nodeService.nodeService19")+this.nodeServiceData[e].urls+this.$t("nodeService.nodeService20"),this.$t("nodeService.nodeService21"),{confirmButtonText:this.$t("password.password3"),cancelButtonText:this.$t("password.password2"),type:"warning"}).then(function(){t.$message({type:"success",message:t.$t("nodeService.nodeService22")}),t.nodeServiceData.splice(e,1),t.getDelays(),t.$store.commit("setUrlData",t.nodeServiceData)}).catch(function(){})},toUrl:function(e){this.$router.push({name:e})}}},d=l,u=(n("2fed"),n("2877")),v=Object(u["a"])(d,r,i,!1,null,null,null);t["default"]=v.exports},"2fed":function(e,t,n){"use strict";var r=n("d2ac"),i=n.n(r);i.a},"7f7f":function(e,t,n){var r=n("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in i||n("9e1e")&&r(i,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},cd1c:function(e,t,n){var r=n("e853");e.exports=function(e,t){return new(r(e))(t)}},d2ac:function(e,t,n){},e853:function(e,t,n){var r=n("d3f4"),i=n("1169"),a=n("2b4c")("species");e.exports=function(e){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),r(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?Array:t}}}]);
//# sourceMappingURL=chunk-2fc5a371.71cfe3c0.js.map