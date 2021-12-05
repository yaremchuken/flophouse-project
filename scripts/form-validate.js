// валидация поля ввода  - телефон для связи

const contactNumberInput = document.querySelector("#contact-number");
let prevValue = contactNumberInput.value;

const validateInput = (event) => {
  if (event.keyCode === 8) return true; // backspace
  const regX = new RegExp("([0-9-+()])");
  return regX.test(event.key);
}

const insertDelimiters = (str) => {
  // если строка содержит хотя бы один разделитель "-" ничего не делаем
  if (str.includes("-")) return str;

  const arr = str.split("");
  arr.splice(-4, 0, "-");
  arr.splice(-2, 0, "-");
  return arr.join("");
}

contactNumberInput.addEventListener("keyup", (event) => {
  const isValid = validateInput(event);
  if (!isValid) {
    contactNumberInput.value = prevValue;
  } else {
    prevValue = contactNumberInput.value;
  }
});

contactNumberInput.addEventListener("blur", (event) => {
  contactNumberInput.value = insertDelimiters(contactNumberInput.value);
});