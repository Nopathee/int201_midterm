const sum = (n1 , n2 ) => {
    return n1 + n2;
}
const section = 'Group1'

//common js module
// module.exports = {sum:sum , section:section}
// module.exports = {sum , section}

//ES Module
// export {sum , section} // named export
export {sum as default , section} // default export