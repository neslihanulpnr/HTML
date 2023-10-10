//!--------date tarih metot--------------//

let tarih = new Date(2004,7,15);
console.log(tarih);

console.log(tarih.getFullYear());
console.log(tarih.getDate());
console.log(tarih.getDay());
console.log(tarih.getHours());
console.log(tarih.getMilliseconds());
console.log(tarih.getMinutes());
console.log(tarih.getMonth()); //* ayları saymaya sıfırdan başlıyor 0=ocak
console.log(tarih.getSeconds());

console.log(tarih.toLocaleDateString());
console.log(tarih.toLocaleTimeString())
console.log(tarih.toLocaleString());



//! set metotları tarihi saati vs. ileri veya geriye alma.
tarih.setDate(24);  
console.log(tarih);




















































