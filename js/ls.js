$(window).resize(function(){
    var clientW=$(window).width();
    if(clientW<1000){
        $(".bdxq").css("display","none");
        $(".wordleft").css({
            left:0,
            top:0,
            right:0,
            bottom:0,
            margin:"auto"
        });
    }
    if(clientW>1001){
        $(".bdxq").css("display","block");
        $(".wordleft").css({
            right:0,
            top:"120px"
        })
    }

})
