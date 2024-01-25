// === BURGER menu button click
if (document.querySelector(".navbar-toggler")) {
	const burgerBtn = document.querySelector(".navbar-toggler");

	burgerBtn.addEventListener("click", (event) => {
		document.querySelector(".navbar-toggler > span").classList.toggle("open");
		document.querySelector(".navbar-nav").classList.toggle("show");
	});
}
// === end BURGER menu button click

// === SLIDER OUR-CLIENTS
if (document.querySelector(".slider-clients")) {
	const sliderLazy = new Swiper(".slider-clients", {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 0,

		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},

		breakpoints: {
			300: {
				slidesPerView: 2.2,
			},
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 4,
			},
		},
	});
}
// === end OUR-CLIENTS

// === SCROLL DRUGGING
if (document.getElementById("categoriesList")) {
	const box = document.getElementById("categoriesList");

	let isDown = false;
	let startX;
	let startY;
	let scrollLeft;
	let scrollTop;

	box.addEventListener("mousedown", (e) => {
		isDown = true;
		startX = e.pageX - box.offsetLeft;
		startY = e.pageY - box.offsetTop;
		scrollLeft = box.scrollLeft;
		scrollTop = box.scrollTop;
		box.style.cursor = "grabbing";
	});

	box.addEventListener("mouseleave", () => {
		isDown = false;
		box.style.cursor = "grab";
	});

	box.addEventListener("mouseup", () => {
		isDown = false;
		box.style.cursor = "grab";
	});

	document.addEventListener("mousemove", (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - box.offsetLeft;
		const y = e.pageY - box.offsetTop;
		const walkX = (x - startX) * 1; // Change this number to adjust the scroll speed
		const walkY = (y - startY) * 1; // Change this number to adjust the scroll speed
		box.scrollLeft = scrollLeft - walkX;
		box.scrollTop = scrollTop - walkY;
	});
}
// === end SCROLL DRUGGING

// === FOOTER LIST
if(document.querySelector('.js-footer-list')) {
	const footerBtns = document.querySelectorAll('.js-footer-list');
	footerBtns.forEach((btn) => {

		btn.addEventListener('click', (event) => {
			event.currentTarget.classList.toggle('active');
		});
	});
}
// === end FOOTER LIST
