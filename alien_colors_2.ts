// Question no:26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25
let alienColors: string = 'green';
// Write an if-else chain.
// if the alien's color is green
// print a statement that the player just eraned 5 points for shooting the alien.
if(alienColors === "green"){
    console.log("player just earned 5 points for shooting the alien.");
}else{
    console.log("player just earned 10 points.");
}
// if the alien's color isn't green print a statement that the player just earned 10 points.
alienColors = "yellow";

if(alienColors === "green"){
    console.log("player just earned 5 points for shooting the alien.");
}else{
    console.log("player just earned 10 points.");
}