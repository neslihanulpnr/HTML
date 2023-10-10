let vize = document.getElementById("vize");
let final = document.getElementById("final");

function hesapla(){
  let vizeNotu = Number(vize.value);
  let finalNotu = Number(final.value)

  let ortalama = vizeNotu * 0.4 + finalNotu * 0.6;

  if(ortalama >= 84.5 && ortalama <= 100){
   document.getElementById("sonuc").innerHTML = "Ortalama" + ortalama + "=> AA"
  }else if(ortalama >= 69.5 && ortalama < 84.5){
    document.getElementById("sonuc").innerHTML = "Ortalama" + ortalama + "=> BB"
  }else if(ortalama >= 59.5 && ortalama < 69.5){
    document.getElementById("sonuc").innerHTML = "Ortalama" + ortalama + "=> CC"
  }else if(ortalama >= 49.5 && ortalama < 59.5)
  document.getElementById("sonuc").innerHTML = "Ortalama" + ortalama + "=> DD"
 else
 document.getElementById("sonuc").innerHTML = "Ortalama" + ortalama + "=> FF"
}

let hesaplaBtn = document.getElementById("hesapla");
hesaplaBtn.onclick = hesapla;


