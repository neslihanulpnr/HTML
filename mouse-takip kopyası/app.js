let kutu = document.getElementById('kutu')
kutu.style.position = "absolute"
window.onmousemove = function (e){
kutu.style.left=e.clientX+"px";
kutu.style.top=e.clientY+"px";
}