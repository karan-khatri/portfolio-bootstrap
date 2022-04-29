(function ($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 54,
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 56,
  // })

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

$(document).ready(function () {
  $('input[name="optPackages"]').click(function () {
    $(this).tab('show');
    $(this).removeClass('active');
  });

  $('#recurrenceCheckbox').change(function (e) {
    e.preventDefault();
    $(this).is(':checked') ? $('#normalDateSelector').prop('disabled', true) : $('#normalDateSelector').prop('disabled', false);
  });

  $('#r1RecurrenceCheckbox').change(function (e) {
    e.preventDefault();
    $(this).is(':checked') ? $('#r1NormalDateSelector').prop('disabled', true) : $('#r1NormalDateSelector').prop('disabled', false);
  });

  $('#r2RecurrenceCheckbox').change(function (e) {
    e.preventDefault();
    $(this).is(':checked') ? $('#r2NormalDateSelector').prop('disabled', true) : $('#r2NormalDateSelector').prop('disabled', false);
  });

  $('#r3RecurrenceCheckbox').change(function (e) {
    e.preventDefault();
    $(this).is(':checked') ? $('#r3NormalDateSelector').prop('disabled', true) : $('#r3NormalDateSelector').prop('disabled', false);
  });

  // $('#r1MonthlyPackage').change(function (e) {
  //   e.preventDefault()
  //   $(this).is(':checked') ? $('#r1MonthlyPackageInput').attr({ min: '1', max: '31' }) : null
  // })

  // $('#monthlyPackage').change(function (e) {
  //   e.preventDefault()
  //   $(this).is(':checked') ? $('#monthlyPackageInput').attr({ min: '1', max: '31' }) : null
  // })

  // $('#monthlyPackage').change(function (e) {
  //   e.preventDefault()
  //   $(this).is(':checked') ? $('#monthlyPackageInput').attr({ min: '1', max: '31' }) : null
  // })

  // $('#monthlyPackage').change(function (e) {
  //   e.preventDefault()
  //   $(this).is(':checked') ? $('#monthlyPackageInput').attr({ min: '1', max: '31' }) : null
  // })

  $('input[name="optEndDate"]').click(function (e) {
    $('#radio-no-end-date').is(':checked') ? $('#end-date-input').prop('disabled', true) : $('#end-date-input').prop('disabled', false);
    $('#radio-end-date').is(':checked') ? $('#end-date-input').prop('disabled', false) : $('#end-date-input').prop('disabled', true);

    $('#r1-radio-no-end-date').is(':checked') ? $('#r1-end-date-input').prop('disabled', true) : $('#r1-end-date-input').prop('disabled', false);
    $('#r1-radio-end-date').is(':checked') ? $('#r1-end-date-input').prop('disabled', false) : $('#r1-end-date-input').prop('disabled', true);

    $('#r2-radio-no-end-date').is(':checked') ? $('#r2-end-date-input').prop('disabled', true) : $('#r2-end-date-input').prop('disabled', false);
    $('#r2-radio-end-date').is(':checked') ? $('#r2-end-date-input').prop('disabled', false) : $('#r2-end-date-input').prop('disabled', true);

    $('#r3-radio-no-end-date').is(':checked') ? $('#r3-end-date-input').prop('disabled', true) : $('#r3-end-date-input').prop('disabled', false);
    $('#r3-radio-end-date').is(':checked') ? $('#r3-end-date-input').prop('disabled', false) : $('#r3-end-date-input').prop('disabled', true);
  });
});
