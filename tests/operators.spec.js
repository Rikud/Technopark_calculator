const Operators = require('../operators.js');

describe('Addition operation:', () => {

  it('Addition test success:', () => {
    expect(Operators.addition(2, 2)).toBe(4);
  });

  it('Addition test with not a numerical value:', () => {
    expect(Operators.addition('2', '2')).toBe(null);
  });
});


describe('Subtraction operation:', () => {

  it('Subtraction test success:', () => {
    expect(Operators.subtraction(6, 2)).toBe(4);
  });

  it('Subtraction test with not a numerical value::', () => {
    expect(Operators.subtraction(true, '3')).toBe(null);
  });

});

describe('Multiplication operation:', () => {

  it('Multiplication test success:', () => {
    expect(Operators.multiplication(3, 2)).toBe(6);
  });

  it('Multiplication test with not a numerical value:', () => {
    expect(Operators.multiplication(true, '3')).toBe(null);
  });

});

describe('Division operation:', () => {

  it('Division test success:', () => {
    expect(Operators.division(6, 2)).toBe(3);
  });

  it('Division test with not a numerical value:', () => {
    expect(Operators.division(true, '3')).toBe(null);
  });

  it('Division test with division by zero:', () => {
    expect(Operators.division(1, 0)).toBe(null);
  });

});

describe('Constructor of operators:', () => {

  it('Create Operators object success:', () => {
    let div = document.createElement('div');
    expect(new Operators(div) instanceof Operators).toBe(true);
  });

  it('Create Operators object with no valid parameter:', () => {
    let testObj = new Operators("test");
    expect(testObj.board).toBe(undefined);
  });

});

describe('Clear board test:', () => {

  it('Clear board success:', () => {
    let div = document.createElement('div');
    let testObj = new Operators(div);
    testObj.board.innerHTML = '';
    testObj.clearBoard();
    expect(testObj.board.innerHTML).toBe('0');
  });

  it('Clear not valid board:', () => {
    let testObj = new Operators();
    expect(testObj.clearBoard()).toBe(null);
  });

});

describe('CheckForClear test:', () => {

  it('CheckForClear success:', () => {
    let div = document.createElement('div');
    let testObj = new Operators(div);
    testObj.checkForClear()
    expect(testObj.needClear).toBe(false);
  });

  it('CheckForClear success x2:', () => {
    let div = document.createElement('div');
    let testObj = new Operators(div);
    testObj.needClear = false;
    expect(testObj.checkForClear()).toBe(undefined);
  })

});

describe('CheckForClear test:', () => {

  it('operatorButton whith "=" parameter and empty return null:', () => {
    let div = document.createElement('div');
    div.innerHTML = '=';
    let testObj = new Operators(document.createElement('div'));
    div.addEventListener('click', (event)=> {
      expect(testObj.operatorButton(event)).toBe(null);
    });
    div.click();
  });

  it('operatorButton whith "+" parameter and value success:', () => {
    let div = document.createElement('div');
    div.innerHTML = '+';
    let board = document.createElement('div')
    board.innerHTML = '5'
    let testObj = new Operators(board);
    div.addEventListener('click', (event)=> {
      expect(testObj.operatorButton(event)).toBe(undefined);
    });
    div.click();
  });

  it('operatorButton whith double "+" parameter:', () => {
    let div = document.createElement('div');
    div.innerHTML = '+';
    let board = document.createElement('div')
    let testObj = new Operators(board);
    testObj.currentOperator = '+'
    div.addEventListener('click', (event)=> {
      expect(testObj.operatorButton(event)).toBe(undefined);
    });
    div.click();
  });

  it('operatorButton whith "+" and "=" parameters and empty value:', () => {
    let div = document.createElement('div');
    div.innerHTML = '=';
    let board = document.createElement('div')
    let testObj = new Operators(board);
    testObj.currentOperator = '+';
    div.addEventListener('click', (event)=> {
      expect(testObj.operatorButton(event)).toBe(undefined);
    });
    div.click();
  });

  it('operatorButton whith "+" and "-" parameters and empty value:', () => {
    let div = document.createElement('div');
    div.innerHTML = '-';
    let board = document.createElement('div')
    let testObj = new Operators(board);
    testObj.currentOperator = '+';
    div.addEventListener('click', (event)=> {
      expect(testObj.operatorButton(event)).toBe(undefined);
    });
    div.click();
  });

});
