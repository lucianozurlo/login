!(function (t) {
    "use strict";
    t(window).on("load", function () {
        t('[data-loader="circle-side"]').fadeOut(), t("#preloader").delay(350).fadeOut("slow"), t("body").delay(350);
    }),
        t(".background-image").each(function () {
            t(this).css("background-image", t(this).attr("data-background"));
        }),
        t(".opacity-mask").each(function () {
            t(this).css("background-color", t(this).attr("data-opacity-mask"));
        }),
        // t(".btn_play").magnificPopup({ type: "iframe", closeMarkup: '<button title="%title%" type="button" class="mfp-close" style="font-size:26px; margin-right:-10px;">&#215;</button>' }),
        // t(".modal_dialog").magnificPopup({
        //     type: "inline",
        //     fixedContentPos: !0,
        //     fixedBgPos: !0,
        //     overflowY: "auto",
        //     closeBtnInside: !0,
        //     preloader: !1,
        //     midClick: !0,
        //     removalDelay: 300,
        //     closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
        //     mainClass: "my-mfp-zoom-in",
        // }),
        t("#password, #password1, #password2").hidePassword("focus", { toggle: { className: "my-toggle" } }),
        // t("#forgot").on("click", function () {
        //     t("#forgot_pw").fadeToggle("fast");
        // });
        new FloatLabels("form.teco_style", { style: 1 }),
        new FloatLabels("form.input_style_2", { style: 0 }),
        [].slice.call(document.querySelectorAll(".tooltip-1")).map(function (t) {
            return new bootstrap.Tooltip(t);
        });
})(window.jQuery);
