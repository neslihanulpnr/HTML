//!-----break ve continue,
 let sayac=1;
while(sayac<=10){
    console.log(sayac);
    if(sayac==8){
        break;
    }
    sayac++;
}

//! continue
let say=0;
while(say<=10){
    say++;
    if(say>10){
        break;
    }
    if(say==8){
        continue;
    }
    console.log(say);
}

//! çarpım tablosu yapımı
for(let i=1; i<=10; i++){
    for(let j=1;j<=10; j++){
        console.log(i+"x"+j+"="+ (i*j));
    }
    console.log("------------------------------------------")
}


//! asal sayı bulma uygulaması
//*ondalıklı sayı yuvarlar
// let a = Math.floor(7.7);
// console.log(a);

let rakam = Number(prompt("lütfen bir sayı giriniz :"));
let sonuc= true;
for(let i=2 ; i<=Math.floor(rakam/2) ; i++){
    if(rakam%i==0){
        sonuc=false;
    break;
    }
}
if(sonuc){
    alert(rakam+"asaldır.");
}else{
    alert(rakam+"asal değildir!");
}


//! faktöriyel bulma uygulaması
let sayii = Number(prompt("lütfen bir sayı giriniz")) 
let carpim = 1

for(let i =1; i<=sayii; i++){
    carpim=carpim*i;
}
alert("sonuç :" + carpim);


//!armstrong sayısı uygulaması
let sayi = prompt("sayı giriniz");
let toplam = 0;
for(let i=0; i<sayi.length; i++){
let rakam = sayi.charAt(i);
toplam+=rakam*rakam*rakam
}

if(Number(sayi)==toplam){
    alert("armstrong sayısıdır : ");
}else{
    alert("armstrong sayısı değildir : ");
}

//!-----metotlar----//
//*parametresiz ve geriye değer döndürmeyen metot tanımlamak

function yazdir(){
    console.log("nes");
}
yazdir();
yazdir();

function topla(){
    console.log(5+8);
}
topla();

//* parametreli metot yazmak
function yazdir(isim,soyisim){
    console.log(isim+" "+ soyisim);
}
yazdir("neslihan", "ulupınar");
yazdir("nimet", "begüm");


function cube(sayi){
    console.log(sayi*sayi*sayi);
}
cube(5); 
cube(7);

let yas = Number(prompt("yaşınızı giriniz"));
kontrolet(yas);

function kontrolet(yas){
    if(yas>18){
        console.log("ehliyet alabilirsiniz.")
    }else{
        console.log("ehliyet alamazsınız.")
    }
}




















































