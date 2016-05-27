function main() {
//hero slideshow
    $(".fullscreen").superslides({
        animation:"fade",
        play:6000
    });
};
function buton() {
        $(".custom-scroll-link").on("click", function() {
        var a = 74;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
}
function fani(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
    })
};
function idigal() {
     $("#idigal").magnificPopup({
        items: [
            {
                src:'media./idi1.jpg'
            },
            {
                src:"media/idi2.jpg"
            },
            {
                src:"media/idi3.jpg"
            },
            
        ],
        gallery: {
            enabled:true
        },
        type: "image",
        fixedContentPos: false,
    });
 };
function actgal() {
     $("#actgal").magnificPopup({
        items: [
            {
                src:'media./act1.jpg'
            },
            {
                src:"media/act2.jpg"
            },
            {
                src:"media/act3.jpg"
            },
        ],
        gallery: {
            enabled:true
        },
        type: "image",
        fixedContentPos: false,
    });
 };
 function quizgal() {
     $("#quizgal").magnificPopup({
        items: [
            {
                src:'media./quiz1.jpg'
            },
            {
                src:"media/quiz2.jpg"
            },
            {
                src:"media/quiz3.jpg"
            },
        ],
        gallery: {
            enabled:true
        },
        type: "image",
        fixedContentPos: false,
    });
 };
            $(".top-head").velocity({
                rotateZ:"4deg",
                top:"11px",
                translateY:"-1px",
                translateX:"1px",


            },
            {
                duration:1800,
                loop:true
            });
            $(".bottom-head").velocity({
                rotateZ:"-4deg",
                top:"59px",
                translateY:"0px",
                translateX:"-1px",


            },
            {
                duration:2000,
                loop:true
            })
function hover() {
    $(".rezerva").hover(function() {
        $(".top-head").velocity("stop", true).velocity({
            top:"5px",
             rotateZ:"5deg"
        },
            {duration:100,loop:true}),
        $(".bottom-head").velocity("stop",true).velocity({
            top:"65px",
            rotateZ:"5deg"
        },
            {duration:100,loop:true})
    }, function() {
         $(".top-head").velocity("stop",true).velocity({
            top:"10px",
        },
            {duration:100}
        ),
        $(".bottom-head").velocity("stop",true).velocity({
            top:"59px",
        },
            {duration:100}
        )

    }
    );
}


 function cerc() {
    $(".rezerva").click(function() {
        if(!$(".rezerva").hasClass("active") ) {
            $(".rezerva").addClass("active"),
      
            $(".cerc-anim").velocity({rotateZ:"0deg"},100),
            $(".mesaj").animate({width:"230px"},500,"easeOutBounce"),
            setTimeout(function() {
            $(".centru").velocity({opacity:"1",},500)
            }, 500)
        }else {
            
         setTimeout(function() {
            $(".centru").velocity({opacity:"0",},300)
            setTimeout(function() {
            $(".mesaj").velocity({width:"0px"},300),
            $(".cerc-anim").velocity({rotateZ:"22.5deg"},100)
        },500)}, 500),
                  setTimeout(function() {
            $(".rezerva").removeClass("active")
        },1300)
        }
    });
 };

$(document).ready(function() {
    var movementStrength = 10;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("body").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 3);
          var pageY = e.pageY - ($(window).height() / 3);
          var newvalueX = width * pageX * -1 - 0;
          var newvalueY = height * pageY * -1 - 0;
          $('.testare').css("left", newvalueX+"px     ");
          $('.testare').css("bottom", newvalueY+"px     ");
          $('.testare1').css("right", newvalueX+"px     ");
          $('.testare1').css("top", newvalueY+"px     ");
});
    main();
    fani();
    idigal();
    actgal();
    quizgal();
    cerc();
    hover();
    buton();
    });