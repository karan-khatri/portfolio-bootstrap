var slider = document.getElementById('ram-range-slider');

function setRangeAttributes() {
  if (window.innerWidth <= 992) {
    console.log(2);
    slider.setAttribute('step', '2');
    slider.setAttribute('min', '2');
  }
  if (window.innerWidth >= 992) {
    console.log(1);
    slider.setAttribute('step', '1');
    slider.setAttribute('min', '1');
  }
}

setRangeAttributes();

window.addEventListener('resize', setRangeAttributes);
