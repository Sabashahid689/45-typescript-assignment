//Question no:42

//Question no:41
let magician : string[] = ['Harry potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledor'];
 
function make_great(magicianArray:string[] ){
    for(let i=0; i<magicianArray.length; i++){
           magician[i] = 'the Great' + magicianArray[i]
    }
}

function show_magicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);

show_magicians(magician);