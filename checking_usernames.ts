//Question no:32
let current_users: string[] = ['Samia','Bisma','Aisha','Sana','Ferzana'];

let new_users: string[] = ['Samia','Ferzana','Rafiya','Ghazala','seema'];

new_users.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsername} is not available. please write a different username`);
    }
    else{
        console.log(`The username ${newUsername} is available.`);
    }

})
 