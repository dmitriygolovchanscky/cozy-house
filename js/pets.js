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