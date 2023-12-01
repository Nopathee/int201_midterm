// 1.select HTML elements
const outerDiv = document.getElementById('outer-div')
const innerDiv = document.getElementById('inner-div')

const submitButton = document.querySelector('button')

//2. select event type "click"
//3. register event type to HTML objects

outerDiv.addEventListener('click', (e) => {
    console.log('outer div clicked')
    console.log(e.type) // click
    console.log(e.target) //<button>Submit</button>
    console.log(e.currentTarget) //<div id="outer-div">...</div>
    console.log(e.eventPhase) // 3
}, true)

innerDiv.addEventListener('click', (e) => {
    console.log('inner div clicked')
    console.log(e.type) // click
    console.log(e.target) //inner
    console.log(e.currentTarget) //<div id="outer-div">...</div>
    console.log(e.eventPhase) // 3
}, true)

submitButton.addEventListener('click', (e) => {
    console.log('submit button clicked')
    console.log(e.type) // click
    console.log(e.target) //outer
    console.log(e.currentTarget) //<div id="outer-div">...</div>
    console.log(e.eventPhase) // 3
}, true)