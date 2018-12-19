const Operators = require('../operators.js');
import assert from 'assert';

describe('Addition operation:', () => {

  it('Addition test success:', () => {
    assert.equal(Operators.addition(2, 2), 4);
  });

  it('Addition test with not a numerical value:', () => {
    assert.equal(Operators.addition('2', '2'), null);
  });
});

describe('Subtraction operation:', () => {

  it('Subtraction test success:', () => {
    assert.equal(Operators.subtraction(6, 2), 4);
  });

  it('Subtraction test with not a numerical value::', () => {
    assert.equal(Operators.subtraction(true, '3'), null);
  });

});

describe('Multiplication operation:', () => {

  it('Multiplication test success:', () => {
    assert.equal(Operators.multiplication(3, 2), 6);
  });

  it('Multiplication test with not a numerical value:', () => {
    assert.equal(Operators.multiplication(true, '3'), null);
  });

});

describe('Division operation:', () => {

  it('Division test success:', () => {
    assert.equal(Operators.division(6, 2), 3);
  });

  it('Division test with not a numerical value:', () => {
    assert.equal(Operators.division(true, '3'), null);
  });

  it('Division test with division by zero:', () => {
    assert.equal(Operators.division(1, 0), null);
  });

});

describe('Constructor of operators:', () => {

  it('Create Operators object success:', () => {
    let div = document.createElement('div');
    assert.equal(new Operators(div) instanceof Operators, true);
  });

  it('Create Operators object with no valid parameter:', () => {
    let testObj = new Operators("test");
    assert.equal(testObj.board, undefined);
  });

});

describe('Clear board test:', () => {

  it('Clear board success:', () => {
    let div = document.createElement('div');
    let testObj = new Operators(div);
    testObj.board.innerHTML = '';
    testObj.clearBoard();
    assert.equal(testObj.board.innerHTML, '0');
  });

  it('Clear not valid board:', () => {
    let testObj = new Operators();
    assert.equal(testObj.clearBoard(), null);
  });

});

describe('CheckForClear test:', () => {

  it('CheckForClear success:', () => {
    let div = document.createElement('div');
    let testObj = new Operators(div);
    testObj.checkForClear()
    assert.equal(testObj.needClear, false);
  });

  it('CheckForClear success x2:', () => {
    let div = document.createElement('div');
    let testObj = new Operators(div);
    testObj.needClear = false;
    assert.equal(testObj.checkForClear(), undefined);
  })

});

describe('CheckForClear test:', () => {

  it('operatorButton whith "=" parameter end empty success:', () => {
    let div = document.createElement('div');
    div.innerHTML = '=';
    let event = document.createEvent('Event');
    let testObj = new Operators(document.createElement('div'));
    div.addEventListener('click', ()=> {
      assert.equal(testObj.operatorButton(event), null);
    });
    div.click();
  });

});