// === BURGER menu button click
if (document.querySelector(".navbar-toggler")) {
	const burgerBtn = document.querySelector(".navbar-toggler");
	const mobileNav = document.querySelector(".navbar-menu__toggle");

	burgerBtn.addEventListener("click", (event) => {
		document.querySelector(".navbar-toggler > span").classList.toggle("open");
		mobileNav.classList.toggle("show");
		document.body.classList.toggle("no-scroll");
	});
}
// === end BURGER menu button click

// === SLIDER OUR-CLIENTS
if (document.querySelector(".slider-clients")) {
	const sliderLazy = new Swiper(".slider-clients", {
		loop: true,
		slidesPerView: 2.2,
		spaceBetween: 0,

		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},

		breakpoints: {
			300: {
				slidesPerView: 2.2,
			},
			1024: {
				slidesPerView: 4,
			},
		},
	});
}
// === end OUR-CLIENTS

// === SLIDER SAME-CLIENTS
if (document.querySelector(".same-clients")) {
	const sliderLazy = new Swiper(".same-clients", {
		loop: true,
		slidesPerView: 2.2,
		spaceBetween: 10,

		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},

		breakpoints: {
			300: {
				slidesPerView: 2.2,
			},
			769: {
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 4,
			},
		},
	});
}
// === end SAME-CLIENTS

// === SLIDER DOP-INFO
if (document.querySelector(".dop-info")) {
	const sliderLazy = new Swiper(".dop-info", {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 20,

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
// === end DOP-INFO

// === SLIDER OPPORTUNITY-SLIDER
if (document.querySelector(".opportunity-slider")) {
	if (window.innerWidth > 767) {
		const sliderLazy = new Swiper(".opportunity-slider", {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 20,

			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},

			breakpoints: {
				768: {
					slidesPerView: 2.2,
				},
				1024: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
			},
		});
	}
}
// === end OPPORTUNITY-SLIDER

// === SLIDER our-projects__gallery
if (document.querySelector(".our-projects__gallery")) {
	const sliderOnMobile = new Swiper(".our-projects__gallery", {
		slidesPerView: 2.2,
		spaceBetween: 10,
		breakpoints: {
			768: {
				slidesPerView: "auto",
			},
		},
		on: {
			resize: function enableOnMobile(sliderOnMobile) {
				if (768 < window.innerWidth) {
					sliderOnMobile.disable();
					sliderOnMobile.el.classList.add("-non-slider");
				} else {
					sliderOnMobile.enable();
					sliderOnMobile.el.classList.remove("-non-slider");
				}
			},
		},
	});
}
// === end our-projects__gallery

// === SCROLL DRUGGING BLOG
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
// === end SCROLL DRUGGING BLOG
// === SCROLL DRUGGING BREADCRUMBS
if (document.querySelector(".breadcrumbs ul")) {
	const box = document.querySelector(".breadcrumbs ul");

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
// === end SCROLL DRUGGING BREADCRUMBS

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
	const dropMenu = document.querySelector(".dropdown-menu");

	menuLinks.forEach((item) => {
		item.addEventListener("mouseover", (event) => {
			if (window.innerWidth > 1024) {
				if (item.classList.contains("dropdown-toggle")) {
					delAllOpened(menuDropItems);
					item.classList.add("slide");
					mainSect.classList.add("bg");
				} else if (mainSect.classList.contains("bg")) {
					mainSect.classList.remove("bg");
					delAllOpened(menuDropItems);
				}
			}
		});
	});

	if (window.innerWidth > 1024) {
		dropMenu.addEventListener("mouseleave", (event) => {
			if (mainSect.classList.contains("bg")) {
				mainSect.classList.remove("bg");
				delAllOpened(menuDropItems);
			}
		});

		document.body.addEventListener("click", () => {
			delAllOpened(menuDropItems);
			mainSect.classList.remove("bg");
		});
	}

	menuDropItems.forEach((item) => {
		item.addEventListener("click", (event) => {
			if (window.innerWidth < 1025) {
				event.preventDefault();

				if (item.classList.contains("slide")) {
					delAllOpened(menuDropItems);
				} else {
					item.classList.add("slide");
				}
			}
		});
	});
}

function delAllOpened(el) {
	el.forEach((item) => {
		if (item.classList.contains("slide")) {
			item.classList.remove("slide");
		}
	});
}
// === end MENU DROPDOWN

// === start ASIDE MENU DROPDOWN
if (document.querySelector(".aside-grid__item.drop-list")) {
	const menuLinks = document.querySelectorAll(".drop-list .drop-link");

	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener("click", (e) => {
			e.stopPropagation;
			e.currentTarget.closest(".drop-list").classList.toggle("open");
			e.currentTarget.closest("span").nextElementSibling.classList.toggle("slideIn");
		});
	});
}

if (document.querySelector(".product-catalog__filter-toggle")) {
	const productFilterBtnList = document.querySelector(".product-catalog__filter-toggle");

	productFilterBtnList.addEventListener("click", (e) => {
		e.currentTarget.classList.toggle("opened");
	});
}
// === end ASIDE MENU DROPDOWN

// === start ASIDE MENU Active	===
if (document.querySelector(".aside-grid__item")) {
	const asideMenuItems = document.querySelectorAll(".aside-grid__item");

	asideMenuItems.forEach( (item) => {
		item.addEventListener("click", (e) => {
			e.currentTarget.classList.add("active");
		});
	});
}

document.addEventListener("DOMContentLoaded", function(){
    if (document.querySelector(".aside-grid__item")) {
		let prodName = document.querySelector(".product-grid").dataset.grid;
		const asideNames = document.querySelectorAll('.aside-grid__item');
		let filterMobileCaption = document.querySelector('.product-catalog__filter-toggle span');

		delPastActiveAsideItem(asideNames, prodName);

		asideNames.forEach((item) => {
			if(item.dataset.grid === prodName){
				item.classList.add('active');
				filterMobileCaption.innerText = item.querySelector('span a').innerText;
			}
		});
	}
});

function delPastActiveAsideItem(elems, name) {
	elems.forEach((el) => {
		if(el.classList.contains('active')){
			el.classList.remove('active');
		}
	});
}
// === end ASIDE MENU Active

// === start READ MORE
if (document.querySelector(".jsReadMore")) {
	const readMoreBtns = document.querySelectorAll(".jsReadMore");

	readMoreBtns.forEach((rmBtn) => {
		rmBtn.addEventListener("click", (e) => {
			e.currentTarget.previousElementSibling.classList.toggle("full-height");
		});
	});
}
// === end READ MORE

// === start TOGGLE SCROLL
let disableScroll = function () {
	let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
	document.body.classList.add("no-scroll");
	document.body.style.paddingRight = paddingOffset;
};

let enableScroll = function () {
	document.body.classList.remove("no-scroll");
	document.body.style.paddingRight = 0;
};
// === end TOGGLE SCROLL

// === start MODAL CALLBACK
if (document.querySelector(".callback-bg")) {
	const btnsOpen = document.querySelectorAll(".jsOpenModal");
	const modalWin = document.querySelector(".callback-bg");
	const closeWin = document.querySelector(".callback-close");

	btnsOpen.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			modalWin.classList.add("show");
			disableScroll();
		});
	});

	closeWin.addEventListener("click", (event) => {
		modalWin.classList.remove("show");
		enableScroll();
	});
}
// === end MODAL CALLBACK

// === start MODAL SEARCH
if (document.querySelector(".modal-search__bg")) {
	const btnsOpen = document.querySelectorAll(".jsOpenSearch");
	const searchWin = document.querySelector(".modal-search__bg");
	const closeWin = document.querySelector(".modal-search__close");

	btnsOpen.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			searchWin.classList.add("show");
			disableScroll();
		});
	});

	closeWin.addEventListener("click", (event) => {
		searchWin.classList.remove("show");
		enableScroll();
	});
}

// === end MODAL SEARCH

/* === start DROPDOWN fields ==== */
if (document.querySelector(".drop")) {
	const lists = document.querySelectorAll(".drop");
	dropList(lists);

	function dropList(els) {
		els.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.currentTarget.classList.toggle("show");
				let content = e.currentTarget.nextElementSibling;
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				}
			});
		});
	}
}
/* === end DROPDOWN fields ==== */

// === BLOGPOST-SLIDER
if (document.querySelector(".blogpost-slider")) {
	const sliderBlogpost = new Swiper(".blogpost-slider", {
		loop: true,
		slidesPerView: 2.2,
		spaceBetween: 30,

		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},

		breakpoints: {
			1024: {
				slidesPerView: 4,
			},
		},
		on: {
			resize: function enableOnlyMobile(sliderBlogpost) {
				if (768 > window.innerWidth) {
					sliderBlogpost.disable();
					sliderBlogpost.el.classList.add("-non-slider");
				} else {
					sliderBlogpost.enable();
					sliderBlogpost.el.classList.remove("-non-slider");
				}
			},
		},
	});
}
// === end BLOGPOST-SLIDER

// === start TAB
if (document.querySelector(".drop-head")) {
	const acc = document.getElementsByClassName("drop-head");

	for (let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			if (!this.classList.contains("active")) {
				closeAccTabs();
				toggleAcc(this);
			} else {
				closeAccTabs();
			}
		});
	}

	function toggleAcc(e) {
		e.classList.toggle("active");
		var panel = e.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}

	function closeAccTabs() {
		for (let i = 0; i < acc.length; i++) {
			if (acc[i].classList.contains("active")) {
				acc[i].classList.remove("active");
				acc[i].nextElementSibling.removeAttribute("style");
			}
		}
	}

	// Open first accordion tab by default
	function openFirstAccTab() {
		if (!acc[0].classList.contains("active")) {
			acc[0].classList.add("active");
			acc[0].nextElementSibling.style.maxHeight = acc[0].nextElementSibling.scrollHeight + "px";
		}
	}

	// When resizing - auto-height adjustment
	window.addEventListener(
		"resize",
		function () {
			for (let i = 0; i < acc.length; i++) {
				if (acc[i].classList.contains("active")) {
					acc[i].nextElementSibling.style.maxHeight = acc[i].nextElementSibling.scrollHeight + "px";
				}
			}
		},
		true
	);
}
// === end TAB

// === start FORMS handler

// -- thx for sending form
function messageSent(frm) {
	let div = document.createElement("div");
	div.className = "callback-thx";
	div.innerHTML = "<span>Сообщение отправлено!</span>" + "<span>Спасибо за обращение в нашу компанию!</span>";
	frm.append(div);
}

if (document.querySelector(".jsForm")) {
	const forms = document.querySelectorAll(".jsForm");

	forms.forEach((form) => {
		form.addEventListener("submit", sendFormData);

		const fields = form.querySelectorAll("[data-validate]");
		fields.forEach((field) => {
			field.addEventListener("focusout", (e) => {
				validation(form);
			});
		});
	});

	async function sendFormData(event) {
		event.preventDefault();

		if (validation(this) === true) {
			console.log("Validation started");

			const myFormData = new FormData(event.target);
			const fileField = event.target.querySelector('input[type="file"]');

			if (myFormData.has("userAccept", "on")) {
				myFormData.set("subject", window.location.href);
				myFormData.set("title", "Задайте свой вопрос");
				myFormData.delete("userAccept");
				if (myFormData.has("userLoad")) {
					myFormData.append("userLoad", fileField.files[0]);
				}
			} else {
				return console.warn("Error form data loading..");
			}

			await fetch("sender.php", {
				method: "POST",
				body: myFormData,
			})
				.then((response) => {
					if (response.status === 200) {
						if (document.querySelector(".callback-bg").classList.contains("show")) {
							messageSent(this);
							setTimeout(() => {
								document.querySelector(".callback-bg").classList.remove("show");
								enableScroll();
								document.querySelector(".callback-thx").remove();
							}, 2600);
						} else {
							messageSent(this);
							setTimeout(() => {
								document.querySelector(".callback-thx").remove();
							}, 2600);
						}
					}
				})
				.catch((error) => {
					console.error(error);
				});

			event.target.reset();
		} else {
			console.log("Validation FALSE");
		}
	}
}

if(document.querySelector("input[type=file]")) {
	const files = document.querySelectorAll("input[type=file]");
	files.forEach((file) => {
		file.addEventListener("change", (e) => {
			file.closest('form').querySelector('.download-label').textContent = file.files[0].name;
		});
	});
}

// -- form validation
function validation(form) {
	delFormError(form);
	let result = true;

	const fieldsToValidate = form.querySelectorAll("[data-validate]");

	fieldsToValidate.forEach((field) => {
		const fieldType = field.type;
		switch (fieldType) {
			case "text": {
				if (validateTextField(field)) {
					field.value = convertHTML(field.value);
				} else {
					result = false;
				}
				break;
			}
			case "tel": {
				if (!validateTelField(field)) {
					result = false;
				}
				break;
			}
			case "email": {
				if (!validateEmailField(field)) {
					result = false;
				}
				break;
			}
			case "textarea": {
				if (validateAreaField(field)) {
					field.value = convertHTML(field.value);
				} else {
					result = false;
				}
				break;
			}
			case "checkbox": {
				if (!validateCheckboxField(field)) {
					result = false;
				}
				break;
			}
		}
	});
	return result;
}

// -- validate field errors
const listErrors = ["Поле долно быть заполнено", "Необходимо ввести корректные данные", "Скрипты и ссылки недопустимы в этом поле"];

// -- validate text field
function validateTextField(el) {
	if (el.value === "") {
		addFormError(el, listErrors[0]);
		return false;
	} else {
		return true;
	}
}

// -- validate tel field
function validateTelField(el) {
	let res = true;
	let tl = el.value;
	if (tl === "") {
		addFormError(el, listErrors[0]);
		res = false;
	} else if (validateTel(tl) === null) {
		addFormError(el, listErrors[1]);
		res = false;
	}
	return res;
}

// -- validate email field
function validateEmailField(el) {
	let res = true;
	let mail = el.value;
	if (mail == "") {
		addFormError(el, listErrors[0]);
		res = false;
	} else if (validateEmail(mail) === null) {
		addFormError(el, listErrors[1]);
		res = false;
	}
	return res;
}

// -- validate textarea field
function validateAreaField(el) {
	let res = true;
	if (el.value.length < 1) {
		addFormError(el, listErrors[0]);
		res = false;
	}
	return res;
}

// -- validate checkbox field
function validateCheckboxField(el) {
	let res = true;
	if (el.checked == false) {
		addFormError(el, "");
		res = false;
	}
	return res;
}
// ================================
// -- convert tags to text
function convertHTML(str) {
	const htmlEntities = {
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;",
		"=": "&#x3d;",
	};
	return str.replace(/([<>\"'\=])/g, (match) => htmlEntities[match]);
}

// -- check tel
const validateTel = (t) => {
	return t.match(/^((8|\+7)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d[\- ]?\d[\- ]?\d[\- ]?\d[\- ]?\d(([\- ]?\d)?[\- ]?\d)?$/);
};

// -- check email
const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};

// -- form add error message
function addFormError(el, errMsg = "") {
	let parent = el.closest("label");
	parent.classList.add("error-valid");

	if (errMsg) {
		let span = document.createElement("span");
		span.classList.add("error-msg");
		span.innerText = errMsg;
		parent.insertBefore(span, parent.children[0]);
	}
}

// -- form delete error message
function delFormError(f) {
	const fieldsToValidate = f.querySelectorAll("[data-validate]");
	let parent;

	fieldsToValidate.forEach((el) => {
		parent = el.closest("label");

		if (parent.classList.contains("error-valid")) {
			parent.classList.remove("error-valid");
		}
		if (parent.children[0].classList.contains("error-msg")) {
			parent.children[0].remove();
		}
	});
}

// === end FORMS handler

// === start BLOG TAB
const fadeIn = (el, timeout, display) => {
	el.style.opacity = 0;
	el.style.display = display || "block";
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
};

function hideAll(els) {
	els.forEach((item) => {
		item.style.display = "none";
	});
}

function delAllActiveBtns(els) {
	els.forEach((item) => {
		item.contains.classList = "active" ? item.classList.remove("active") : false;
	});
}

if (document.querySelector(".thb") && document.querySelector(".tbc")) {
	const btns = document.querySelectorAll(".thb");
	const blocks = document.querySelectorAll(".tbc");
	btns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			let currBtn = e.currentTarget.dataset.btn;
			let currBlock = document.querySelector("[data-text=" + currBtn + "]");

			delAllActiveBtns(btns);
			let isClass = e.currentTarget.contains.classList == "active";
			!isClass ? e.currentTarget.classList.add("active") : false;

			hideAll(blocks);

			if (currBlock) {
				fadeIn(currBlock, 1000, "grid");
			} else {
				fadeIn(blocks[0], 1000, "grid");
			}
		});
	});
}

// === end BLOG TAB

// === start BLOG POSTLINK
if (document.querySelector("[data-postlink]")) {
	const allPosts = document.querySelectorAll("[data-postlink]");

	allPosts.forEach((post) => {
		post.addEventListener("click", (e) => {
			let link = e.currentTarget.dataset.postlink;
			location.href = link;
		});
	});
}
// === end BLOG POSTLINK
