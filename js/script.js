const iconMenu = document.querySelector('.header__burger,.header__menu');
const menuBody = document.querySelector('.header__menu');
const closeMenu = document.querySelector('.close__menu')
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		body.classList.toggle('menu');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
};
if (closeMenu) {
	closeMenu.addEventListener("click", function (e) {
		body.classList.remove('menu');
		iconMenu.classList.remove('active');
		menuBody.classList.remove('active');
	});
};

document.querySelectorAll('a[href*="#"]').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		body.classList.remove('menu');
		iconMenu.classList.remove('active');
		menuBody.classList.remove('active');

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);


		const topOffset = 0;
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});

const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
	slidesPerView: 3,
	spaceBetween: 50,
	loop: true,
	speed: 500,
	breakpoints: {
		320: {
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: true,
			},
		},
		630: {
			slidesPerView: 2,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: true,
			},
		},
		730: {

			slidesPerView: 2,
		},
		1050: {
			slidesPerView: 3,
		},
	},

});

$(document).ready(function () {

	let button = $('.back-to-top');

	$(window).on('scroll', function () {
		if ($(window).scrollTop() >= 400) { //200 - кол-во пикселей при скролле//
			$('.back-to-top').addClass('visible');
		} else {
			$('.back-to-top').removeClass('visible');
		}
	});

	button.on('click', function () {
		$('html,body').animate({ scrollTop: 0 }, 800); //800 - длительность прокрутки//
	});
});












