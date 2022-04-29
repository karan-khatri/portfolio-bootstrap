var names = ['Michael', 'Peter', 'Justin', 'Diana', 'Kim', 'Donald', 'Jennifer', 'Bill', 'Taylor', 'James', 'David', 'George', 'Loan', 'Emma', 'Isabella', 'Mia'];

var places = ['Jacksonville, FL', 'Memphis, TN', 'Detroit, MI', 'Baltimore, MD', 'Miami, FL', 'Pittsburgh, PA', 'Toledo, OH', 'Orlando, FL', 'Reno, NV', 'Vancouver, WA'];

var buyerPopup = document.getElementById('pop-up');

setInterval(changeBuyerDetails, 8000);

function changeBuyerDetails() {
  $('#pop-up').css('left', '0px');
  $('#buyer-name').text(names[Math.floor(Math.random() * (14 - 0)) + 0]);
  $('#location-name').text(places[Math.floor(Math.random() * (9 - 0)) + 0]);
}
