function hesapla() {
    let sayi = document.getElementById('sayi').value
    let sonuc = Number(sayi);

    if (sonuc % 2 == 0)
        document.getElementById('sonuc').innerHTML = sonuc + " Sayısı Çifttir"
    else
        document.getElementById('sonuc').innerHTML = sonuc + " Sayısı tektir"
}
let hesaplaBtn = document.getElementById("buton")
hesaplaBtn.onclick = hesapla