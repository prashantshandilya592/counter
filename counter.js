






let text = document.getElementById('count');
let add = document.getElementById('like');
let sub = document.getElementById('dislike');

 let count = 0;
 add.addEventListener('click', () => {
     count++;
     text.innerHTML = count;
 })

 sub.addEventListener('click', () => {
     count--;
     text.innerHTML = count;
 })
 