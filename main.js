document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.querySelector('.menu-toggle');
	const navLinks = document.querySelector('.mobile-nav');

	menuToggle.addEventListener('click', () => {
		navLinks.classList.toggle('show');
		menuToggle.classList.toggle('active');
	});
});

const swiper = new Swiper('.swiper', {
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const elToggle = document.querySelector('.mobile-nav__dropdown-menu');
const elBlock = document.querySelector('.mobile-nav__dropdown');

elBlock.addEventListener('click', () => {
	elToggle.classList.toggle('show');
});

// elToggle.addEventListener('click', () => {
// 	if (elBlock.style.height === '0px') {
// 		elBlock.style.height = `${elBlock.scrollHeight}px`;
// 	} else {
// 		elBlock.style.height = `${elBlock.scrollHeight}px`;
// 		window.getComputedStyle(elBlock, null).getPropertyValue('height');
// 		elBlock.style.height = '0';
// 	}
// });

// elBlock.addEventListener('transitionend', () => {
// 	if (elBlock.style.height !== '0px') {
// 		elBlock.style.height = 'auto';
// 	}
// });
