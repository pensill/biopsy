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



$( document ).ready(function() {
/*search input header*/
    $('#header-search').click(function(){
        $('.header-search__input').toggleClass('fadeInRight');
        $('.header-search__input').toggleClass('fadeOutRight');
    });
/*search input header end*/



/*slider*/
/*logo-carousel*/
  $("#logo-carousel").owlCarousel({
      autoPlay : 2000,
      nav:true,
      rtl:true,
      loop: true,
      items:4,
      responsiveClass:true,
  });
/*logo-carousel end*/


/*item-carousel*/
  $("#item-carousel").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '#item-carousel-nav'
  });

$('#item-carousel-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '#item-carousel'
  });
/*item-carousel end*/



/*slider*/
});


/*input number*/
;(function($) {
  "use strict";
  
  function InputNumber(element) {
    this.$el = $(element);
    this.$input = this.$el.find('[type=text]');
    this.$inc = this.$el.find('[data-increment]');
    this.$dec = this.$el.find('[data-decrement]');
    this.min = this.$el.attr('min') || false;
    this.max = this.$el.attr('max') || false;
    this.init();
  }
  
  InputNumber.prototype = {
    init: function() {
      this.$dec.on('click', $.proxy(this.decrement, this));
      this.$inc.on('click', $.proxy(this.increment, this));
    },
    
    increment: function(e) {
      var value = this.$input[0].value;
      value++;
      console.log(value, this.max);if (!this.max || value <= this.max) {this.$input[0].value = value++;
      }
    },
    
    decrement: function(e) {
      var value = this.$input[0].value;
      value--;
      if (!this.min || value >= this.min) {
        this.$input[0].value = value;
      }
    }
  };

  $.fn.inputNumber = function(option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('inputNumber');

      if (!data) {
        $this.data('inputNumber', (data = new InputNumber(this)));
      }
    });
  };

  $.fn.inputNumber.Constructor = InputNumber;
})(jQuery);


jQuery(function ($) {
  $('.input-number').inputNumber();
});
/*input number end*/

