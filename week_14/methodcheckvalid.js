const submitButton = document.getElementById('submit-btn-01')

submitButton.addEventListener('click' , (e) => {
    e.preventDefault()
    console.log('submitButton clicked')
    const inputElement = document.querySelectorAll('input')
    
    // console.log(inputElement[0].value)
    // console.log(inputElement[1].value)
    const pElement = document.querySelector('p')
    if (inputElement[0].value.length === 0 || inputElement[1].value.length === 0){
        pElement.textContent = 'missing value, please check'
    }else{
        pElement.textContent= 'Input value Completed'
    }
})
