//-----tür dönüşümler----//

//!string veri tipinden number veri tipine dönüştürme

let a = 5;
let b = Number(10);
console.log(a+b);

//!numberdan stringe dönüştürmek//
// let x =string(55);
// console.log(typeof x);
// console.log(x);

//-------döngüler-----//


//!for döngüsü
//*1den 10a kadar yazdırma

for(let i=1; i<=10 ; i++){
    console.log(i);
}

//*1den 10a kadar çifter 
for(let i =0 ; i<=10 ; i=i+2){
    console.log(i);
}

//*1den ona kadar teker teker
for(let i =1 ; i<=11 ; i=i+2){
    console.log(i);
}


for(let i=1; i<=10 ; i++){
    if(i%2==1){
        console.log("neslihan")
    }else{
        console.log("naber");
    }
}

//*50den 1e kadar gidip toplam bul
let toplam= 0;
for(let i =50; i>=1 ; i--){
    toplam=toplam+i;
    console.log(i);
}
 
console.log("toplam : " , toplam);


//!----while döngüsü
//*1den ona kadar yazalım
//let sayac=1;

//  while(sayac<=10){
//      console.log(sayac);
//      sayac++;
//  }


 //*1-10  çifter ve tek yaz
// let sayac=0;

// while(sayac<=10){
//     if(sayac%2==0){
//         console.log(sayac);
//     }
//     sayac++;
// }

// tek
// let sayac=0;

// while(sayac<=10){
//     if(sayac%2==1){
//         console.log(sayac);
//     }
//     sayac++;
// }

// let sayac=1;
// while(true){
// console.log(sayac);
// if(sayac==7){
//     break;
// }
// sayac++;
// }


//-----do-while

// let sayac =1;
// //1den 10
// do{
//     console.log(sayac);
//     sayac++;
// }while(sayac<=10);

let yas = 18;

do{
    console.log("ehliyet alabilirsiniz");
}while(yas>=25);


//*1den 20ye kadar tek sayıların toplamı

let sayac=1
let doplam =0
do{
    if(sayac%2==1){
        doplam+=sayac;
    }
    sayac++;
}while(sayac<=20);
console.log("toplam :" , doplam);
