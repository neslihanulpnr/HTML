//!------diyalog kutuları-----//
// alert   promopt   confirm


console.log(window);


alert("nasılsın");

let isim = prompt("isminizi giriniz");
let yaş = prompt("yaşınızı giriniz");

console.log("isminiz : " + isim);
console.log("yaşınız : " + yaş);


//!---koşul yapıları----//
//if else if olmak zorunda

let not = 35;

if (not > 50) {
    console.log("geçtiniz , notunuz :" + not);
} else {
    console.log("kaldınız , notunuz :" + not);
}



let para = Number(prompt("bütçeniz : "));


if (para >= 3000) {
    alert("ehliyet sınavına katılabilirsiniz");
} else {
    alert("ehliyet sınavına katılamazsınız");
}

//------ ders ortalaması bulma-----//

let vize1 = Number(prompt("vize 1 notunuzu giriniz :"));
let vize2 = Number(prompt("vize 2 notunuzu giriniz :"));

let final = Number(prompt("final notunuzu giriniz :"))

let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

if (ortalama >= 60) {
    alert("dersten geçtiniz , tebrikler :))" + ortalama);
    console.log("dersten geçtiniz , tebrikler :))");
} else {
    alert("kaldınız , geçmiş olsun :(" + ortalama);
    console.log("kaldınız , geçmiş olsun :(");
}


let secilenyol = prompt("lütfen gitmek istediğiniz yolu seçiniz :")

if (secilenyol == 1) {
    alert("seçilen yol " + secilenyol + ". yoldur.");
}
else if (secilenyol == 2) {
    alert("seçilen yol " + secilenyol + ". yoldur.")
}
else if (secilenyol == 3) {
    alert("seçilen yol " + secilenyol + ". yoldur.")
}
else {
    alert("lütfen geçerli bir yol seçiniz !!")
}


let ad = prompt("isminizi giriniz :")
let tckn = prompt("tckn giriniz :")

kontrolet(ad, tckn)

function kontrolet(ad, tckn) {

    if (ad != "") {
        if (tckn.length == 11) {
            console.log("isim ve tckn problemsiz girildi")
        } else {
            console.log("lütfen tcnizi 11 karakter olarak giriniz")
        }
    } else {
        console.log("lütfen isim alanını boş bırakmayınız!!!")
    }

}


let kilo = Number(prompt("kilonuzu giriniz"));
let boy = Number(prompt("boyunuzu metre cinsinden yazınız"));

let sonuc = kilo / (boy * 2);

if (sonuc < 18.5) {
    console.log("ideal kilonun altında" + sonuc)
} else if (sonuc >= 18.5 && sonuc < 24.9) {
    console.log("ideal kilonun altında" + sonuc)
} else if (sonuc >= 25 && sonuc <= 29.9) {
    console.log("ideal kilo" + sonuc)
} else if (sonuc >= 30 && sonuc <= 39.9) {
    console.log("ideal kilonun çok üstünde (obez)" + sonuc)
} else if (sonuc >= 40) {
    console.log("ideal kilonun kilonun çok üstünde (morbid obez)" + sonuc)
}




let dizel = 24, benzin = 22, lpg = 11;
const yenisatir = "\r\n";

const yakitmetni = "1-dizel" + yenisatir
    + "2-benzin" + yenisatir
    + "3-LPG" + yenisatir
    + "yakıt türünü seçiniz";

let yakittipi = prompt(yakitmetni);
if (yakittipi !== "1" || yakittipi !== "2" || yakittipi !== "3") {
    let yakitlitresi = Number(prompt("yakıt litresini giriniz"));
    let bakiye = Number(prompt("bakiyenizi giriniz"));



    if (yakittipi == "1") {
        let odenecektutar = dizel * yakitlitresi;
        if (odenecektutar < bakiye) {
            bakiye = bakiye - odenecektutar;
            alert("yakıt alma işlemi başarılı" + yenisatir
                + "kalan bakiye : " + bakiye)
        } else {
            alert("bakiyeniz yeterli değildir" + yenisatir
                + "ödenecek tutar :" + odenecektutar + yenisatir
                + "bakiye : " + bakiye + yenisatir
                + "eksik tutar : " + (odenecektutar - bakiye));
        }

    } else if (yakittipi == "2") {
        let odenecektutar = benzin * yakitlitresi;
        if (odenecektutar < bakiye) {
            bakiye = bakiye - odenecektutar
            alert("yakıt alma işlemi başarılı" + yenisatir
                + "kalan bakiye : " + bakiye)
        } else {
            alert("bakiyeniz yeterli değildir" + yenisatir
                + "ödenecek tutar :" + odenecektutar + yenisatir
                + "bakiye : " + bakiye + yenisatir
                + "eksik tutar : " + (odenecektutar - bakiye));
        }

    } else if (yakittipi == "3") {
        let odenecektutar = lpg * yakitlitresi;
        if (odenecektutar < bakiye) {
            bakiye = bakiye - odenecektutar
            alert("yakıt alma işlemi başarılı" + yenisatir
                + "kalan bakiye : " + bakiye)
        } else {
            alert("bakiyeniz yeterli değildir" + yenisatir
                + "ödenecek tutar :" + odenecektutar + yenisatir
                + "bakiye : " + bakiye + yenisatir
                + "eksik tutar : " + (odenecektutar - bakiye));
        }
    }
}

else {
    alert("lütfen geçerli bir yakıt türü seçiniz");
}






