// const h1 = document.getElementById('h1').firstChild;

// const name = document.getElementsByName('name');

// const p = document.getElementsByTagName('p');

// const btn = document.querySelector('button');

// // btn.addEventListener('click', () => {
// //   Array.from(p).map((e) => (e.innerHTML = 'Hello World'));
// // });

// btn.addEventListener('click', () => {
//   window.location.reload();
// });

// const lastLiItem = document.querySelector('ul > li:first-child');

// const ul = document.getElementById('ul');
// const newLi = document.createElement('li');
// newLi.innerHTML = '0';

// ul.replaceChild(newLi, ul.firstElementChild);

// const firstP = document.getElementsByTagName('p')[0];
// firstP.style.color = 'red';

// const input = document.getElementById('input');

// input.ondblclick = function () {
//   document.getElementById('result').innerHTML = input.value;
// };

// console.log(lastLiItem.parentElement);

// console.log(h1.nodeValue);

// console.log(ul.firstElementChild.innerHTML);
// console.log(ul.children);

// console.log(p);
// console.log(name);
// console.log(h1);

let heading = (document.getElementById('h1').innerText =
  'hello edutech');

let paragraph = Array.from(document.getElementsByTagName('p')).map(
  (e) => e.innerText
);

let button = document.getElementsByClassName('btn')[0];

// button.onclick = function () {
//   document.getElementsByTagName('p')[0].innerText = 'banwo';
//   // window.location.reload();
// };

let input = document.getElementById('input');

// input.oninput = function () {
//   document.getElementById('result').innerText = input.value;
// };

input.addEventListener('input', () => {
  document.getElementById('result').innerText = input.value;
});

let unorderedList = document.querySelector('ul > li');

button.addEventListener('click', () => {
  document.getElementsByTagName('p')[0].innerText = 'banwo';
  unorderedList.style.color = 'red';
  unorderedList.style.fontSize = '26px';
  unorderedList.style.marginLeft = '20px';
});

console.log(unorderedList);
