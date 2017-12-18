$(document).ready(function(){
    var $button =$(".header").find("span");
    var $active =$(".header").find("nav");

    $button.on("click", function(ev){
        $active.toggleClass("active");
        $button.toggleClass("icon-cancel").fadeIn("slow");
    })

    // if ($(window).resize('(max-width: 600px)').matches){
    //     $button.removeClass("icon-menu");
    // }else{
    //     $button.addClass("icon-menu");
    // }
    
})

