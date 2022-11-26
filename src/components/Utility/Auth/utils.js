import validator from 'validator';

export function validateName(value) {
  let error = '', validity = false;
  if (!value) {
    error = 'Поле не должно быть пустым';
  } else if (!validator.matches(value, /^[A-Za-zА-Яа-я\- ]+$/)) {
    error = 'Имя может содержать только латиницу, кириллицу, пробел или дефис';
  } else {
    validity = true;
  }

  return { validity, error };
}

export function validateEmail(value) {
  let error = '', validity = false;
  if (!value) {
    error = 'Поле не должно быть пустым';
  } else if (!validator.isEmail(value)) {
    error = 'Невалидный email';
  } else {
    validity = true;
  }

  return { validity, error };
}

export function validatePassword(value) {
  let error = '', validity = false;
  if (!value) {
    error = 'Поле не должно быть пустым';
  } else {
    validity = true;
  }

  return { validity, error };
}
