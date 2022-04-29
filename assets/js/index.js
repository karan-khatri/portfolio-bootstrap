//Get the button:
let mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //   mybutton.style.display = 'block';
  // } else {
  //   mybutton.style.display = 'none';
  // }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/********************************
 * Show Projects Button Start
 *******************************/
const showMoreButton = document.getElementById('showMoreProjects');
const showMoreButtonContainer = document.getElementById('showMoreButtonContainer');
const moreProjects = document.getElementById('moreProjects');
const showLessButton = document.getElementById('showLessProjects');

showMoreButton.addEventListener('click', function () {
  moreProjects.style.display = 'block';
  showMoreButtonContainer.style.display = 'none';
});

showLessButton.addEventListener('click', function () {
  moreProjects.style.display = 'none';
  showMoreButtonContainer.style.display = 'block';
});
/********************************
 * Show Projects Button End
 *******************************/

/********************************
 * Progress Bar Initialization
 *******************************/

var pbar1 = new ProgressBar.Circle('.pb1', {
  color: '#333',
  strokeWidth: 4,
  trailWidth: 1,

  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#ff9c00', width: 3 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText('HTML <br/>' + value);
    }
  },
});
pbar1.text.style.fontFamily = '"Poppins", sans-serif';
pbar1.text.style.fontSize = '2rem';

pbar1.animate(0.85);

/*****************************
 * Progress Bar Code End
 *****************************/

/********************************
 * Progress Bar Initialization
 *******************************/

var pbar2 = new ProgressBar.Circle('.pb2', {
  color: '#333',
  strokeWidth: 4,
  trailWidth: 1,

  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#ff9c00', width: 3 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText('CSS <br/>' + value);
    }
  },
});
pbar2.text.style.fontFamily = '"Poppins", sans-serif';
pbar2.text.style.fontSize = '2rem';

pbar2.animate(0.85);

/*****************************
 * Progress Bar Code End
 *****************************/

/********************************
 * Progress Bar Initialization
 *******************************/

var pbar3 = new ProgressBar.Circle('.pb3', {
  color: '#333',
  strokeWidth: 4,
  trailWidth: 1,

  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#ff9c00', width: 3 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText('JavaScript <br/>' + value);
    }
  },
});
pbar3.text.style.fontFamily = '"Poppins", sans-serif';
pbar3.text.style.fontSize = '2rem';

pbar3.animate(0.85);

/*****************************
 * Progress Bar Code End
 *****************************/
