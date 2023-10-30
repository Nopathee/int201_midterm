const names = ['alice', ' John' , 'Bob' , 'Ann']

//all names
const isStartWithALetter =  names.every(
     (name) => name.toLowerCase().startsWith('a')
)
console.log(isStartWithALetter)

//atleast one name
const is1StartWithALetter =  names.some(
    (name) => name.toLowerCase().startsWith('a')
)
console.log(is1StartWithALetter)