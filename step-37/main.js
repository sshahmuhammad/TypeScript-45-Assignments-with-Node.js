//Make a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print a shirt"));
}
//Calling a function with by_default value
make_shirt();
//Calling a function now with medium size and default message
make_shirt("Medium");
//Calling a function now with small size and different print message
make_shirt("small", "I love javascript");
