let todocontainer=document.getElementById("todoItemsContainer");
let todoButtonEle=document.getElementById("todoButton");

let todoList=[{text:"Learn Html",uniqueNo:1},
    {text:"Learn CSS",uniqueNo:2},
    {text:"Learn Javascript",uniqueNo:3},
]

let todosCount=todoList.length;

function tocreateAndAppend(todoList) {
let todoId="todo"+todoList.uniqueNo;
let todoEle=document.createElement("li");
todoEle.id=todoId;
todoEle.classList.add("todo-item-container","d-flex","flex-row");
todocontainer.appendChild(todoEle);

let inputEle=document.createElement("input");
let checkboxId="checkboxInput"+todoList.uniqueNo;
inputEle.type="checkbox";
inputEle.id=checkboxId;
inputEle.classList.add("checkbox-input");
todoEle.appendChild(inputEle);

//<div class="d-flex flex-row label-container">
let labelcont=document.createElement("div");
labelcont.classList.add("label-container","d-flex","flex-row");
todoEle.appendChild(labelcont);

let labelEle=document.createElement("label");
let labelId="label"+todoList.uniqueNo;
labelEle.id=labelId;
labelEle.htmlFor=checkboxId;
labelEle.textContent=todoList.text;
labelEle.classList.add("checkbox-label");
labelcont.appendChild(labelEle);
function ontodostatuschange(checkboxId,labelId){
    let checkboxEle=document.getElementById(checkboxId);
    let labelEle=document.getElementById(labelId);
    console.log(checkboxEle.checked);

    labelEle.classList.toggle("checked");
    // if(checkboxEle.checked==true){
    //         labelEle.classList.add("checked");
    // }else{
    //         labelEle.classList.remove("checked");
    // }
}
inputEle.onclick=function() {
    ontodostatuschange(checkboxId,labelId);
}
// <div class="delete-icon-container">
let dltcont=document.createElement("div");
dltcont.classList.add("delete-icon-container");
labelcont.appendChild(dltcont);

//  <i class="far fa-trash-alt delete-icon"></i>
let dlticon=document.createElement("i");
dlticon.classList.add("far","fa-trash-alt","delete-icon");
function onDeleteTodo(todoId){
    let todoElement=document.getElementById(todoId);
    todocontainer.removeChild(todoElement);
}
dlticon.onclick=function(){
    onDeleteTodo(todoId);
}
dltcont.appendChild(dlticon);


}

function onAddTodo(){
    let todoInputEle=document.getElementById("todoUserInput");
    let userInputValue=todoInputEle.value;
    if (userInputValue===""){
        alert("Enter a valid value");
        return;
    }
    todosCount=todosCount+1;
    let newTodo={
        text:userInputValue,
        uniqueNo:todosCount,
    };
    tocreateAndAppend(newTodo);
    todoInputEle.value="";
}

todoButtonEle.onclick= function()
{
    onAddTodo();
}


for(let todo of todoList){
    tocreateAndAppend(todo);
}