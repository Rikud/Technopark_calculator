 class Operators {

  constructor(board) {
    if (typeof(board) !== 'object'
      || board.tagName === undefined
      || board.tagName !== 'DIV') {
      console.error("Constructor parameter must be div!");
      return null;
    }
    this.board = board;
    this.board.innerHTML = '0';

    this.currentOperator = '';
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operators = {
      '+': this.addition,
      '-': this.subtraction,
      '÷': this.division,
      'x': this.multiplication
    }
    this.needClear = true;
  }

  clearBoard() {
    if (this.board !== undefined
      && this.board.innerHTML !== undefined) {
      this.board.innerHTML = '0';
      this.needClear = true;
      return this;
    } else {
      console.error("Board not valid!");
      return null
    }
  }

  checkForClear() {
    if (this.needClear) {
      this.board.innerHTML = '';
      this.needClear = false;
    } else {
      return
    }
  }

  operatorButton(event) {
    let newOperator = event.target.innerHTML;
    if (this.currentOperator === '') {
      if (newOperator === '=') {
        return null;
      }
      this.currentOperator = newOperator;
      this.firstNumber = parseInt(this.board.innerHTML);
      this.needClear = true;
    } else {
      if (newOperator === this.currentOperator) {
        return;
      }
      this.secondNumber = parseInt(this.board.innerHTML);
      const executeFunc = this.operators[this.currentOperator];
      this.board.innerHTML = executeFunc(this.firstNumber, this.secondNumber);
      this.currentOperator = '';
      this.firstNumber = parseInt(this.board.innerHTML);
      this.secondNumber = 0;
      if (newOperator !== '=') {
        this.currentOperator = newOperator;
      }
      this.needClear = true;
    }
  }

  static addition(firstNumber, secondNumber) {
    if (typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number') {
      console.error("Addition with not a numerical value!");
      return null
    }
    return firstNumber + secondNumber;
  }

  static subtraction(firstNumber, secondNumber) {
    if (typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number') {
      console.error("Subtraction with not a numerical value!");
      return null
    }
    return firstNumber - secondNumber;
  }

  static multiplication(firstNumber, secondNumber) {
    if (typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number') {
      console.error("Multiplication with not a numerical value!");
      return null
    }
    return firstNumber * secondNumber;
  }

  static division(firstNumber, secondNumber) {
    if (typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number') {
      console.error("Division with not a numerical value!");
      return null
    } else if (secondNumber === 0) {
      console.error("Division by zero!");
      return null
    }
    return firstNumber / secondNumber;
  }
}

module.exports = Operators;