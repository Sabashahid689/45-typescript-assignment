"use strict";
//Question no:17;
let Guest_List = ['Imran Khan', 'Asif ali Zardari', 'Nawaz Sharif'];
//for(let i=0; i<Guest_List.length; i++){
//console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//} 
let absent_Guest = 'Bilawal bhutto';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
//for(let i=0; i<Guest_List.length; i++){
//console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! we find Big Table so we are inviting 3 more guests.');
// array me 3 guest add kiye hain.
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');
// Yahan per men 6 guest ke array to print kraya he.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
// Sorry Message to guest for not inviting.
console.log('\nSorry we can not arrange big table, only two peoples will be invited.');
// Yahan per mene Guest remove kiye hain.
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
// Hamare bache howe 2 Invited Guest.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
}
// Mene sare guest array se remove kar diye.
Guest_List.splice(0, 2);
console.log(Guest_List);
