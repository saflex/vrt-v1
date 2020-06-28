function viewport() {
    var e = window,
        t = "inner";
    return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), {
        width: e[t + "Width"],
        height: e[t + "Height"]
    }
}
$(document).load(function() {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? $("body").addClass("ios") : $("body").addClass("web"), $("body").removeClass("loaded_"), $(".with-wow").length && (wow = new WOW({
        animateClass: "animated",
        offset: 10
    }), wow.init())
}), $(function() {
    if ($("input, textarea").each(function() {
            var e = $(this).attr("placeholder");
            $(this).focus(function() {
                $(this).attr("placeholder", "")
            }), $(this).focusout(function() {
                $(this).attr("placeholder", e)
            })
        }), $(".button-nav").toggle(function() {
            if ($(this).addClass("active"), $("header").addClass("mob-nav"), $(".header-right").addClass("active"), $(document).height() > $(window).height()) {
                var e = $("html").scrollTop() ? $("html").scrollTop() : $("body").scrollTop();
                $("html").addClass("noscroll").css("top", -e)
            }
        }, function() {
            $(this).removeClass("active"), $("header").removeClass("mob-nav"), $(".header-right").removeClass("active");
            var e = parseInt($("html").css("top"));
            $("html").removeClass("noscroll"), $("html,body").scrollTop(-e)
        }), $(".list-lang__item.active .js-lang").click(function() {
            return $(this).parents(".list-lang").toggleClass("open-lang"), $(this).parent().siblings().removeClass("active"), $(this).parent().addClass("active"), !1
        }), $(document).on("touchstart click", function(e) {
            1 != $(e.target).parents().filter(".open-lang:visible").length && $(".list-lang").removeClass("open-lang")
        }), $(".list-faq a").click(function() {
            return $(this).parent().siblings().removeClass("active"), $(this).parent().siblings().find(".list-faq__answer").slideUp(), $(this).parent().toggleClass("active"), $(this).parent().find(".list-faq__answer").slideToggle(), !1
        }), $(".js-schem").click(function() {
            return $(".vrkit-schem-main").addClass("open-schem"), $("header").addClass("open-schem"), $("html").addClass("noscroll-mob"), !1
        }), $(".js-schem-back").click(function() {
            return $(".vrkit-schem-main").removeClass("open-schem"), $("header").removeClass("open-schem"), $("html").removeClass("noscroll-mob"), !1
        }), $(".js-vision-schem").click(function() {
            return $(".vision-schem").addClass("open-schem"), $("header").addClass("open-schem"), $("html").addClass("noscroll-mob"), !1
        }), $(".js-vision-back").click(function() {
            return $(".vision-schem").removeClass("open-schem"), $("header").removeClass("open-schem"), $("html").removeClass("noscroll-mob"), !1
        }), $(".tabs li a").click(function() {
            $(this).parents(".tab-wrap").find(".tab-cont").addClass("hide-tab"), $(this).parent().siblings().removeClass("active");
            var e = $(this).attr("href");
            return $(e).removeClass("hide-tab"), $(this).parent().addClass("active"), !1
        }), $(".graph-decs-list__item").hover(function() {
            $(this).addClass("hover")
        }, function() {
            $(this).removeClass("hover")
        }), setTimeout(function() {
            $(".request-popup__select").styler()
        }, 100), jQuery(".fancy").fancybox({
            padding: 0,
            autoSize: !1,
            maxWidth: 946,
            width: 946,
            scrolling: "visible",
            autoCenter: !1
        }), jQuery(".team-list__avatar, .team-list__name").mouseover(function() {
            jQuery(".team-list__item").removeClass("details-opened"), jQuery(".team-list__item").find(".team-list__details").hide();
            var e = jQuery(this).closest(".team-list__item").find(".team-list__name").outerHeight();
            e += jQuery(this).closest(".team-list__item").find(".team-list__prof").outerHeight(), jQuery(this).closest(".team-list__item").find(".team-list__details").css("padding-top", e + 15 + "px"), console.log(jQuery(this).closest(".team-list__item").find(".team-list__details").css("padding-top")), jQuery(this).closest(".team-list__item").addClass("details-opened"), jQuery(this).closest(".team-list").addClass("open-tooltip"), jQuery(this).closest(".team-list__item").find(".team-list__details").show(), jQuery(this).closest(".team-list__item").mouseleave(function() {
                jQuery(this).removeClass("details-opened"), jQuery(this).find(".team-list__details").hide(), jQuery(this).closest(".team-list").removeClass("open-tooltip")
            })
        }), $(".quote-slider").length && $(".quote-slider").slick({
            dots: !1,
            infinite: !0,
            fade: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 5e3
        }), $(".js-project-slider").length && $(".js-project-slider").slick({
            dots: !0,
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow"></i></button>',
            responsive: [{
                breakpoint: 1280,
                settings: {
                    arrows: !1
                }
            }]
        }), $(".about-us-slider").length && ($(".js-about-us-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            fade: !1,
            asNavFor: ".js-about-us-nav",
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow"></i></button>'
        }), $(".js-about-us-nav").slick({
            slidesToShow: 7,
            slidesToScroll: 7,
            asNavFor: ".js-about-us-for",
            dots: !1,
            centerMode: !1,
            focusOnSelect: !0,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow"></i></button>',
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 5
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    variableWidth: !0,
                    centerMode: !0,
                    arrows: !1
                }
            }]
        })), $(".js-post-list").length && $(".js-post-list").slick({
            dots: !0,
            infinite: !0,
            speed: 300,
            arrows: !0,
            touchMove: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow"></i></button>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: !1,
                    adaptiveHeight: !0,
                    focusOnSelect: !0
                }
            }]
        }), $(".js-team-list").length && $(".js-team-list").slick({
            dots: !0,
            infinite: !0,
            speed: 300,
            arrows: !1,
            variableWidth: !0,
            centerMode: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 6e4,
                settings: "unslick"
            }, {
                breakpoint: 767,
                settings: "slick"
            }]
        }), $(".js-team-list-2").length && $(".js-team-list-2").slick({
            dots: !0,
            infinite: !0,
            speed: 300,
            arrows: !1,
            variableWidth: !0,
            centerMode: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 6e4,
                settings: "unslick"
            }, {
                breakpoint: 767,
                settings: "slick"
            }]
        }),


        $(".scroll-1ss").length) {
        var e = $(window).width(),
            t = (s = parseInt((1150 - e) / 2)) + "px";
        $(".scroll-1ss").mCustomScrollbar({
            axis: "xy",
            theme: "dark-thin",
            setLeft: t,
            scrollbarPosition: "outside",
            autoExpandScrollbar: !0,
            advanced: {
                autoExpandHorizontalScroll: !0
            }
        })
    }
    if ($(".scroll-2ss").length) {
        var e = $(window).width(),
            t = (s = parseInt((1040 - e) / 2)) + "px";
        $(".scroll-2ss").mCustomScrollbar({
            axis: "xy",
            theme: "dark-thin",
            setLeft: t,
            scrollbarPosition: "outside",
            autoExpandScrollbar: !0,
            advanced: {
                autoExpandHorizontalScroll: !0
            }
        })
    }


    if ($(".scroll-3").length) {
        var e = $(window).width(),
            s = parseInt((620 - e) / 2),
            t = s + "px";
        $(".scroll-3").mCustomScrollbar({
            axis: "x",
            theme: "dark-thin",
            setLeft: t,
            scrollbarPosition: "outside",
            autoExpandScrollbar: !0,
            advanced: {
                autoExpandHorizontalScroll: !0
            }
        })
    }
    $(".js-time").countTo({
        from: 0,
        to: 100,
        speed: 3e3,
        refreshInterval: 50,
        formatter: function(e, t) {
            return e.toFixed(1)
        },
        onUpdate: function(e) {
            console.debug(this)
        },
        onComplete: function(e) {
            $("body").removeClass("loaded")
        }
    })
});
var handler = function() {
    $(window).scroll(function() {
        $(window).scrollTop() > 20 ? $("header").addClass("fixed") : $("header").removeClass("fixed")
    }), $(window).load(function() {
        $(window).scrollTop() > 20 ? $("header").addClass("fixed") : $("header").removeClass("fixed")
    });
    $("footer").height();
    var e = $("header").height();
    $(".content").css({
        "padding-top": e
    });
    var t = viewport().width;
    viewport().height;
    t <= 767 && ($(".js-team-list").length && $(".js-team-list").slick("getSlick").refresh(), $(".js-team-list-2").length && $(".js-team-list-2").slick("getSlick").refresh(), $(".main-screen .social-list").detach().insertAfter($(".main-nav"))), t > 767 && $(".header-right .social-list").detach().insertAfter($(".main-screen .wrapper")), t <= 1024 && ($(".tracking__title").detach().insertBefore($(".tracking__video")), $(".js-post-list").length && $(".js-post-list").slick("getSlick").refresh()), t > 1024 && $(".tracking__title").detach().insertBefore($(".tracking-schem"))
};
$(window).bind("load", handler), $(window).bind("resize", handler);



$(document).ready(function() {
    $('.dlx').click(function() {
        $('.header-right').removeClass('stl')
        $('.header-right').addClass('active');
        $('.header-wrap').toggleClass('active-bts');
        $('.button-nav').addClass('active');
        $('header').addClass('mob-nav');
    })
    $('.main-nav-list__item a').click(function() {
        $('.header-right').addClass('stl');
        $('.button-nav').removeClass('active');
        $('header').removeClass('mob-nav');
    })
    $('.dlx2').click(function() {
        $('.header-right').addClass('stl');
        $('.button-nav').removeClass('active');
        $('header').removeClass('mob-nav');
    })

! function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window,
        document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '135289630568171');
    fbq('track', 'PageView')
    fbq('track', 'Purchase', {
        value: '{{ total_price }}',
        currency: '{{ chosen_currency }}'
    });
        ! function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window,
        document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '135289630568171');
    fbq('track', 'PageView');

      ! function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '173689379654184');
    fbq('track', 'PageView');

});

