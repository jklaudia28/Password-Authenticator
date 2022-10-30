const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


const showMsg = () => {
  if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
    p.textContent = 'You have a great password!👌'
    p.style.color = 'lime'
  } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
    p.textContent = 'Your password is not bad. Add some special characters to make it stronger!🤩'
    p.style.color = 'gold'
  } else {
    p.textContent = 'Sorry but you have very weak password. 😕'
    p.style.color = 'red'
  }
}

const passChecker = () => {
  if (pass.value !== '') {
    showMsg()
  } else {
    p.textContent = "Podaj hasło."
    p.style.color = ''
  }
}

pass.addEventListener('keyup', passChecker)
