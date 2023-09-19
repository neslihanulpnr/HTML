let kenar1 = document.getElementById('kenar1');
let kenar2 = document.getElementById('kenar2');

function hesapla(){
var k1 = Number(kenar1.value);
var k2 = Number(kenar2.value);

var hipotenus = Math.sqrt((k1*k1)+(k2+k2));
document.getElementById('sonuc').innerHTML="Hipotenüs : " + hipotenus;
}

let hesapBtn = document.getElementById('btn');
hesapBtn.onclick = hesapla;