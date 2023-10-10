let kisaKenar = document.getElementById('kisaKenar');
let uzunKenar = document.getElementById('uzunKenar');
let alan = document.getElementById('alan');
let cevre = document.getElementById('cevre');

function hesapla(){
let kk = Number(kisaKenar.value);
let uk = Number(uzunKenar.value);

let dAlan = uk * kk
let dCevre = 2 * (uk + kk);

alan.innerHTML = "Alan: " + dAlan
cevre.innerHTML = "Çevre: " + dCevre
}

let hspBtn = document.getElementById('hesapla');
hspBtn.onclick = hesapla;