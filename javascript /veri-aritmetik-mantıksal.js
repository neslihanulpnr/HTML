/*
? veri tipleri 
1-string "çift veya tek tırnak içindeki her şey string tipindedir"
2-number tırnaksız tanımlandığı için 
3-boolean
4-null
5-undefined
6-object
7-function
*/

//-----string
let isim = "neslihan 18 yaşındadır";
console.log(isim);
console.log(typeof isim);

//----number
let sayi1 = 10.7
let sayi2 = 5.7

console.log(sayi1+sayi2);
console.log(typeof sayi1);

let a = "5"
let b = "2"
console.log(a+b);

let stringDegisken ="yaşınız :";
let yas = 18

console.log(stringDegisken + yas);

//---boolen= true-false'dan oluşur

console.log(5>8)

let c = 3
let d = 12

let sonuc = c+d
console.log(sonuc<18)

//---null

let e = null; 

e=23

console.log(e)

//---undefined

let f;
console.log(typeof f)


//-----object
let insan= {
    isim: "neslihan"
}
console.log(insan);

let rakamlar =[1,2,3,4,5];
console.log(rakamlar);

//-----function
let func = function(){
    console.log("merhaba");
}
func();
console.log(typeof func);

//aritmetik operatörler
// +, - ,*, /, % ,++ ,--, **  ++:bir arttırmak için   
// --:bir azaltmak için **:üslü bir şekilde yapmak için

let not1 = 60;
let not2 = 70;


let sayi3 ="5"
let sayi4 = 2

console.log(sayi3+sayi4);

console.log("notlarınızın toplamı :" + (not1+not2));

//=,  ==,  ===,  +=, *=,  -=,  /=,  %=,  **=,  

//==: eşittir veri tipinin önemi yok
console.log(5==5)


//===; hem tipleri hemde değerlerinin eşit olup olmadıklarına bakar
console.log(5==="5");


//+=
let sayi = 4;
sayi = sayi+2
console.log(sayi);


let sayi5 = 4
sayi5*=5;
console.log(sayi5)  

let sayi6 = 12
sayi6=sayi6%5
console.log(sayi6);
//  12/5 kalan 2

//mantıksal operatörler
 // &&=ve ||=veya  !=değil

 let yaş = 20;
 let para = 3500;
 let sagliklimi = false;
 haksayisi = 3;

 console.log(yaş>18 && para >3000 && sagliklimi==true );

 console.log(5>3 || 3<2);  //bir tane bile true varsa cevap true


 console.log(   !(5>3)  );

 console.log((para>3000 && haksayisi>1) || (yas>18 && sagliklimi))  


 // >= büyük eşit mi   <= küçük eşit mi   <:küçük mü    >:büyük mü     != : eşit değil mi  

 console.log(5!=3);
 console.log(11<12);
 console.log(11>12);
 console.log(12<=13);
 console.log(13>=12);

