//!-----string sınıfının metotları----//

let kurs ="modern web geliştirme kursu";
let tarih ="2022";

//*charAt()
//*concat()
//*indexof()
//*lastindexof()
//*toUppercase()
//*tolowerCase()
//*trim()
//*slice()
//*substring() 
//*replace() 
//*split() 
//*valueOf()
//*startswith()
//*endsWith()


//*charAt metot kullanımı;
let karakter = kurs.charAt(5);
console.log(karakter);

//*concat metot kullanımı;
// let sonuc = kurs.concat(" ",tarih," ");
// console.log(sonuc);

//*indexOf metot kullanımı;
// let index = kurs.indexOf("w");
// console.log(index);

//*lastindexof metot kullanımı;
let index = kurs.lastIndexOf("k");
console.log(index);

//*toUpperCase metot kullanımı=büyük harf
// let sonuc = kurs.toUpperCase();
// console.log(kurs);
// console.log(sonuc);

//*tolowerCase metot kullanımı;
let sonuc = kurs.toLowerCase();
console.log(sonuc);

//*trim metot kullanımı;
console.log(kurs.trim());

//*slice metot kullanımı;
console.log(kurs);
console.log(kurs.slice(22,28));

//*substring metot kullanımı;
console.log(kurs);
console.log(kurs.substring(0,6));

//*replace metot kullanımı;
console.log(kurs);
console.log(kurs.replace("Modern","Güncel"));

//*split metot kullanımı;
console.log(kurs);
let dizi = kurs.split(",");
console.log(dizi);

//*valueOf metot kullanımı;
console.log(kurs.valueOf());

//*startswith metot kullanımı;
console.log(kurs);
//console.log(kurs.startsWith("M"));
if(kurs.startsWith("M")){
    console.log("m harfi ile başlamaktadır")
}

//*endsWith metot kullanımı;
console.log(kurs);
console.log(kurs.endsWith("u"));





































































































