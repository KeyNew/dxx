// JavaScript Document
$(document).ready(function() {
	// Loading page
	var loaderPage = function() {
		$("#loaderPage").fadeOut(1000);
	};

	loaderPage();

	//页面动画
	if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true
		});
		wow.init();
	};

	$(window).scroll(function() {
		var Htop = $(window).scrollTop();
		if(Htop > 30) {
			$('#sitecontent').find(".header").addClass('min');
			$('#sitecontent').find(".space").addClass('min-space');
		} else {
			$('#sitecontent').find(".header").removeClass('min');
			$('#sitecontent').find(".space").removeClass('min-space');
		}
	});

	//首页案例
	$('#case-nav').find('a').each(function(i) {
		$(this).click(function() {
			$(this).parent('li').addClass('on').siblings('li').removeClass('on');
			$('.all-case').find('.case-item').eq(i).fadeIn(1000).siblings('.case-item').hide();
			case_all();
		})
	})

	var case_all = function() {
		var swiper = new Swiper('.case-item', {
			pagination: '.case-all-round',
			slidesPerView: 1,
			paginationClickable: true,
			loop: true,
			//autoplay : 3000,
			speed: 1000,
		});
	}

	case_all();

	//首页商店
	var swiper = new Swiper('.swiper-store', {
		pagination: '.swiper-store-pag',
		nextButton: '.store-next',
		prevButton: '.store-prev',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 30,
		loop: true,
		//autoplay: 5000,
		speed: 300,
	});

	//首页新闻
	$('#news-nav').find('a').each(function(i) {
		$(this).click(function() {
			$(this).parent('li').addClass('on').siblings('li').removeClass('on');
			$('.all-news').find('.news-item').eq(i).fadeIn(1000).siblings('.news-item').hide();
			news_all();
		})
	})

	var news_all = function() {
		var swiper = new Swiper('.swiper-news-con', {
			pagination: '.swiper-news',
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 30,
			loop: true,
			speed: 300
		});
	}
	
	news_all();

	//右边浮动
	$(window).scroll(function() {
		var Htop = $(window).scrollTop();
		if(Htop > 100) {
			$('.float-right').fadeIn();
		} else {
			$('.float-right').fadeOut();
		}
	});
	
	
	$('.float-right .phone').mouseover(function() {
		$('.eject-two').fadeIn();
		})
		$('.float-right .phone').mouseleave(function() {
			$('.eject-two').hide();
		})
		$('.float-right .wx').click(function() {
			$('.eject').fadeIn();
		})
		$('.eject').click(function() {
			$(this).fadeOut();
		})

		$(".float-right .top").click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
})