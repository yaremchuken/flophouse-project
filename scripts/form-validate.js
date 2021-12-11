// валидация поля ввода  - телефон для связи

const contactNumberInput = document.querySelector('#contact-number');

const checkValidity = (event, inputElement) => {
  if (!inputElement.validity.valid) {
    console.log('В инпуте ошибка!');
  }
  const errorElement = event.target.closest('.form__unit').querySelector('.form__error-span');
  errorElement.textContent = !event.target.validity.valid ? 'Некорректно введено' : 'все верно!';
}

contactNumberInput.addEventListener('input', (event) => {
  checkValidity(event, contactNumberInput);
});



// let prevValue = contactNumberInput.value;

// // Функция подсвечивает поле ввода красным (ошибка валидации)
// const setErrorStyle = (input) => {
//   // input.classList.add('form__field_type_error');
//   input.required = true;
// }

// const resetErrorStyle = (input) => {3
//   // input.classList.add('form__field_type_error');
//   input.required = false;
// }

// const validateInput = (event) => {
//   if (event.keyCode === 8) return true; // backspace
//   const regX = new RegExp('([0-9-+()])');
//   return regX.test(event.key);
// }

// const insertDelimiters = (str) => {
//   // если строка содержит хотя бы один разделитель "-" ничего не делаем
//   if (str.includes('-')) return str;

//   const arr = str.split('');
//   arr.splice(-4, 0, '-');
//   arr.splice(-2, 0, '-');
//   return arr.join('');
// }

// contactNumberInput.addEventListener('keydown', (event) => {
//   const isValid = validateInput(event);
//   if (!isValid) {
//     contactNumberInput.value = prevValue;
//   } else {
//     prevValue = contactNumberInput.value;
//   }
// });

// contactNumberInput.addEventListener('keyup', (event) => {
//   // console.log(contactNumberInput.value.length);
//   if (contactNumberInput.value.length === 0) {
//     setErrorStyle(contactNumberInput);
//   } else {
//     resetErrorStyle(contactNumberInput);
//   }
// });


// contactNumberInput.addEventListener('blur', (event) => {
//   contactNumberInput.value = insertDelimiters(contactNumberInput.value);
// });