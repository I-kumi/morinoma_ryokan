$(window).on('scroll', function () {
    if (765 < $(this).scrollTop()) {
        $('.l-header__nav').addClass('change-color');
    } else {
        $('.l-header__nav').removeClass('change-color');
    }
});

$(window).on('scroll', function () {
    if (765 < $(this).scrollTop()) {
        $('.l-header__navLink').addClass('textColor');
    } else {
        $('.l-header__navLink').removeClass('textColor');
    }
});

$(window).on('scroll', function () {
    if (765 < $(this).scrollTop()) {
        $('.l-header__lang li').addClass('listBackground');
    } else {
        $('.l-header__lang li').removeClass('listBackground');
    }
});

$(window).on('scroll', function () {
    if (765 < $(this).scrollTop()) {
        $('.abc').addClass('textColor');
    } else {
        $('.abc').removeClass('textColor');
    }
});

$(window).on('scroll', function () {
    if (765 < $(this).scrollTop()) {
        $('.l-header__image').removeClass('l-header__animate');
    } else {
        $('.l-header__image').addClass('l-header__animate');
    }
});



$(function () {
    $(window).on('scroll', function () {
        var wh = $(window).height();
        if ($('.hoge1-js').offset().top - wh < $(this).scrollTop()) {
            $('.hogehoge1-js').addClass('grayscale');
        }
        if ($('.hoge2-js').offset().top - wh < $(this).scrollTop()) {
            $('.hogehoge2-js').addClass('grayscale');
        }
        if ($('.hoge3-js').offset().top - wh < $(this).scrollTop()) {
            $('.hogehoge3-js').addClass('grayscale');
        }
        if ($('.hoge4-js').offset().top - wh < $(this).scrollTop()) {
            $('.hogehoge4-js').addClass('grayscale');
        }
        if ($('.hoge5-js').offset().top - wh < $(this).scrollTop()) {
            $('.hogehoge5-js').addClass('grayscale');
        }
    });
});

//ドロップダウンのホバーイベント
$(function() {
    $("ul.l-header__langList li").hover(function() {
            $(".l-header__lang:not(:animated)", this).slideDown();
        }, function() {
            $(".l-header__lang", this).slideUp();
        });
});

$(function() {
    $('.l-header__boarder').on('click',function(){
        $('.l-header__boarder').toggleClass('panelactive');
        $('.l-header__menu').fadeToggle();
    });
});

$(function() {
    $('.l-header__boarder').on('click',function(){
        $('.l-header__textBox').toggleClass('backGround');
    });
});

$(function() {
    $('.l-header__boarder').click(function() {
        $('.l-header__boarder').toggleClass('changeBolder');
    });
});
