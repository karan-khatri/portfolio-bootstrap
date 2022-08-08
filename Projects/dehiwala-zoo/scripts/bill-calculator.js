/**
 * Display areas
 * @type {Element}
 */
const ticketType = document.querySelector('#ticket-type')
const numberOfTickets = document.querySelector('#no-tickets')
const durationTag = document.querySelector('#duration')
const extraPass = document.querySelector('#extras')
const currentBillTag = document.querySelector('#current-bill')
const overallOrderPrice = document.querySelector('.overall-order-price')
const overallOrder = document.querySelector('.overall-order')
const modalHeader = document.querySelector('.modal-header h2')
const modalBody = document.querySelector('.modal-body p')
const modalFooter = document.querySelector('.modal-body h4')

const loyalityPointsElement = document.querySelector('#loyaity-points')

// buttons
const addToOrderButton = document.querySelector('#addToOrder')
const placeOrderButton = document.querySelector('#placeOrder')
const addToFavButton = document.querySelector('#addToFav')
const placeFavOrderButton = document.querySelector('#placeFavOrder')
const checkLoyalityPointsButton = document.querySelector('#loyalityPointsBtn')
const donateButton = document.querySelector('#donate-btn')
const favouritesButton = document.querySelector('#showFavourites')
let donationFormInputs = document.querySelectorAll('.donatee input')

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'LKR',
})

let ordersInCart = 0

/**
 * Billing Details
 */
// Ticket categories and prices
const billingCostWithTicket = {
  'Day Pass': {
    adult: 1000,
    child: 500,
  },
  'Student pass': {
    adult: 500,
    child: 250,
  },
  'Foreigner Pass': {
    adult: 5000,
    child: 2500,
  },
}
// Duration categories and prices
const durationCosts = {
  'Three Hours': 0,
  'Half Day': 250,
  'Full Day': 500,
  'Two Days': 1000,
}
// Passes categories and prices
const passes = {
  annual: 5000,
  food: 500,
}

/*Loyality Points Variable*/
let loyalityPoints = 0

/**
 * calculate basic bill only based on the ticket type and the number of persons who are buying tickets
 * returns to value as a string to the billing details and the value for calculating total bill
 */
const basicBillCalculator = (ticketCategory, tickets) => {
  const numberOfAdults = parseInt(tickets[0]) || 0
  const numberOfChildren = parseInt(tickets[1]) || 0
  return {
    value:
      billingCostWithTicket[ticketCategory || 'Day Pass'].adult *
        numberOfAdults +
      billingCostWithTicket[ticketCategory || 'Day Pass'].child *
        numberOfChildren,
    details: `${
      billingCostWithTicket[ticketCategory || 'Day Pass'].adult
    } * ${numberOfAdults} + 
        ${
          billingCostWithTicket[ticketCategory || 'Day Pass'].child
        } * ${numberOfChildren}`,
  }
}

/**
 * calculate bill based on the total number of persons with the spending time in the zoo
 * returns to value as a string to the billing details and the value for calculating total bill
 * @param tickets
 * @param duration
 * @returns {{details: string, value: number}}
 */
const durationAddedBillCalculator = (tickets, duration) => {
  const numberOfAdults = parseInt(tickets[0]) || 0
  const numberOfChildren = parseInt(tickets[1]) || 0
  const totalMembers = numberOfChildren + numberOfAdults
  return {
    value: durationCosts[duration || 'Three Hours'] * totalMembers,
    details: `${
      durationCosts[duration || 'Three Hours']
    } * (${numberOfAdults} + ${numberOfChildren})`,
  }
}

/**
 * calculate the bill for extra features
 * returns to value as a string to the billing details and the value for calculating total bill
 * @param tickets
 * @param annual
 * @param food
 * @returns {{foodDetail: string, annualDetail: string, value: number}}
 */
const extraPassCostCalculator = (tickets, annual, food) => {
  const numberOfAdults = parseInt(tickets[0]) || 0
  const numberOfChildren = parseInt(tickets[1]) || 0
  const totalMembers = numberOfChildren + numberOfAdults
  return {
    value:
      ((annual ? passes.annual : 0) + (food ? passes.food : 0)) * totalMembers,
    annualDetail: `${passes.annual} * ${totalMembers}`,
    foodDetail: `${passes.food} * ${totalMembers}`,
  }
}

let formData = null
let count = 1

let totalBillingDetails = ''
let totalBill = 0

const calculateCurrentBill = (event, submit = false) => {
  formData = new FormData(billingForm)

  // take the values of form inputs
  const billCategory = formData.get('ticketCategory')
  const passes = formData.getAll('tickets')
  const duration = formData.get('duration')
  const annual = formData.get('annual')
  const food = formData.get('food')

  // calculate basic billing types and get current bill by adding adding other bill types
  const basicBill = basicBillCalculator(billCategory, passes)
  const durationBill = durationAddedBillCalculator(passes, duration)
  const extraBill = extraPassCostCalculator(passes, annual, food)
  const currentBill = basicBill.value + durationBill.value + extraBill.value

  // If it is only a change in the form then show the updates in the current order section
  if (!submit) {
    ticketType.innerHTML = `Ticket Types : ${
      formData.get('ticketCategory') || 'Not Selected'
    }`
    numberOfTickets.innerHTML = `Number of Tickets : ${
      passes[0]
    } Adult Passes and ${
      passes[1] === '1' ? '1 Child Pass' : `${passes[1]} Child Passes`
    }`
    durationTag.innerHTML = `Duration of Visit : ${
      formData.get('duration') || 'Not Selected'
    }`
    extraPass.innerHTML = `Extra Passes : ${
      annual && food
        ? 'Annual Pass and Food Token'
        : annual
        ? 'Annual Pass'
        : food
        ? 'Food Token'
        : 'Not Selected'
    }`
    currentBillTag.innerHTML = `Current Bill : ${formatter.format(
      currentBill
    )}/=`
  }
  // Otherwise add a html input string to with <p> to the billing details list when there is new current order adding
  // to the overall order
  else {
    if (billCategory && duration) {
      event.preventDefault()
      ordersInCart++

      totalBillingDetails += `<p>
            (${count})
            ${
              passes[0] === '1'
                ? '1 Adult Pass and '
                : `${passes[0]} Adult Passes and `
            }
            ${
              passes[1] === '1'
                ? '1 Child Pass and '
                : `${passes[1]} Children Passes`
            } from the category of
            ${billCategory} ${duration ? `with ${duration} time duration` : ''}
            ${
              annual && food
                ? ' with Annual Pass and Food Token.'
                : annual
                ? 'with Annual Pass.'
                : food
                ? 'with Food Token.'
                : '.'
            }
            Billing amount is ${formatter.format(currentBill)}/=
            </p>`
      checkLoyalityPoints(event)

      // reset the current order section after adding current order to overall order
      count++
      billingForm.reset()
      totalBill += currentBill
      ticketType.innerHTML = `Ticket Types : Not Selected`
      numberOfTickets.innerHTML = 'Number of Tickets : Not Selected'
      durationTag.innerHTML = 'Duration of Visit : Not Selected'
      extraPass.innerHTML = 'Extra Passes : Not Selected'
      currentBillTag.innerHTML = 'Current Bill : LKR 0'
      overallOrderPrice.innerHTML = `Overall Bill : ${formatter.format(
        totalBill
      )}/=`

      // show order items in the overall order section
      overallOrder.innerHTML = totalBillingDetails
    }
  }
}

/*defining favourite order Object*/
let favouriteOrder = {
  details: totalBillingDetails,
  cost: totalBill,
  ordersCount: 0,
}

/*function for Add to Fav Order*/
function addFav() {
  if (totalBillingDetails && totalBill) {
    favouriteOrder.details = totalBillingDetails
    favouriteOrder.cost = totalBill
    favouriteOrder.ordersCount = ordersInCart
  }
}

/*function for placing Favourite order Button*/
function placeFavOrder(e) {
  e.preventDefault()
  if (favouriteOrder) {
    totalBillingDetails = favouriteOrder.details
    totalBill = favouriteOrder.cost
    overallOrder.innerHTML = totalBillingDetails
    ordersInCart = favouriteOrder.ordersCount
  }
}

/*function for checking loyality points*/

function checkLoyalityPoints(e) {
  e.preventDefault()
  if (ordersInCart > 3) {
    loyalityPoints = ordersInCart * 20
  }
  loyalityPointsElement.innerHTML = `<h3>Loyality Points: ${loyalityPoints}<h3/>`
  console.log(loyalityPoints)
}

/*function for validating and submiting donation form*/
function donationModal(e) {
  e.preventDefault()
  donationFormData = new FormData(donationForm)
  for (let i = donationFormInputs.length - 1; i >= 0; i--) {
    console.log(donationFormInputs[i])
    donationFormInputs[i].checkValidity()
    donationFormInputs[i].reportValidity()
  }
  let name = donationFormData.get('FN')
  let address = donationFormData.get('address')
  let cardName = donationFormData.get('card-name')
  let cardNumber = donationFormData.get('card-number')
  let expMonth = donationFormData.get('card-month')
  let expYear = donationFormData.get('card-year')
  let cvv = donationFormData.get('card-cvv')
  if (name && address && cardName && cardNumber && expMonth && expYear && cvv) {
    modalHeader.innerText = 'Payment Status: Successfull!!!'
    modalBody.innerText = `Thank you for your Payment ${name}.`
    openModel()
  }
}

function showFavourites(e) {
  e.preventDefault()
  if (favouriteOrder.details) {
    modalHeader.innerText = 'Favourite Order'
    modalBody.innerHTML = `${favouriteOrder.details}`
    // modalFooter.innerText = `Total bill: ${favouriteOrder.totalBill}`
    openModel()
  }
}

//Listening to changes in the billing form
const billingForm = document.querySelector('#billing-form')
billingForm.addEventListener('change', (event) => calculateCurrentBill(event))

//Call calculateCurrentBill function when clicking add to order button
addToOrderButton.addEventListener('click', (event) =>
  calculateCurrentBill(event, true)
)

/*Listening to click event of add to Favourite button*/
addToFavButton.addEventListener('click', function () {
  addFav()
})
/*Listening to click event of Place Favourite order button*/
placeFavOrderButton.addEventListener('click', (event) => {
  placeFavOrder(event)
})
/*Listening to click event of Check Loyality Points button*/
checkLoyalityPointsButton.addEventListener('click', (event) => {
  checkLoyalityPoints(event)
})
/*Listening to Submit Click event of Donate button*/
donateButton.addEventListener('click', (event) => {
  donationModal(event)
})
/*Listening to Click event of favourites button*/
favouritesButton.addEventListener('click', (event) => {
  showFavourites(event)
})

/**
 * Call calculate CurrentBill function when clicking place order button
 */
placeOrderButton.addEventListener('click', (event) => {
  event.preventDefault()
  if (totalBill) {
    modalHeader.innerText = 'Order Placing was Successful!!!'
    modalBody.innerText = `Your total cost is ${formatter.format(
      totalBill
    )}/=. Thank you for visiting us!`
    openModel()
  }
  // Reset the overall bill field after showing modal
  overallOrderPrice.innerHTML = 'Overall Bill : LKR 0'

  // Reset current order list
  overallOrder.innerHTML = ''
  totalBillingDetails = ''
})
