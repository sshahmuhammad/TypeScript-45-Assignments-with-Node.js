// Creating a Array
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]


//Using for Loop
for( let oneNumber of number){
    let ordinilEnding: string;

    if(oneNumber === 1){
        ordinilEnding = "st"

    }else if(oneNumber === 2){
        ordinilEnding = "nd"


    }
    else if(oneNumber === 3){
        ordinilEnding = "rd"


    }else if(oneNumber === 4){
        ordinilEnding = "th"

    }else{
        ordinilEnding = "th"
    }

    console.log(`${oneNumber}${ordinilEnding}`);
    


}