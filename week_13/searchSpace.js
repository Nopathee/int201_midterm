const body = document.body;
const bodyChildNodes = body.childNodes // NodeList : array-like (implement for.each , cannot array methods) , return children
const bodyChildren = body.children // HTMLCollection : array-like (not implement for.each , cannot array methods)

console.log(body)
console.log(bodyChildNodes)
console.log(bodyChildren)

bodyChildNodes.forEach(bcn => {
    console.log(bcn)
})

Array.from(bodyChildren).forEach(bc => {
    console.log(bc)
})

console.log(body.firstElementChild)
console.log(body.firstChild)
console.log(body.lastElementChild)
console.log(body.lastChild)

console.log(body.firstChild === body.firstElementChild)
console.log(body.lastChild === body.lastElementChild)

console.log(document.documentElement === document.firstElementChild)
console.log(document.documentElement === document)

console.log(document.documentElement) //html , root element
console.log(document.firstElementChild)
console.log(document.documentElement)
console.log(document) // root node

//query , selecting element by id
const course201Ele = document.getElementById("int201")
console.log(course201Ele)

const course101Ele = document.querySelector("#int101")
console.log(course101Ele)

const bscitCourses = document.querySelector("#int201,#int101")
console.log(bscitCourses)

const progCourse = document.querySelector(".programming")
console.log(progCourse)

//select , query a collection of elements
//find with css selector
const progEli = document.querySelectorAll(".programming")
console.log(progEli) //return NodeList
const liEli = document.querySelectorAll('li')
console.log(liEli) //return NodeList
//find with tag name
const liEli2 = document.getElementsByTagName('li')
console.log(liEli2) //return HTMLCollection
//find with class name
const coursesEle = document.getElementsByClassName('courses')
console.log(coursesEle) 


