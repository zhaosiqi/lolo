$(function(){
    var clientH=$(window).height();
    var num=0;
    var flag=true;
     $("#fullpage").mousemove(function (e) {
         e.preventDefault();
     })
    touch.on("body","swipeup","#fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }

        flag=false;

        $("#fullpage").css({
            "marginTop":-num*clientH,
            transition:"margin-top 1s ease"
        })
    });

    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        flag=false;
        $("#fullpage").css({
            "marginTop":-num*clientH,
            transition:"margin-top 1s ease"
        })
    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
        // if(num!=0){
        //     $(".aa").find("")
        //     $(".aa").eq(num).find(".left-img").css({
        //
        //     })
        // }
    });


    //菜单
    flag1=true;
    $(".menu").click(function () {
        if(flag1){
            $(this).find(".menu-tline").css({
                transform:"translate(0,5px) rotate(45deg)"
            });
            $(this).find(".menu-bline").css({
                transform:"translate(0,-5px) rotate(-45deg)"
            });
            $(".header-min a").each(function(index,obj){
                $(obj).css({
                    opacity:0,animation:"menu 1s ease forwards "+index*0.2+"s"
                })
            });
            flag1=false;
        }else{
            $(this).find(".menu-tline").css({
                transform:"translate(0,0) rotate(0deg)"
            });
            $(this).find(".menu-bline").css({
                transform:"translate(0,0) rotate(0deg)"
            });
            $(".header-min a").each(function(index,obj){
                $(obj).css({
                    opacity:1,
                    transform:"rotate(0deg)",
                    animation:"menu1 1s ease forwards "+(1.2-index*0.2)+"s"
                })
            });
            flag1=true;
        }
    });

    $(window).resize(function(){
        clientH=$(window).height();
        var clientW=$(window).width();
        $("#fullpage").css("marginTop",clientH*-num);
        if(clientW>1000){
            $(".menu a").css({
                animation:"none",
                opacity:0,
                transform:"rotate(90deg)"
            })
        }

    })
});