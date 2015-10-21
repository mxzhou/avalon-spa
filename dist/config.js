require.config({debug:!0,baseUrl:"./",paths:{avalon:"libs/avalon.mobile.min",mmHistory:"libs/mmHistory",mmRouter:"libs/mmRouter",mmPromise:"libs/mmPromise",mmState:"libs/mmState",mmRequest:"libs/mmRequest",mock:"libs/mock-min",pub:"libs/pub",zepto:"libs/zepto.min",ui:"libs/ui",swiper:"libs/swiper.js"},shim:{mock:{exports:"mock"},zepto:{exports:"zepto"},swiper:{deps:["zepto"],exports:"swiper"}}});var main,api_path,lStorage=window.localStorage,sStorage=window.sessionStorage,lStoragecache,sStorageCache,storageName,envUrl=env(),checkLogin=function(e){console.log("checking login..."),setTimeout(function(){e()},500)},accountFunc=function(){},back=function(){avalon.router.navigate(avalon.router.getLastPath())};require(["pub","zepto","mmState"],function(e){storageName="dabaiApp";var t={name:"mxz",age:"26"};lStorage.setItem(storageName,JSON.stringify(t)),lStoragecache=JSON.parse(lStorage.getItem(storageName))||{};var l={name:"mxz",age:"26"};sStorage.setItem(storageName,JSON.stringify(l)),sStorageCache=JSON.parse(sStorage.getItem(storageName))||{},api_path={auth2link:envUrl+"/wap/api/common/auth2link"},main=avalon.define({$id:"main",bdClass:"s-bdbg",stopPro:function(e){e.stopPropagation()}}),avalon.state("index",{url:"/",views:{contain:{templateUrl:"tpl/index.html",controllerUrl:"controller/index"}}}),avalon.state("mobileAuth",{url:"/mobileAuth",views:{contain:{templateUrl:"tpl/mobileAuth.html",controllerUrl:"controller/mobileAuth"}}}),avalon.state("packageReceive",{url:"/packageReceive",views:{contain:{templateUrl:"tpl/packageReceive.html",controllerUrl:"controller/packageReceive"}}}),avalon.state("my",{url:"/my",views:{contain:{templateUrl:"tpl/my.html",controllerUrl:"controller/my"}}}),avalon.state("packageSent",{url:"/packageSent",views:{contain:{templateUrl:"tpl/packageSent.html",controllerUrl:"controller/packageSent"}}}),avalon.state("bookSent",{url:"/bookSent",views:{contain:{templateUrl:"tpl/bookSent.html",controllerUrl:"controller/bookSent"}}}),avalon.state("appraise",{url:"/appraise",views:{contain:{templateUrl:"tpl/appraise.html",controllerUrl:"controller/appraise"}}}),avalon.state("express",{url:"/express",views:{contain:{templateUrl:"tpl/express.html",controllerUrl:"controller/express"}}}),avalon.state("packageReceive",{url:"/packageReceive",views:{contain:{templateUrl:"tpl/packageReceive.html",controllerUrl:"controller/packageReceive"}}}),avalon.state("infoDetail",{url:"/infoDetail",views:{contain:{templateUrl:"tpl/infoDetail.html",controllerUrl:"controller/infoDetail"}}}),avalon.state("sendList",{url:"/sendList",views:{contain:{templateUrl:"tpl/sendList.html",controllerUrl:"controller/sendList"}}}),avalon.state("hKeeperList",{url:"/hKeeperList",views:{contain:{templateUrl:"tpl/hKeeperList.html",controllerUrl:"controller/hKeeperList"}}}),avalon.state("washCarList",{url:"/washCarList",views:{contain:{templateUrl:"tpl/washCarList.html",controllerUrl:"controller/washCarList"}}}),avalon.state("myInfo",{url:"/myInfo",views:{contain:{templateUrl:"tpl/myInfo.html",controllerUrl:"controller/myInfo"}}}),avalon.state("rename",{url:"/rename",views:{contain:{templateUrl:"tpl/rename.html",controllerUrl:"controller/rename"}}}),avalon.state("changeAddress",{url:"/changeAddress",views:{contain:{templateUrl:"tpl/changeAddress.html",controllerUrl:"controller/changeAddress"}}}),avalon.state("houseKeeper",{url:"/houseKeeper",views:{contain:{templateUrl:"tpl/houseKeeper.html",controllerUrl:"controller/houseKeeper"}}}),avalon.state.config({onError:function(e){console.log(e)},onLoad:function(){console.log("state is loaded")}}),avalon.router.errorback=function(){alert("暂未开放")},avalon.history.start({basepath:"/"}),avalon.scan(),avalon.ready(function(){console.log("already!")})});