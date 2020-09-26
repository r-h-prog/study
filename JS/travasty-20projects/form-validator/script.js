const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function invalidEmail(email) {
  return true;
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(ipnut, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)}は${min}字以上にしてください`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)}は${max}字以内にして下さい`);
  } else {
    showSuccess(input);
  }
}

function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showSuccess(input2, 'パスワードが一致しません');
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 6);
  checkLength(password, 6, 25);
  checkPassword(input1, input2);
});
