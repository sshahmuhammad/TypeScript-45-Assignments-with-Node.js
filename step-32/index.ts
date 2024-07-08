//Array of Current User
let current_user = ["usman","ali","Areeba","Zain","Osama"]

//Array of new User
let new_user = ["Hamza","Ayesha","Ali ","Mahad","Areeba"]

// Loop trough new_user  to check for username avaibility

new_user.forEach(new_one_user => {

    //Making a Condition for username already exist and save in our_condition
    let our_condition = current_user.some(current_one_user =>  current_one_user.toLowerCase() === new_one_user.toLowerCase())

    if(our_condition){
        console.log(`Sorry ${new_one_user}is already taken`);
        }else{

            console.log(`this Username ${new_one_user}is available`);
            



        }



})