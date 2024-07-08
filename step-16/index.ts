/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
// creating a Array
let gustList = ["shahMuhammad","Hamza","ayesha","shahAhmed","jon"];

let dontCome = gustList[0];
// making variable for those guest who can come
console.log(dontCome,"Nahi aa sakta");
//Add the Remove values from guest list Array

gustList.splice(0,1,"Amir");
//Message Print of bigger Table
console.log("Good news!we have Found a bigger Table for Dinner");
//Adding a new value at starting index of Array

gustList.unshift("Ali")

//Adding a new value at ending index of Array

gustList.push("zia");

// get a middle index of guest list Array

let middleIndex: number = Math .floor (gustList.length / 2 );

//Adding a new guest to middle index of Array
gustList.slice(middleIndex, 0,"Osama");
//print message of updated list
console.log("updated list of our guests");
//sending a invitation message to our guest one by one with thier name.ts

gustList.forEach(oneguest =>console.log(`salam ${oneguest},would you like to Dinner with me`));


