const screen = document.getElementById("screen");

function appendToScreen(value) {
    screen.value += value;
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}

function clearScreen() {
    screen.value = "";
}





