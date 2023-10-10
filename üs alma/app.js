let sayi1 = document.getElementById('sayi1');
let sayi2 = document.getElementById('sayi2');

function hesapla (){
let sonuc = 1;

let taban = Number(sayi1.value);
let us = Number(sayi2.value);

for(var i=0; i<us; i++){
    sonuc = sonuc * taban;
}
document.getElementById("sonuc").innerHTML = "Sonuç : " + sonuc;
}

let hesaplaBtn = document.getElementById('buton');
hesaplaBtn.onclick = hesapla;