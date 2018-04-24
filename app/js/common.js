$(function() {

//timer
var endtime = '2018-5-12';

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function () {
        var t = getTimeRemaining(endtime);
        clock.innerHTML = t.days + ' дня, ' +
            t.hours + ':' +
            t.minutes + ':' +
            t.seconds;
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}
initializeClock('clockDiv', endtime);
// *****
// slider
 $('.bigSlide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dotsClass: 'sliderDots',


  asNavFor: '.navForBigSlide',
    responsive: [
    {
      breakpoint: 768,
      	settings: {
        	arrows: false,
        	dots: true,
        	draggable: true,
        	swipeToSlide: true
      }
    }
      ]

});
$('.navForBigSlide').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.bigSlide',
  vertical: true,
  draggable: false,
  focusOnSelect: true,
  
  responsive: [
    {
      breakpoint: 768,
      	settings: {
        	arrows: false,
        	vertical: false
      }
    }
      ]
});
$('.sliderDots li:eq(0)').addClass('activeDot');
$('.sliderDots li').click(function() {
	$('.sliderDots li').removeClass('activeDot');
	$(this).addClass('activeDot');
	console.log($(this));
});
$('.colorBox').click(function(e){
	e.preventDefault();
	$('.colorBox').removeClass('active')
	$(this).addClass('active');
	var $color = $(this).attr("data-color");
	var colorName = $('.colorName span');
	colorName.text($color);
});
$('.sizeBox').click(function(e){
	e.preventDefault();
	$('.sizeBox').removeClass('active');
	$(this).addClass('active');
});
 $currentQuantity = 1;
    $('.minus').on('click', function (e) {
        e.preventDefault();
        if ($currentQuantity > 1) {
            $currentQuantity -= 1;
            $(".counter input").val($currentQuantity);
        }
    });
    
    $('.plus').on('click', function (e) {
        e.preventDefault();
        if($currentQuantity <= 9){
        $currentQuantity += 1;
        $(".counter input").val($currentQuantity);
        }
    });
    // $("#zoom").elevateZoom();
$('.showNav').click(function(e) {
	e.preventDefault();
	$('.mainNav').slideDown();
});
$('.hideNav').click(function(e) {
	e.preventDefault();
	$('.mainNav').slideUp();
});
	$('.accordeonTitle').on('click', f_acc);

function f_acc(){
//скрываем все кроме того, что должны открыть
  $('.accordeonDetails').not($(this).next()).slideUp(500);
 
  if ($(this).children('span').text() == "-")
  {
  	$(this).children('span').text('+');

  }
  else{
  	 $(this).children('span').text('-');
  }

  $('.accordeonTitle').not($(this)).children('span').text('+');

// открываем или скрываем блок под заголовком, по которому кликнули
	
    $(this).next().slideToggle(500);    
}
});
