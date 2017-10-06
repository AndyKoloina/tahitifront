/* ============================= */
/* scroll to block : smooth-scroll.js */
/* ============================= */

'use strict';

var trigger = '[data-scroll-to]',
    headerHeight = $('.header').height();

$(document).on('click.scroll-to', trigger, function() {
  if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
    var target = $(this.hash),
        that = this;

    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

    if (target.length) {
      target.velocity('scroll', {
        duration: 1000,
        offset: - headerHeight,
        mobileHA: false,
        complete: function(){
          $(that).blur();
        }
      });
      return false;
    }
  }
});
