const line = '----------------------------------------------------------------'
const students = [
    {id: 1 , firstname : 'Somsak' , lastname : 'Jaidee'},
    {id: 2 , firstname : 'Somchai' , lastname : 'Dee'},
    {id: 3 , firstname : 'Somying' , lastname : 'Jai'}
]

const jaiStudent = students.filter((student) => 
student.lastname.toLowerCase().startsWith('jai')
)

console.log(jaiStudent)

console.log(line)

const deStudent = students.filter((student) => 
student.lastname.toLowerCase().includes('de') || student.firstname.toLowerCase().includes('de')
)

console.log(deStudent)

console.log(line)

const fullName = students.map((student) => student.lastname + ', ' + student.firstname)
console.log(fullName)

console.log(line)

const newId = students.map((student) => {
    const currentYear = new Date(Date.now()).getFullYear()
    return currentYear + ' ' + student.id
})
console.log(newId)

console.log(line)

//find เหมือนกับ filter แต่เอาแค่ตัวแรก
const firstJaiStudent = students.find((student) => 
student.lastname.toLowerCase().startsWith('jai')
)
console.log(firstJaiStudent)

console.log(line)

const firstJaiStudentId = students.find((student) => 
student.lastname.toLowerCase().startsWith('jai')
).id
console.log(firstJaiStudentId)

console.log(students.every((student) => student.id > 0))

console.log(students.some((student) => student.firstname.toLowerCase().endsWith('sak')))
