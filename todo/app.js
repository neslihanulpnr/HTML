let addToDoButton = document.getElementById('addToDo');
let clearToDo = document.getElementById('clearToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });
 
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });

    clearToDo.addEventListener('click', function(){
        paragraph.remove();
    })
})
 