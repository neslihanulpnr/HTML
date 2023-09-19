document.addEventListener('DOMContentLoaded', function () {
    const tarih1Input = document.getElementById('tarih1');
    const tarih2Input = document.getElementById('tarih2');
    const ucretInput = document.getElementById('ucret');
    const hesaplaBtn = document.querySelector('.btn');

    hesaplaBtn.addEventListener('click', function () {
        const tarih1 = new Date(tarih1Input.value);
        const tarih2 = new Date(tarih2Input.value);
        const eylulFiyat = 50;
        const agustosFiyat = 100;

        let toplamUcret = 0;


        tarih2.setDate(tarih2.getDate() + 1);

        for (let date = tarih1; date < tarih2; date.setDate(date.getDate() + 1)) {
            const ay = date.getMonth() + 1;
            if (ay === 8) {
                toplamUcret += agustosFiyat;
            } else if (ay === 9) {
                toplamUcret += eylulFiyat;
            }
        }

        ucretInput.value = toplamUcret;
    }); 
});