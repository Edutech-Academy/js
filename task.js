import { savedName, savedAge, savedEmail } from './localStorage.js';

// const form = document.querySelector('form');
// const name = document.querySelector('input[type="text"]');
// const age = document.querySelector('input[type="number"]');
// const email = document.querySelector('input[type="email"]');

// const button = document.querySelector('button');
// const clear = document.getElementById('clear');
// const result = document.getElementById('result');
// form.style.display = 'grid';
// form.style.width = '30%';

// button.style.marginTop = '20px';

// button.addEventListener('click', () => {
//   result.innerHTML = name.value + ' ' + email.value + ' ' + age.value;
//   localStorage.setItem('result', result.innerHTML);

//   localStorage.setItem('name', name.value);
//   localStorage.setItem('email', email.value);
//   localStorage.setItem('age', age.value);
// });

const form = document.querySelector('form');
const name = document.querySelector('input[type="text"]');
const age = document.querySelector('input[type="number"]');
const email = document.querySelector('input[type="email"]');

form.style.display = 'grid';
form.style.width = '30%';

const save = document.querySelector('button');
const clear = document.getElementById('clear');
const result = document.getElementById('result');

save.addEventListener('click', () => {
  result.innerText =
    name.value + ' -  ' + age.value + ' - ' + email.value;
  result.style.marginLeft = '500px';
  localStorage.setItem('name', name.value);
  localStorage.setItem('age', age.value);
  localStorage.setItem('email', email.value);
});

name.value = savedName;

email.value = savedEmail;

age.value = savedAge;

clear.addEventListener('click', () => {
  localStorage.clear();
  result.innerHTML = '';
  name.value = '';
  email.value = '';
  age.value = '';

  const flash_message = document.createElement('div');

  flash_message.innerHTML = 'Local Storage Cleared';

  flash_message.classList.add('flash');

  document.body.appendChild(flash_message);

  setTimeout(() => {
    flash_message.remove();
  }, 3000);
});
