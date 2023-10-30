class Person {
    constructor(firstName, lastName , dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
    getFullName(){
        fullName = `${this.lastname}, ${this.firstName}`
        return fullName;
    }
    getAge(){
        const milliToday = Date.now();
        const milliBirth = this.dateOfBirth.getTime();//number of milliseconds of this.dateOfBirth
        const diffmilli = milliToday - milliBirth;
        const dateOfDiffMilli = new Date(diffmilli)
        return dateOfDiffMilli.getFullYear() - 1970

        
    }
    isEqual(anotherPerson){
        return (
            this.firstName?.toLowerCase() == anotherPerson.firstName?.toLowerCase() && 
            this.lastName?.toLowerCase() == anotherPerson.lastName?.toLowerCase()
        )
    }
    toString(){
        return this.getFullName;
        return this.getAge
    }
}

const me = new Person('Nopathee', 'C.' , new Date(2004,5,19))
console.log(me.getAge())
