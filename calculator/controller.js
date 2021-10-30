// setup variables and get a calculator instance
var calculator

function CreateCalculator() {
    calculator = new Calculator(parseInt(document.getElementById("inputNumberOne").value), parseInt(document.getElementById("inputNumberTwo").value), getOperator());
}

// perform a calculation when the operator button is clicked
function calculate() {
    CreateCalculator();
    calculator.operator = getOperator();
    let result = calculator.operate();
    updateResultText(calculator.value);
    valid = true;
    if (document.getElementById("inputNumberOne").value == "" || document.getElementById("inputNumberTwo").value == "") {
        alert("Please enter a number");
        valid = false;
    }
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
    let label = document.getElementById("result")
    label.style = "color:black"
    if (!calculator.attemptedDivideByZero) {
        label.innerHTML = "The result of " + calculator.getAction() + " " + calculator.firstNumber + " and " + calculator.secondNumber + " is " + value
    } else {
        label.innerHTML = "You cannot divide by zero"
        label.style = "color:red"
    }
}

// should clear input text values and focus the first number input
function clearValues() {
    document.getElementById("inputNumberOne").value = null;
    document.getElementById("inputNumberOne").focus();
    document.getElementById("inputNumberTwo").value = null;
    document.getElementById("result").innerHTML = ""
    let radioButtons = document.getElementsByName("operation");
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
    let radioButons = document.getElementsByName("operation")
    let operator = "";
    for (let i = 0; i < radioButons.length; i++) {
        if (radioButons[i].checked) {
            operator = radioButons[i].value;
        }
    }
    return operator;
}

//Validate input fields
function validateInputField() {
    valid = true;
    if (document.getElementById("inputNumberOne").value == "") {
        alert("Please enter a number");
        valid = false;
    }
}