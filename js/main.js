/**
 * Created by meangel on 16-12-1.
 */
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
});

// 导航滚动效果
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
});

// 导航条active随滚动而变换
window.onload = function () {
    window.onscroll = function () {

        var aboutT = document.getElementById("about").offsetTop,
            photosT = document.getElementById("photos").offsetTop,
            projectT = document.getElementById("project").offsetTop,
            blogT = document.getElementById("blog").offsetTop,
            contactT = document.getElementById("contact").offsetTop;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        var scrollTopPlus = scrollTop + clientHeight/2;

        var li = document.getElementsByTagName("header")[0].getElementsByClassName("nav")[0].getElementsByTagName("li");

        function rs() {
            for(var i=0; i<li.length; i++){
                li[i].setAttribute("class","");
            }
        }



        if(scrollTopPlus < aboutT) {
            rs();
            li[0].setAttribute("class","active");
        } else if(scrollTopPlus < photosT) {
            rs();
            li[1].setAttribute("class","active");
        } else if(scrollTopPlus < projectT) {
            rs();
            li[2].setAttribute("class","active");
        } else if(scrollTopPlus < blogT) {
            rs();
            li[3].setAttribute("class","active");
        } else if(scrollTopPlus < contactT) {
            rs();
            li[4].setAttribute("class","active");
        } else {
            rs();
            li[5].setAttribute("class","active");
        }
    }
};

// 防止网页内容被拖拽
function imgdragstart(){return false;}
document.ondragstart=imgdragstart;