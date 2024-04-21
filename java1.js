function sum() {
    var inputA = parseFloat(document.getElementById('inputA').value)
    var inputB = parseFloat(document.getElementById('inputB').value)
    if (isNaN(inputA) || isNaN(inputB)) {
        document.getElementById('result').innerText = "Yêu cầu người dùng nhập lại."
    } else {  document.getElementById('result').innerText = "Result: " + (inputA + inputB)
    }
}

function subtract() {
    var inputA = parseFloat(document.getElementById('inputA').value)
    var inputB = parseFloat(document.getElementById('inputB').value)
    if (isNaN(inputA) || isNaN(inputB)) {
        document.getElementById('result').innerText = "Yêu cầu người dùng nhập lại."
    } else {
        document.getElementById('result').innerText = "Result: " + (inputA - inputB)
    }
}

function multiply() {
    var inputA = parseFloat(document.getElementById('inputA').value)
    var inputB = parseFloat(document.getElementById('inputB').value)
    if (isNaN(inputA) || isNaN(inputB)) {
        document.getElementById('result').innerText = "Yêu cầu người dùng nhập lại."
    } else {
        document.getElementById('result').innerText = "Result: " + (inputA * inputB)
    }
}

function divide() {
    var inputA = parseFloat(document.getElementById('inputA').value)
    var inputB = parseFloat(document.getElementById('inputB').value)
    if (isNaN(inputA) || isNaN(inputB)) {
        document.getElementById('result').innerText = "Yêu cầu người dùng nhập lại."
    } else if (inputB === 0) {
        document.getElementById('result').innerText = "Khong the chia cho 0."
    } else {
        document.getElementById('result').innerText = "Result: " + (inputA / inputB)
    }
}

function reset() {
    document.getElementById('inputA').value = ''
    document.getElementById('inputB').value = ''
    document.getElementById('result').innerText = ''
}
