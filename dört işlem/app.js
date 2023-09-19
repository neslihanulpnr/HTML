let sayi1 = document.getElementById('sayi1');
let sayi2 = document.getElementById('sayi2');


function topla (){
    let s1 = parseInt(sayi1.value);
    let s2 = parseInt(sayi2.value);
    let toplam = s1 + s2
    
    document.getElementById("sonuc").innerHTML = "Sonuç : " + toplam;
}

function cikar (){
    let s1 = parseInt(sayi1.value);
    let s2 = parseInt(sayi2.value);
    let fark = s1 - s2 
    
    document.getElementById("sonuc").innerHTML = "Sonuç : " + fark;
}

function bol (){
    let s1 = parseInt(sayi1.value);
    let s2 = parseInt(sayi2.value);
    let bolum = s1 / s2 
    
    document.getElementById("sonuc").innerHTML = "Sonuç : " + bolum;
}

function carp (){
    let s1 = parseInt(sayi1.value);
    let s2 = parseInt(sayi2.value);
    let carpim = s1 * s2 
    
    document.getElementById("sonuc").innerHTML = "Sonuç : " + carpim;
}