const categoryForm = document.querySelector('#categoryForm');
const categoryRadios = document.querySelectorAll('.radio-button');

const formRadios = document.querySelectorAll('.form__radio-unit');

if (categoryForm) {
  let currentChoice = 'cafe';

  categoryRadios.forEach((radio) =>
    radio.addEventListener('click', () => {
      const radioInp = radio.querySelector('.form-input__radio');
      if (radioInp) {
        categoryRadios.forEach((r) => switchCategoryRadio(r, radioInp.value));
        currentChoice = radioInp.value;
      }
    })
  );

  categoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    switch (currentChoice) {
      case 'cafe':
        location.href = '../pages/cafeForm.html';
        break;
      case 'master-class':
        location.href = '../pages/master-class.html';
        break;
      case 'party':
        location.href = '../pages/partyForm.html';
        break;
      case 'other':
        location.href = '../pages/other.html';
        break;
    }
  });
}

formRadios.forEach((radio) =>
  radio.addEventListener('click', (e) => {
    switchRadio(e.target.closest('.form-input__radio'));
  })
);

const switchRadio = (radio) => {
  if (radio) {
    formRadios.forEach((formRadio) => {
      const radioInp = formRadio.querySelector('.form-input__radio');
      const radioIcon = formRadio.querySelector('.form-input__radio-icon');
      if (radio.value === radioInp.value) {
        radioIcon.classList.add('form-input__radio-icon_checked');
      } else {
        radioIcon.classList.remove('form-input__radio-icon_checked');
      }
    });
  }
};

const switchCategoryRadio = (radio, value) => {
  const radioVal = radio.querySelector('.form-input__radio').value;
  const checkerIcon = radio.querySelector('.form-input__checker');

  if (checkerIcon) {
    if (radioVal === value) {
      checkerIcon.classList.add('form-input__checker_checked');
      radio.classList.add('form-input_active');
    } else {
      checkerIcon.classList.remove('form-input__checker_checked');
      radio.classList.remove('form-input_active');
    }
  }
};
