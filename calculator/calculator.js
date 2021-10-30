class Calculator {
    firstNumber;
    secondNumber;
    operator;
    value;

    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }

    // determine the current operation's label
    getAction() {
        switch (this.operator) {
            case "add":
                return "adding"
                break;
            case "subtract":
                return "subtracting"
                break;
            case "multiply":
                return "multiplying"
                break;
            case "divide":
                return "dividing"
                break;
        }
    }

    // performa a calculation based on the currently selected operation
    operate() {
        if (this.operator === "add") {
            return this.add()
        } else if (this.operator === "subtract") {
            return this.subtract()
        } else if (this.operator == "multiply") {
            return this.multiply()
        } else if (this.operator === "divide") {
            if (this.secondNumber === 0) {
                this.attemptedDivideByZero = true
            }
            return this.divide()
        }
    }

    attemptedDivideByZero = false;

    // perform addition operation
    add() {
        this.value = this.firstNumber + this.secondNumber
    }

    // perform subtraction operation
    subtract() {
        this.value = this.firstNumber - this.secondNumber
    }

    // perform multiplication operation
    multiply() {
        this.value = this.firstNumber * this.secondNumber
    }

    // perform divide operation
    divide() {
        if (!this.attemptedDivideByZero) {
            this.value = this.firstNumber / this.secondNumber
        }
    }
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;