//1. select HTML objects
const outerDiv = document.getElementById('outer-div')
const innerDiv = document.getElementById('inner-div')

const submitButton = document.querySelector('button')

function doSomething() {
    console.log('do something')
}

//multiple function handlers on the same HTML objects and event types
submitButton.addEventListener('click' , () => {
    console.log('submit button clicked')
})
submitButton.addEventListener('click' , doSomething)

//work
submitButton.removeEventListener('click' , doSomething)

//doesn't work
submitButton.removeEventListener('click' , () => {
    console.log('submit button clicked')
})