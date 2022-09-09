// 햄버거 클릭하면 active가 .gnb, .my-menu에 생김
$('.hamburger-menu').click(function(){
    $(this).toggleClass('active')
    $('.gnb, .my-menu').toggleClass('on')
})