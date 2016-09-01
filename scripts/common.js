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
})();