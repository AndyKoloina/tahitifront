/* ======================= */
/* AppSliderGrid : app-slider-grid.js */
/* ======================= */


'use strict';

/* ============== */
/* MODULE TRIGGER */
/* ============== */

let trigger = '[data-slick]';
let options = $(trigger).attr('data-slick-options') || {};

if (!$.isEmptyObject(options)) {
  options = $.parseJSON(options);
}


/* =============== */
/* MODULE DEFAULTS */
/* =============== */

let defaults = {
  arrows: true,
  //adaptiveHeight: true,
  autoplay: true,
  // appendDots: '$()',
  edgeFriction: 0,
  infinite: false,
  dots: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev slick-arrow-white"><span class="icon icon-fleche"></span></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow-white"><span class="icon icon-fleche"></span></button>',
  responsive: [{
    breakpoint: 767,
    settings: {
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};



/* ================= */
/* MODULE DEFINITION */
/* ================= */

class AppSlick {

  constructor(trigger, options) {

    this.elem = $(trigger);
    this.settings = $.extend({}, defaults, options);
    this.init(this.elem, this.settings);

  }

  init(elem, settings) {

    elem.slick(settings);

  }

}

/* =============== */
/* MODULE DATA-API */
/* =============== */

$.fn.appSlick = function (opt) {

  let args = Array.prototype.slice.call(arguments, 1);

  return this.each(function () {

    let item = $(this),
      instance = item.data('appSlick');

    if (!instance) {
      // create plugin instance and save it in data
      item.data('appSlick', new AppSlick(this, opt, $(this).data('slick')));

    } else {
      // if instance already created call method
      if (typeof opt === 'string') {
        instance[opt].apply(instance, args);
      }

    }

  });
};
// /const appSlick = new AppSlick(trigger,options);
$(trigger).appSlick(options);
