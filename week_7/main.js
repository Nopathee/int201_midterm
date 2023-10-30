//1. create object by literal {}
const student = {id:65130500033 , firstname: 'Nopathee' , lastname: 'Chan-in'}
console.log(student)
console.log(Object.keys(student))
console.log(Object.values(student))
console.log(typeof student)
console.log(Object.prototype.isPrototypeOf(student))
console.log(Date.prototype.isPrototypeOf(student))

const lecturer = {id:1001 , firstname: 'Umaporn' , lastname: 'Sup'}
console.log(Object.prototype.isPrototypeOf(lecturer))

//way to get property values
const someoneId = student.id //object.keys
const someoneFirstName = student['firstname'] // object["key"]
console.log(someoneId)
console.log(someoneFirstName)

//way to assign/set property values
student.id = 6513050003
student["firstname"] = 'john'
console.log(student.id)
console.log(student['firstname'])

//dynamic properties
//add new properties
student['email'] = 'nopathee.@kmutt.ac.th'
student.address = 'Bankok,Thailand'
console.log(student)

//delete existing properties
delete student.address
console.log(student)

//nested objects
student.advisor = lecturer
console.log(student)

console.log(student.advisor.firstname)
console.log(student['advisor']['firstname'])

student.getFullName = function() {
    return `${this.firstname} ${this.lastname}`
}
console.log(student.getFullName) // get properties values of getFullName
console.log(student.getFullName()) // execute function getFullName

const student2 = {id:555 , firstname: 'Suda' , lastname : 'Jaidee'}
student2.getFullName = function() {
    return `${this.firstname} ${this.lastname}`
}
console.log(student2.getFullName())

// 2.create Obj with constructor
function Person(id,firstname,lastname) {
    this.id = id
    this.fullname = `${firstname} ${lastname}`
}
const p1 = new Person(111 , 'Mary' , 'Jo')
const p2 = new Person(222 , 'Adam' , 'Smith')
const p3 = new Person(333 , 'Susan' , 'Dee')

console.log(p1)
console.log(p2)
console.log(p3)

//  3. Create object  with class
class Student{
    constructor(id,fn,ln) {
        this.id = id
        this.firstname = fn
        this.lastname = ln
    }
    getFullName() { 
        return `${this.firstname} ${this.lastname}`
    }
}

//st1 object -> Student prototype -> Object prototype(Ancestor)
const st1 = new Student(1,'Pitch','Jo')
const st2 = new Student(2,'Lee','Smith')
console.log(st1)
console.log(st2)
console.log(st1.getFullName())
console.log(st2.getFullName())
console.log(Object.prototype.isPrototypeOf(st1)) //true
console.log(Object.prototype.isPrototypeOf(st1)) //true
console.log('----------------------------------------------------------------')
// 4. create obj by using Object.create()
const undergratSt1 = Object.create(st1)
console.log(undergratSt1)
console.log(undergratSt1.id)
console.log(undergratSt1.firstname)
console.log(undergratSt1.lastname)
console.log(Object.prototype.isPrototypeOf(undergratSt1))
console.log(Student.prototype.isPrototypeOf(undergratSt1))

undergratSt1.project = 'Web Application'
console.log(undergratSt1)


const circle = {
    radius : 2,
    // area : function(){
    //     return Math.PI * Math.pow(this.radius,2)
    // },
    // remove :function
    area(){
        return Math.PI * Math.pow(this.radius,2)
    },
    equals(compareCircle){
        return this.radius === this.compareCircle
    }
}

console.log(circle)
console.log(circle.radius)
console.log(circle.area())
console.log(circle.equals({ radius: 2}))
console.log(circle.equals({ radius: 3}))

circle = {}
console.log(JSON.stringify(circle))
if (JSON.stringify(circle) === '{}' ) console.log('empty obj')
else console.log('not empty obj')

