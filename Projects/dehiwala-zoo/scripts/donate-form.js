
const donationForm = document.querySelector('#donate-form')
const donationSubmitBtn = document.querySelector('#donate-btn')

const formData = new FormData(donationForm)

donationSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    modalHeader.innerText = 'Donation Successful!!!'
    modalBody.innerText = 'Thank you for your kind donation!'
    openModel()
    donationForm.reset()
})
