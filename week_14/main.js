document.addEventListener('DOMContentLoaded' , () => {
    console.log('DOM is loaded') // โหลดก่อน
})

window.addEventListener('load' , () => {
    console.log('loaded') 
})

window.addEventListener('beforeunload' , () => {
    console.log('beforeunload')
})