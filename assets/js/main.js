/**
*
* -----------------------------------------------------------------------------
*
* Template : Evenio - Events & Conference HTML Template
* Author : reacthemes
* Author URI : http://www.reactheme.com/
*
* -----------------------------------------------------------------------------
*
**/
$(window).on('load', function(){
  $('.preloader').fadeOut(1000);
})



$(window).scroll(function(){
  
  // scroll-up button start
  if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
  }else{
      $('.scroll-up-btn').removeClass("show");
  }
});

$('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop: 0});
  // removing smooth scroll on slide-up button click
  $('html').css("scrollBehavior", "auto");
});
//   scroll-up button end

// mobile menu start
// $(".mobile__icon").click(function(){
//   $(".mobile__menu").addClass("open");
// })

// $(".cross__btn").click(function(){
//   $(".mobile__menu").removeClass("open");
// })

// mobile menu end


(function($) {
	"use strict";




// live slide start
var swiper = new Swiper(".liveSwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	// pagination: {
	//   el: ".swiper-pagination",
	//   clickable: true,
	// },

	breakpoints: {
		1199: {
			slidesPerView: 3
		},

		992: {
		  	slidesPerView: 2
		},

		767: {
			slidesPerView: 2
		},

		576: {
			slidesPerView : 1
		},

		320: {
			slidesPerView: 1
		}
	  }

  });
// live slide end


  // top seller slider
  var swiper = new Swiper(".seller__Swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 4
      },
  
      992: {
          slidesPerView: 2
      },
  
      767: {
        slidesPerView: 2
      },
  
      576: {
        slidesPerView : 1
      },
  
      320: {
        slidesPerView: 1
      }
      }
  });


 // digital product tab
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


  // top seller slider
  var swiper = new Swiper(".testimonial__Swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      992: {
          slidesPerView: 2
      },
  
      767: {
        slidesPerView: 2
      },
  
      576: {
        slidesPerView : 1
      },
  
      320: {
        slidesPerView: 1
      }
      }
  });

})(jQuery);