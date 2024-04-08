//Question no:15;
let Guest_List :string[] = ['Imran Khan','Bilawal bhutto','Nawaz Sharif'];
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
} 
let absent_Guest :string = 'Bilawal bhutto' ;
let new_Guest :string = 'Kamran Tessori' ;
Guest_List[0] = new_Guest ;
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`)