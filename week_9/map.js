// replace negative numbers to zero
const number = [-5, -6, 7, 8, 9, -1, 0]
const replacedNumber = number.map((num) => {
  return num < 0 ? 0 : num
})

console.log(replacedNumber)