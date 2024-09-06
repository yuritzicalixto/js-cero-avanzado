let nombre = 'Peter Parker';
console.log(nombre);

// Comilla sencilla -> Es más ligero
nombre = 'Ben Parker';
console.log(nombre);

// Comilla doble -> Es pesado
nombre = "Tía May";
// backticks -> 
nombre = `Tía May`;

console.log( typeof nombre ); 

let esMarvel = true;
console.log(typeof esMarvel);

let soyNull = null;
console.log( typeof soyNull );

let symboll1 = Symbol('a'); 
let symboll2 = Symbol('a');

console.log(symboll1 === symboll2 ); // false
