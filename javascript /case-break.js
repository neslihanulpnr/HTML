let sayi = prompt("lütfen 1 ile 5 arasında bir sayı giriniz");

switch(sayi){
    case "1" :
        console.log("girilen sayı 1'dir.");
    break;
    
    case "2" :
        console.log("girilen sayı 2'dir");
    break;

    case "3" : 
        console.log("girilen sayı 3'tür");
    break;    
    
    case "4" :
        console.log("girilen sayı 4'dür");
    break;

    case "5" :
        console.log("girilen sayı 5'dir");
    break;
    
    default:
        console.log("girilen sayı 1 ve 5 arasında olmalıdır");
    break;
    }




    let yenisatir = "\r\n";
    let metin = "1-Pazartesi"+yenisatir
    +"2-Salı"+yenisatir
    +"3-çarşamba"+yenisatir
    +"4-perşembe"+yenisatir
    +"5-Cuma"+yenisatir
    +"6-cumartesi"+yenisatir
    +"7-Pazar"+yenisatir
    +"lütfen bir gün seçiniz"

    let deger = prompt(metin);
    switch(deger){
        case "1":
            console.log("pazartesi günü");
            break;

        case "2":
            console.log("salı günü");
        break;
        
        case "3":
            console.log("çarşamba günü");
        break;

        case "4":
            console.log("perşembe günü");
        break;
        
        case "5":
            console.log("cuma günü");
        break;
        
        case "6":
            console.log("cumartesi günü");
        break;
        
        case "7":
            console.log("pazar günü");
        break; 
        
        default:
           console.log("lütfen geçerli bir değer giriniz!");
    }



let bakiye = 1000;

let metın = "1-bakiye görüntüleme"+yenisatir
+"2-para çekme"+yenisatir
+"3-para yatırma"+yenisatir
+"4-çıkış"+yenisatir
+"lütfen bir değer seçiniz";

let secim = prompt(metın);
switch(secim){
    case "1": 
    alert("bakiyeniz : " + bakiye);
    break;

    case "2" :
      let cekilecektutar = Number(prompt("çekmek istediğiniz tutarı giriniz :"));
    if (cekilecektutar < bakiye){
        bakiye = bakiye - cekilecektutar;
        alert("kalan bakiye : " + bakiye);
    } else {
        alert("bakiyenizden fazla para çekemezsiniz!" + yenisatir
        +"bakiyeniz : " + bakiye + " " + "cekilecek tutar : " + cekilecektutar);
    }
    break;
    case "3" :
        let yatirilacaktutar = Number(prompt("yatırılacak tutarı giriniz : "));
        bakiye = bakiye + yatirilacaktutar;
        alert("güncel bakiyeniz : " + bakiye );
        break;

    case "4" :
        alert("sistemden çıkış yapıldı");
        break;
        
        default:
            alert("lütfen 1 - 4 arasında bir değer giriniz !");
            break;
}




let turkcedogru ,turkceyanlis = 0;  
let matematikdogru ,matematikyanlis =0;
let sosyaldogru ,sosyalyanlis =0;
let fendogru ,fenyanlis =0;
let puan =0;
let okulpuani =0;

let yenisatirr = "\r\n";
let mesaj = "tyt puan hesaplama uygulamasına hoşgeldiniz"+yenisatirr
             +"1-Puan hesaplama"+yenisatirr
             +"2-Çıkış yap";

let secimm =prompt(mesaj);
 
switch(secimm){
    case "1" :

   okulpuani =Number(prompt("okul puanınızı giriniz"));
   turkcedogru =Number(prompt("türkçe doğru sayısı"));
   turkceyanlis =Number(prompt("türkçe yanlış sayısı"));

   matematikdogru =Number(prompt("matematik doğru sayısı"));
   matematikyanlis =Number(prompt("matematik yanlış sayısı")); 

   fendogru =Number(prompt("fen doğru sayısı"));
   fenyanlis =Number(prompt("fen yanlış sayısı"));

   sosyaldogru =Number(prompt("sosyal doğru sayısı"));
   sosyalyanlis =Number(prompt("sosyal yanlış sayısı"));

   let dogrusaiyisi = turkcedogru+matematikdogru+sosyaldogru+fendogru;
   let yanlissayisi = turkceyanlis+matematikyanlis+sosyalyanlis+fenyanlis;
   let kalandogrusayisi = dogrusaiyisi - (yanlissayisi/4);
   puan = (kalandogrusayisi*4) + 100 +okulpuani;
   alert("tyt puanınız : " + puan);
   break;
    
   case "2" :
    alert("uygulamadan çıkış yapıldı");
    break;

    default :
    alert("lütfen geçerli aralıkta değer giriniz!");
    break;
}
