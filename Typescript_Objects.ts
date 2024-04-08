//Question no: 21;

//Write a program that creates objects containing these items.
//Datatype of person object.
interface person {
    age : number,
    name : string,
    nationality : string,
    Student : Boolean,
}
let Person : person = {
    age : 17 ,
    name : 'Saba' ,
    nationality : 'Pakistan' ,
    Student : true ,
}
// Print person
console.log(Person);

// Datatype of car object
interface car {
    maker : string,
    color : string,
    automatic : Boolean,
}

// car object
let car = {
    maker : 'landcurozer',
    color : 'black',
    automatic : true,
}
console.log(car);
