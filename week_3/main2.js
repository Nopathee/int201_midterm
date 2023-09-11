//x is a global scope
const x = 1
{
    //x is a block scope
    const x = 2
    console.log(x)
}
function doIt(){
    //y is a function scope
    console.log(y)
}
console.log(y)
doIt(100)
console.log(x)