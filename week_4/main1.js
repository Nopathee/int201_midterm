// let x = 1;
// if (x = 1 ){
//     let x = 'unknown';
//     console.log(x);
// }
// console.log(x);

// let x = 1;
// // x === 2 ? let y=1 : let y =0;
// let y = x === 1 ? 1 : 0;
// console.log(x === 1 ? 1 : 0);

let m = 1

 // optional chaining
 //optional chaining จะใช้กับโปรแกนมที่มีความเสี่ยงจะเป็น null || undefinded จะไม่เกิด error ค่าจะเป็น undefinded
// console.log(m?.id)
// console.log(m?.charAt(0)) //output: undefined // ค่าเป็น null || undefinded = ไม่มีค่าข้าในเลยจะerror
// console.log(m?.[0]) // output: undefined
// console.log(m);


// nullish
// let n=m ?? 0 // equal to m !== null && m !== undefined ? m : 0 // ถ้าเป็น null , undefined จะรีเทิร์นฝั่งซ้ายถ้าไม่จะรีเทิร์นฝั่งขวา 
// console.log(n);
// let y = []; // Array initialization with empty array
// let z = {} // object initialization with no properties
// console.log (y); // empty array (not null and not undefined)
// console.log(z) // empty object (not null and not undefined)
// console.log(typeof y);
// console.log(typeof z);

// let a
// a = a ?? y // a = y
// console.log(a)

// let A = [1,3,5,7]
// A = A ?? y // A = A
// console.log(A)

//random number in a range 25 to 100
// const rand = Math.round(Math.random() * (100-25) +25) 
// console.log(rand);
// const rand = Math.random() // o to less than 1 or 0.999999999...
// const rand2 = Math.floor(Math.random() * 11)
// console.log(rand);
// console.log(rand2);



// math.floor ปัดลงหมด
// math.ceil ปัดขึ้นหมด
// math.round < 0.5 ปัดลง || >= 0.5 ปัดขึ้น

// console.log(Math.PI)
// console.log(Math.pow(2.5))
// console.log(Math.sqrt(9))

// let n1 = 25 , n2 = 100
// const rand = Math.floor(Math.random() * (n2 - n1 +1) +1 )
// console.log(rand)

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min +1) +1 )
}

const rand2 = randomNumber(25,100);
console.log(rand2);

// == ไม่แคร์ type แคร์ value
// recommended === , !==
