(function () {
  'use strict';
  let marker = $('.marker');
  let nav_link = $('.nav-link');
  let map_title = $('.map-title');
  let map_place = $('.map-place');

  jQuery.each(marker, function (i, val) {
    $(this).on('click', (e) => {
      let place = $(this).attr('id');
      displaydata(place);
      e.preventDefault();
      $('.marker').removeClass('is-active-marker');
      $(this).addClass('is-active-marker')
    })
  });
 
  /*jQuery.each(nav_link, function (i, val) {
    let active = $(this).hasClass('active') ? true : false;
      
      /*let href = $(this).attr('href');
      alert(href);
      initmarker(href);
       
  });*/
  $('.nav-tabs > li > a').on("click",function(e){
      e.preventDefault();
      let href = $(this).attr('href');
     

      initmarker(href);
  });

  function initmarker(href) {

    if(href === '#Tahiti') {
      $('.marker').removeClass('is-active-marker');
      $('#Facebook_Places').addClass('is-active-marker');
      map_title.html('Face tony');
      map_place.html('Face au McDonald de Papeete');
    } else if (href === '#Moorea') {
      $('.marker').removeClass('is-active-marker');
      $('#paopao').addClass('is-active-marker');
      map_title.html('Papao');
      map_place.html('lorem ipsum dorote vvsdfssd');
    } else if (href === '#BoraBora') {
      $('.marker').removeClass('is-active-marker');
      $('#nunue').addClass('is-active-marker');
      map_title.html('nunue');
      map_place.html('lorem ipsum dorote vvsdfsf');
    } else if (href === '#Raiatea') {
      $('.marker').removeClass('is-active-marker');
      $('#uturoa').addClass('is-active-marker');
      map_title.html('uturoa');
      map_place.html('lorem ipsum dorote vvsdfsf');
    }
    
  }
  function displaydata(place) {
    if (place === 'Prince-hinoi') {
      map_title.html('Prince Hinoi');
      map_place.html('lorem ipsum');
    } else if (place === 'Facebook_Places') {
      map_title.html('Face tony');
      map_place.html('Face au McDonald de Papeete');
    } else if (place === 'carrefour') {
      map_title.html('Carrefour Punaauia');
      map_place.html('lorem ipsum dorote vvsdfsf');
    } else if (place === 'paopao') {
      map_title.html('paopao');
      map_place.html('lorem ipsum dorote vvsdfsf');
    } else if (place === 'nunue') {
      map_title.html('bora bora');
      map_place.html('lorem ipsum dorote vvsdfsf');
    } else if (place === 'uturoa') {
      map_title.html('uturoa');
      map_place.html('lorem ipsum dorote vvsdfsf');
    }
  }
})();
