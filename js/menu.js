
$('.openMenu').click(function(){
    $('.menu').removeClass('d-flex justify-content-center');
    $('.menuUp').addClass('active');
    $('.burgerMenu').addClass('activeBurger');
    $(".active").slideDown(700);
    $(".openMenu").css("visibility", "hidden");
    $(".closeMenu").slideDown(700);
    
});
$('.closeMenu').click(function(){
    
    $('.menu').removeClass('d-flex justify-content-center');
    $(".active").slideUp(700);
    $(".closeMenu").slideUp(700);
    setTimeout(
        function() 
        {
            $(".openMenu").css("visibility", "visible");
            $('.menuUp').removeClass('active');
            $('.burgerMenu').removeClass('activeBurger');
            $('.menu').addClass('d-flex justify-content-center');
        }, 700);
});
$(window).on('resize', function(){
    if($(window).width() > 991) {
        $('.menuUp').css("display", "block");
    }
    if($(window).width() <= 991) {
        $('.menuUp').css("display", "none");
    }
});
