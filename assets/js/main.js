
//PC memu////
$(function() {
            var nav = $('.g-nav-list');
            //navの位置    
            var navTop = nav.offset().top;
            //スクロールするたびに実行
            $(window).scroll(function () {
                var winTop = $(this).scrollTop();
                //スクロール位置がnavの位置より下だったらクラスfixedを追加
                if (winTop >= navTop) {
                    nav.addClass('fixed')
                } else if (winTop <= navTop) {
                    nav.removeClass('fixed')
                }
            });
        });
//SP memu////
        $(function() {
            $('.hamburger').click(function() {
                $(this).toggleClass('active');
        
                if ($(this).hasClass('active')) {
                    $('.globalMenuSp').addClass('active');
                } else {
                    $('.globalMenuSp').removeClass('active');
                } 
            
            });
        });
        //メニュー内を閉じておく
        $(function() {
            $('.globalMenuSp a[href]').click(function() {
                $('.globalMenuSp').removeClass('active');
                $('.hamburger').removeClass('active');
        
            });
        });