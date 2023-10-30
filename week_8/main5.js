//foreach
const  fruits = ['apple' , 'mango' , 'orange' , 'pineapple']

fruits.forEach(
    (fruit) => console.log(fruit.charAt(0))  // เอาตัวอักษรตัวแรก
)

let allfruits = ''

fruits.forEach(
    (fruit) => (allfruits += fruit + ' ') // คัดมาที่ละตัวคั่นด้วย ' '
)
console.log(allfruits)

