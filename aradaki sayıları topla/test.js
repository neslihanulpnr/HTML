function hesapla (){
let toplam = 0;
let sayi1 = document.getElementById("sayi1").value;
let sayi2 = document.getElementById("sayi2").value;

let s1 = Number(sayi1);
let s2 = Number(sayi2);

for(let i = s1; i <= s2; i++){
    toplam = toplam + i;
}
document.getElementById("sonuc").innerHTML = "Toplam : " + toplam 
}
let hesaplaBtn = document.getElementById("buton");
hesaplaBtn.onclick = hesapla;