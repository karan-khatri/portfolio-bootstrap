$(document).ready(function () {
  const correctAnswer = 'A';
  var isCorrectOptionSelected = false;
  // const htmlString = '<span></span>';
  $(this).next().text('');

  $('input[name=mcq-options]').click(function (e) {
    e.preventDefault();
    $(this).prop('checked', true);
    if (!isCorrectOptionSelected) {
      if (this.value == correctAnswer) {
        $(this).parent().css({ color: '#27ae60' });
        $('input[name=mcq-options]').parent().css('cursor', 'auto');
        $(this).next().css({ border: 'solid 4px #27ae60' });
        isCorrectOptionSelected = true;
        $('input[name=mcq-options]').off('click');
      } else {
        $(this).parent().css({ color: '#EB5757' });
        $(this).next().css({ border: 'solid 4px #EB5757' });
        $('input[name=mcq-options]').off('click');
        $('input[name=mcq-options]').parent().css('cursor', 'auto');
      }
    }
  });
});
