(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95c3a434"],{"0a49":function(e,t,r){var s=r("9b43"),n=r("626a"),a=r("4bf8"),u=r("9def"),c=r("cd1c");e.exports=function(e,t){var r=1==e,o=2==e,i=3==e,d=4==e,l=6==e,p=5==e||l,f=t||c;return function(t,c,h){for(var w,m,b=a(t),g=n(b),v=s(c,h,3),P=u(g.length),y=0,x=r?f(t,P):o?f(t,0):void 0;P>y;y++)if((p||y in g)&&(w=g[y],m=v(w,y,b),e))if(r)x[y]=m;else if(m)switch(e){case 3:return!0;case 5:return w;case 6:return y;case 2:x.push(w)}else if(d)return!1;return l?-1:i||d?d:x}}},1959:function(e,t,r){"use strict";r.d(t,"k",function(){return c}),r.d(t,"e",function(){return o}),r.d(t,"d",function(){return i}),r.d(t,"j",function(){return l}),r.d(t,"g",function(){return f}),r.d(t,"m",function(){return w}),r.d(t,"b",function(){return b}),r.d(t,"l",function(){return v}),r.d(t,"a",function(){return y}),r.d(t,"f",function(){return k}),r.d(t,"h",function(){return S}),r.d(t,"i",function(){return I}),r.d(t,"c",function(){return C});r("7514"),r("c5f6"),r("6b54"),r("96cf");var s=r("3b8d"),n=r("9f30"),a=r("6ace"),u=r("db49");function c(e){return e===u["e"].chainId}function o(e,t){var r=e.txSerialize().length;return r+=110*t,1e5*Math.ceil(r/1024)}function i(e,t){return d.apply(this,arguments)}function d(){return d=Object(s["a"])(regeneratorRuntime.mark(function e(t,r){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=0,e.next=3,Object(n["a"])("/","getByzantineCount",[t.txSerialize().toString("hex")]).then(function(e){if(e.hasOwnProperty("result")){var n=t.txSerialize().length;n+=110*(r+e.result.value),s=1e6*Math.ceil(n/1024)}else s=-100}).catch(function(e){console.log(e),s=-100});case 3:return e.abrupt("return",s);case 4:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function l(e,t,r){return p.apply(this,arguments)}function p(){return p=Object(s["a"])(regeneratorRuntime.mark(function e(t,r,s){var n,u,c,o,i,d,l,p,h;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=Number(Object(a["c"])(t.amount,t.fee)),u=0,c=r.nonce,o=t.amount,i=0,4===s?i=-1:5===s?i=-1:6===s?(n=t.amount,u=-1,c=t.depositHash.substring(t.depositHash.length-16),o=t.amount-t.fee):9===s&&(n=t.amount,u=-1,c=t.depositHash.substring(t.depositHash.length-16),o=t.amount-t.fee,d=(new Date).valueOf(),i=Number(d.toString().substr(0,d.toString().length-3))),l=[{address:t.fromAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:n,locked:u,nonce:c}],2!==s||t.assetsChainId===Object(a["f"])()){e.next=16;break}return l[0].amount=t.amount,e.next=11,f(Object(a["f"])(),1,t.fromAddress);case 11:if(p=e.sent,!(p.data.balance<1e5)){e.next=15;break}return console.log("余额小于手续费"),e.abrupt("return");case 15:l.push({address:t.fromAddress,assetsChainId:Object(a["f"])(),assetsId:1,amount:1e5,locked:u,nonce:p.data.nonce});case 16:if(h=[],15!==s&&17!==s){e.next=19;break}return e.abrupt("return",{success:!0,data:{inputs:l,outputs:h}});case 19:if(16!==s){e.next=23;break}return l[0].amount=Number(Object(a["c"])(t.amount,1e5)),t.toAddress&&t.value&&(h=[{address:t.toAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:t.value,lockTime:i}]),e.abrupt("return",{success:!0,data:{inputs:l,outputs:h}});case 23:return t.times&&2===s&&(i=Date.parse(t.times)/1e3),h=[{address:t.toAddress?t.toAddress:t.fromAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:o,lockTime:i}],e.abrupt("return",{success:!0,data:{inputs:l,outputs:h}});case 26:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return h=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,s,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:2,r=a.length>1&&void 0!==a[1]?a[1]:1,s=a.length>2?a[2]:void 0,e.next=5,Object(n["a"])("/","getAccountBalance",[t,r,s]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:{balance:e.result.balance,nonce:e.result.nonce}}:{success:!1,data:e}}).catch(function(e){return{success:!1,data:e}});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function w(e){return m.apply(this,arguments)}function m(){return m=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["a"])("/","validateTx",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:e.result}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),m.apply(this,arguments)}function b(e){return g.apply(this,arguments)}function g(){return g=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["a"])("/","broadcastTx",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:e.result}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),g.apply(this,arguments)}function v(e){return P.apply(this,arguments)}function P(){return P=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["a"])("/","validateTx",[t]).then(function(e){if(e.hasOwnProperty("result")){var r=e.result.value;return Object(n["a"])("/","broadcastTx",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,hash:r}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}})}return{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),P.apply(this,arguments)}function y(e){return x.apply(this,arguments)}function x(){return x=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["a"])("/","getConsensusDeposit",[1,300,t]).then(function(e){return e.result}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),x.apply(this,arguments)}function k(e){return O.apply(this,arguments)}function O(){return O=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["a"])("/","getContractConstructor",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:e.result.constructor}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),O.apply(this,arguments)}function $(){return j.apply(this,arguments)}function j(){return j=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=[{chainId:1,addressPrefix:"NULS"},{chainId:2,addressPrefix:"tNULS"}],e.next=3,Object(n["a"])("/","getAllAddressPrefix",[]).then(function(e){e.hasOwnProperty("result")?(sessionStorage.hasOwnProperty("prefixData")&&sessionStorage.removeItem("prefixData"),sessionStorage.setItem("prefixData",JSON.stringify(e.result))):sessionStorage.setItem("prefixData",JSON.stringify(t))}).catch(function(e){console.log(e),sessionStorage.setItem("prefixData",JSON.stringify(t))});case 3:case"end":return e.stop()}},e)})),j.apply(this,arguments)}function S(e){return F.apply(this,arguments)}function F(){return F=Object(s["a"])(regeneratorRuntime.mark(function e(t){var r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:if(r=JSON.parse(sessionStorage.getItem("prefixData")),!r){e.next=8;break}return s=r.find(function(e){return e.chainId===t}),e.abrupt("return",s.addressPrefix);case 8:return e.abrupt("return","");case 9:case"end":return e.stop()}},e)})),F.apply(this,arguments)}function I(e){return R.apply(this,arguments)}function R(){return R=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["a"])("/","getMsg",[t]).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.hasOwnProperty("result")||!t.result.pubkey){e.next=8;break}if(!t.result.pubkey||!t.result.signData){e.next=5;break}return e.abrupt("return",{success:!0,data:{signData:t.result.signData,pubkey:t.result.pubkey}});case 5:return e.abrupt("return",{success:!0,data:{}});case 6:e.next=9;break;case 8:return e.abrupt("return",{success:!1,data:t});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),R.apply(this,arguments)}function C(e,t,r,s){return A.apply(this,arguments)}function A(){return A=Object(s["a"])(regeneratorRuntime.mark(function e(t,r,s,a){var u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return u={address:s,hash:a.getHash().toString("hex"),txHex:a.txSerialize().toString("hex")},e.next=3,Object(n["a"])("/","commitMsg",[t,u]).then(function(e){if(e.hasOwnProperty("result")){var s={url:localStorage.hasOwnProperty("url")?JSON.parse(localStorage.getItem("url")).urls:"https://beta.wallet.nuls.io/api",txHexKey:t,signDataKey:r};return{success:!0,data:{txInfo:s,assembleHex:a}}}return{success:!1,data:e}}).catch(function(e){return{success:!1,data:e}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)})),A.apply(this,arguments)}},"2e64":function(e,t,r){"use strict";var s=r("ff03"),n=r.n(s);n.a},"3a51":function(e,t,r){},7514:function(e,t,r){"use strict";var s=r("5ca1"),n=r("0a49")(5),a="find",u=!0;a in[]&&Array(1)[a](function(){u=!1}),s(s.P+s.F*u,"Array",{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(a)},b301:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"back",attrs:{backUrl:e.backUrl}},[r("span",{staticClass:"back-box",on:{click:e.back}},[r("i",{staticClass:"el-icon-arrow-left"}),r("span",[e._v(e._s(e.backTitle))])])])},n=[],a={props:{backTitle:{type:String,default:""},backUrl:{type:String,default:"1"},backParams:{type:String,default:""}},methods:{back:function(){"1"===this.backUrl?this.$router.go(-1):this.$router.push({name:this.backUrl})}}},u=a,c=(r("2e64"),r("2877")),o=Object(c["a"])(u,s,n,!1,null,null,null);t["a"]=o.exports},b8ea:function(e,t,r){"use strict";var s=r("3a51"),n=r.n(s);n.a},cd1c:function(e,t,r){var s=r("e853");e.exports=function(e,t){return new(s(e))(t)}},ce96:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"new_address bg-gray"},[r("div",{staticClass:"bg-white"},[r("div",{staticClass:"w1200"},[r("BackBar",{attrs:{backTitle:e.$t("address.address0")}}),r("h3",{staticClass:"title"},[e._v(e._s(e.$t("editPassword.editPassword0"))+": "+e._s(this.$route.query.address))])],1)]),r("div",{staticClass:"new w1200 mt_20 bg-white"},[r("div",{staticClass:"w630"},[r("h3",{staticClass:"tc mzt_20"}),r("el-form",{ref:"passwordForm",staticClass:"mb_20",attrs:{model:e.passwordForm,"status-icon":"",rules:e.passwordRules}},[r("el-form-item",{attrs:{label:e.$t("editPassword.editPassword1"),prop:"oldPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.passwordForm.oldPass,callback:function(t){e.$set(e.passwordForm,"oldPass",t)},expression:"passwordForm.oldPass"}})],1),r("el-form-item",{attrs:{label:e.$t("editPassword.editPassword2"),prop:"newPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.passwordForm.newPass,callback:function(t){e.$set(e.passwordForm,"newPass",t)},expression:"passwordForm.newPass"}})],1),r("el-form-item",{attrs:{label:e.$t("editPassword.editPassword3"),prop:"checkPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.passwordForm.checkPass,callback:function(t){e.$set(e.passwordForm,"checkPass",t)},expression:"passwordForm.checkPass"}})],1),r("el-form-item",{staticClass:"form-next"},[r("el-button",{attrs:{type:"success"},on:{click:function(t){return e.submitPasswordForm("passwordForm")}}},[e._v(e._s(e.$t("editPassword.editPassword4"))+"\n          ")]),r("div",[e._v(e._s(e.$t("editPassword.editPassword5"))),r("span",{staticClass:"click",on:{click:function(t){return e.toUrl("newAddress")}}},[e._v(" "+e._s(e.$t("public.re-import")))])])],1)],1)],1)])])},n=[],a=(r("ac4d"),r("8a81"),r("ac6a"),r("0ad0")),u=r.n(a),c=r("b301"),o=r("6ace"),i=r("1959"),d={data:function(){var e=this,t=function(t,r,s){var n=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,20}$/;""===r?s(new Error(e.$t("editPassword.editPassword6"))):n.exec(r)?(""!==e.passwordForm.checkPass&&e.$refs.passwordForm.validateField("newPass"),s()):s(new Error(e.$t("editPassword.editPassword7")))},r=function(t,r,s){var n=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,20}$/;""===r?s(new Error(e.$t("editPassword.editPassword8"))):n.exec(r)?e.passwordForm.oldPass===e.passwordForm.newPass?s(new Error(e.$t("editPassword.editPassword9"))):(""!==e.passwordForm.checkPass&&e.$refs.passwordForm.validateField("checkPass"),s()):s(new Error(e.$t("editPassword.editPassword7")))},s=function(t,r,s){""===r?s(new Error(e.$t("editPassword.editPassword10"))):e.passwordForm.checkPass!==e.passwordForm.newPass?s(new Error(e.$t("editPassword.editPassword11"))):s()};return{addressInfo:{},passwordForm:{oldPass:"",newPass:"",checkPass:""},passwordRules:{oldPass:[{validator:t,trigger:"blur"}],newPass:[{validator:r,trigger:"blur"}],checkPass:[{validator:s,trigger:"blur"}]},editAddressInfo:"",prefix:""}},created:function(){var e=this;Object(i["h"])(Object(o["f"])()).then(function(t){e.prefix=t}).catch(function(t){console.log(t),e.prefix=""})},mounted:function(){},components:{BackBar:c["a"]},methods:{submitPasswordForm:function(e){var t=this,r=this.$route.query.address,s={},n=!0,a=!1,c=void 0;try{for(var i,d=Object(o["e"])(0)[Symbol.iterator]();!(n=(i=d.next()).done);n=!0){var l=i.value;l.address===r&&(s=l)}}catch(p){a=!0,c=p}finally{try{n||null==d.return||d.return()}finally{if(a)throw c}}this.$refs[e].validate(function(e){if(!e)return!1;var n=u.a.decrypteOfAES(s.aesPri,t.passwordForm.oldPass),a=u.a.importByKey(Object(o["f"])(),n,t.passwordForm.oldPass,t.prefix);if(a.address===r){var c=u.a.importByKey(Object(o["f"])(),n,t.passwordForm.newPass,t.prefix);s.aesPri=c.aesPri,s.pub=c.pub;var i=Object(o["e"])(0),d=!0,l=!1,f=void 0;try{for(var h,w=i[Symbol.iterator]();!(d=(h=w.next()).done);d=!0){var m=h.value;m.address===s.address&&(m.aesPri=s.aesPri)}}catch(p){l=!0,f=p}finally{try{d||null==w.return||w.return()}finally{if(l)throw f}}localStorage.setItem(Object(o["g"])(),JSON.stringify(i)),t.$message({message:t.$t("editPassword.editPassword12"),type:"success",duration:1e3}),t.toUrl("address")}else t.$message({message:t.$t("editPassword.editPassword13"),type:"error",duration:1e3})})},toUrl:function(e){"newAddress"===e?this.$router.push({name:e,query:{address:this.$route.query.address}}):this.$router.push({name:e})}}},l=d,p=(r("b8ea"),r("2877")),f=Object(p["a"])(l,s,n,!1,null,null,null);t["default"]=f.exports},e853:function(e,t,r){var s=r("d3f4"),n=r("1169"),a=r("2b4c")("species");e.exports=function(e){var t;return n(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!n(t.prototype)||(t=void 0),s(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?Array:t}},ff03:function(e,t,r){}}]);
//# sourceMappingURL=chunk-95c3a434.a8b439de.js.map