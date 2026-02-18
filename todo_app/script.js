let todocontainer=document.getElementById("todoItemsContainer");

let todoList=[{text:"Learn Html"},
    {text:"Learn CSS"},
    {text:"Learn Javascript"},
]

function tocreateAndAppend(todoList) {

let todoEle=document.createElement("li");
todoEle.classList.add("todo-item-container","d-flex","flex-row");
todocontainer.appendChild(todoEle);

let inputEle=document.createElement("input");
inputEle.type="checkbox";
inputEle.id="checkboxInput";
inputEle.classList.add("checkbox-input");
todoEle.appendChild(inputEle);

//<div class="d-flex flex-row label-container">
let labelcont=document.createElement("div");
labelcont.classList.add("label-container","d-flex","flex-row");
todoEle.appendChild(labelcont);

let labelEle=document.createElement("label");
labelEle.htmlFor="checkboxInput";
labelEle.textContent=todoList.text;
labelEle.classList.add("checkbox-label");
labelcont.appendChild(labelEle);
// <div class="delete-icon-container">
let dltcont=document.createElement("div");
dltcont.classList.add("delete-icon-container");
labelcont.appendChild(dltcont);

//  <i class="far fa-trash-alt delete-icon"></i>
let dlticon=document.createElement("i");
dltcont.classList.add("far","fa-trash-alt","delete-icon");
dltcont.appendChild(dlticon);

}
for(let todo of todoList){
    tocreateAndAppend(todo);
}