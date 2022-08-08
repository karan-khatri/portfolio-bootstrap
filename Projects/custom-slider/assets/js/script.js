$(document).on('ready', function () {
  $('.vertical-center').slick({
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    vertical: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
  })

  $('.owl-carousel').owlCarousel({
    
    center: true,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  })

  $('.owl-item').css('transform', 'scale(0.9)')
  $('.active').css('transform', 'scale(1.08)')
  $('.owl-item.center').css('transform', 'scale(1.3)')
  $('.active:first').css('transform', 'scale(1)')
  $('.active').last().css('transform', 'scale(1)')
  $('.active').css('zIndex', '2')
  $('.active').first().css('zIndex', '-1')
  $('.active').last().css('zIndex', '-1')

  $('.owl-nav').click(function (e) {
    $('.owl-item').css('transform', 'scale(0.9)')
    $('.active').css('transform', 'scale(1.08)')
    $('.owl-item.center').css('transform', 'scale(1.3)')
    $('.active:first').css('transform', 'scale(1)')
    $('.active').last().css('transform', 'scale(1)')

    $('.active').css('zIndex', '2')
    $('.active').first().css('zIndex', '-1')
    $('.active').last().css('zIndex', '-1')

    e.preventDefault()
  })

  $('.owl-carousel')
    .owlCarousel()
    .on('dragged.owl.carousel', function (event) {
      $('.owl-item').css('transform', 'scale(0.9)')
      $('.active').css('transform', 'scale(1.08)')
      $('.owl-item.center').css('transform', 'scale(1.3)')
      $('.active:first').css('transform', 'scale(1)')
      $('.active').last().css('transform', 'scale(1)')
      $('.active').css('zIndex', '2')
      $('.active').first().css('zIndex', '-1')
      $('.active').last().css('zIndex', '-1')
      event.preventDefault()
    })
})
