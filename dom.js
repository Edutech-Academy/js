const h1 = document.getElementById('h1').firstChild;

const name = document.getElementsByName('name');

const p = document.getElementsByTagName('p');

const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   Array.from(p).map((e) => (e.innerHTML = 'Hello World'));
// });

btn.addEventListener('click', () => {
  window.location.reload();
});

const lastLiItem = document.querySelector('ul > li:first-child');

const ul = document.getElementById('ul');
const newLi = document.createElement('li');
newLi.innerHTML = '0';

ul.replaceChild(newLi, ul.firstElementChild);

console.log(lastLiItem.parentElement);

console.log(h1.nodeValue);

console.log(ul.firstElementChild.innerHTML);
console.log(ul.children);

console.log(p);
console.log(name);
console.log(h1);
