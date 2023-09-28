function hesapla(){
    var kontrol=0;
    var sayi=document.getElementById("sayi").value;
    
    var s = Number(sayi);

    for(var i = 2 ; i<s ; i++){
        if(s % i == 0)
            kontrol++;
    }

    if(kontrol != 0)
        document.getElementById("sonuc").innerHTML = s + " sayısı asal değildir.";
    else
        document.getElementById("sonuc").innerHTML = s + " sayısı asaldır.";
    
}

var hesaplaBtn=document.getElementById("buton");
hesaplaBtn.onclick=hesapla;