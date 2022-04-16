$(function () {
	
	$('.p-header__menu').click(function () {
		$(this).toggleClass('active');
		$('.zdo_drawer_bg').fadeToggle();
		$('.p-aside').toggleClass('open');
    $('body').toggleClass('open');
	})
	$('.p-aside__button').click(function () {
		// $(this).fadeOut();
    $('.zdo_drawer_bg').fadeOut();
		$('.p-header__menu').removeClass('active');
		$('.p-aside').removeClass('open');
    $('body').removeClass('open');
	});
})




// .p-header__menu：ヘッダーのメニューボタン
// .zdo_drawer_bg：全体にかかる黒背景
// .p-aside：サイドバー
// .p-aside__button：サイドバーの☓ボタン







// $(function () {
	
// 	$('.zdo_drawer_button').click(function () {
// 		$(this).toggleClass('active');
// 		$('.zdo_drawer_bg').fadeToggle();
// 		$('nav').toggleClass('open');
// 	})
// 	$('.zdo_drawer_bg').click(function () {
// 		$(this).fadeOut();
// 		$('.zdo_drawer_button').removeClass('active');
// 		$('nav').removeClass('open');
// 	});
// })