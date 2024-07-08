// Creating a Array
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Using for Loop
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var oneNumber = number_1[_i];
    var ordinilEnding = void 0;
    if (oneNumber === 1) {
        ordinilEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinilEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinilEnding = "rd";
    }
    else if (oneNumber === 4) {
        ordinilEnding = "th";
    }
    else {
        ordinilEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordinilEnding));
}
