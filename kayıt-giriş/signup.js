const signupButton = document.querySelector('.kayit');
    signupButton.addEventListener('click', function() {
    const data = {
    username: document.querySelector('.name').value,
    password: document.querySelector('.password').value,
    email: document.querySelector('.eposta').value,
    }
    console.log("signup DATA", data);
});
