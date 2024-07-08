// Creating a Array
var userName = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
// Using ForEach  loop on Array 
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("HELLO ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("HELLO ".concat(oneUser, ",thank you for logging again"));
    }
});
