'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      noFlexboxStickyFooter = function() {
        $pageBody.height('auto');
        if($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
        } else {
          $pageWrapper.height('auto');
        }
      };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        if($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}

$(function() {
// placeholder
//-----------------------------------------------------------------------------
    var windowwidth = $(window).width();

    $('input[placeholder], textarea[placeholder]').placeholder();

    $('.js-cliet-slider').slick({
      dots: true,
      speed: 300,
      centerMode: true,
      variableWidth: true,
      nextArrow: '<button type="button" class="slick-next">&rarr;</button>',
      prevArrow: '<button type="button" class="slick-prev">&larr;</button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
            arrows: false,
            centerMode: true,
            variableWidth: true,
          }
        },
      ]
    });

    if (windowwidth < 1024) {
      $('.js-keysi__list').slick({
        dots: false,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              arrows: false,
              centerMode: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
            }
          }
        ]
      });

      $('.js_keysi__list').slick({
        dots: false,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              arrows: false,
              centerMode: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
            }
          }
        ]
      });      

      $('.js-slider-help').slick({
        dots: false,
        arrows: false,
      });    

      $('.js-how-block').slick({
        dots: false,
        arrows: false,
      });         
    }

    $('.rewievs_about__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        nextArrow: '<button type="button" class="slick-next">&rarr;</button>',
        prevArrow: '<button type="button" class="slick-prev">&larr;</button>',
        adaptiveHeight: true
    });
    $('.keisi__slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      nextArrow: '<button type="button" class="slick-next">&rarr;</button>',
      prevArrow: '<button type="button" class="slick-prev">&larr;</button>',
      adaptiveHeight: true
  });
    $('.ourcomand__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        nextArrow: '<button type="button" class="slick-next">&rarr;</button>',
        prevArrow: '<button type="button" class="slick-prev">&larr;</button>',
    });
});

var map;
function initMap() {
    var myLatLng = {lat: 49.4225715, lng: 26.9763337};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        scrollwheel: false,
        center:  {lat: 49.4225715, lng: 26.9763337},  // Brooklyn.
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        }
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'ТОчка на карте'
    });
}

