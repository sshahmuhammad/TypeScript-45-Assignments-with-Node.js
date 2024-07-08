let userName = ["Mahad","Ali","Zeeshan","Admin","Usman"]

userName = []

if (userName.length === 0){

    console.log("your Array in Emty we need to find some user");
    
    }else{
   // Using ForEach  loop on Array 
   userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`HELLO ${oneUser},would you like to see a status report?`);
        }else{
            console.log(`HELLO ${oneUser},thank you for logging again`);
            
        }
    })
    }