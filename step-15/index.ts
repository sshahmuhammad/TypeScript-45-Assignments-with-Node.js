/*Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.*/


let guestList: Array<string> = [
    "zia khan",
    "shah x",
    "shah z",
    "ali",
    "muhammad ali jinnah",
];
//step 1.print the name of person who can`t make it.

let guestHowCantMakeIt: string ="muhammad ali jinnah"
console.log(`${guestHowCantMakeIt}can 't make it to Dinner`)



// step 2. Replace the name of how cant make it.

let NewGuest: string = "zia khan"
let indexOFguestHowCantMakeIt: number = guestList.indexOf
(guestHowCantMakeIt)
console.log(indexOFguestHowCantMakeIt);

if (indexOFguestHowCantMakeIt !== -1 ) 
{
    guestList[indexOFguestHowCantMakeIt] = NewGuest
}

//console.log(guestList[2])

//step 3. print second set of invitation messages
console.log("second set of invitation messages:");
guestList. forEach((guest:string) =>
{
console.log(`Dear ${guest},you are invited to Dinner.`)
}
    
)

