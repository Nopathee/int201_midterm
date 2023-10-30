const nums = [ 10 , 3 , 75 , 1 , 30 , 100]

//remove 75 , 1 , 30
const removeElement = nums.splice(2 , 3) // will return array of deleted elements
console.log(removeElement) // [ 75, 1, 30 ]
console.log(nums) //[ 10, 3, 100 ]

// splice to add three new elements at Index 3 , return empty array
const addElement = nums.splice(2 , 0 , 11 , 555 , 888)
console.log(addElement) // []
console.log(nums) // [ 10, 3, 11, 555, 888, 100 ]

//splice to replace at index 1 with [200 , 400]
const replaceElement = nums.splice(1 , 2 , 200 , 400)
console.log(replaceElement) // [ 3, 11 ]
console.log(nums) // [ 10, 200, 400, 555, 888, 100 ]