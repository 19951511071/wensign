/**
 * Created by hxsd on 2016/10/21.
 */

$(function(){
    //切换图片的状态
    $("#bottom").on("mouseover",function(){
        $("#bottom").css("background-position","left -101px")
    });
    $("#bottom").on("mouseout",function(){
        $("#bottom").css("background-position","left top")
    });
    $("#bottom").on("click",function(){
        var topnavht = $("header").height();
        topval = $(".page5").offset().top-topnavht;
        $("html, body").stop().animate({
            scrollTop: topval
        }, 700);
    });
    $('#services').click(function() {
        $("#services a").addClass("avtive");
        $("#services").siblings().children("a").removeClass("avtive");
        topnavht = $("header").height();
        topval = $(".page5").offset().top-topnavht;
        console.log(topval)
        $("html, body").stop().animate({
            scrollTop: topval
        }, 700);
    });
    $('#portfolio').click(function() {
        $("#portfolio a").addClass("avtive");
        $("#portfolio").siblings().children("a").removeClass("avtive");
        topnavht = $("header").height();
        topval = $(".page4").offset().top-topnavht;
        $("html, body").stop().animate({
            scrollTop: topval
        }, 700);
    });
    $('#about').click(function() {
        $("#about a").addClass("avtive");
        $("#about").siblings().children("a").removeClass("avtive");
        topnavht = $("header").height();
        topval = $(".page2").offset().top-topnavht;
        $("html, body").stop().animate({
            scrollTop: topval
        }, 700);
    });
    $('#contant').click(function() {
        $("#contant a").addClass("avtive");
        $("#contant").siblings().children("a").removeClass("avtive");
        topnavht = $("header").height();
        topval = $(".page1").offset().top-topnavht;
        $("html, body").stop().animate({
            scrollTop: topval
        }, 700);
    });
    //-------------------------判断状态-----------------------------//
    var highest = null;
    var topnavht = $("header").height();
    var hm_cont_hgt = $("#content").height();
    var ss_cont_top = $(".page5").offset().top-topnavht;
    var ss_cont_hgt=  $(".page5").height()/2;
    var pf_cont_top = $(".page4").offset().top-topnavht;
    var pf_cont_hgt=  $(".page4").height()/2;
    var ab_cont_top = $(".page2").offset().top-topnavht;
    var ab_cont_hgt=  $(".page2").height()/2;
    var cn_cont_top = $(".page1").offset().top-topnavht;
    var cn_cont_hgt=  $(".page1").height()/2;
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos <= hm_cont_hgt )
        { $('.topnav li a').removeClass('active');
            $("header .top").removeClass("scrool");
            $("header .center a").removeClass("scrool1");
            $("header .right .right1").removeClass("scrool2");
            $("header .right .right2 p").removeClass("scrool3");
            $("header .top .logo").removeClass("scrool4");
            $("header .top .right .right3").css("background-position","0 0")

        }
        else if (windowpos <= ss_cont_top+ss_cont_hgt && windowpos >= ss_cont_top)
        { $('.topnav li a').removeClass('active');
            $('.services').addClass('active');
            $("header .top").addClass("scrool");
            $("header .center a").addClass("scrool1");
            $("header .right .right1").addClass("scrool2");
            $("header .right .right2 p").addClass("scrool3");
            $("header .top .logo").addClass("scrool4");
            $(".silder").removeClass("current4");
            $("header .top .right .right3").css("background-position","-16px 0")
        }
        else if (windowpos <= pf_cont_top+pf_cont_hgt && windowpos >= pf_cont_top)
        { $('.topnav li a').removeClass('active');
            $('.portfolio').addClass('active');
            $("header .top").addClass("scrool");
            $("header .center a").addClass("scrool1");
            $("header .right .right1").addClass("scrool2");
            $("header .right .right2 p").addClass("scrool3");
            $("header .top .logo").addClass("scrool4");
            $(".silder").removeClass("current4");
            $("header .top .right .right3").css("background-position","-16px 0")
        }
        else if (windowpos <= ab_cont_top+ab_cont_hgt && windowpos >= ab_cont_top)
        { $('.topnav li a').removeClass('active');
            $('.about').addClass('active');
            $("header .top").addClass("scrool");
            $("header .center a").addClass("scrool1");
            $("header .right .right1").addClass("scrool2");
            $("header .right .right2 p").addClass("scrool3");
            $("header .top .logo").addClass("scrool4");
            $(".silder").removeClass("current4");
            $("header .top .right .right3").css("background-position","-16px 0")
        }
        else if (windowpos <= cn_cont_top+cn_cont_hgt && windowpos >= cn_cont_top)
        { $('.topnav li a').removeClass('active');
            $('.contant').addClass('active');
            $("header .top").addClass("scrool");
            $("header .center a").addClass("scrool1");
            $("header .right .right1").addClass("scrool2");
            $("header .right .right2 p").addClass("scrool3");
            $("header .top .logo").addClass("scrool4");
            $(".silder").removeClass("current4");
            $("header .top .right .right3").css("background-position","-16px 0")
        }
    });
    //--------------------------顶部切换小图-------------------------------------//
    $("header .top .right .right3").on("mouseover",function(){
        $(this).css("background-position","-16px 0")
    });
    $("header .top .right .right3").on("mouseout",function(){
        $(this).css("background-position","0 0")
    });
    //---------------------切换右边的滑动门--------------------------------------//
    var n=true;
//            $("header .top .right .right3").on("click",function(){
//                if(n){
//                    $(".silder").addClass("current4");
//                    n=false;
//                }else{
//                    $(".silder").removeClass("current4");
//                    n=true;
//                }
//            });
    $("header .top .right .right3").click(function(){
        $('.silder').toggleClass('current4');
    });
    $(".close").on("click",function(){
        $(".silder").removeClass("current4");
    })
    //---------------------------隐藏显示底部区域-------------------------//

    var categroy=$("footer").find(".pic").parent().siblings()
    $(this).hide();
    $("footer").find(".pic").on("click",function(){
        if(categroy.is(":visible")){
            categroy.slideUp(600,function(){
                $("footer").find(".pic>img").attr('src',"images/foot_arrow2.png");
                $("footer").find(".pic").parent().css({"padding-top":"0","margin-top":"0px","margin-bottom":"0px;"});
                $('footer').animate({height:'80px'},600);
                flag = true;
                var t = setInterval(function () {
                    scrollBy(0,9999);
                    if(flag){
                        clearInterval(t);
                    }
                },20);
            });//隐藏状态

        }else{
            var flag = false;
            categroy.slideDown(600,function(){
                $("footer").find(".pic>img").attr('src',"images/foot_arrow1.png");
                $("footer").find(".pic").parent().css({"margin-top":"50px"});

                flag = true;
            });//显示隐藏

            $('footer').animate({height:'636px'},600);

            var t = setInterval(function () {
                scrollBy(0,9999);
                if(flag){
                    clearInterval(t);
                }
            },20);
//
//                    setInterval(function(){
//
//                    },50);
        }
    });
    //------------------------------轮播图-------------------------------//
    $("#sequence-pagintion li").on("click",function(){
        var index=$(this).index();
        $("#sequence-canvas li").eq(index).fadeIn().siblings().hide();
        $("#sequence-pagintion li").eq(index).addClass("current").siblings().removeClass("current");
    });

    var index=0;
    var content=$("#sequence-canvas li").length;
    function dsq(){
        //----------------------------想左移动--------------------------------//
        var play=function(){
            index--
            if(index<0){
                index=content-1;
            }
            $("#sequence-canvas li").eq(index).fadeIn().siblings().hide();
            $("#sequence-pagintion li").eq(index).addClass("current").siblings().removeClass("current");
        };
        //-----------------------------向右移动-------------------------------//
        var playright=function(){
            index++;
            if(index>content-1){
                index=0;
            }
            /*   else{
             index=content-1;
             };*/
            $("#sequence-canvas li").eq(index).fadeIn().siblings().hide();
            $("#sequence-pagintion li").eq(index).addClass("current").siblings().removeClass("current");
        }
        //调用函数;
        $(".lbt .lpic").on("click",function(event){
            play();
        });
        $(".lbt .rpic").on("click",function(event){
            playright();
        });
    }
    setInterval(dsq(),2000)
    //---------------------------选项卡-----------------------------------//
    var tab=$(".page2 .bottom>ul")
    console.log($(".page2 .bottom>ul"))
        tab.eq(0).show();
    $(".page2 .middle ul").find("li").each(function(index){
        $(this).on("click",function(){
            $(this).addClass("active1");
            $(this).siblings().removeClass("active1");
            tab.eq(index).fadeIn().siblings().hide();
        })
    })
     //--------------------------跳的动画----------------------------------//
    //var arr=["#83b444","#7eabf5","#db5f9b","#03cbce","#ffbc31"]

    var c1=document.getElementsByClassName("round2")[0];
    var c2=c1.getElementsByTagName("li");
    console.log(c2);
    for(var i=0;i<c2.length;i++){
         c2[i].onclick=function(){

         }
    }
    $(".page5 .bottom .round .round2 ul").find("li").each(function(index){

        $(this).on("click",function(){
            $(this).addClass("animation");

            $(this).siblings().removeClass("animation")
        });
    });


})

