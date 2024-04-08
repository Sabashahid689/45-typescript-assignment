"use strict";
//Question no:32
let current_users = ['Samia', 'Bisma', 'Aisha', 'Sana', 'Ferzana'];
let new_users = ['Samia', 'Ferzana', 'Rafiya', 'Ghazala', 'seema'];
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available. please write a different username`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
