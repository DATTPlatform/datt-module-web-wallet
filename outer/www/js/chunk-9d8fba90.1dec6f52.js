(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d8fba90"],{"21a6":function(t,e,s){(function(s){var n,a,i;(function(s,o){a=[],n=o,i="function"===typeof n?n.apply(e,a):n,void 0===i||(t.exports=i)})(0,function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,s){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){r(n.response,e,s)},n.onerror=function(){console.error("could not download file")},n.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof s&&s.global===s?s:void 0,r=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(t,e,s){var r=o.URL||o.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?i(c):a(c.href)?n(t,e,s):i(c,c.target="_blank")):(c.href=r.createObjectURL(t),setTimeout(function(){r.revokeObjectURL(c.href)},4e4),setTimeout(function(){i(c)},0))}:"msSaveOrOpenBlob"in navigator?function(t,s,o){if(s=s||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,o),s);else if(a(t))n(t,s,o);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout(function(){i(r)})}}:function(t,e,s,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,s);var i="application/octet-stream"===t.type,r=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&r)&&"object"==typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},d.readAsDataURL(t)}else{var l=o.URL||o.webkitURL,u=l.createObjectURL(t);a?a.location=u:location.href=u,a=null,setTimeout(function(){l.revokeObjectURL(u)},4e4)}});o.saveAs=r.saveAs=r,t.exports=r})}).call(this,s("c8ba"))},"2e64":function(t,e,s){"use strict";var n=s("ff03"),a=s.n(n);a.a},b301:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"back",attrs:{backUrl:t.backUrl}},[s("span",{staticClass:"back-box",on:{click:t.back}},[s("i",{staticClass:"el-icon-arrow-left"}),s("span",[t._v(t._s(t.backTitle))])])])},a=[],i={props:{backTitle:{type:String,default:""},backUrl:{type:String,default:"1"},backParams:{type:String,default:""}},methods:{back:function(){"1"===this.backUrl?this.$router.go(-1):this.$router.push({name:this.backUrl})}}},o=i,r=(s("2e64"),s("2877")),c=Object(r["a"])(o,n,a,!1,null,null,null);e["a"]=c.exports},c26c:function(t,e,s){},c742:function(t,e,s){"use strict";var n=s("c26c"),a=s.n(n);a.a},ec22:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"new_address bg-gray"},[s("div",{staticClass:"bg-white"},[s("div",{staticClass:"w1200"},[s("BackBar",{attrs:{backTitle:t.$t("address.address0")}}),s("h3",{staticClass:"title"},[s("font",[t._v(t._s(t.$t("newAddress.newAddress1"))+" ")]),s("font",[t._v(":"+t._s(t.newAddressInfo.address)+"\n          "),s("i",{staticClass:"iconfont iconfuzhi clicks",on:{click:function(e){return t.copy(t.newAddressInfo.address)}}})])],1)],1)]),s("div",{staticClass:"new w1200 mt_20 bg-white"},[s("div",{staticClass:"step_tow w630"},[s("div",{staticClass:"tip bg-gray"},[t.RUN_PATTERN?s("p",{staticClass:"tc"},[t._v(t._s(t.$t("newAddress.newAddress13")))]):s("p",{staticClass:"tc"},[t._v(t._s(t.$t("newAddress.newAddress131")))])]),s("div",{staticClass:"btn mb_20"},[s("el-button",{attrs:{type:"success"},on:{click:t.backKeystore}},[t._v(t._s(t.$t("newAddress.newAddress16")))]),s("el-button",{attrs:{type:"success"},on:{click:t.backScan}},[t._v(t._s(t.$t("tips.tips8")))]),s("el-button",{attrs:{type:"success"},on:{click:t.backKey}},[t._v(t._s(t.$t("newAddress.newAddress17")))]),s("el-button",{on:{click:function(e){return t.toUrl("home")}}},[t._v(t._s(t.$t("tab.tab24")))])],1)])]),s("Password",{ref:"password",on:{passwordSubmit:t.passSubmit}}),s("el-dialog",{attrs:{title:t.$t("newAddress.newAddress19"),width:"40%",visible:t.keyDialog,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.keyDialog=e}}},[s("span",[t._v(t._s(t.$t("newAddress.newAddress20")))]),s("p",{staticClass:"bg-white"},[t._v("\n      "+t._s(t.newAddressInfo.pri)+"\n    ")]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"success"},on:{click:function(e){return t.copy(t.newAddressInfo.pri)}}},[t._v(t._s(t.$t("newAddress.newAddress21")))])],1)]),s("el-dialog",{staticClass:"scan_dialog",attrs:{title:t.$t("tips.tips9"),visible:t.scanDialog,width:"300px",center:""},on:{"update:visible":function(e){t.scanDialog=e},close:t.scanDialogClose}},[s("div",[s("div",{staticClass:"qrcode",attrs:{id:"qrcode"}}),s("div",{staticClass:"font12 tc",staticStyle:{margin:"20px 0 0 0"}},[t._v("\n        "+t._s(t.$t("tips.tips18"))+"\n        "),s("font",{staticClass:"click td",on:{click:function(e){return t.toUrl("http://nabox.io/",1)}}},[t._v("Nabox")]),t._v("\n        /\n        "),s("font",{staticClass:"click td",on:{click:function(e){return t.toUrl("https://www.denglu1.cn/",1)}}},[t._v(t._s(t.$t("tips.tips11")))]),t._v("\n        "+t._s(t.$t("tips.tips20"))+"\n      ")],1)])])],1)},a=[],i=(s("96cf"),s("3b8d")),o=s("d044"),r=s.n(o),c=s("d1f0"),d=s("b301"),l=s("6ace"),u=s("db49"),f=s("1959"),p={data:function(){return{prefix:"",newAddressInfo:{},keyDialog:!1,backType:0,RUN_PATTERN:u["g"],scanDialog:!1}},created:function(){var t=this;Object(f["h"])(Object(l["f"])()).then(function(e){t.prefix=e}).catch(function(e){console.log(e),t.prefix=""}),this.newAddressInfo=this.$route.query.backAddressInfo},mounted:function(){},components:{Password:c["a"],BackBar:d["a"]},methods:{backKeystore:function(){this.backType=0,this.$refs.password.showPassword(!0)},backScan:function(){var t=this;this.$confirm(this.$t("tips.tips5"),this.$t("tab.tab32"),{confirmButtonText:this.$t("tips.tips6"),cancelButtonText:this.$t("tips.tips7"),type:"warning"}).then(function(){t.backType=2,t.$refs.password.showPassword(!0)}).catch(function(){})},backKey:function(){this.backType=1,this.$refs.password.showPassword(!0)},passSubmit:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n,a,i,o,r,c=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["q"])(this.newAddressInfo,e,this.prefix);case 2:if(n=t.sent,n.success){t.next=6;break}return this.$message({message:this.$t("address.address13"),type:"error",duration:3e3}),t.abrupt("return");case 6:0===this.backType?(a=s("21a6"),i={address:n.address,encryptedPrivateKey:n.aesPri,pubKey:n.pub,priKey:null},o=new Blob([JSON.stringify(i)],{type:"text/plain;charset=utf-8"}),a.saveAs(o,n.address+".keystore")):1===this.backType?(this.newAddressInfo.pri=n.pri,this.keyDialog=!0):(this.scanDialog=!0,r={address:n.address,encryptedPrivateKey:n.aesPri,pubKey:n.pub},setTimeout(function(){c.createScan(r)},300));case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),createScan:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:s=new r.a("qrcode",{width:250,height:250,colorDark:"#000000",colorLight:"#ffffff"}),s.makeCode(JSON.stringify(e));case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),scanDialogClose:function(){document.getElementById("qrcode").innerHTML=""},copy:function(t){Object(l["i"])(t),this.$message({message:this.$t("public.copySuccess"),type:"success",duration:1e3}),this.keyDialog=!1},toUrl:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;0===e?this.$router.push({name:t}):Object(l["h"])("nuls",t)}}},b=p,w=(s("c742"),s("2877")),h=Object(w["a"])(b,n,a,!1,null,null,null);e["default"]=h.exports},ff03:function(t,e,s){}}]);
//# sourceMappingURL=chunk-9d8fba90.1dec6f52.js.map