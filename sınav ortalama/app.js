let sinav1 = document.getElementById("sinav1");
let sinav2 = document.getElementById("sinav2");
let sinav3 = document.getElementById("sinav3");
let yuzde1 = 30;
let yuzde2 = 30;
let yüzde3 = 40;

function hesapla() {
    let s1 = Number(sinav1.value); 
    let s2 = Number(sinav2.value)
    let s3 = Number(sinav3.value)

    //* yüzde eklemek
    s1 += (s1*(30/100));
    s2 += (s2*(30/100));
    s3 += (s3*(40/100));

    let ortalama = (s1 + s2 + s3) / 3

    if(ortalama < 49.5)
      sonuc.innerHTML = "Ortalama : " + ortalama + " - Geçtin"
    else
    sonuc.innerHTML = "Ortalama : " + ortalama + " - kaldın"
}
let hesaplaBtn = document.getElementById("hesapla")
hesaplaBtn.onclick = hesapla;