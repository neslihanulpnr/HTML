let yukari = document.getElementsByClassName('yukari_cik')[0];

window.addEventListener('scroll', function(){
const mesafe = window.scrollY
if(mesafe > 300){
yukari.classList.add('goster');
}else{
yukari.classList.remove('goster');
}    
});

yukari.addEventListener('click', function(){
window.scrollTo(0, 0);    
})