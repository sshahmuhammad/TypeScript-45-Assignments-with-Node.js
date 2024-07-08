//Array of Current User
var current_user = ["usman", "ali", "Areeba", "Zain", "Osama"];
//Array of new User
var new_user = ["Hamza", "Ayesha", "Ali ", "Mahad", "Areeba"];
// Loop trough new_user  to check for username avaibility
new_user.forEach(function (new_one_user) {
    //Making a Condition for username already exist and save in our_condition
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, "is already taken"));
    }
    else {
        console.log("this Username ".concat(new_one_user, "is available"));
    }
});
