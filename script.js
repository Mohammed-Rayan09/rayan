$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500)
        {
            $('.scroll-up-btn').addClass("show");
        }
        else
        {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //side-up script

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    
    // toggle menu/navbar script
    // typing animation script

    var typed = new Typed(".typing",{
    strings: [" Wordpress Developer"," Web Desinger"," Shopify Expert"," Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});

    var typed = new Typed(".typing-2",{
    strings: ["Wordpress Developer","Web Desinger","Shopify Expert","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});
    

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // //carousel script

    // $('.carousel').owlCarousel({

    // });
});




