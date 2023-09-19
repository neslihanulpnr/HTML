//!----------dizi metotlarını kullanma------------//
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];

//* push metot=dizinin sonuna eleman ekler.
// console.log(arabalar.length);
// arabalar.push("opel");
// console.log(arabalar);

//*unshıft metot=dizinin başına eleman ekler.
// arabalar.unshift("hundai");
// console.log(arabalar);

//*pop metot=dizinin sonundan eleman siler.
// let silineneleman = arabalar.pop();
// console.log(arabalar);
// console.log(silineneleman);

//*shift metot=dizinin başından eleman siler.
// let silineneleman = arabalar.shift();
// console.log(arabalar);
// console.log(silineneleman);

//*splice metot=eleman eklemek veya silmek için kullanılır.
// console.log(arabalar);
// arabalar.splice(3,0,"hundai");
// console.log(arabalar); //*eklemek

// console.log(arabalar);
// arabalar.splice(1,2);
// console.log(arabalar); //*silmek

//*tostring metot=diziyi stringe çevirmek için kullanılır.
// console.log(typeof arabalar);
// let stringarabalar = arabalar.toString();
// console.log(typeof stringarabalar);
// console.log(stringarabalar);

//*joın metot=diziyi stringe çevirmek için kullanılır farkı araya eleman eklenebilir
// let stringarabalar = arabalar.join("?");
// console.log(stringarabalar);

//*concat metot=dizileri birleştirmek için kullanılır.
// let arabalar1 = ["bmw", "toyota", "renault", "mercedes", "porsche"];
// let arabalar2 = ["hundai", "tofaş"];

// let birlesmisdizi = arabalar1.concat(arabalar2);
// console.log(birlesmisdizi);

//*slice metot=diziyi istenilen yerden bölüp yeni bir dizi oluştur. 
// console.log(arabalar);
// let ayridizi = arabalar.slice(2);
// console.log(ayridizi);

//*length metot=dizinin uzunluğunu verir.
// console.log(arabalar.length);

//*reverse metot=dizinin elemanlarını ters çevirmek.
// console.log(arabalar);
// arabalar.reverse();
// console.log(arabalar);

//*split metot=belirli bir ifadeye göre bölüp diziye çevirmek.
// let isimler = "nesli,uğur,begüm";

// let isimlerdizi = isimler.split(",");
// console.log(typeof isimlerdizi);

//*indexof metot=elemanın index numarasını verir.
// let index = arabalar.indexOf("bmw");
// if(index==0){
//      console.log("belirtilen eleman vardır");
// }else{
//      console.log("eleman yoktur");
// }

//*ıncludes metot=verilen elemanı içeriyor mu ona bakar.
let sonuc = arabalar.includes("renault232");
if(sonuc){
     console.log("eleman vardır");
}else{
     console.log("eleman yoktur");
}





























































