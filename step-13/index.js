//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
//to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteTransportation = [];
favoriteTransportation.push(["motercycle", "Honda"]);
favoriteTransportation.push(["car", "Toyota"]);
favoriteTransportation.push(["bicycle", "sohrab"]);
//console.log(favoriteTransportation);
//I would like to own a Honda motorcycle.
//using for each loop to print a series of statements
favoriteTransportation.forEach(function (_a) {
    var Transport = _a[0], brand = _a[1];
    console.log("I would like to own a".concat(brand).concat(Transport, "."));
});
