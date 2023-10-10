//!--------------değer ve referans tipler--------------------//
//*değerde bağ yok
let a = 7;
let b  =a;

console.log("a :" + a);
console.log("b :" + b);

console.log("------------------");

b = 10;
console.log("a :" + a);
console.log("b :" + b);

//*referans 
let dizi1 = [1,2,3];
let dizi2 = dizi1;
let dizi3 = dizi2;

dizi3.push(18);

console.log(dizi1);
console.log(dizi2);
console.log(dizi3);


































