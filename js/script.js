/*PARALLAX section--preview*/
$(window).scroll(function(e){
    parallaxFirst();

    var winSr = $(document).scrollTop();

    if(winSr > 1200){
        parallaxSecond(winSr);
    }
});

function parallaxFirst(){
  var scrolled = $(window).scrollTop();

  $('.section-preview__bg-girl').css('top',+(scrolled*0.5)+'px');

}
function parallaxSecond(){
  var  scrolledTwo = $(window).scrollTop();

  $('.section-shop__img--1').css('top',-(scrolledTwo*0.17)+'px');
  $('.section-shop__img--4').css('top',-(scrolledTwo*0.17)+'px');
}
/*PARALLAX section--end*/



/*search input header*/
$( document ).ready(function() {
    $('#header-search').click(function(){
        $('.header-search__input').toggleClass('fadeInRight');
        $('.header-search__input').toggleClass('fadeOutRight');
    });

});
/*search input header end*/


/*yandex map*/
var mapBiops;

ymaps.ready(function(){
     mapBiops = new ymaps.Map("ya_maps", {
        center: [55.63, 37.64],
        zoom: 15
    });
    var myPlacemark = new ymaps.Placemark([55.63, 37.64]);
     mapBiops.geoObjects.add(myPlacemark);
});


/*yandex map end*/