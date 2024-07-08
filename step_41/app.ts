/* 41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array. */

// // Define an array containing magicians name.
// let magician_names: string[] = ["Teller", "Criss Angel", "Dynamo", "Harry Houdini"];

// // Define a function to print each magician name from an array.
// function show_magicians(magicians: string[]) {
//     magicians.forEach (name => console.log(name));
// }

// // Call the function to print each magician name.
// show_magicians(magician_names);

let magicians_names: string[] = ["Sir Ali", "Sir Ameen Alam", "Sir Ahmed Raza Sheikh"];
function show_magicians(magicians_names: string[]) {
 magicians_names.forEach((element) => {
    console.log(element);
});
}show_magicians(magicians_names)