var chart1Element = document.getElementById('chart1').getContext('2d')
var chart2Element = document.getElementById('chart2').getContext('2d')

const data1 = {
  labels: ['Not Patent', 'Patent'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [140, 506],
      backgroundColor: ['rgba(191, 67, 83, 1)', 'rgb(103, 110, 183)'],
      hoverOffset: 4,
    },
  ],
}
const data2 = {
  labels: ['Active', 'Inactive'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [7, 21],
      backgroundColor: ['rgba(191, 67, 83, 1)', 'rgb(103, 110, 183)'],
      hoverOffset: 4,
    },
  ],
}

const config1 = {
  type: 'doughnut',
  data: data1,
}
const config2 = {
  type: 'doughnut',
  data: data2,
}
var chart1 = new Chart(chart1Element, config1)
var chart2 = new Chart(chart2Element, config2)

$('button.custom-accordion-button').click(function () {
  if ($(this).find('i').hasClass('opened')) {
    $(this).find('i').removeClass('opened')
  } else {
    console.log($(this).find('i'))
    var parentAccordion = $(this).parents('.accordion')

    $(parentAccordion).find('i').removeClass('opened')

    // $('button.custom-accordion-button').find('i').removeClass('opened')
    // $(this).find('i').toggleClass('opened')
    $(this).find('i').toggleClass('opened')
  }
})
