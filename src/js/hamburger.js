$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

  let icon_hamburger = $('#nav-icon1').offset().top;
  let article_fb = $('.article-fb').offset().top;
  console.log(icon_hamburger);
});
