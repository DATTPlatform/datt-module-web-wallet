(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10c45bf6"],{"612c":function(e,s,t){},"7f7f":function(e,s,t){var r=t("86cc").f,n=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in n||t("9e1e")&&r(n,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},"7ffc":function(e,s,t){"use strict";var r=t("612c"),n=t.n(r);n.a},b483:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"import-address bg-gray"},[t("div",{staticClass:"bg-white"}),t("div",{},[t("el-tabs",{staticClass:"new_import w1200",on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(s){e.activeName=s},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:e.$t("importAddress.importAddress2"),name:"keystoreImport",disabled:"0"!==e.resetAddress}},[t("div",{staticClass:"tc upload_keystore"},[e.isfileReader?t("div",[e._v(e._s(e.$t("importAddress.importAddress42")))]):t("el-upload",{staticClass:"upload",attrs:{drag:"",action:"localhost",accept:".keystore","before-upload":e.handleUpload,multiple:!1,limit:1}},[t("i",{staticClass:"el-icon-upload"}),t("div",{staticClass:"el-upload__text"},[e._v(e._s(e.$t("importAddress.importAddress4"))),t("em",[e._v(e._s(e.$t("importAddress.importAddress41")))])])])],1)]),t("el-tab-pane",{attrs:{label:e.$t("importAddress.importAddress3"),name:"keyImport"}},[t("div",{staticClass:"tab w1200 mt_30"},["0"!==e.resetAddress?t("div",{staticClass:"tc font18 mzt_20"},[e._v("\n            "+e._s(e.$t("public.resetAddress"))+": "+e._s(e.resetAddress)+"\n          ")]):e._e(),t("el-form",{ref:"importForm",staticClass:"import-form w630",attrs:{model:e.importForm,rules:e.importRules,"status-icon":""}},[t("el-form-item",{attrs:{label:e.$t("importAddress.importAddress5"),prop:"keys"}},[t("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.importForm.keys,callback:function(s){e.$set(e.importForm,"keys","string"===typeof s?s.trim():s)},expression:"importForm.keys"}})],1),t("el-form-item",{attrs:{label:e.$t("newAddress.newAddress6"),prop:"pass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.importForm.pass,callback:function(s){e.$set(e.importForm,"pass",s)},expression:"importForm.pass"}})],1),t("el-form-item",{attrs:{label:e.$t("newAddress.newAddress7"),prop:"checkPass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.importForm.checkPass,callback:function(s){e.$set(e.importForm,"checkPass",s)},expression:"importForm.checkPass"}})],1),t("el-form-item",{staticClass:"form-bnt"},[t("el-button",{attrs:{type:"success"},on:{click:function(s){return e.keyImport("importForm")}}},[e._v(e._s(e.$t("importAddress.importAddress8"))+"\n              ")])],1)],1)],1)]),t("el-tab-pane",{attrs:{label:e.$t("tips.tips10"),name:"scanImport"}},[t("div",{staticClass:"scan tc"},[t("div",{staticClass:"qrcode",attrs:{id:"qrcode"}}),t("div",{staticClass:"font12",staticStyle:{margin:"20px 0 0 0"}},[e._v("\n            "+e._s(e.$t("tips.tips18"))+"\n            "),t("span",{staticClass:"click td",on:{click:function(s){return e.toUrl("http://nabox.io/",1)}}},[e._v("Nabox")]),e._v("\n            /\n            "),t("span",{staticClass:"click td",on:{click:function(s){return e.toUrl("https://www.denglu1.cn/",1)}}},[e._v(e._s(e.$t("tips.tips11")))]),e._v("\n            "+e._s(e.$t("tips.tips19"))+"\n          ")])])]),t("el-tab-pane",{attrs:{label:e.$t("importAddress.importAddress0"),name:"newAddress",disabled:"0"!==e.resetAddress}},[t("div",{staticClass:"new_address"},[t("el-form",{ref:"newAddressForm",staticClass:"w630",attrs:{model:e.newAddressForm,"status-icon":"",rules:e.newAddressRules}},[t("el-form-item",{attrs:{label:e.$t("newAddress.newAddress6"),prop:"pass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.newAddressForm.pass,callback:function(s){e.$set(e.newAddressForm,"pass",s)},expression:"newAddressForm.pass"}})],1),t("el-form-item",{attrs:{label:e.$t("newAddress.newAddress7"),prop:"checkPass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.newAddressForm.checkPass,callback:function(s){e.$set(e.newAddressForm,"checkPass",s)},expression:"newAddressForm.checkPass"}})],1),t("el-form-item",{attrs:{label:"",prop:"agreement"}},[t("el-checkbox-group",{model:{value:e.newAddressForm.agreement,callback:function(s){e.$set(e.newAddressForm,"agreement",s)},expression:"newAddressForm.agreement"}},[t("el-checkbox",{attrs:{label:e.$t("newAddress.newAddress8"),name:"agreement"}})],1)],1),t("el-form-item",{staticClass:"form-bnt"},[t("el-button",{attrs:{type:"success"},on:{click:function(s){return e.newAddressSubmitForm("newAddressForm")}}},[e._v("\n                "+e._s(e.$t("importAddress.importAddress0"))+"\n              ")])],1)],1)],1)])],1)],1),t("Password",{ref:"password",on:{passwordSubmit:e.keystoreImportPassSubmit}})],1)},n=[],a=(t("ac6a"),t("c5f6"),t("7f7f"),t("96cf"),t("3b8d")),o=t("0ad0"),i=t.n(o),d=t("d044"),c=t.n(d),l=t("6ace"),p=t("1959"),u=t("d1f0"),m={data:function(){var e=this,s=function(s,t,r){""===t?r(new Error(e.$t("importAddress.importAddress9"))):t.length<60||t.length>66?r(new Error(e.$t("importAddress.importAddress91"))):r()},t=function(s,t,r){var n=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,20}$/;""===t?r(new Error(e.$t("newAddress.newAddress22"))):n.exec(t)?(""!==e.importForm.checkPass&&e.$refs.importForm.validateField("validateCheckPass"),r()):r(new Error(e.$t("newAddress.newAddress23")))},r=function(s,t,r){""===t?r(new Error(e.$t("newAddress.newAddress24"))):t!==e.importForm.pass?r(new Error(e.$t("newAddress.newAddress25"))):r()},n=function(s,t,r){var n=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,20}$/;""===t?r(new Error(e.$t("newAddress.newAddress22"))):n.exec(t)?(""!==e.newAddressForm.checkPass&&e.$refs.newAddressForm.validateField("validateNewCheckPass"),r()):r(new Error(e.$t("newAddress.newAddress23")))},a=function(s,t,r){""===t?r(new Error(e.$t("newAddress.newAddress24"))):t!==e.newAddressForm.pass?r(new Error(e.$t("newAddress.newAddress25"))):r()},o=function(s,t,r){t?r():r(new Error(e.$t("newAddress.newAddress29")))};return{activeName:"keystoreImport",prefix:"",isfileReader:"undefined"===typeof FileReader,keystoreInfo:{},resetAddress:this.$route.query.address?this.$route.query.address:"0",importForm:{keys:"",pass:"",checkPass:""},importRules:{keys:[{validator:s,trigger:"blur"}],pass:[{validator:t,trigger:"blur"}],checkPass:[{validator:r,trigger:"blur"}]},importAddressInfo:{},importRandomString:"",newAddressForm:{pass:"",checkPass:"",agreement:!1},newAddressRules:{pass:[{validator:n,trigger:"blur"}],checkPass:[{validator:a,trigger:"blur"}],agreement:[{validator:o,trigger:"blur"}]},newAddressInfo:{},scanImportInterval:null}},components:{Password:u["a"]},created:function(){var e=this;Object(p["h"])(Object(l["f"])()).then(function(s){e.prefix=s}).catch(function(s){console.log(s),e.prefix=""}),this.activeName="0"!==this.resetAddress?"keyImport":"keystoreImport"},mounted:function(){this.ramNumber()},beforeDestroy:function(){clearInterval(this.scanImportInterval)},methods:{ramNumber:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var s,t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.importRandomString){e.next=4;break}return e.next=3,Object(l["n"])(16);case 3:this.importRandomString=e.sent;case 4:s={url:localStorage.hasOwnProperty("url")?JSON.parse(localStorage.getItem("url")).urls:"https://beta.wallet.nuls.io/api",send:this.importRandomString},console.log(this.importRandomString),t=new c.a("qrcode",{width:250,height:250,colorDark:"#000000",colorLight:"#ffffff"}),t.makeCode(JSON.stringify(s));case 8:case"end":return e.stop()}},e,this)}));function s(){return e.apply(this,arguments)}return s}(),handleClick:function(e){var s=this;"keystoreImport"===e.name?(this.importAddressInfo={},this.newAddressInfo={},this.$refs["importForm"].resetFields(),this.$refs["newAddressForm"].resetFields()):"keyImport"===e.name?(this.keystoreInfo={},this.newAddressInfo={},this.$refs["newAddressForm"].resetFields()):"scanImport"===e.name?this.scanImportInterval=setInterval(function(){s.getScanImport(s.importRandomString)},3e3):(this.keystoreInfo={},this.importAddressInfo={},this.$refs["importForm"].resetFields())},getScanImport:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(s){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$post("/","getMsg",[s]).then(function(e){if(e.hasOwnProperty("result")){var s={address:e.result.address,aesPri:"",pub:""};t.getAddressInfo(s)}}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e,this)}));function s(s){return e.apply(this,arguments)}return s}(),getAddressInfo:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(s){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$post("/","getAccountLedgerList",[s.address]).then(function(e){var r={address:s.address,aesPri:s.aesPri,pub:s.pub,remark:""};e.hasOwnProperty("result")?(r.account=e.result[0].symbol,r.chainId=e.result[0].chainId,r.assetId=e.result[0].assetId,r.type=1,r.balance=Number(Object(l["s"])(e.result[0].balance)).toFixed(3),r.locking=Number(Object(l["s"])(Object(l["c"])(e.result[0].consensusLock,e.result[0].timeLock))).toFixed(3),r.total=0!==e.result[0].totalBalance?Number(Object(l["s"])(e.result[0].totalBalance)).toFixed(3):0):(r.account=e.result.symbol,r.chainId=e.result.chainId,r.assetId=e.result.assetId,r.type=1,r.total=0,r.locking=0,r.balance=0),Object(l["p"])(r),t.toUrl("address")});case 2:case"end":return e.stop()}},e,this)}));function s(s){return e.apply(this,arguments)}return s}(),handleUpload:function(e){var s=this,t=new FileReader;t.addEventListener("load",function(){s.keystoreInfo=JSON.parse(t.result),s.keystoreInfo.pub=s.keystoreInfo.pubKey,s.keystoreInfo.aesPri=s.keystoreInfo.encryptedPrivateKey,s.$refs.password.showPassword(!0)}),t.readAsText(e,"utf-8")},keystoreImportPassSubmit:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(s){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=Object(l["q"])(this.keystoreInfo,s,this.prefix),t.success?(r=l["j"],r.address=t.address,r.aesPri=t.aesPri,r.pub=t.pub,Object(l["p"])(r),this.toUrl("address")):this.$message({message:this.$t("address.address13"),type:"error",duration:3e3});case 2:case"end":return e.stop()}},e,this)}));function s(s){return e.apply(this,arguments)}return s}(),keyImport:function(e){var s=this;this.$refs[e].validate(function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=13;break}if(r=i.a.importByKey(Object(l["f"])(),s.importForm.keys,s.importForm.pass,s.prefix),!r.hasOwnProperty("success")||r.success){e.next=5;break}return s.$message({message:r.data,type:"error",duration:3e3}),e.abrupt("return");case 5:n=l["j"],n.address=r.address,n.aesPri=r.aesPri,n.pub=r.pub,Object(l["p"])(n),s.toUrl("address"),e.next=14;break;case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}},e)}));return function(s){return e.apply(this,arguments)}}())},newAddressSubmitForm:function(e){var s=this;this.$refs[e].validate(function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}s.newAddressInfo=i.a.newAddress(Object(l["f"])(),s.newAddressForm.pass,s.prefix),r=l["j"],r.address=s.newAddressInfo.address,r.aesPri=s.newAddressInfo.aesPri,r.pub=s.newAddressInfo.pub,Object(l["p"])(r),s.$router.push({name:"backupsAddress",query:{backAddressInfo:r}}),e.next=11;break;case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}},e)}));return function(s){return e.apply(this,arguments)}}())},toUrl:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;0===s?this.$router.push({name:e}):Object(l["h"])("nuls",e)}}},f=m,w=(t("7ffc"),t("2877")),h=Object(w["a"])(f,r,n,!1,null,null,null);s["default"]=h.exports}}]);
//# sourceMappingURL=chunk-10c45bf6.3bfc110f.js.map