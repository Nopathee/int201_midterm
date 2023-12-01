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
