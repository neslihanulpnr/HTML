//!--------------return ile değer döndürmek------------------
let donendeger = cube(2);
kareal(donendeger);

function kareal(sayi){
    let sonuc = sayi*sayi;
    console.log(sonuc);
}

function cube(sayi){
    let sonuc = sayi*sayi*sayi
    return sonuc;
    console.log("neslihan")
}

function yazdir(){
    console.log("nesliş");
}
yazdir();

//* kelime sayısı bulma uygulaması

let metin = "Şuanda Javascript Çalışıyorum"
let harf = prompt("harfi giriniz");
let sonuc = bul(harf);
alert("harf sayısı :" + sonuc)



function bul(harf){
    let toplam = 0;
    for(let i =0;  i<metin.length; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    }
    return toplam;
} 

//! tolowercase=küçük büyük harf ayırt etmeme

//* mükemmel sayı bulma uygulaması
//6=1+2+3+6 =12  6*2=12 mükemmel sayı
isperfectnumber(34);

function isperfectnumber(number){
    let toplam = 0 
    for(let i =2; i<number/2; i++){
     if(number%i==0){
        toplam+=i; 
     }   
    }
    toplam+=1+number; 

    if(toplam==number*2){
        console.log("mükemmel sayıdır.");
    }else{
        console.log("mükemmel sayı değildir.");
    }
}


//!--------onluk sayıyı ikiliğe çevirme uygulaması------
convertDecimalToBinary(10);

function convertDecimalToBinary(number){
    let binary ="";
    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);
        if(number==1){
            binary+=1;
            break;
        }
    }
    let result = reverse(binary);
    console.log("sonuç :" + result);
}

function reverse(binary){
    let reversebinary ="";
    for(let i = binary.length-1; i>=0; i--){
        reversebinary+=binary.charAt(i)
    }
    return reversebinary;
}


//! ikilik sayıdan onluğa çevirme uygulaması
let binary = "1011";

function convertBinaryToDecimal(binary){
    let toplam =0;
    let ust =0;
    for(let i=binary.length-1; i>=0; i--){
     toplam+= Number(binary.charAt(i)) * Math.pow(2,ust);
     ust++;
    }
    console.log("sonuç :" + toplam);
}
convertBinaryToDecimal(binary);

//!-------diziler----//

let sayilar = [0,1,2,3,4,5,6,7,8,9];

console.log(sayilar[6]);
sayilar[sayilar.length-1]="nesli";
console.log(sayilar[9]);


// let isimler = ["enes", "nesli", "betül", "feriha"];
// isimler[2] = "enes";
// console.log(isimler[2]);

//!----------foreach döngüsü---
let isimler = ["nesli", "uğur", "demet", "adem", "begüm"];
isimler.forEach(function(isim){
console.log(isim);
});







































