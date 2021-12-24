const categoryForm = document.querySelector('#pick-category');
const categoryRadios = document.querySelectorAll('.radio-button');
const categotySubmitBtn = document.querySelector('#category-submit');

const formRadios = document.querySelectorAll('.form__radio-unit');

if (categoryForm) {
  let currentChoice;

  categoryRadios.forEach((radio) =>
    radio.addEventListener('click', () => {
      const radioInp = radio.querySelector('.form__radio');
      if (radioInp) {
        categoryRadios.forEach((r) => switchCategoryRadio(r, radioInp.value));
        currentChoice = radioInp.value;
        categotySubmitBtn.classList.add('form__control_active');
      }
    })
  );

  categoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!currentChoice) {
      return;
    }
    switch (currentChoice) {
      case 'cafe':
        location.href = '../pages/cafe-form.html';
        break;
      case 'master-class':
        location.href = '../pages/master-class-form.html';
        break;
      case 'party':
        location.href = '../pages/party-form.html';
        break;
      case 'other':
        location.href = '../pages/other-form.html';
        break;
    }
  });
}

formRadios.forEach((radio) =>
  radio.addEventListener('click', (e) => {
    switchRadio(e.target.closest('.form__radio'));
  })
);


const switchCategoryRadio = (radio, value) => {
  const radioVal = radio.querySelector('.form__radio').value;
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
