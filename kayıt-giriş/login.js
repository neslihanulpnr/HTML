const loginButton = document.querySelector('.giriş');
    loginButton.addEventListener('click', function() {
    const data = {
    username: document.querySelector('.name').value,
    password: document.querySelector('.password').value,
    }
    console.log("LOGIN DATA", data);
});