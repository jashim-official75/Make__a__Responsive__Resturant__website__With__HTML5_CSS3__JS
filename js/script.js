window.addEventListener('scroll',function(){

  const header = document.querySelector('header');
  header.classList.toggle("sticky",window.scrollY > 0);

});

function toggleMenu()
{
  const menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

// var navbar = document.querySelector('header')

// window.onscroll = function() {

//   // pageYOffset or scrollY
//   if (window.pageYOffset > 0) {
//     navbar.classList.add('scrolled')
//   } else {
//     navbar.classList.remove('scrolled')
//   }
// }



var appendNumber = 3;
    var prependNumber = 1;
    
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 0,
      loop:true,

      autoplay:true,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }
    });


   $(document).ready(function(){
  var $grid = $('.cattegory-active').isotope({
  itemSelector: '.cattegory-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1,
  }
  
})
$('.cattegory-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
});


