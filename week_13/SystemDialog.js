window.alert('Do you want to exit?')
window.prompt('Please enter your name' , 'Ex., Somchai Rakdee')//cancel return null , if ok return name value
console.log(username)
const userAction = window.confirm(`Good Bye , ${username}`)
console.log(userAction)