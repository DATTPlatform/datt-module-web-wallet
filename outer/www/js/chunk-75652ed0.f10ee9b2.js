(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75652ed0"],{"20d6":function(s,e,t){"use strict";var r=t("5ca1"),a=t("0a49")(6),n="findIndex",i=!0;n in[]&&Array(1)[n](function(){i=!1}),r(r.P+r.F*i,"Array",{findIndex:function(s){return a(this,s,arguments.length>1?arguments[1]:void 0)}}),t("9c6c")(n)},"675f":function(s,e,t){"use strict";var r=t("9823"),a=t.n(r);a.a},9823:function(s,e,t){},fe38:function(s,e,t){"use strict";t.r(e);var r=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"address bg-gray"},[t("h3",{staticClass:"title"},[s._v(s._s(s.$t("address.address0")))]),t("div",{staticClass:"w1200 mt_20"},[t("div",{staticClass:"top_ico"},[t("i",{staticClass:"el-icon-plus click",on:{click:function(e){return s.toUrl("newAddress")}}})]),t("el-table",{attrs:{data:s.addressList,stripe:"",border:""}},[t("el-table-column",{attrs:{prop:"address",label:s.$t("address.address1"),align:"center","min-width":"335"}}),t("el-table-column",{attrs:{label:s.$t("tab.tab2"),align:"center",width:"150"},scopedSlots:s._u([{key:"default",fn:function(e){return[t("span",[s._v(s._s(e.row.total))])]}}])}),t("el-table-column",{attrs:{prop:"balance",label:s.$t("consensus.consensus2"),align:"center",width:"150"}}),t("el-table-column",{attrs:{label:s.$t("address.address3"),align:"center"},scopedSlots:s._u([{key:"default",fn:function(e){return[t("span",{directives:[{name:"show",rawName:"v-show",value:e.row.alias,expression:"scope.row.alias"}]},[s._v(s._s(e.row.alias))]),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.row.alias,expression:"!scope.row.alias"}],on:{click:function(t){return s.addAlias(e.row)}}},[t("i",{staticClass:"el-icon-edit-outline click"})])]}}])}),t("el-table-column",{attrs:{label:s.$t("address.address4"),align:"center"},scopedSlots:s._u([{key:"default",fn:function(e){return[t("span",{directives:[{name:"show",rawName:"v-show",value:""!==e.row.remark,expression:"scope.row.remark !=='' "}],staticClass:"click",on:{click:function(t){return s.editRemark(e.row)}}},[s._v(s._s(e.row.remark))]),t("span",{directives:[{name:"show",rawName:"v-show",value:""===e.row.remark,expression:"scope.row.remark ==='' "}],on:{click:function(t){return s.editRemark(e.row)}}},[t("i",{staticClass:"el-icon-edit-outline click"})])]}}])}),t("el-table-column",{attrs:{label:s.$t("address.address5"),align:"center",width:"370"},scopedSlots:s._u([{key:"default",fn:function(e){return[""===e.row.aesPri?t("el-link",{staticClass:"click tab_bn",attrs:{disabled:""}},[s._v(s._s(s.$t("address.address6")))]):t("label",{staticClass:"click tab_bn",on:{click:function(t){return s.editPassword(e.row)}}},[s._v(s._s(s.$t("address.address6")))]),t("span",{staticClass:"tab_line"},[s._v("|")]),""===e.row.aesPri?t("el-link",{staticClass:"click tab_bn",attrs:{disabled:""}},[s._v(s._s(s.$t("address.address7")))]):t("label",{staticClass:"click tab_bn",on:{click:function(t){return s.backAddress(e.row)}}},[s._v(s._s(s.$t("address.address7")))]),t("span",{staticClass:"tab_line"},[s._v("|")]),t("label",{staticClass:"click tab_bn",on:{click:function(t){return s.deleteAddress(e.row)}}},[s._v(s._s(s.$t("address.address8")))]),t("span",{staticClass:"tab_line"},[s._v("|")]),e.row.selection?t("el-link",{attrs:{disabled:""}},[s._v(s._s(s.$t("public.into")))]):t("label",{staticClass:"click tab_bn",on:{click:function(t){return s.selectionAddress(e.row)}}},[s._v(s._s(s.$t("public.into")))])]}}])})],1),t("div",{staticClass:"pages"},[t("div",{staticClass:"page-total"},[s._v(s._s(s.$t("public.total"))+" "+s._s(s.addressList.length))])])],1),t("el-dialog",{attrs:{title:"Remarks",width:"30rem",visible:s.remarkDialog,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){s.remarkDialog=e}}},[t("div",{staticClass:"address-remark bg-white"},[t("el-input",{attrs:{placeholder:s.$t("address.address9")},model:{value:s.remarkInfo,callback:function(e){s.remarkInfo="string"===typeof e?e.trim():e},expression:"remarkInfo"}}),t("div",{staticClass:"btn-next"},[t("el-button",{on:{click:function(e){s.remarkDialog=!1}}},[s._v(s._s(s.$t("address.address10")))]),t("el-button",{attrs:{type:"success"},on:{click:s.addRemark}},[s._v(s._s(s.$t("address.address11")))])],1)],1)]),t("Password",{ref:"password",on:{passwordSubmit:s.passSubmit}})],1)},a=[],n=(t("20d6"),t("ac4d"),t("8a81"),t("ac6a"),t("96cf"),t("3b8d")),i=(t("6b54"),t("c5f6"),t("0ad0")),d=t.n(i),o=t("d1f0"),c=t("6ace"),l=t("1959"),u={data:function(){return{addressList:[],selectAddressInfo:"",remarkDialog:!1,remarkInfo:"",prefix:""}},components:{Password:o["a"]},created:function(){var s=this;Object(l["h"])(Object(c["f"])()).then(function(e){s.prefix=e}).catch(function(e){console.log(e),s.prefix=""})},mounted:function(){var s=this;setTimeout(function(){s.getAddressList(),s.getAddressLists(s.addressList)},600)},methods:{getAddressList:function(){for(var s in this.addressList=Object(c["e"])(0),this.addressList)this.addressList[s].total=Number(Object(c["c"])(Number(this.addressList[s].balance),Number(this.addressList[s].consensusLock))),"NaN"===this.addressList[s].total.toString()&&(this.addressList[s].total=0);0===this.addressList.length&&this.$router.push({name:"newAddress",query:{address:""}})},getAddressInfoByNode:function(){var s=Object(n["a"])(regeneratorRuntime.mark(function s(e){var t=this;return regeneratorRuntime.wrap(function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,this.$post("/","getAccount",[e.address]).then(function(s){if(s.hasOwnProperty("result")){var r=!0,a=!1,n=void 0;try{for(var i,o=t.addressList[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value;l.address===e.address&&(e.alias=s.result.alias,e.balance=Object(c["s"])(s.result.balance),e.consensusLock=Object(c["s"])(s.result.consensusLock),e.totalReward=Object(c["s"])(s.result.totalReward),e.tokens=[],e.chainId=d.a.verifyAddress(l.address).chainId)}}catch(u){a=!0,n=u}finally{try{r||null==o.return||o.return()}finally{if(a)throw n}}localStorage.setItem(Object(c["g"])(),JSON.stringify(t.addressList))}}).catch(function(s){console.log("getAccount:"+s)});case 2:case"end":return s.stop()}},s,this)}));function e(e){return s.apply(this,arguments)}return e}(),getAddressLists:function(s){var e=this,t=!0,r=!1,a=void 0;try{for(var n,i=function(){var s=n.value;setTimeout(function(){e.getAddressInfoByNode(s)},500)},d=s[Symbol.iterator]();!(t=(n=d.next()).done);t=!0)i()}catch(o){r=!0,a=o}finally{try{t||null==d.return||d.return()}finally{if(r)throw a}}},addAlias:function(s){0===s.balance?this.$message({message:this.$t("address.address12"),type:"error",duration:1e3}):this.toUrl("setAlias",s.address)},editPassword:function(s){this.toUrl("editPassword",s.address)},backAddress:function(s){this.selectAddressInfo=s,this.$router.push({name:"backupsAddress",query:{backAddressInfo:s}})},deleteAddress:function(s){var e=this;if(!s.aesPri){var t=Object(c["e"])(0);return t.splice(t.findIndex(function(e){return e.address===s.address}),1),this.selectAddressInfo.selection&&0!==t.length&&(t[0].selection=!0),localStorage.setItem(Object(c["g"])(),JSON.stringify(t)),void this.getAddressList()}this.$confirm(this.$t("tab.tab29"),this.$t("tab.tab32"),{confirmButtonText:this.$t("tab.tab30"),cancelButtonText:this.$t("nodeService.nodeService8"),type:"warning",showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,center:!0}).then(function(){e.backAddress(s)}).catch(function(){e.selectAddressInfo=s,e.$refs.password.showPassword(!0)})},selectionAddress:function(s){var e=!0,t=!1,r=void 0;try{for(var a,n=this.addressList[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var i=a.value;i.selection&&(i.selection=!1),i.address===s.address&&(i.selection=!0)}}catch(d){t=!0,r=d}finally{try{e||null==n.return||n.return()}finally{if(t)throw r}}localStorage.setItem(Object(c["g"])(),JSON.stringify(this.addressList)),this.$router.push({name:"home"})},passSubmit:function(s){var e=this,t=Object(c["e"])(0),r=d.a.decrypteOfAES(this.selectAddressInfo.aesPri,s),a=d.a.importByKey(this.selectAddressInfo.chainId,r,s,this.prefix);this.selectAddressInfo.address===a.address?(t.splice(t.findIndex(function(s){return s.address===e.selectAddressInfo.address}),1),this.selectAddressInfo.selection&&0!==t.length&&(t[0].selection=!0),localStorage.setItem(Object(c["g"])(),JSON.stringify(t)),this.getAddressList()):this.$message({message:this.$t("address.address13"),type:"error",duration:1e3})},editRemark:function(s){this.selectAddressInfo=s,this.remarkInfo=this.selectAddressInfo.remark,this.remarkDialog=!0},addRemark:function(){var s=Object(c["e"])(0),e=!0,t=!1,r=void 0;try{for(var a,n=s[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var i=a.value;i.address===this.selectAddressInfo.address&&(this.selectAddressInfo.remark=this.remarkInfo,i.remark=this.remarkInfo)}}catch(d){t=!0,r=d}finally{try{e||null==n.return||n.return()}finally{if(t)throw r}}localStorage.setItem(Object(c["g"])(),JSON.stringify(s)),this.remarkDialog=!1,this.selectAddressInfo=""},toUrl:function(s,e){this.$router.push({name:s,query:{address:e}})}}},f=u,h=(t("675f"),t("2877")),b=Object(h["a"])(f,r,a,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-75652ed0.f10ee9b2.js.map