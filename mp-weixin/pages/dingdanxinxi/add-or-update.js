(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dingdanxinxi/add-or-update"],{"3c6a":function(n,i,e){"use strict";var t=e("9ab5"),a=e.n(t);a.a},"60fd":function(n,i,e){"use strict";e.r(i);var t=e("daa8"),a=e.n(t);for(var r in t)"default"!==r&&function(n){e.d(i,n,(function(){return t[n]}))}(r);i["default"]=a.a},"9ab5":function(n,i,e){},d86a:function(n,i,e){"use strict";(function(n){e("6ccf"),e("921b");t(e("66fd"));var i=t(e("f599"));function t(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},daa8:function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,i,e,t,a,r,u){try{var o=n[r](u),s=o.value}catch(h){return void e(h)}o.done?i(s):Promise.resolve(s).then(t,a)}function u(n){return function(){var i=this,e=arguments;return new Promise((function(t,a){var u=n.apply(i,e);function o(n){r(u,t,a,o,s,"next",n)}function s(n){r(u,t,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("175c"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{dingdanbianhao:"",caipinmingcheng:"",caipinfenlei:"",tupian:"",jiage:"",shuliang:"",zongjine:"",zhuangtai:"",wanchengshijian:"",dianpuzhanghao:"",dianpumingcheng:"",lianxidianhua:"",zhanghao:"",xingming:"",shouji:"",userid:""},zhuangtaiOptions:[],zhuangtaiIndex:0,user:{},ro:{dingdanbianhao:!1,caipinmingcheng:!1,caipinfenlei:!1,tupian:!1,jiage:!1,shuliang:!1,zongjine:!1,zhuangtai:!1,wanchengshijian:!1,dianpuzhanghao:!1,dianpumingcheng:!1,lianxidianhua:!1,zhanghao:!1,xingming:!1,shouji:!1,userid:!1}}},components:{wPicker:o},computed:{zongjine:{get:function(){return 1*this.ruleForm.jiage*this.ruleForm.shuliang}}},onLoad:function(){var i=u(t.default.mark((function i(e){var a,r,u,o;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.ruleForm.wanchengshijian=this.$utils.getCurDateTime(),a=n.getStorageSync("nowTable"),i.next=4,this.$api.session(a);case 4:if(r=i.sent,this.user=r.data,this.ruleForm.dianpuzhanghao=this.user.dianpuzhanghao,this.ruleForm.dianpumingcheng=this.user.dianpumingcheng,this.ruleForm.lianxidianhua=this.user.lianxidianhua,this.zhuangtaiOptions="待付款,待发货,待取货,待评价,已完成".split(","),this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=18;break}return this.ruleForm.id=e.id,i.next=16,this.$api.info("dingdanxinxi",this.ruleForm.id);case 16:r=i.sent,this.ruleForm=r.data;case 18:if(!e.cross){i.next=89;break}u=n.getStorageSync("crossObj"),i.t0=t.default.keys(u);case 21:if((i.t1=i.t0()).done){i.next=89;break}if(o=i.t1.value,"dingdanbianhao"!=o){i.next=27;break}return this.ruleForm.dingdanbianhao=u[o],this.ro.dingdanbianhao=!0,i.abrupt("continue",21);case 27:if("caipinmingcheng"!=o){i.next=31;break}return this.ruleForm.caipinmingcheng=u[o],this.ro.caipinmingcheng=!0,i.abrupt("continue",21);case 31:if("caipinfenlei"!=o){i.next=35;break}return this.ruleForm.caipinfenlei=u[o],this.ro.caipinfenlei=!0,i.abrupt("continue",21);case 35:if("tupian"!=o){i.next=39;break}return this.ruleForm.tupian=u[o],this.ro.tupian=!0,i.abrupt("continue",21);case 39:if("jiage"!=o){i.next=43;break}return this.ruleForm.jiage=u[o],this.ro.jiage=!0,i.abrupt("continue",21);case 43:if("shuliang"!=o){i.next=47;break}return this.ruleForm.shuliang=u[o],this.ro.shuliang=!0,i.abrupt("continue",21);case 47:if("zongjine"!=o){i.next=51;break}return this.ruleForm.zongjine=u[o],this.ro.zongjine=!0,i.abrupt("continue",21);case 51:if("zhuangtai"!=o){i.next=55;break}return this.ruleForm.zhuangtai=u[o],this.ro.zhuangtai=!0,i.abrupt("continue",21);case 55:if("wanchengshijian"!=o){i.next=59;break}return this.ruleForm.wanchengshijian=u[o],this.ro.wanchengshijian=!0,i.abrupt("continue",21);case 59:if("dianpuzhanghao"!=o){i.next=63;break}return this.ruleForm.dianpuzhanghao=u[o],this.ro.dianpuzhanghao=!0,i.abrupt("continue",21);case 63:if("dianpumingcheng"!=o){i.next=67;break}return this.ruleForm.dianpumingcheng=u[o],this.ro.dianpumingcheng=!0,i.abrupt("continue",21);case 67:if("lianxidianhua"!=o){i.next=71;break}return this.ruleForm.lianxidianhua=u[o],this.ro.lianxidianhua=!0,i.abrupt("continue",21);case 71:if("zhanghao"!=o){i.next=75;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,i.abrupt("continue",21);case 75:if("xingming"!=o){i.next=79;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,i.abrupt("continue",21);case 79:if("shouji"!=o){i.next=83;break}return this.ruleForm.shouji=u[o],this.ro.shouji=!0,i.abrupt("continue",21);case 83:if("userid"!=o){i.next=87;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,i.abrupt("continue",21);case 87:i.next=21;break;case 89:this.styleChange();case 90:case"end":return i.stop()}}),i,this)})));function e(n){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},wanchengshijianConfirm:function(n){console.log(n),this.ruleForm.wanchengshijian=n.result,this.$forceUpdate()},zhuangtaiChange:function(n){this.zhuangtaiIndex=n.target.value,this.ruleForm.zhuangtai=this.zhuangtaiOptions[this.zhuangtaiIndex]},tupianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.tupian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.zongjine=this.zongjine,!this.ruleForm.jiage||this.$validate.isIntNumer(this.ruleForm.jiage)){n.next=4;break}return this.$utils.msg("价格应输入整数"),n.abrupt("return");case 4:if(!this.ruleForm.shuliang||this.$validate.isIntNumer(this.ruleForm.shuliang)){n.next=7;break}return this.$utils.msg("数量应输入整数"),n.abrupt("return");case 7:if(!this.ruleForm.zongjine||this.$validate.isIntNumer(this.ruleForm.zongjine)){n.next=10;break}return this.$utils.msg("总金额应输入整数"),n.abrupt("return");case 10:if(!this.ruleForm.id){n.next=15;break}return n.next=13,this.$api.update("dingdanxinxi",this.ruleForm);case 13:n.next=17;break;case 15:return n.next=17,this.$api.add("dingdanxinxi",this.ruleForm);case 17:this.$utils.msgBack("提交成功");case 18:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};i.default=s}).call(this,e("543d")["default"])},ebc1:function(n,i,e){"use strict";var t={"w-picker":function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"175c"))}},a=function(){var n=this,i=n.$createElement;n._self._c},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return t}))},f599:function(n,i,e){"use strict";e.r(i);var t=e("ebc1"),a=e("60fd");for(var r in a)"default"!==r&&function(n){e.d(i,n,(function(){return a[n]}))}(r);e("3c6a");var u,o=e("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"08f2ba84",null,!1,t["a"],u);i["default"]=s.exports}},[["d86a","common/runtime","common/vendor"]]]);