const msg = 'Today is a present'
console.log(msg.includes('Re')) //false
console.log(msg.includes('re')) //true
console.log(msg.includes('day')) //true
console.log(msg.includes('pres')) //true

const newMsg = msg.split(' ')
console.log(newMsg) // [ 'Today', 'is', 'a', 'present' ]
console.log(newMsg.includes('Re')) //false
console.log(newMsg.includes('re')) //false
console.log(newMsg.includes('day')) //false
console.log(newMsg.includes('pres')) //false
console.log(newMsg.includes('today')) //false
console.log(newMsg.includes('Today')) //true

