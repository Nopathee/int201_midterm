const book = {
    isbn : '123456789' ,
    title: 'Introduction to JavaScript' , 
    author : {firstname : 'Adam' , lastname : 'Lee'},
    publisher : {
        name : 'HarperCollins',
        location : {
            name: "silicon",
            country : 'USA'
        }
    }
}

const {title} = book
console.log(title)

console.log("================================")

const{publisher:publishername , isbn:isbn_book} = book
console.log(publishername)
console.log(isbn_book)

console.log("================================")

const { publisher : { location: {country}}} = book
console.log(country)