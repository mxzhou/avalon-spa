define("mobileAuth",["../mocks/auth","../libs/ui"],function(e,n){var i=avalon.define({$id:"auth",authPhone:"",verifiVal:"",bPhone:!0,bNext:!0,btnValue:"获取验证码",bBtn:!1,getVal:function(){var e=/^1[3|4|5|8][0-9]{9}$/;return""==i.authPhone?void n.verifiFunc("手机号不能为空！"):e.test(i.authPhone)?(n.loadingFunc(),setTimeout(function(){n.removeLoading()},500),void $.post("jh-lingyi-web/user/userCtl/sendCheckSms",{phone:i.phone},function(e){if(0==e.resultCode){i.bPhone=!1,i.bBtn=!0,i.bNext=!1,n.verifiFunc("验证码已发送到手机，请注意查收！"),clearInterval(t);var o=60,t=setInterval(function(){o--,i.btnValue=o+"s重新发送",0>o&&(i.btnValue="获取验证码",i.bBtn=!1,clearInterval(t))},1e3)}else 1==e.resultCode&&n.verifiFunc("该手机号码已注册！")},"json")):void n.verifiFunc("请输入正确的手机号码！")},nextFunc:function(){return""==i.verifiVal?void n.verifiFunc("验证码不能为空！"):void $.post("weixin/app/user/checkNum",{mobile:i.phone,checkcode:i.verifiVal},function(e){0==e.resultCode?location.href="#!/infoDetail":1==e.resultCode&&n.verifiFunc("验证码不正确！")},"json")}});return avalon.controller(function(e){e.$onEnter=function(){main.bdClass="s-bdbg1"},e.$onRendered=function(){},e.$onBeforeUnload=function(){main.bdClass="s-bdbg"}})});