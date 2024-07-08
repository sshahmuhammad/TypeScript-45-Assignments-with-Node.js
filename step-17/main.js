//crating a new guest list Array
var guestList = ["hamza", "usman", "aysha", "Areeba",];
//Making variable for those guest who cant come
var dontCome = guestList[0];
//print the name of guest who cant com
console.log(dontCome, "Nahi ahh Sakty han");
//Add or Remove Value frome guest List Array
guestList.splice(0, 1, "Amir");
//Message print for bigger Table
console.log("Good news ! we have found a bigger table for dinner");
//Adding a new guest at starting index of Array
guestList.unshift("Ali");
//Adding a new guest at ending index of Array
guestList.push("Zain");
//making a variable for storing a middle index of or gust List Array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new gust to middle index of Array
guestList.splice(middleIndex, 0, "osama");
//Sending a invitation message to our gusts one by one with their names
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",would you like to dinner with me")); });
//Inform that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");
//using while loop to remove guests frome the Array ubtill only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry ".concat(removedGuest, "I cant invite you to dinner"));
}
console.log("invitation to the last 2 guests");
guestList.forEach(function (lasttwo) { return console.log("Lukly ".concat(lasttwo, ",you are still invited to dinner")); });
//Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
