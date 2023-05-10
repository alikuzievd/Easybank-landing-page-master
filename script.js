$(document).ready(function(){
    let desktopSize = window.matchMedia("(min-width: 1px)");
    if (desktopSize.matches){
        $(".box-13").hide();
        $(".hamburger").click(function(){
            $(".close").show(500)
            $(".hamburger").hide(500)
            $(".box-19").show(500)
            $("body").css("background", "linear-gradient(180deg, #2D314D 0%, rgba(45, 49, 77, 0.0001) 100%)")
        })
        $(".close").click(function(){
            $(".hamburger").show(500)
            $(".close").hide(500)
            $(".box-19").hide(500)
        })
        $(".Home").mouseenter(function(){
            $(".box-18").show(500)
        }).mouseleave(function(){
            $(".box-18").hide(500)
        })
        $(".About").mouseenter(function(){
            $(".box-14").show(500)
        }).mouseleave(function(){
            $(".box-14").hide(500)
        })
        $(".Contact").mouseenter(function(){
            $(".box-15").show(500)
        }).mouseleave(function(){
            $(".box-15").hide(500)
        })
        $(".Blog").mouseenter(function(){
            $(".box-16").show(500)
        }).mouseleave(function(){
            $(".box-16").hide(500)
        })
        $(".Careers").mouseenter(function(){
            $(".box-17").show(500)
        }).mouseleave(function(){
            $(".box-17").hide(500)
        })

    } else {
        
    }
});