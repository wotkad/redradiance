/* eslint-disable no-undef */
$(document).ready(function() {
	function checkNavInit() {
		let e = $('.head');
		let f = $('.header');
		let mobMenu = $('.header__mob');
		if (window.pageYOffset !== 0) {
			mobMenu.css('paddingTop', '98px');
			e.addClass('head-active');
			f.addClass('header-active');
			TweenMax.fromTo(f, 1, {
				opacity: 1,
				x: 0
			}, {
				opacity: 1,
				x: 0
			});
		} else {
			mobMenu.css('paddingTop', '78px');
			e.removeClass('head-active');
			f.removeClass('header-active');
		}
	}
	checkNavInit();

	function scrollCheckNav() {
		$(window).on('scroll', () => {
			checkNavInit();
		});
	}
	scrollCheckNav();

	function checkNav() {
		checkNavInit();
	}
	checkNav();
	(function render() {
		let render = $('.render');
		let tl = new TimelineLite();
		tl.fromTo(render, 0.01, {
			opacity: 1,
			zIndex: 1
		}, {
			opacity: 0,
			zIndex: -1
		}).delay(0.01).call(hideRender);

		function hideRender() {
			$(render).remove();
		}
	})();
	$(document).ready(() => {
		Barba.Pjax.start();
		Barba.Prefetch.init();
		Barba.Dispatcher.on('newPageReady', () => {
			(() => {
				$('.home__block-item').addClass('stylesY');
				$('.home__block-item-text').addClass('stylesX');
				$('.header').addClass('stylesX');
				TweenMax.to('.header', 0.5, {
					opacity: 1,
					x: 0
				});
				$('.home__block:nth-child(1)').addClass('stylesX');
				$('.home__block:nth-child(2)').addClass('stylesX');
				if (window.pageYOffset !== 0) {
					$('.head').addClass('head-active');
					$('.header').addClass('header-active');
				}
			})();
			checkUrl();
			activeLinkClass();
		});
		Barba.Dispatcher.on('transitionCompleted', () => {
			scrollCheckNav();
			checkNav();
			countText();
			showServices();
			projectSlider();
			menuToggle();
			showFooter();
			showPopup();
			yaMaps();
			teamSlider();
			inputMask();
			sendPopup();
			sendForm();
			sendFormSidebar();
			sendFormSidebarCallback();
			sendFormSidebarService();
			sendFormSidebarCallbackService();
			sendFormContact();
			sendFormContactSubscribe();
			sendFormSideService();
			counterInViewPort();
			checkFile();
			loadNews();
			loadNewsFaq();
		});
		let FadeTransition = Barba.BaseTransition.extend({
			start: function() {
				Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
			},
			fadeOut: function() {
				return $(this.oldContainer).animate({
					opacity: 0
				}).promise();
			},
			fadeIn: function() {
				$(window).scrollTop(0);
				let _this = this;
				let $el = $(this.newContainer);
				$(this.oldContainer).hide();
				$el.css({
					visibility: 'visible',
					opacity: 0
				});
				$el.animate({
					opacity: 1
				}, 100, () => {
					_this.done();
				});
			}
		});
		Barba.Pjax.getTransition = () => {
			return FadeTransition;
		};

		function homeTween() {
			TweenMax.to('.header', 0.5, {
				opacity: 1,
				x: 0
			});
			TweenMax.to('.home__block:nth-child(1)', 0.5, {
				opacity: 1,
				x: 0
			});
		}
		homeTween();

		function homeTweenSecondBlock() {
			let tl = new TimelineLite();
			tl.delay(0.35).fromTo('.home__block:nth-child(2)', 0.8, {
				opacity: 0,
				x: -20
			}, {
				opacity: 1,
				x: 0
			});
		}
		homeTweenSecondBlock();

		function showSymbols() {
			let tl = new TimelineLite();
			tl.delay(1).staggerFromTo('.home__block-item', 0.6, {
				opacity: 0,
				y: -20
			}, {
				opacity: 1,
				y: 0
			}, 0.5).staggerFromTo('.home__block-item-text', 0.6, {
				opacity: 0,
				x: -5
			}, {
				opacity: 1,
				x: 0
			}, 0.3);
		}
		showSymbols();

		function showServices() {
			let targetLink = $('.services__button');
			let targetOverlay = $('.services__overlay');
			let targetContent = $('.services');
			targetLink.on('click', (e) => {
				let _this = targetLink;
				e.preventDefault();
				targetContent.addClass('services__active');
				targetOverlay.addClass('services__overlay__active');
				_this.addClass('services__button__active');
			});
		}
		showServices();

		function menuToggle() {
			let body = document.body;
			let button = document.querySelectorAll('.callback');
			let showButton = document.querySelector('#toggle');
			let items = document.querySelectorAll('.header__mob-menu li');
			let logo = document.querySelector('.header__logo');
			let currentLink = window.location.origin + '/privacy-policy/';
			function hideHemu() {
				scrollLock.toggle();
				$(showButton).removeClass('show');
				$(showButton).addClass('callback');
				TweenMax.to('.header__mob-bg', 0.5, {
					opacity: 0,
					zIndex: -1
				});
				TweenMax.to('.header__mob', 0.5, {
					opacity: 0,
					zIndex: -1
				});
				TweenMax.to('.header__mob-menu', 0.2, {
					opacity: 0,
					zIndex: -1,
					x: 0
				});
				TweenMax.to('.header__mob-menu li', 0.2, {
					opacity: 0,
					zIndex: -1,
					x: 0
				});
				TweenMax.to('.header__mob-contact', 0.2, {
					opacity: 0,
					zIndex: -1,
					x: 0
				});
				TweenMax.fromTo('.header__button-close', 0.4, {
					opacity: 1,
					y: 0
				}, {
					opacity: 0,
					y: -15
				});
				TweenMax.fromTo('.header__button-menu', 0.4, {
					opacity: 0,
					y: 15
				}, {
					opacity: 1,
					y: 0
				});
				body.classList.remove('menu-active');
			}
			for (let i = 0; i < items.length; i++) {
				items[i].onclick = function() {
					hideHemu();
				};
			}
			if (currentLink == window.location.origin + '/privacy-policy/') {
				scrollLock.show();
			}
			$(logo).on('click', () => {
				if ($(showButton).hasClass('show')) {
					hideHemu();
				}
			});
			let tl = new TimelineLite();
			for (let i = 0; i < button.length; i++) {
				button[i].onclick = function() {
					scrollLock.toggle();
					if (this.classList.contains('show')) {
						this.classList.remove('show');
						this.classList.add('callback');
						TweenMax.to('.header__mob-bg', .5, {
							opacity: 0,
							zIndex: -1
						});
						TweenMax.to('.header__mob', .5, {
							opacity: 0,
							zIndex: -1
						});
						TweenMax.to('.header__mob-menu', .2, {
							opacity: 0,
							zIndex: -1,
							x: 0
						});
						TweenMax.to('.header__mob-menu li', .2, {
							opacity: 0,
							zIndex: -1,
							x: 0
						});
						TweenMax.to('.header__mob-contact', .2, {
							opacity: 0,
							zIndex: -1,
							x: 0
						});
						TweenMax.fromTo('.header__button-close', .4, {
							opacity: 1,
							y: 0
						}, {
							opacity: 0,
							y: -15
						});
						TweenMax.fromTo('.header__button-menu', .4, {
							opacity: 0,
							y: 15
						}, {
							opacity: 1,
							y: 0
						});
						body.classList.remove('menu-active');
					} else {
						this.classList.add('show');
						this.classList.remove('callback');
						TweenMax.to('.header__mob-bg', .5, {
							opacity: 1,
							zIndex: 9998
						});
						TweenMax.to('.header__mob', .5, {
							opacity: 1,
							zIndex: 9999
						});
						TweenMax.fromTo('.header__button-close', .4, {
							opacity: 0,
							y: -15
						}, {
							opacity: 1,
							y: 0
						});
						TweenMax.fromTo('.header__button-menu', .4, {
							opacity: 1,
							y: 0
						}, {
							opacity: 0,
							y: 15
						});
						tl.to('.header__mob-menu', .2, {
							opacity: 1,
							zIndex: 1,
							y: 0
						}).staggerFromTo('.header__mob-menu li', .3, {
							opacity: 0,
							x: -20,
							y: 0
						}, {
							opacity: 1,
							x: 0,
							y: 0
						}, .1).to('.header__mob-contact', .3, {
							opacity: 1,
							zIndex: 1,
							y: 0
						});
						body.classList.add('menu-active');
					}
				};
			}
		}
		menuToggle();

		function showFooter() {
			let targetLink = $('.footer__button');
			let targetContent = $('.footer');
			let targetButton = $('.footer__button');
			targetLink.on('click', (e) => {
				e.preventDefault();
				targetContent.toggleClass('footer-active');
				targetButton.toggleClass('footer__button-active');
			});
		}
		showFooter();

		function showPopup() {
			let body = $(document.body);
			let showButton = $('#toggle');
			let popup = $('.popup');
			let popupBg = $('.popup-bg');
			let popupClose = $('.popup__button');
			let popupClose2 = $('.popup-close');
			let popupButton = $('.popupcall');
			popupButton.on('click', (e) => {
				e.preventDefault();
				hidePopup();
				hideMenu();
			});
			popupClose.on('click', (e) => {
				e.preventDefault();
				animatePopup();
				(() => {
					scrollLock.show();
				})();
			});
			popupClose2.on('click', (e) => {
				e.preventDefault();
				animatePopup();
				(() => {
					scrollLock.show();
				})();
			});

			function hideMenu() {
				showButton.removeClass('show');
				showButton.addClass('callback');
				TweenMax.to('.header__mob-bg', .5, {
					opacity: 0,
					zIndex: -1
				});
				TweenMax.to('.header__mob', .5, {
					opacity: 0,
					zIndex: -1
				});
				TweenMax.to('.header__mob-menu', .2, {
					opacity: 0,
					zIndex: -1,
					x: 0
				});
				TweenMax.to('.header__mob-menu li', .2, {
					opacity: 0,
					zIndex: -1,
					x: 0
				});
				TweenMax.to('.header__mob-contact', .2, {
					opacity: 0,
					zIndex: -1,
					x: 0
				});
				TweenMax.fromTo('.header__button-close', .4, {
					opacity: 1,
					y: 0
				}, {
					opacity: 0,
					y: -15
				});
				TweenMax.fromTo('.header__button-menu', .4, {
					opacity: 0,
					y: 15
				}, {
					opacity: 1,
					y: 0
				});
				body.removeClass('menu-active');
			}

			function hidePopup() {
				scrollLock.hide();
				popupButton.removeClass('enable');
				popupButton.addClass('disable');
				popup.addClass('popup__active');
				TweenMax.fromTo(popupBg, .5, {
					opacity: 0,
					zIndex: -1
				}, {
					opacity: 1,
					zIndex: 9998
				});
				TweenMax.fromTo('.popup-close', 1, {
					opacity: 0
				}, {
					opacity: 1
				});
				TweenMax.fromTo('.popup__title', 1, {
					opacity: 0
				}, {
					opacity: 1
				});
				TweenMax.fromTo('.popup__form', 1, {
					opacity: 0
				}, {
					opacity: 1
				});
				TweenMax.fromTo('.popup__button', 1, {
					opacity: 0
				}, {
					opacity: 1
				});
			}

			function animatePopup() {
				if (popupButton.hasClass('disable')) {
					popupButton.removeClass('disable');
					popupButton.addClass('enable');
					scrollLock.show();
					popup.removeClass('popup__active');
					TweenMax.to(popupBg, .5, {
						opacity: 0,
						zIndex: -1
					});
					TweenMax.to('.popup-close', 1, {
						opacity: 0
					});
					TweenMax.to('.popup__title', 1, {
						opacity: 0
					});
					TweenMax.to('.popup__form', 1, {
						opacity: 0
					});
					TweenMax.to('.popup__button', 1, {
						opacity: 0
					});
				} else {
					popupButton.removeClass('enable');
					popupButton.addClass('disable');
					scrollLock.show();
					popup.removeClass('popup__active');
					TweenMax.to(popupBg, .5, {
						opacity: 0,
						zIndex: -1
					});
					TweenMax.to('.popup-close', 1, {
						opacity: 0
					});
					TweenMax.to('.popup__title', 1, {
						opacity: 0
					});
					TweenMax.to('.popup__form', 1, {
						opacity: 0
					});
					TweenMax.to('.popup__button', 1, {
						opacity: 0
					});
				}
			}
		}
		showPopup();

		function successMessage() {
			let title = $('.message-success-title');
			let container = $('.message-success-container');
			let button = $('.message-success-button');
			let close = $('.message-success-close');
			let bg = $('.message-success-bg');
			let popupBg = $('.popup-bg');
			scrollLock.hide();
			$('.message-success').addClass('message-success__active');
			TweenMax.fromTo(bg, .5, {
				opacity: 0,
				zIndex: -1
			}, {
				opacity: 1,
				zIndex: 9998
			});
			TweenMax.to(popupBg, .5, {
				opacity: 0,
				zIndex: -1
			});
			TweenMax.fromTo(title, 1, {
				opacity: 0,
				y: -15
			}, {
				opacity: 1
			});
			TweenMax.fromTo(container, 1, {
				opacity: 0,
				y: -15
			}, {
				opacity: 1
			});
			TweenMax.fromTo(button, 1, {
				opacity: 0,
				y: -15
			}, {
				opacity: 1
			});
			close.on('click', (e) => {
				e.preventDefault();
				scrollLock.show();
				scrollLock.show();
				$('.message-success').removeClass('message-success__active');
				TweenMax.to(popupBg, .5, {
					opacity: 0,
					zIndex: -1
				});
				TweenMax.to(bg, .5, {
					opacity: 0,
					zIndex: -1
				});
				TweenMax.to(title, 1, {
					opacity: 0
				});
				TweenMax.to(container, 1, {
					opacity: 0
				});
				TweenMax.to(button, 1, {
					opacity: 0
				});
			});
			button.on('click', (e) => {
				e.preventDefault();
				scrollLock.show();
				scrollLock.show();
				$('.message-success').removeClass('message-success__active');
				TweenMax.to(popupBg, .5, {
					opacity: 0,
					zIndex: -1
				});
				TweenMax.to(bg, .5, {
					opacity: 0,
					zIndex: -1
				});
				TweenMax.to(title, 1, {
					opacity: 0
				});
				TweenMax.to(container, 1, {
					opacity: 0
				});
				TweenMax.to(button, 1, {
					opacity: 0
				});
			});
		}

		function projectSlider() {
			new Swiper('.swiper-container-silder', {
				slidesPerView: 1,
				speed: 800,
				grabCursor: !0,
				loop: !1,
				navigation: {
					nextEl: '.projects__slider .swiper-button-next',
					prevEl: '.projects__slider .swiper-button-prev',
				},
			});
		}
		projectSlider();

		function yaMaps() {
			let spinner = $('.ymap-container').children('.loader');
			let check_if_load = !1;

			function init() {
				let myMapTemp = new ymaps.Map('map-yandex', {
					center: [55.722882, 37.626717],
					zoom: 17,
					controls: ['zoomControl', 'fullscreenControl']
				});
				let myPlacemarkTemp = new ymaps.GeoObject({
					geometry: {
						type: 'Point',
						coordinates: [55.722882, 37.626717]
					}
				});
				myMapTemp.geoObjects.add(myPlacemarkTemp);
				let layer = myMapTemp.layers.get(0).get(0);
				waitForTilesLoad(layer).then(() => {
					spinner.removeClass('is-active');
				});
			}

			function waitForTilesLoad(layer) {
				return new ymaps.vow.Promise((resolve) => {
					let tc = getTileContainer(layer),
						readyAll = !0;
					tc.tiles.each((tile) => {
						if (!tile.isReady()) {
							readyAll = !1;
						}
					});
					if (readyAll) {
						resolve();
					} else {
						tc.events.once('ready', () => {
							resolve();
						});
					}
				});
			}

			function getTileContainer(layer) {
				for (let k in layer) {
					if (layer.hasOwnProperty(k)) {
						if (layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer || layer[k] instanceof ymaps.layer.tileContainer.DomContainer) {
							return layer[k];
						}
					}
				}
				return null;
			}

			function loadScript(url, callback) {
				let script = document.createElement('script');
				if (script.readyState) {
					script.onreadystatechange = () => {
						if (script.readyState == 'loaded' || script.readyState == 'complete') {
							script.onreadystatechange = null;
							callback();
						}
					};
				} else {
					script.onload = () => {
						callback();
					};
				}
				script.src = url;
				document.getElementsByTagName('head')[0].appendChild(script);
			}
			let ymap = () => {
				$('.ymap-container').mouseenter(() => {
					if (!check_if_load) {
						check_if_load = !0;
						spinner.addClass('is-active');
						loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1', () => {
							ymaps.load(init);
						});
					}
				});
			};
			$(() => {
				ymap();
			});
		}
		yaMaps();

		function teamSlider() {
			new Swiper('.swiper-container-about', {
				slidesPerView: 1,
				speed: 400,
				grabCursor: !0,
				loop: !1,
				navigation: {
					nextEl: '.about__team-slider .swiper-button-next',
					prevEl: '.about__team-slider .swiper-button-prev',
				},
				breakpoints: {
					1040: {
						slidesPerView: 2
					},
					650: {
						slidesPerView: 1
					},
				}
			});
		}
		teamSlider();

		function inputMask() {
			let input = $('input[type="tel"]');
			Array.from(input).forEach(element => {
				let mask = new Inputmask('+7 (999) 999-99-99');
				mask.mask(element);
			});
		}
		inputMask();

		function sendMail(selector) {
			return fetch('/mail.php', {
				method: 'POST',
				body: new FormData($(selector).get(0))
			});
		}

		function sendMailContact(selector) {
			return fetch('/contact.php', {
				method: 'POST',
				body: new FormData($(selector).get(0))
			});
		}

		function sendMailSubscribe(selector) {
			return fetch('/subscribe.php', {
				method: 'POST',
				body: new FormData($(selector).get(0))
			});
		}

		function sendMailBrif(selector) {
			return fetch('/brif.php', {
				method: 'POST',
				body: new FormData($(selector).get(0))
			});
		}

		function sendBrif() {
			let title = $('.message-success-container-title');
			let text = $('.message-success-container-text');
			let form = $('.brif__form');
			form.submit((e) => {
				e.preventDefault();
				sendMailBrif(form).then(() => {
					text.text('Мы уже получили Вашу заявку и перезвоним Вам в течении 15 минут в рабочее время.');
					title.text('Заявка отправлена!');
					return successMessage(), form.get(0).reset();
				});
			});
		}
		sendBrif();

		function sendPopup() {
			let title = $('.message-success-container-title');
			let text = $('.message-success-container-text');
			let popup = $('.popup');
			let popupBg = $('.popup-bg');
			let form = $('.popup__form');
			form.submit((e) => {
				e.preventDefault();
				sendMail(form).then(() => {
					popup.removeClass('popup__active');
					popupBg.removeClass('popup-bg__active');
					text.text('Мы уже получили Вашу заявку и перезвоним Вам в течении 15 минут в рабочее время.');
					title.text('Заявка отправлена!');
					return successMessage(), form.get(0).reset();
				});
			});
		}
		sendPopup();

		function sendForm() {
			let title = $('.message-success-container-title');
			let text = $('.message-success-container-text');
			let form = $('.form__container-form');
			if (form) {
				form.submit((e) => {
					e.preventDefault();
					sendMail(form).then(() => {
						text.text('Мы уже получили Вашу заявку и перезвоним Вам в течении 15 минут в рабочее время.');
						title.text('Заявка отправлена!');
						return successMessage(), form.get(0).reset();
					});
				});
			}
		}
		sendForm();

		function sendFormSidebar() {
			let title = $('.message-success-container-title');
			let text = $('.message-success-container-text');
			let form = $('.blog__sidebar-item-form');
			if (form) {
				form.submit((e) => {
					e.preventDefault();
					sendMailSubscribe(form).then(() => {
						text.text('Вы успешно подписались на нашу расслку!');
						title.text('Подписка оформлена!');
						return successMessage(), form.get(0).reset();
					});
				});
			}
		}
		sendFormSidebar();

		function sendFormSidebarCallback() {
			let title = $('.message-success-container-title');
			let text = $('.message-success-container-text');
			let form = $('.blog__sidebar-item-callback');
			if (form) {
				form.submit((e) => {
					e.preventDefault();
					sendMail(form).then(() => {
						text.text('Мы уже получили Вашу заявку и перезвоним Вам в течении 15 минут в рабочее время.');
						title.text('Заявка отправлена!');
						return successMessage(), form.get(0).reset();
					});
				});
			}
		}
		sendFormSidebarCallback();

		function sendFormSidebarService() {
			let title = $('.message-success-container-title');
			let text = $('.message-success-container-text');
			let form = $('.blog-single__sidebar-item-form');
			if (form) {
				form.submit((e) => {
					e.preventDefault();
					sendMailSubscribe(form).then(() => {
						text.text('Мы уже получили Вашу заявку и перезвоним Вам в течении 15 минут в рабочее время.');
						title.text('Заявка отправлена!');
						return successMessage(), form.get(0).reset();
					});
				});
			}
		}
		sendFormSidebarService();

		function sendFormSidebarCallbackService() {
			let title = $('.message-success-container-title');
			let text = $('.message-success-container-text');
			let form = $('.blog-single__sidebar-item-callback');
			if (form) {
				form.submit((e) => {
					e.preventDefault();
					sendMail(form).then(() => {
						text.text('Мы уже получили Вашу заявку и перезвоним Вам в течении 15 минут в рабочее время.');
						title.text('Заявка отправлена!');
						return successMessage(), form.get(0).reset();
					});
				});
			}
		}
		sendFormSidebarCallbackService();

		function sendFormContact() {
			let title = $('.message-success-container-title');
			let text = $('.message-success-container-text');
			let form = $('.contacts__block-form');
			if (form) {
				form.submit((e) => {
					e.preventDefault();
					sendMailContact(form).then(() => {
						text.text('Мы уже получили Ваше сообщение и ознакомимся с ним в ближайшее время.');
						title.text('Форма отправлена!');
						return successMessage(), form.get(0).reset();
					});
				});
			}
		}
		sendFormContact();

		function sendFormContactSubscribe() {
			let title = $('.message-success-container-title');
			let text = $('.message-success-container-text');
			let form = $('.contacts__block-item__form');
			if (form) {
				form.submit((e) => {
					e.preventDefault();
					sendMailSubscribe(form).then(() => {
						text.text('Вы успешно подписались на нашу расслку!');
						title.text('Подписка оформлена!');
						return successMessage(), form.get(0).reset();
					});
				});
			}
		}
		sendFormContactSubscribe();

		function sendFormSideService() {
			let title = $('.message-success-container-title');
			let text = $('.message-success-container-text');
			let form = $('.side-callback-form');
			if (form) {
				form.submit((e) => {
					e.preventDefault();
					sendMailSubscribe(form).then(() => {
						text.text('Мы уже получили Вашу заявку и перезвоним Вам в течении 15 минут в рабочее время.');
						title.text('Заявка отправлена!');
						return successMessage(), form.get(0).reset();
					});
				});
			}
		}
		sendFormSideService();

		function counterInViewPort() {
			let win = $(window);
			let counter = $('#counter1');
			let counter2 = $('#counter2');
			let counter3 = $('#counter3');
			let id = 0;
			let id2 = 0;
			let id3 = 0;
			win.scroll(() => {
				counterInit();
			});

			function counterInit() {
				if (counter.offset() && counter2.offset() && counter3.offset()) {
					if (id == 0 && win.scrollTop() + win.height() > counter.offset().top && win.scrollTop() + win.height() > counter2.offset().top && win.scrollTop() + win.height() > counter3.offset().top) {
						let ccc = 0;
						let ccc2 = 0;
						let ccc3 = 0;
						id = setInterval(() => {
							ccc += 1;
							counter.html(ccc);
							if (ccc == 10) {
								clearInterval(id);
							}
						}, 100);
						id2 = setInterval(() => {
							ccc2 += 1;
							counter2.html(ccc2);
							if (ccc2 == 100) {
								clearInterval(id2);
							}
						}, 24);
						id3 = setInterval(() => {
							ccc3 += 1;
							counter3.html(ccc3);
							if (ccc3 == 10) {
								clearInterval(id3);
							}
						}, 100);
					}
				}
			}
			counterInit();
		}
		counterInViewPort();
		$(() => {
			$(window).on('scroll resize', () => {
				let progress = $('progress')[0];
				if (progress !== undefined) {
					let width = $(window).scrollTop() / ($(document).height() - $(window).height());
					progress.value = width;
				}
			});
		});

		function checkFile() {
			$('form input[type=file]').on('change', () => {
				$('.brif__form-input-upload label span').text('Файл добавлен');
			});
		}
		checkFile();

		function checkUrl() {
			$('.header__menu li a').each(function() {
				$(this).removeClass('header__menu-item-active');
				if ($(this).attr('href') == window.location.href) {
					$(this).addClass('header__menu-item-active');
				}
			});
		}
		checkUrl();

		function countText() {
			let text = $('.content');
			if (text) {
				let count = text.text().length;
				let string = $('.count');
				for (let i = 0; i < string.length; i++) {
					if (count < 1500) {
						$(string[i]).text('Менее 1 минуты');
					} else if (count < 3000) {
						$(string[i]).text('2 минуты');
					} else if (count < 4500) {
						$(string[i]).text('3 минуты');
					} else if (count < 6000) {
						$(string[i]).text('4 минуты');
					} else if (count < 7500) {
						$(string[i]).text('5 минут');
					} else if (count > 9000) {
						$(string[i]).text('5+ минут');
					} else {
						return 0;
					}
				}
			}
		}
		countText();

		function activeLinkClass() {
			$('.blog__container-tags a').each(function() {
				if ($(this).attr('href') == window.location.href) {
					$(this).addClass('blog__container-tags-tag-active');
				}
			});
		}
		activeLinkClass();

		function hideByClickEscButton() {
			$(window).on('keydown', (event) => {
				let body = $(document.body);
				let showButton = $('#toggle');
				let popup = $('.popup');
				let popupBg = $('.popup-bg');
				let popupButton = $('.popupcall');
				let title = $('.message-success-title');
				let container = $('.message-success-container');
				let bg = $('.message-success-bg');
				if (event.keyCode == 27) {
					if (popupButton.hasClass('disable')) {
						popupButton.removeClass('disable');
						popupButton.addClass('enable');
						scrollLock.show();
						popup.removeClass('popup__active');
						TweenMax.to(popupBg, 0.5, {
							opacity: 0,
							zIndex: -1
						});
						TweenMax.to('.popup-close', 1, {
							opacity: 0
						});
						TweenMax.to('.popup__title', 1, {
							opacity: 0
						});
						TweenMax.to('.popup__form', 1, {
							opacity: 0
						});
						TweenMax.to('.popup__button', 1, {
							opacity: 0
						});
					} else {
						popupButton.removeClass('enable');
						popupButton.addClass('disable');
						scrollLock.show();
						popup.removeClass('popup__active');
						TweenMax.to(popupBg, 0.5, {
							opacity: 0,
							zIndex: -1
						});
						TweenMax.to('.popup-close', 1, {
							opacity: 0
						});
						TweenMax.to('.popup__title', 1, {
							opacity: 0
						});
						TweenMax.to('.popup__form', 1, {
							opacity: 0
						});
						TweenMax.to('.popup__button', 1, {
							opacity: 0
						});
					}
					if ($(showButton).hasClass('show')) {
						$(showButton).removeClass('show');
						$(showButton).addClass('callback');
						TweenMax.to('.header__mob-bg', 0.5, {
							opacity: 0,
							zIndex: -1
						});
						TweenMax.to('.header__mob', 0.5, {
							opacity: 0,
							zIndex: -1
						});
						TweenMax.to('.header__mob-menu', 0.2, {
							opacity: 0,
							zIndex: -1,
							x: 0
						});
						TweenMax.to('.header__mob-menu li', 0.2, {
							opacity: 0,
							zIndex: -1,
							x: 0
						});
						TweenMax.to('.header__mob-contact', 0.2, {
							opacity: 0,
							zIndex: -1,
							x: 0
						});
						TweenMax.fromTo('.header__button-close', 0.4, {
							opacity: 1,
							y: 0
						}, {
							opacity: 0,
							y: -15
						});
						TweenMax.fromTo('.header__button-menu', 0.4, {
							opacity: 0,
							y: 15
						}, {
							opacity: 1,
							y: 0
						});
						body.removeClass('menu-active');
					}
					scrollLock.show();
					$('.message-success').removeClass('message-success__active');
					TweenMax.to(popupBg, 0.5, {
						opacity: 0,
						zIndex: -1
					});
					TweenMax.to(bg, 0.5, {
						opacity: 0,
						zIndex: -1
					});
					TweenMax.to(title, 1, {
						opacity: 0
					});
					TweenMax.to(container, 1, {
						opacity: 0
					});
					TweenMax.to($('.message-success-button'), 1, {
						opacity: 0
					});
				}
			});
		}
		hideByClickEscButton();

		function loadNews() {

			if (ajaxurl === undefined) {
				var ajaxurl = $('#ajaxurl').text();
				var true_posts = $('#true_posts').text();
				var current_page = $('#current_page').text();
				var max_pages = $('#max_pages').text();
			}

			$('#true_loadmore').click(function(){
				$(this).html('<div class="blog__item-container-more"><i class="fa fa-refresh"></i><span>Загружаю...</span></div>');
				var data = {
					'action': 'loadmore',
					'query': true_posts,
					'page' : current_page
				};
				$.ajax({
					url:ajaxurl,
					data:data,
					type:'POST',
					success:function(data){
						if( data ) {
							$('#true_loadmore').html('<div class="blog__item-container-more"><i class="fa fa-refresh"></i><span>Показать ещё</span></div>').before(data);
							current_page++;
							if (current_page == max_pages) $('#true_loadmore').remove();
						} else {
							$('#true_loadmore').remove();
						}
					}
				});
			});
		}
		loadNews();

		function loadNewsFaq() {

			if (ajaxurl === undefined) {
				var ajaxurl = $('#ajaxurl').text();
				var true_posts = $('#true_posts').text();
				var current_page = $('#current_page').text();
				var max_pages = $('#max_pages').text();
			}

			$('#true_loadmorefaq').click(function(){
				$(this).html('<div class="blog__item-container-more"><i class="fa fa-refresh"></i><span>Загружаю...</span></div>');
				var data = {
					'action': 'loadmorefaq',
					'query': true_posts,
					'page' : current_page
				};
				$.ajax({
					url:ajaxurl,
					data:data,
					type:'POST',
					success:function(data){
						if( data ) {
							$('#true_loadmorefaq').html('<div class="blog__item-container-more"><i class="fa fa-refresh"></i><span>Показать ещё</span></div>').before(data);
							current_page++;
							if (current_page == max_pages) $('#true_loadmorefaq').remove();
						} else {
							$('#true_loadmorefaq').remove();
						}
					}
				});
			});
		}
		loadNewsFaq();

	});
});
