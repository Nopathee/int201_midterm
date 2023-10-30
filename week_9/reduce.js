const nums = [ 5 , 2 , 3 , 4 , 7 ]
const total = nums.reduce( (sum , num) => sum + num , 0 )
console.log(total)

const names = [ 'Alice' , 'Bob' , 'Ann' , 'Cath' ]
const firstLetter = names.reduce( (previousname,name) => {
    return previousname + name[0]
},'' )

console.log(firstLetter)

const buyProduct = [
    {price : 50 , quantity : 2},
    {price : 299 , quantity : 10},
    {price : 15 , quantity : 5}
]

const totalPrice = buyProduct.reduce( (sumPrice,price) => {
    return sumPrice + (price.price*price.quantity)
},0)

console.log(totalPrice)