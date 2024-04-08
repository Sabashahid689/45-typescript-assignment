"use strict";
//Question no:43
//Question no:42
//Question no:41
let magician = ['Harry potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledor'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'the Great' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log('This is my orignal array:');
show_magicians(magician);
console.log('This is my modfied copy of the array:');
show_magicians(magician);
