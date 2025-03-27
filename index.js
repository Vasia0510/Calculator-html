function addNumber(num) {
    document.getElementById('input-field').value += num;
}

function clearInput() {
    document.getElementById('input-field').value = "";
}

function calculate() {
    let input = document.getElementById('input-field').value;
    try {
        document.getElementById('input-field').value = eval(input);
    } catch {
        document.getElementById('input-field').value = "Помилка";
    }
}