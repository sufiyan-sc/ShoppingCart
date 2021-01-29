'use strict'
let userList=[];
let itemVal = document.getElementById('list');
let display = document.getElementById('show-result');
let displayList = document.getElementById('show-list');
let option = document.getElementById('result');
let cont = document.getElementById('list-container');
let ul = document.createElement('ul');

function myList(){
    userList.push(itemVal.value);
    itemVal.value='';
}
function inner(){
    for ( let i=0;i<=userList.length-1;i++){
        let li =document.createElement('li');  // we need to create li element each time so we cannot defined it outside the for loop
        li.innerHTML = userList[i];
        li.setAttribute('class','the-item');
        ul.appendChild(li);
    }
    cont.appendChild(ul);
    userList=[];
}



display.addEventListener('click',myList);
displayList.addEventListener('click',inner);
