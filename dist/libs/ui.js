define(["zepto"],function(){return{alertBox:function(t,n){$(".m-box").length>0&&($(".m-box").remove(),$(".ab_cover").remove()),this.title=t.title||"",this.content=t.content||"";var a=t.btns.length;return this.btns=a?function(){var n="<div class='ab_btn_wrap'>";if(a>1)for(i in t.btns)n+="<a href='javascript:;' class='ab_btn ab_btn"+i+"'>"+t.btns[i].text+"</a>";else n+="<a href='javascript:;' class='ab_btn single'>"+t.btns[0].text+"</a>";return n+="</div>"}():"",this.style=t.style||null,this.callback=n||function(){},this.init=function(){$(".m-box,.ab_cover").remove();var i="<div class='ab_cover'></div>";i+="<div class='m-box'>",""!=this.title&&(i+="<a href='javascript:;' class='ab_x'>x</a>",i+="<h3>"+this.title+"</h3>"),i+="<div class='ab_content'>"+this.content+"</div>",i+=this.btns,i+="</div>",$("body").append(i),this.style&&$(".m-box").addClass(this.style);var n=$(".m-box").height(),a=$(window).height();$(".m-box").height(n>.75*a?.75*a:n),$(".m-box").animate({"margin-top":-$(".m-box").height()/2},100),$(".ab_x").on("click",function(){$(".m-box,.ab_cover").remove()}),$(".ab_btn").on({click:function(){var i=t.btns[$(this).index()].callback||function(){};i(),t.btns[$(this).index()].close&&$(".m-box,.ab_cover").remove()}}),this.callback()},this.init()},loadingFunc:function(){$(".m-loading").remove();var t='<div class="m-loading"><div class="content"><i class="i-loading"></i>';t+='<p class="info">正在加载信息...</p></div></div>',$("body").append(t)},removeLoading:function(){$(".m-loading").remove()},verifiFunc:function(t){$(".dbTools").remove();var i='<div class="dbTools"><span>'+t+"</span></div>";$("body").append(i)}}});