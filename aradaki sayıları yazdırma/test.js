let sayi1 = document.getElementById('sayi1');
let sayi2 = document.getElementById('sayi2');
let sonuc = document.getElementById('sonuc');

function hesapla(){
    let s1 = Number(sayi1.value);
    let s2 = Number(sayi2.value);

    for(let i = s1; i <= s2; i++){
        sonuc.innerHTML += "<p>" + i + "<p>"
    }
}

let hesaplaBtn = document.getElementById('buton');
hesaplaBtn.onclick = hesapla;