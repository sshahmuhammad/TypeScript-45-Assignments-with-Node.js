//Make a Function
function make_shirt (size: string = "Large", printMessage: string = "I love typescript"){

console.log(`Creating a ${size} shirt with the ${printMessage} print a shirt`);

}

//Calling a function with by_default value
make_shirt();

//Calling a function now with medium size and default message
make_shirt("Medium")

//Calling a function now with small size and different print message
make_shirt("small","I love javascript")
