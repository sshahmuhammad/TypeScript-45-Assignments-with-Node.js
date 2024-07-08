var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array of countries and print its orignal order
var cuntriesTovisit = ["China", "Demark", "Brazil", "Afghanistan"];
console.log("original order:", cuntriesTovisit);
//print the array in alphabatical order without modifying the actual array list
console.log("alphabatical Order:", __spreadArray([], cuntriesTovisit, true).sort());
//show that the array is still in its Orignal Order
console.log("still in Orignal Order:", cuntriesTovisit);
//print the array in Reversd Order without modifying the ACtal array list
console.log("Revers Order:", __spreadArray([], cuntriesTovisit, true).reverse());
//show that the array still  in its Orignal Order
console.log("Still in Orignal:", cuntriesTovisit);
//we have changed the orignal array order now
console.log("Orignal Array Reserved:", cuntriesTovisit.reverse);
//print the array to show that It's back to its orignal order
console.log("Back to Orignal Order:", cuntriesTovisit.reverse);
//print the array to show that its order has been changed in alphabatical order now
console.log("Started in alphabatical Order:", cuntriesTovisit.sort);
