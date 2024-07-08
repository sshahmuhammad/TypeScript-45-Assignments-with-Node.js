//Creating a Array
var pizza = ["Chicken  Tikka", "Malai", "chess", "fajita"];
// Using Foor-Loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onepizza = pizza_1[_i];
    console.log("I like ".concat(onepizza, "pizza"));
}
//print a messige Outside of the for-loop
console.log("pizza is love");
