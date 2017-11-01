(function () {
  'use strict';
  let marker = $('.marker');
  let nav_link = $('.nav-link');
  let map_title = $('.map-title');
  let map_place = $('.map-place');
  initMarkerTahiti();
  jQuery.each(marker, function (i, val) {
    $(this).on('click', (e) => {
      let place = $(this).attr('id');
      
      displaydata(place);
      e.preventDefault();
      console.log(place);
      changeMarkerBig(place);
      $('.marker').removeClass('is-active-marker');
      $(this).addClass('is-active-marker')
    })
  });
 
  $('.nav-tabs > li > a').on("click",function(e){
      e.preventDefault();
      let href = $(this).attr('href');
      initmarker(href);
  });

  function changeMarkerBig(marker) {
    if(marker === 'Prince-hinoi') {
      $('#p_hinoi-big').addClass('is-active-marker marker-big');
      $('#Prince-hinoi').addClass('marker-none');
      $('#face-tony-big').removeClass('marker-big');
      $('#Facebook_Places').addClass('marker-big');
    } else if(marker ==='Facebook_Places') {
      $('#Facebook_Places').addClass('marker-none');
      $('#face-tony-big').addClass('marker-big');
      $('.marker-big').removeClass('is-active-marker');
      $('#p_hinoi-big').removeClass('marker-big');
      //$('#Prince-hinoi').css('display','block!important');
      //$('.marker-big').addClass('is-active-marker');
      //$('.marker-big').removeClass('is-active-marker');
      //$('#p_hinoi-big').removeClass('marker-big');
     // $('#Prince-hinoi').addClass('marker-big');   
      //$('#p_hinoi-big').removeClass('marker-big');
      
    }
  }

  function initMarkerTahiti() {
    $('.marker').removeClass('is-active-marker');
    $('#Facebook_Places').css('display','none');
    $('#face-tony-big').addClass('is-active-marker marker-big');
  }
  function initmarker(href) {

    if(href === '#Tahiti') {
      $('.marker').removeClass('is-active-marker');
      $('#Facebook_Places').css('display','none');
      $('#face-tony-big').addClass('is-active-marker marker-big');
      map_title.html('Face tony');
      map_place.html('Face au McDonald de Papeete');
    } else if (href === '#Moorea') {
      $('.marker').removeClass('is-active-marker');
      $('#paopao').addClass('is-active-marker');
      map_title.html('Paopao');
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
