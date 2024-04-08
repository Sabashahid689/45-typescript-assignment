"use strict";
//Question no:44
function makeSandwich(item) {
    console.log('Making your sandwich with:');
    item.forEach(element => console.log("-" + element));
    console.log('Enjoy your sandwich !');
}
makeSandwich(['Ham', 'Cheese', 'lettuce']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['Peanut butter', 'Jelly']);
