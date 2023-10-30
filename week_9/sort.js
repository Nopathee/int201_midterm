const students = [
    { id:1 , name:'John Lee'},
    { id:10 , name:'Adam Smith'},
    { id:100 , name:'Ann Lee'},
    { id:1000 , name:'Julia Lee'},
]
//sort by id (ascending , descending)
console.log(students.sort((student1, student2) => student1.id - student2.id))
console.log(students.sort((student1, student2) => student2.id - student1.id))
//sort by name (ascending , descending)