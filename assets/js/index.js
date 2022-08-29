$(document).ready(function () {
    const accordions = document.querySelectorAll(".festival-program")

    const changeAccordion = () => {
        accordions.forEach(el => {
            el.addEventListener('click', (e) => {
                const self = e.currentTarget
                const control = self.querySelector('.program__control')
                const content = self.querySelector('.program__content')

                self.classList.toggle('open')

                if (self.classList.contains('open')) {
                    control.setAttribute('aria-expanded', true)
                    content.setAttribute('aria-hidden', false)
                    content.style.maxHeight = content.scrollHeight + 'px'
                } else {
                    control.setAttribute('aria-expanded', false)
                    content.setAttribute('aria-hidden', true)
                    content.style.maxHeight = null
                }
            })
        })
    }
    changeAccordion()

    $("#mainsceneBtn-mobile").click(function (event) {
        $("#mainscene-mobile").toggleClass('active')
    })
    $("#expoBtn-mobile").click(function (event) {
        $("#expo-mobile").toggleClass('active')
    })

    $("#educationBtn-mobile").click(function (event) {
        $("#education-mobile").toggleClass('active')
    })

    $("#digitalArtBtn-mobile").click(function (event) {
        $("#digitalArt-mobile").toggleClass('active')
    })

    $("#chifrenFuture-mobile").click(function (event) {
        $("#childrenFuture-mobile").toggleClass('active')
    })


    $("#mainsceneBtn").click(function () {
        $("#mainscene").css({"display": "block"})
        $("#expo").css({"display": "none"})
        $("#education").css({"display": "none"})
        $("#digitalArt").css({"display": "none"})
        $("#childrenFuture").css({"display": "none"})
    });

    $("#expoBtn").click(function () {
        $("#mainscene").css({"display": "none"})
        $("#expo").css({"display": "block"})
        $("#education").css({"display": "none"})
        $("#digitalArt").css({"display": "none"})
        $("#childrenFuture").css({"display": "none"})
    });

    $("#educationBtn").click(function () {
        $("#mainscene").css({"display": "none"})
        $("#expo").css({"display": "none"})
        $("#education").css({"display": "block"})
        $("#digitalArt").css({"display": "none"})
        $("#childrenFuture").css({"display": "none"})
    });

    $("#digitalArtBtn").click(function () {
        $("#mainscene").css({"display": "none"})
        $("#expo").css({"display": "none"})
        $("#education").css({"display": "none"})
        $("#digitalArt").css({"display": "block"})
        $("#childrenFuture").css({"display": "none"})
    });
    $("#childrenFutureBtn").click(function () {
        $("#mainscene").css({"display": "none"})
        $("#expo").css({"display": "none"})
        $("#education").css({"display": "none"})
        $("#digitalArt").css({"display": "none"})
        $("#childrenFuture").css({"display": "block"})
    });

    var rellax = new Rellax('.rellax');

    $(".header-menu").click(function (event) {
        $(".header-menu, .header-list,.header-menu__bg").toggleClass('active')
        $('body').toggleClass('lock')
    })
    $(".header-list__close").click(function (event) {
        $(".header-menu, .header-list,.header-menu__bg").toggleClass('active')
        $('body').toggleClass('lock')
    })

    $(".header-menu__bg").click(function (event) {
        $(".header-menu, .header-list,.header-menu__bg").toggleClass('active')
        $('body').toggleClass('lock')
    })

    $(".menu__link").click(function (event) {
        $(".header-menu, .header-list,.header-menu__bg").toggleClass('active')
        $('body').toggleClass('lock')
    })

    const menuLinks = document.querySelectorAll(".menu__link[data-goto]")
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuClickLick)
        })

        function onMenuClickLick(e) {
            const menuLink = e.target
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto)
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                })
                e.preventDefault()

            }
        }
    }


    const swiperMainScene = new Swiper('.main-scene__swiper', {
        spaceBetween: 15,
        autoHeight: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const swiperDigitalArt = new Swiper('.digital-art__swiper', {
        spaceBetween: 15,
        autoHeight: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    const swiperExpo = new Swiper('.expo__swiper', {
        spaceBetween: 15,
        autoHeight: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    const swiperEducation = new Swiper('.education__swiper', {
        spaceBetween: 15,
        autoHeight: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const swiperChildren = new Swiper('.children-future__swiper', {
        spaceBetween: 15,
        autoHeight: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

})