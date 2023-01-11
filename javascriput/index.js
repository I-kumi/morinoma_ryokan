// ページがロードされたら要素をフェードインさせる
$(window).on('load',function(){
    setTimeout(function(){
		$('.l-header, .l-main__logoBox, .l-main__arrow').fadeIn(1000);
	},1000);
});

//メインページがheader部分までスクロールされたら背景色をつけるクラスを付与
$(window).on('scroll', function () {
    if (765 < $(this).scrollTop()) {
        $('.l-header__nav').addClass('js-background');
    } else {
        $('.l-header__nav').removeClass('js-background');
    }
});

//header部分に背景色が付いたら文字色を切り替えるクラスを付与
$(window).on('scroll', function () {
    if (765 < $(this).scrollTop()) {
        $('.l-header__navLink').addClass('js-textColor');
    } else {
        $('.l-header__navLink').removeClass('js-textColor');
    }
});

$(window).on('scroll', function () {
    if (765 < $(this).scrollTop()) {
        $('.l-header__langList').addClass('js-langColor');
    } else {
        $('.l-header__langList').removeClass('js-langColor');
    }
});

//メインページがheader部分までスクロールされた時に▼の色を変更する
$(window).on('scroll', function () {
    if (765 < $(this).scrollTop()) {
        $('.l-header__navLang').removeClass('js-triangle');
    } else {
        $('.l-header__navLang').addClass('js-triangle');
    }
});

//メインページがheader部分までスクロールされたらロゴ画像を表示する
$(window).on('scroll', function () {
    if (765 < $(this).scrollTop()) {
        $('.l-header__img').removeClass('js-appear');
    } else {
        $('.l-header__img').addClass('js-appear');
    }
});

// ドロップダウンメニュー
$(function() {
    //.dropdown-menuを一旦隠す
    $('.l-header__langList').find('.l-header__listBox').hide();
    //.menuをhoverした場合
    $('.l-header__langList').hover(function(){
        //.dropdown-menuをslideDown
        $(".l-header__listBox:not(:animated)", this).slideDown();
        //hoverが外れた場合
    }, function(){
        //.dropdown-menuをslideUp
        $(".l-header__listBox",this).slideUp();
    });
});

//header部分に背景色が付いたらドロップダウンメニュー部分に背景色をつけるクラスを付与
$(window).on('scroll', function () {
    if (765 < $(this).scrollTop()) {
        $('.l-header__listBox').addClass('js-listBackground');
    } else {
        $('.l-header__listBox').removeClass('js-listBackground');
    }
});


//スクロールで画像の色切り替え
$(function () {
    $(window).on('scroll', function () {
        var wh = $(window).height();
        if ($('.js-getHeight1').offset().top - wh < $(this).scrollTop()) {
            $('.js-coloring1').addClass('js-grayscale');
        }
        if ($('.js-getHeight2').offset().top - wh < $(this).scrollTop()) {
            $('.js-coloring2').addClass('js-grayscale');
        }
        if ($('.js-getHeight3').offset().top - wh < $(this).scrollTop()) {
            $('.js-coloring3').addClass('js-grayscale');
        }
        if ($('.js-getHeight4').offset().top - wh < $(this).scrollTop()) {
            $('.js-coloring4').addClass('js-grayscale');
        }
        if ($('.js-getHeight5').offset().top - wh < $(this).scrollTop()) {
            $('.js-coloring5').addClass('js-grayscale');
        }
    });
});

//ナビゲーションメニューをクリックでモーダルの表示切り替えをする
$(function() {
    $('.l-header__boarder').on('click',function(){
        $('.l-header__boarder').toggleClass('js-active');
        $('.l-header__menu').fadeToggle();
    });
});

//ナビゲーションメニューをクリックでboarderを×にする
$(function() {
    $('.l-header__boarder').click(function() {
        $('.l-header__boarder').toggleClass('js-bolder');
    });
});

//ナビゲーションメニューをクリックでモーダルに背景色をつけるクラスを付与
$(function() {
    $('.l-header__boarder').on('click',function(){
        $('.l-header__textBox').toggleClass('js-modalBackground');
    });
});