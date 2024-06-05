class Calculator {
  constructor(operationsTextElemet) {
    this.operations = [];
    this.operationsTextElemet = operationsTextElemet;
    this.clear();
  }

  clear() {
    this.operations = [];
    this.updateDisplay();
  }

  delete() {
    if (this.operations.length > 0) {
      this.operations[this.operations.length - 1] = this.operations[
        this.operations.length - 1
      ].slice(0, -1);
      if (this.operations[this.operations.length - 1] === "") {
        this.operations.pop();
      }
    }
    this.updateDisplay();
  }

  currentOperand() {
    if (this.operationLength() === 0) return "";
    return this.operations[this.operationLength() - 1];
  }

  operationLength() {
    return this.operations.length;
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand().includes(".")) return;
    if (
      this.isOperator(this.currentOperand()) ||
      this.currentOperand() === ""
    ) {
      this.operations.push(number);
    } else {
      this.operations[this.operationLength() - 1] += number;
    }
    this.updateDisplay();
  }

  chooseOperation(operation) {
    if (this.currentOperand() === "") return;
    if (this.isOperator(this.currentOperand())) {
      this.operations[this.operationLength() - 1] = operation;
    } else {
      this.operations.push(operation);
    }
    this.updateDisplay();
  }

  compute() {
    if (this.operationLength() < 3) return;
    let computation;
    let prev = parseFloat(this.operations.shift());
    let operator = this.operations.shift();
    let current = parseFloat(this.operations.shift());

    computation = this.applyOperation(prev, current, operator);

    if (computation === null) {
      this.displayError("Invalid Operation");
      return;
    }

    this.operations.unshift(computation.toString());

    this.updateDisplay();
    if (this.operationLength() > 1) {
      this.compute();
    }
  }

  applyOperation(prev, current, operator) {
    let computation;

    if (isNaN(prev) || isNaN(current)) return null;
    switch (operator) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return null;
    }
    return computation;
  }

  isOperator(value) {
    return value === "+" || value === "-" || value === "x" || value === "÷";
  }

  updateDisplay() {
    this.operationsTextElemet.innerText = this.operations.join(" ");
    this.adjustFontSize();
  }
  displayError(error) {
    let tmp = this.operationsTextElemet.innerText;
    this.operationsTextElemet.innerText = error;
    this.operationsTextElemet.style.color = "red";
    setTimeout(() => {
      this.operationsTextElemet.innerText = tmp;
      this.operationsTextElemet.style.color = "black";
      this.updateDisplay();
    }, 1000);
  }
  adjustFontSize() {
    const parent = this.operationsTextElemet.parentElement;
    let fontSize = window.getComputedStyle(this.operationsTextElemet).fontSize;
    fontSize = parseFloat(fontSize);

    while (this.operationsTextElemet.scrollWidth > parent.clientWidth) {
      fontSize -= 1;
      this.operationsTextElemet.style.fontSize = fontSize + "px";
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const operationsTextElemet = document.querySelector("[data-operations]");
const calculator = new Calculator(operationsTextElemet);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    // calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.compute();
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
});
