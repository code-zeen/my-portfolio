$('.snb>li').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    $(this).children('.sub').stop().slideDown()
    $(this).siblings().children('.sub').stop().slideUp()
});

$('.snb>li.active').click(function(){
    $(this).removeClass('active')
    $(this).children('.sub').stop().slideUp()
})