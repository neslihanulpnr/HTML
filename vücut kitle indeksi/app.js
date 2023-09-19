function hesapla() {
    let kilo = Number(document.getElementById('kilo').value);
    let boy = Number(document.getElementById('boy').value);
    let boyMetre = boy / 100
    let sonuc = kilo / (boyMetre * boyMetre);

    if (sonuc < 18.5) {
        window.alert('İdeal kilonun altında');
    } else if (sonuc >= 18.5 && sonuc <= 24.9) {
        window.alert('İdeal kilo aralığında');
    } else if (sonuc >= 25 && sonuc <= 29.9) {
        window.alert('Fazla kilolu');
    } else if (sonuc >= 30 && sonuc <= 34.9) {
        window.alert('1. derece obez');
    } else if (sonuc >= 35 && sonuc <= 39.9) {
        window.alert('2. derece obez (aşırı obez)');
    } else if (sonuc >= 40) {
        window.alert('3. derece obez (morbid obez)');
    }
}