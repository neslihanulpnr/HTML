console.log('neslihan');

document.write('hello world <br>');
document.write('neslihan ulupınar <br>');
document.write(5.5)
document.write(`<br> merhaba ben neslihan`);

console.log('merhaba <br>');
console.log("neslihan");
console.log({name:"neslihan" ,surname:"ulupınar"});
console.log(true);
console.log(3.35);


let a=5;
let b=10;

console.log(a+b);

console.log(document.location.host);

alert('merhaba');

/*console.clear(); console etiketlerini temizlemek için kullanılır*/

console.log(window);

console.warn("hata oluştu")

console.log(location.port)
console.log(location.port)
console.log(location.port)
console.log(location.port)

var degiskenIsmi = 10;

console.log(degiskenIsmi);

/*17.07.2023*/

/*function scope= kıvırcık parantezler içinden erişilebilir*/



/*global scope= her yerden erişebilirsin*/ 
var c=5

if(true){

}

/*block scope=*/


// var=function scope rm bellekte çok yer kaplar
// let ve const block scope özelliğine sahip




 function selamVer(){
    var selam = "Herkese selam";
    if(true){
        let b = 10;
        console.log(b);
    }
    console.log(selam);
}
 selamVer();



 var d =5;
 var d =10;
 console.log(a);


 if(true){
    let a =5;
    let b =10;

    console.log(a);
 }

//let ve const arasındaki fark
//const: değişmez sabit

const e =10;
e=15;  //x olmaz
console.log(e);

 let f =5;
 f=6;
 console.log(e); 



 const user = {
    username :"neslihan"
 }

 user.username="neslihanbegüm";
 console.log(user);
