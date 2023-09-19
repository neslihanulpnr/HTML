//!----------ürün bulma uygulaması---------------//
let urun1 ={
    isim: "ACER Swift",
    kategori: "teknoloji",
    fiyat:6.213,
}

let urun2 ={
    isim: "ACER Nitro 5",
    kategori: "teknoloji",
    fiyat:15.475,
}

let urun3 ={
    isim: "ACER Gaming",
    kategori: "teknoloji",
    fiyat:13.999,
}

let urun4 ={
    isim:"LENOVO v14",
    kategori: "teknoloji",
    fiyat:4.512,
}
 let urun5 ={
    isim: "LENOVO İdeapad",
    kategori:"teknoloji",
    fiyat:4.999,
 }

let urunler = [urun1, urun2, urun3, urun4, urun5];
let filtreliurunler = [];
let kullaniciurunismi = prompt("bir ürün ismi giriniz");

filtreliurunleridoldur(urunler);
filtreliurunleriyazdir(filtreliurunler);

function filtreliurunleridoldur(urunler) {
    urunler.forEach(function (urun) {
if(urun.isim.toUpperCase().includes(kullaniciurunismi.toUpperCase(), 0)) { 
    filtreliurunler.push(urun);
    }
  });
}

function filtreliurunleriyazdir(urunler) {
    urunler.forEach(function (urun) {
      console.log("--------------------------------------"); 
      console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
      console.log("--------------------------------------");
    });
}














































































































