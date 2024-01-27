// === BURGER menu button click
if (document.querySelector(".navbar-toggler")) {
	const burgerBtn = document.querySelector(".navbar-toggler");
	const mobileNav = document.querySelector(".navbar-menu__toggle");

	burgerBtn.addEventListener("click", (event) => {
		document.querySelector(".navbar-toggler > span").classList.toggle("open");
		mobileNav.classList.toggle("show");
		document.body.classList.toggle('no-scroll');
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
if (document.querySelector(".js-footer-list")) {
	const footerBtns = document.querySelectorAll(".js-footer-list");
	footerBtns.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			event.currentTarget.classList.toggle("active");
		});
	});
}
// === end FOOTER LIST

// === MENU DROPDOWN
if (document.querySelector(".dropdown-toggle")) {
	const menuDropItems = document.querySelectorAll(".dropdown-toggle");
	const menuLinks = document.querySelectorAll(".nav-link");
	const mainSect = document.querySelector(".main");
	const mobileBg = document.querySelector(".navbar-menu__toggle");
	if (window.innerWidth > 1200) {
		menuLinks.forEach((item) => {
			item.addEventListener("mouseover", (event) => {
				if (item.classList.contains("dropdown-toggle")) {
					delAllOpened(menuDropItems);
					item.classList.add("slide");
					mainSect.classList.add("bg");
				} else if (mainSect.classList.contains("bg")) {
					mainSect.classList.remove("bg");
					delAllOpened(menuDropItems);
				}
			});
		});

		document.body.addEventListener("click", () => {
			delAllOpened(menuDropItems);
			mainSect.classList.remove("bg");
		});

	} else {
		menuLinks.forEach((item) => {
			item.addEventListener("click", (event) => {
				event.stopPropagation;
				if (item.classList.contains("dropdown-toggle")) {
					item.classList.toggle("slide");
				} 
			});
		});
	}
}

function delAllOpened(el) {
	el.forEach((item) => {
		if (item.classList.contains("slide")) {
			item.classList.remove("slide");
		}
	});
}
// === end MENU DROPDOWN
