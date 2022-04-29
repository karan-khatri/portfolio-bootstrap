$(document).ready(function () {
  // $('.q1').click(function (e) {
  //   if ($('.a1').is(':visible')) {
  //     $('.a1').slideUp()
  //   } else {
  //     $('.q1 > .changeable').html('-')
  //     $('.a1').slideDown()
  //   }
  // })
  // $('.q2').click(function (e) {
  //   if ($('.a2').is(':visible')) {
  //     $('.a2').slideUp()
  //   } else {
  //     $('.a2').slideDown()
  //   }
  // })
  // $('.q3').click(function () {
  //   if ($('.a3').is(':visible')) {
  //     $('.a3').slideUp()
  //   } else {
  //     $('.a3').slideDown()
  //   }
  // })
  // $('.q4').click(function () {
  //   if ($('.a4').is(':visible')) {
  //     $('.a4').slideUp()
  //   } else {
  //     $('.a4').slideDown()
  //   }
  // })
  // $('.q5').click(function () {
  //   if ($('.a5').is(':visible')) {
  //     $('.a5').slideUp()
  //   } else {
  //     $('.a5').slideDown()
  //   }
  // })
  // $('.q6').click(function () {
  //   if ($('.a6').is(':visible')) {
  //     $('.a6').slideUp()
  //   } else {
  //     $('.a6').slideDown()
  //   }
  // })

  $('.question.active').next().slideDown();

  $('span.changeable').html('+');
  $('.active > span.changeable').html('-');

  $('.question').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').next().slideUp();
      $('span.changeable').html('+');
      $(this).find('span.changeable').html('+');
    } else {
      $('.question.active').removeClass('active').next('.answer').slideUp();
      $('span.changeable').html('+');
      $(this).find('span.changeable').html('-');

      $(this).addClass('active').next('.answer').slideDown();
    }
  });
});
