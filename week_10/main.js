let a = 1
let b = 10

function doSomething(){
    let b = 5
    let result = a+b
    console.log(result) // 6
    function  doIt(){
        let c = 100
        console.log(c) // 100
        result += c
        console.log(result) // 106
    }
    return doIt // return function
    // doIt()
   // console.log(c) // cannot access outside doIt
}

const fn = doSomething()
console.log(typeof fn)
fn()
// doSomething()
// a=100
// console.log(a) // 100
// console.log(b) // 10