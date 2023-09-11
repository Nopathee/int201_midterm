let num = 1
console.log(typeof num);

num = true
console.log(typeof num)

if (typeof num === 'boolean') console.log ('num is boolean type')

let a = 1n
console.log(typeof a)

let b = 3.2
console.log(typeof b)

let c = `A - ${b/2+1}`
console.log(c)
console.log(typeof c)

//implicit type conversion (string to boolean)
if('1')console.log('1 is boolean type')
else console.log('1 is not boolean type');

if(0) console.log('value is zero')
else console.log('value is not zero');

if(2) console.log('value is two')
else console.log('value is not two');

let msg = 'a'
if (msg) console.log('an empty string')
else console.log('not empty string')

//sample array data type []
const nums = [1,3,5,7,9]
nums[nums.length] = 11
// nums.push(9)
console.log(nums.length)
nums[0] = 11
console.log(nums)
console.log(typeof nums)
//sample object data type: collection of properties {}
const obj = {id:1,price:100}
// obj = nums // const not allowed
obj.id = 555
console.log(obj)
console.log(typeof obj)

function doSomething(activity){
    if (activity === null || activity === undefined) return 'no activity'
    else return `${activity} is done`
}
console.log(typeof doSomething)
let act1 // undefined
let act2 = null //null
let act3 = 'JS learning' //string
console.log(doSomething(act1)); // no activity
console.log(doSomething(act2));// no activity
console.log(doSomething(act3));// JS learning is done
console.log(doSomething()) //no activity //parameter is undefinedsd


let aa,bb,cc