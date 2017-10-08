 (function () {
  'use strict';
  let marker = $('.marker');
  let map_title = $('.map-title');
  let map_place = $('.map-place');
  jQuery.each( marker, function( i, val ) {
    $(this).on('click',(e) => {
      let place = $(this).attr('id');
      displaydata(place);
      e.preventDefault();
      $('.marker').removeClass('is-active-marker') /
      $(this).addClass('is-active-marker')
    })
  });
  function displaydata(place) {
    if(place === 'Prince-hinoi') {
      map_title.html('Prince Hinoi');
      map_place.html('lorem ipsum');
    } 
    else if (place ==='Facebook_Places') {
      map_title.html('Face tony');
      map_place.html('Face au McDonald de Papeete');
    }
     else if(place ==='carrefour') {
      map_title.html('Carrefour Punaauia');
      map_place.html('lorem ipsum dorote vvsdfsf');
    } 
    else if(place ==='paopao') {
      map_title.html('paopao');
      map_place.html('lorem ipsum dorote vvsdfsf');
    }
    else if(place ==='nunue') {
      map_title.html('bora bora');
      map_place.html('lorem ipsum dorote vvsdfsf');
    }
    else if(place ==='uturoa') {
      map_title.html('uturoa');
      map_place.html('lorem ipsum dorote vvsdfsf');
    }
  }
})();
