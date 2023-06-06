let taskInput = document.querySelector('.inputArea')
let addBtn = document.querySelector('.addBtn')
let inputList = document.querySelector('.input-lists')
let li;
let input;
let inputArray = [];

getLocalStorage();



addBtn.addEventListener('click', function () {
    input = taskInput.value;

    let currentTime = Date.now();
    let inputObject = {
        id: currentTime,
        data: input
    }
    inputArray.push(inputObject)
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
    inputArray.forEach(function (inputObject) {

        li = document.createElement('li')
        let span = document.createElement('span')
        li.appendChild(span)
        span.innerHTML = inputObject.data;
        taskInput.value = "";
        inputList.appendChild(li);
        taskInput.focus();

        // delete button
        deleteBtn = document.createElement('i')
        deleteBtn.classList.add('fa-solid', 'fa-trash')
        li.appendChild(deleteBtn)

        deleteBtn.addEventListener('click',function(){
            let id=inputObject.id
            deleteFunction(id);
        })

        // edit button
        editBtn = document.createElement('i')
        editBtn.classList.add('fa-solid', 'fa-pen')
        li.appendChild(editBtn)

        editBtn.addEventListener('click',function(){
            let id=inputObject.id;
            editFunction(id)
        })


    })
}

function deleteFunction(id) {
    console.log(id);
    console.log(inputArray);
    inputArray=inputArray.filter((obj)=>obj.id != id)
    console.log(inputArray);
    setLocalStorage();
    getLocalStorage();
}

function editFunction(id){
    let edited=prompt("enter text");
inputArray.forEach((obj)=>{
    if(obj.id === id){
        obj.data = edited
    }
    setLocalStorage();
    getLocalStorage();
})

}

// function editFunction(event) {
//     let item = event.target.parentElement
//     if (event.target.classList[1] === 'fa-pen') {
//         let edited = prompt("text to enter")
//         let span = item.querySelector('span')
//         span.innerText = edited
//     }
// }





