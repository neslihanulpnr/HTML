let sayi1 = document.getElementById('sayi1');
let sayi2 = document.getElementById('Sayi2');
 
function hesapla(){
let toplam = 0;
let s1 = Number(sayi1.value);
let s2 = Number(sayi2.value);

for (var i=s1; i<=s2; i++){
toplam = toplam + i;
}
document.getElementById("sonuc").innerHTML = "Toplam : " + toplam;
}
let hesaplaBtn = document.getElementById('buton');
hesaplaBtn.onclick = hesapla;