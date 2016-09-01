/**
 * Created by GloryManU on 04.07.2016.
 */
(function(){
	$('.wm-description_card-slider').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        slideMargin:0,
        enableDrag: false,
        galleryMargin: 2,
        thumbMargin: 3,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '.wm-description_card-slider .lslide'
            });
        }
    });
    $('.wm-about_slider').lightSlider({
        item:6,
        loop:true,
        slideMargin:20,
        slideMove: 2,
        auto: true,
        cssEasing: 'ease',
        speed: 1500,
        pauseOnHover: true,
        controls: false
    });
})();