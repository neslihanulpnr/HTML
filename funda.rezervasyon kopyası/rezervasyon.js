

const form = document.getElementById("form");


form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isim = form.isim.value;
  let mail = form.mail.value;
  let ogr = form.ogr.value;
  let baslangic = new Date(form.baslangic.value);
  let bitis = new Date(form.bitis.value);

  localStorage.setItem("ad", isim);
  localStorage.setItem("email", mail);
  localStorage.setItem("Öğretmen adı", ogr);
  localStorage.setItem("başlangıç tarihi", baslangic);
  localStorage.setItem("bitiş tarihi ", bitis);


  form.reset();


});






