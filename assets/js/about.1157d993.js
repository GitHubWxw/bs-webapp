(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"67f6":function(s,o,e){"use strict";var t=e("80ad"),r=e.n(t);r.a},"80ad":function(s,o,e){},f820:function(s,o,e){"use strict";e.r(o);var t=function(){var s=this,o=s.$createElement,e=s._self._c||o;return e("div",{staticClass:"about"},[s._m(0),e("div",{staticClass:"content"},[e("van-field",{attrs:{placeholder:"手机号码","left-icon":"phone-o","error-message":s.phoneNumberError},model:{value:s.phoneNumber,callback:function(o){s.phoneNumber=o},expression:"phoneNumber"}}),"password"===s.loginWay?e("van-field",{attrs:{placeholder:"登录密码","left-icon":"lock",type:s.passwordType},model:{value:s.password,callback:function(o){s.password=o},expression:"password"}},[e("van-icon",{attrs:{slot:"right-icon",name:s.passwordIcon},on:{click:s.switchPasswordType},slot:"right-icon"})],1):e("van-field",{attrs:{placeholder:"短信验证码","left-icon":"comment-o",type:"text"},model:{value:s.password,callback:function(o){s.password=o},expression:"password"}},[e("VerifyCodeBtn",{attrs:{slot:"button"},on:{sendVerifyCode:s.sendVerifyCode},slot:"button"})],1),e("div",{staticClass:"button-wrap"},[e("van-button",{attrs:{size:"large",type:"info"},on:{click:s.handleLogin}},[s._v("登录")])],1),e("div",{staticClass:"more-wrap"},[e("router-link",{staticClass:"link",attrs:{to:"/register"}},[s._v("没有账号？去注册")]),e("div",{staticClass:"switch-way",on:{click:s.switchLoginWay}},[s._v(" "+s._s(s.loginWayObj.toggleMsg)+" ")])],1)],1)])},r=[function(){var s=this,o=s.$createElement,e=s._self._c||o;return e("div",{staticClass:"header"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:"http://img.cixi518.com/ljh_logo.jpeg",alt:"default_logo"}})])])}],n={name:"Login",data:function(){return{phoneNumber:"13216698987",password:"123456",code:"",loginWay:"password",passwordType:"password",phoneNumberError:""}},methods:{sendVerifyCode:function(){this.phoneNumberError="",this.phoneNumber||(this.phoneNumberError="手机号码必填")},switchPasswordType:function(){this.passwordType="password"===this.passwordType?"text":"password"},switchLoginWay:function(){this.password=this.code="",this.loginWay="password"===this.loginWay?"verifyCode":"password"},handleLogin:function(){var s={phoneNumber:this.phoneNumber,password:this.password,$router:this.$router,$route:this.$route};this.login(s)}},computed:{loginWayObj:function(){return"password"===this.loginWay?{icon:"closed-eye",toggleMsg:"验证码登录"}:{icon:"eye",toggleMsg:"密码登录"}},passwordIcon:function(){return"password"===this.passwordType?"closed-eye":"eye"}}},a=n,i=(e("67f6"),e("2877")),c=Object(i["a"])(a,t,r,!1,null,"b84776ce",null);o["default"]=c.exports}}]);