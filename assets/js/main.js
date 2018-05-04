$(function() {

    var AppPlugins = {

        /* Date picker */
        datepicker: function () {
            $('[data-toggle="datepicker"]').datepicker();
        },

        /* Owl carousel */
        owlCarousel: function () {
            $('.owl-carousel').owlCarousel({
                nav: false,
                navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
                items: 1,
                loop: true,
                center: true,
                margin: 0,
                lazyLoad: true,
                dots: true,
            });
        }
    };

    /* ------ Plugins Init ------ */
    AppPlugins.datepicker();
    AppPlugins.owlCarousel();

});

