async function startApplication() {

  const numericButtons =  document.getElementsByClassName('numeric_button');
  const operatorButtons = document.getElementsByClassName('operation_button');

  let operators = await new Operators(document.getElementsByClassName('board')[0]);

  document.getElementsByClassName('button_c')[0].addEventListener('click', (event) => {
    operators.clearBoard(event);
  });

  for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', (event) => {
      operators.operatorButton(event);
    });
  }

  for (var i = 0; i < numericButtons.length; i++) {
    numericButtons[i].addEventListener('click', (event) => {
      if (operators.board.innerHTML === '0' && event.target.innerHTML === '0') {
        return;
      }
      operators.checkForClear();
      operators.board.innerHTML += event.target.innerHTML;
    });
  }

}

document.addEventListener('DOMContentLoaded', startApplication);

module.exports = startApplication;
