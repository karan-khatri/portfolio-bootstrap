document.addEventListener('DOMContentLoaded', function (event) {
  var cleave = new Cleave('.ccn', {
    creditCard: true,
    delimiter: '-',
  })

  var cleave = new Cleave('.mon', {
    date: true,
    datePattern: ['m'],
  })
  var cleave = new Cleave('.year', {
    date: true,
    datePattern: ['Y'],
  })
})
