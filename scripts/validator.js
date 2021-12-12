document.querySelector('.form__form').addEventListener('submit', (e) => {
  let errors;

  const formContainers = [...e.target.querySelectorAll('.form__input-container'), ...e.target.querySelectorAll('.form__labeled-container')];

  let formUnits = [];
  formContainers.forEach((container) => {
    formUnits = [...formUnits, ...container.querySelectorAll('.form__unit')];
  });

  formUnits.forEach((unit) => {
    const val = unit.querySelector('.form__field').value;
    if (!val) {
      errors = true;
      const label = unit.querySelector('.form__label').textContent;
      const errSpan = unit.querySelector('.form__error');
      errSpan.textContent = `поле '${label}' обязательно для заполнения`;
      errSpan.classList.add('form__error_visible');
    }
  });

  if (errors) {
    e.preventDefault();
  }
});

const clearErrors = (target) => {
  target.parentElement.querySelector('.form__error').classList.remove('form__error_visible');
};
