//compare object types including object and array data types
let x = [1,3,true,'unknown']
let y = [1,3,true,'unknown']
let z = x
console.log(x===y); // false //data เหมือนกัน แต่ memory address ไม่เหมือนกัน
console.log(x===z) // true

z[0] = 'A'
x[0] = 'B'
y[0] = 'A'

console.log(x)
console.log(y)
console.log(z)

console.log('---')

//object data type
let m = {id:1 , title:'pen'}
let n = {id:1 , title:'pen'}
let o = m // give memory address from m to o
console.log(m === n) // false // memory address of m === memory address of n
console.log(o === m) // true // memory address of o === memory address of m
o.id = 888
console.log(m) // {id:888, title:'pen'}
console.log(o) // {id:888, title:'pen'}
// เพราะใช้ memory address เดียวกัน
console.log('---')

//primity type
let a = 5
let b = 5
let c = a // givi data from  a to c
console.log(a === b) // true 5 === 5
console.log(a === c) // true 5 === 5