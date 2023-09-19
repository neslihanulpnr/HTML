//not arttırma azaltma
function tiklandi(button, islem) {
    const satir = button.parentElement.parentElement;
    const notElement = satir.querySelector('.not');
    let not = Number(notElement.innerHTML);
    
    if (islem === '+') {
        if (not < 100) {
        not++;
    }
    } else if (islem === '-') {
        if (not > 0) {
        not--;
    }
    }
    
    notElement.innerHTML = not;
    }
    
    
    //yeni öğrenci tanımlama
    document.getElementById('newStudent').addEventListener('click', function() {
        var tableBody = document.querySelector('table tbody');
    
        tableBody.innerHTML += `
        <tr>
            <td contenteditable="true">Yeni Öğrenci Ad</td>
            <td contenteditable="true">Yeni Öğrenci Soyad</td>
            <td contenteditable="true">sınıf</td>
            <td class="not" contenteditable="true">0</td>
            <td>
                <button onclick="tiklandi(this, '+')">+</button>
                <button onclick="tiklandi(this, '-')">-</button>
            </td>
        </tr>
        `;
    
    });