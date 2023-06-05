let taskInput = document.querySelector('.inputArea')
let addBtn = document.querySelector('.addBtn')
let inputList = document.querySelector('.input-lists')
let li;
let input;
let inputArray = [];

getLocalStorage();

inputList.addEventListener('click',deleteFunction )
inputList.addEventListener('click', editFunction)

addBtn.addEventListener('click', function () {
    input = taskInput.value;
    inputArray.push(input)
    setLocalStorage();
    getLocalStorage();

})

function setLocalStorage() {
    localStorage.setItem("taskInput", JSON.stringify(inputArray));
}
function getLocalStorage() {
    if (localStorage.getItem("taskInput")) {
        inputArray = JSON.parse(localStorage.getItem("taskInput"));
        buildUI();
    }
}

function buildUI() {
    inputList.innerHTML = '';
    inputArray.forEach(function (value) {

        li = document.createElement('li')
        let span=document.createElement('span')
        li.appendChild(span)
        span.innerHTML = value;
        taskInput.value = "";
        inputList.appendChild(li);
        taskInput.focus();

        // delete button
        deleteBtn = document.createElement('i')
        deleteBtn.classList.add('fa-solid', 'fa-trash')
        li.appendChild(deleteBtn)
       
        // edit button
        editBtn=document.createElement('i')
        editBtn.classList.add('fa-solid','fa-pen')
        li.appendChild(editBtn)

        
    })
}

function deleteFunction(event) {
    if (event.target.classList[1] === 'fa-trash') {
        let item = event.target.parentElement;
        item.remove();
    }
}

function editFunction(event){
    let item=event.target.parentElement
    if(event.target.classList[1]=== 'fa-pen'){
        let edited=prompt("text to enter")
        let span=item.querySelector('span')
        span.innerText=edited
    }
}





