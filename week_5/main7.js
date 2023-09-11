const x = [...'Hello World']
console.log(x)
// [
//     'H', 'e', 'l', 'l',
//     'o', ' ', 'W', 'o',
//     'r', 'l', 'd'
// ]
// for (const [index , value] of x.entries()) {
//     console.log(index)
//     console.log(value)
// }

for (const [index] of x.entries()) {
    console.log(index)
    // console.log(value)
}