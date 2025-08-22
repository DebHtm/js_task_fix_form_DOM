'use strict';

const inputs = document.querySelectorAll('form input');

function fixForm(inputsForm) {
  inputsForm.forEach((input) => {
    const lable = document.createElement('label');
    const str = input.name;

    lable.classList.add('field-label');
    lable.setAttribute('for', input.id);
    lable.textContent = str.toUpperCase();
    input.before(lable);
    input.placeholder = lable.textContent[0] + str.slice(1);
  });
}

fixForm(inputs);
