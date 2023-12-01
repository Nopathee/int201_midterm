const firstDiv = document.body.firstElementChild;
console.log(firstDiv)

const firstDivAttributes = firstDiv.attributes
console.log(firstDivAttributes) // length 2 , id and class attributes

Array.from(firstDivAttributes).forEach(attr => {
    console.log(attr.name)
    console.log(attr.value)
});

console.log(firstDiv.getAttribute('id')) // return value of specified attribute 'id'
console.log(firstDiv.getAttribute('class')) //return value of specified attribute 'class'

const firstAttribute = firstDivAttributes[0]
console.log(firstAttribute.ownerDocument)
console.log(firstAttribute.ownerElement)
//create a new attribute named 'owner' with value 'Umaporn'
firstDiv.setAttribute('owner','Umaporn')

//create a new <p></p> umder div .courses
const newPELe = document.createElement('p') //<p></p>
newPELe.textContent = 'Client Web Programming II' //<p>Client Web Programming II</p>
newPELe.setAttribute('id','int203') //<p id="int203">Client Web Programming II</p>
newPELe.setAttribute('class','courses') // <p id="int203" class="courses">Client Web Programming II</p>

const divCoursesParent = document.getElementById('bscit-courses')
// divCoursesParent.appendChild(newPELe)

//  const refNode = divCoursesParent.lastElementChild
// divCoursesParent.insertBefore(newPELe, refNode)

const oldNode = divCoursesParent.lastElementChild
divCoursesParent.replaceChild(newPELe, oldNode)

divCoursesParent.removeChild(newPELe)