"use strict";
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a varriable
 alien_color and assign it a value of  'grecalleden', 'yellow', or 'red'.*/
// Create a varriable alien_color
let alien_color = 'green';
/*Write an If statement to test whether the alien's color is green. If it is,
print a message that the player just earned 5 points.*/
if (alien_color === 'green') {
    console.log("player just earned 5 points !");
}
;
/*Write one version of this program that passes the if test and another that fails.
(The version that fails will have no output)*/
alien_color = 'yellow';
/*(The version that fails will have no output)*/
if (alien_color === 'green') {
    console.log("player just earned 5 points !");
}
;
