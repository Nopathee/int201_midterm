//headElement is a head element node
const headElement = document.head

console.log(headElement)

console.log(headElement.childNodes) //return the child element ทุกๆnodeที่เป็นลูก Node List datatype
console.log(headElement.children) // return child elements เอาแค่ element ขึ้นมา HTML collection DATA type

const headChildNodes = headElement.childNodes
headChildNodes.forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})

//HTML Collection is array-like (not real array) ,need to convert to array before using array functions
const headChildren = headElement.children
Array.from(headChildren).forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})

//first child
console.log(headElement.firstElementChild)
console.log(headElement.firstChild)

//last Child
console.log(headElement.lastElementChild)
console.log(headElement.lastChild)

//parent
console.log(headElement.parentElement)
console.log(headElement.parentNode)

//sibling 
console.log(headElement.previousElementSibling)
console.log(headElement.previousSibling)
console.log(headElement.nextElementSibling)
console.log(headElement.nextSibling)


const headFirstElementChild = headElement.firstElementChild
const headFirstElementChildAttrs = headFirstElementChild.attributes

Array.from(headFirstElementChildAttrs).forEach((attr) => {
    console.log(attr)
})