$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
  let nav_verticale = $('.nav-verticale');
  if(window.matchMedia("(max-width:480px)").matches) {
    jQuery.each(nav_verticale, function (i, val) {
      $(this).on('click', (e) => {
        $('.cbp-spmenu').removeClass('cbp-spmenu-open');
        $('#nav-icon1').removeClass('open');
      })
    });
  }
});
