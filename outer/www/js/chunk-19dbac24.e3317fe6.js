(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19dbac24"],{"11b9":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"set bg-gray cb"},[s("div",{staticClass:"bg-white"},[s("div",{staticClass:"w1200"},[s("h3",{staticClass:"title"},[e._v("\n        "+e._s(e.$t("public.about"))+"\n      ")])])]),s("div",{staticClass:"w1200 mt_20 bg-white set_info"},[s("div",{staticClass:"tc mzt_20"},[s("h4",{staticClass:"font24 mb_20"},[e._v(e._s(e.symbol)+" Wallet")]),s("ul",[s("li",{directives:[{name:"show",rawName:"v-show",value:e.RUN_PATTERN,expression:"RUN_PATTERN"}]},[s("span",[e._v(e._s(e.$t("public.operatingSystem"))+":")]),e._v(e._s(e.system))]),s("li",[s("span",[e._v(e._s(e.$t("public.version"))+":")]),e.RUN_DEV?s("font",[e._v(" "+e._s(e.version))]):s("font",[e._v("Beta-"+e._s(e.version))])],1),s("li",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[s("span",[e._v(e._s(e.$t("public.version1"))+":")]),e.RUN_DEV?s("font",[e._v(e._s(e.newVersion))]):s("font",[e._v("Beta-"+e._s(e.newVersion))])],1),s("li",{directives:[{name:"show",rawName:"v-show",value:e.RUN_PATTERN&&"Darwin"!==e.system,expression:"RUN_PATTERN && system !== 'Darwin'"}]},[s("span",[e._v(e._s(e.$t("public.logInfo"))+":")]),e._v(e._s(e.logUrl))]),s("li",{directives:[{name:"show",rawName:"v-show",value:"Darwin"===e.system,expression:"system === 'Darwin'"}]},[s("span",[e._v(e._s(e.$t("public.downloadUrl"))+":")]),s("font",[e._v(e._s(e.FILE_URL))])],1)]),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.RUN_PATTERN,expression:"RUN_PATTERN"}],attrs:{type:"success"},on:{click:e.checkUpdate}},[e._v("\n        "+e._s(e.$t("public.checkUpdates"))+"\n      ")])],1)]),s("el-dialog",{attrs:{title:e.$t("bottom.updateWallet"),width:"35rem",visible:e.updateDialogVisible,"show-close":1===e.tips.type||4===e.tips.type,"close-on-press-escape":!1,"close-on-click-modal":!1},on:{"update:visible":function(t){e.updateDialogVisible=t}}},[s("div",{staticClass:"upload"},[s("div",{staticClass:"upload-tips"},[e._v(e._s(e.$t("bottom.Tips"))+": "+e._s(e.$t("TipsType."+e.tips.type)))]),0!==e.downloadPercent?s("div",{staticClass:"upload-percent"},[s("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:e.downloadPercent,status:"success"}})],1):e._e(),3===e.tips.type?s("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"upload-bt"},[s("el-button",{attrs:{type:"info"},on:{clcik:e.afterRun}},[e._v(e._s(e.$t("bottom.Backstage")))])],1):e._e()])])],1)},i=[],r=s("d137"),o=r["a"],l=(s("bb97"),s("2877")),a=Object(l["a"])(o,n,i,!1,null,null,null);t["default"]=a.exports},1458:function(e,t,s){},"28a5":function(e,t,s){"use strict";var n=s("aae3"),i=s("cb7c"),r=s("ebd6"),o=s("0390"),l=s("9def"),a=s("5f1b"),c=s("520a"),u=s("79e5"),v=Math.min,p=[].push,d="split",b="length",f="lastIndex",m=4294967295,h=!u(function(){RegExp(m,"y")});s("214f")("split",2,function(e,t,s,u){var _;return _="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[b]||2!="ab"[d](/(?:ab)*/)[b]||4!="."[d](/(.?)(.?)/)[b]||"."[d](/()()/)[b]>1||""[d](/.?/)[b]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return s.call(i,e,t);var r,o,l,a=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,d=void 0===t?m:t>>>0,h=new RegExp(e.source,u+"g");while(r=c.call(h,i)){if(o=h[f],o>v&&(a.push(i.slice(v,r.index)),r[b]>1&&r.index<i[b]&&p.apply(a,r.slice(1)),l=r[0][b],v=o,a[b]>=d))break;h[f]===r.index&&h[f]++}return v===i[b]?!l&&h.test("")||a.push(""):a.push(i.slice(v)),a[b]>d?a.slice(0,d):a}:"0"[d](void 0,0)[b]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,n){var i=e(this),r=void 0==s?void 0:s[t];return void 0!==r?r.call(s,i,n):_.call(String(i),s,n)},function(e,t){var n=u(_,e,this,t,_!==s);if(n.done)return n.value;var c=i(e),p=String(this),d=r(c,RegExp),b=c.unicode,f=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(h?"y":"g"),w=new d(h?c:"^(?:"+c.source+")",f),g=void 0===t?m:t>>>0;if(0===g)return[];if(0===p.length)return null===a(w,p)?[p]:[];var N=0,U=0,y=[];while(U<p.length){w.lastIndex=h?U:0;var E,R=a(w,h?p:p.slice(U));if(null===R||(E=v(l(w.lastIndex+(h?0:U)),p.length))===N)U=o(p,U,b);else{if(y.push(p.slice(N,U)),y.length===g)return y;for(var x=1;x<=R.length-1;x++)if(y.push(R[x]),y.length===g)return y;U=N=E}}return y.push(p.slice(N)),y}]})},"3c43":function(e,t){t.endianness=function(){return"LE"},t.hostname=function(){return"undefined"!==typeof location?location.hostname:""},t.loadavg=function(){return[]},t.uptime=function(){return 0},t.freemem=function(){return Number.MAX_VALUE},t.totalmem=function(){return Number.MAX_VALUE},t.cpus=function(){return[]},t.type=function(){return"Browser"},t.release=function(){return"undefined"!==typeof navigator?navigator.appVersion:""},t.networkInterfaces=t.getNetworkInterfaces=function(){return{}},t.arch=function(){return"javascript"},t.platform=function(){return"browser"},t.tmpdir=t.tmpDir=function(){return"/tmp"},t.EOL="\n",t.homedir=function(){return"/"}},9224:function(e){e.exports={name:"NULS-Wallet",version:"2.4.4",private:!0,scripts:{serve:"cross-env NULS_ENV=prod vue-cli-service serve src/main-web","serve-beta":"cross-env NULS_ENV=beta vue-cli-service serve src/main-web","serve-other":"cross-env NULS_ENV=other vue-cli-service serve src/main-web",build:"cross-env NULS_ENV=prod vue-cli-service build src/main-web","build-prod":"cross-env NULS_ENV=prod vue-cli-service build src/main-web","build-factory":"cross-env NULS_ENV=prod vue-cli-service build src/main-web","build-other":"cross-env NULS_ENV=other vue-cli-service build src/main-web","build-beta":"cross-env NULS_ENV=beta vue-cli-service build src/main-web",lint:"vue-cli-service lint","electron:build":"cross-env NULS_ENV=electron-prod vue-cli-service electron:build","electron:serve":"cross-env NULS_ENV=electron-prod vue-cli-service electron:serve","electron:serve-beta":"cross-env NULS_ENV=electron-beta vue-cli-service electron:serve",postinstall:"electron-builder install-app-deps",postuninstall:"electron-builder install-app-deps"},dependencies:{axios:"^0.19.0","bignumber.js":"^8.1.1","compression-webpack-plugin":"^3.0.0","copy-to-clipboard":"^3.1.0","element-ui":"^2.13.2","file-saver":"^2.0.2",less:"^3.9.0","less-loader":"^4.1.0",log4js:"^4.5.1",moment:"^2.24.0","nuls-sdk-js":"^2.4.7",qrcodejs2:"^0.0.2",shelljs:"^0.8.3",vue:"^2.6.6","vue-electron":"^1.0.6","vue-i18n":"^8.0.0","vue-router":"^3.0.1",vuex:"^3.0.1"},devDependencies:{"@vue/cli-plugin-babel":"^3.5.0","@vue/cli-plugin-eslint":"^3.5.0","@vue/cli-service":"^3.5.0","babel-eslint":"^10.0.1","cross-env":"^6.0.0",electron:"^4.0.0","electron-builder":"^20.18.0","electron-updater":"^4.0.6",eslint:"^5.8.0","eslint-plugin-vue":"^5.0.0","vue-cli-plugin-electron-builder":"^1.2.0","vue-cli-plugin-element":"^1.0.1","vue-cli-plugin-i18n":"^0.5.2","vue-template-compiler":"^2.5.21"},eslintConfig:{root:!0,env:{node:!0},extends:["plugin:vue/essential","eslint:recommended"],rules:{"no-console":"off"},parserOptions:{parser:"babel-eslint"}},postcss:{plugins:{autoprefixer:{}}},browserslist:["> 1%","last 2 versions","not ie <= 8"],publish:[{provider:"generic",url:"http://file.wallet.nuls.io/download/main"}],main:"background.js"}},aae3:function(e,t,s){var n=s("d3f4"),i=s("2d95"),r=s("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==i(e))}},bb97:function(e,t,s){"use strict";var n=s("1458"),i=s.n(n);i.a},d137:function(e,t,s){"use strict";(function(e){s("28a5"),s("96cf");var n=s("3b8d"),i=s("bc3a"),r=s.n(i),o=s("9224"),l=s("db49"),a=s("84fd"),c=s.n(a);t["a"]={data:function(){return{symbol:sessionStorage.hasOwnProperty("info")?JSON.parse(sessionStorage.getItem("info")).defaultAsset.symbol:"NULS",updateDialogVisible:!1,tips:{},downloadPercent:0,logUrl:"",system:"",version:o.version,newVersion:"1.0.0",RUN_PATTERN:l["g"],RUN_DEV:l["f"],FILE_URL:l["d"]}},created:function(){},mounted:function(){},components:{},methods:{checkUpdate:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:c()("https://github.com/nuls-io/nuls-v2/releases");case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),afterRun:function(){this.updateDialogVisible=!1},seeLog:function(){var t=this,n=s("3c43");this.system=n.type();var i=e,o="";if("Windows_NT"===this.system){var l=i.split("\\"),a="\\"+l[l.length-2],c=i.lastIndexOf(a);this.logUrl=i.slice(0,c)+"\\wallet_web_log",o=this.FILE_URL+"/latest.yml"}else if("Darwin"===this.system){var u=i.split("/"),v="/"+u[u.length-2],p=i.lastIndexOf(v);this.logUrl=i.slice(0,p)+"/wallet_web_log",o=this.FILE_URL+"/latest-mac.yml"}r.a.get(o,{}).then(function(e){t.newVersion=e.data.substr(9,5)}).catch(function(e){console.log(e)})}}}}).call(this,"/")},ebd6:function(e,t,s){var n=s("cb7c"),i=s("d8e8"),r=s("2b4c")("species");e.exports=function(e,t){var s,o=n(e).constructor;return void 0===o||void 0==(s=n(o)[r])?t:i(s)}}}]);
//# sourceMappingURL=chunk-19dbac24.e3317fe6.js.map