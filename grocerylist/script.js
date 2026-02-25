let mainbg=document.getElementById("bg-container");
mainbg.classList.add("bg-container");

//  <h1 class="heading">Grocery List</h1>
let headingEle=document.createElement("h1");
headingEle.classList.add("heading");
headingEle.textContent="Grocery List";
mainbg.appendChild(headingEle);

let listcontainerEle=document.createElement("ul");
listcontainerEle.classList.add("list-container");
mainbg.appendChild(listcontainerEle);

let groceryList=["milk","Peanut Butter","choco Chips","Tomoto sause","Cup Cake","Noodles"];

for (let i of groceryList){
let listEle=document.createElement("li");
listEle.textContent=i;
listcontainerEle.appendChild(listEle);
}

let inputEle=document.createElement("input");
inputEle.type="checkbox";
inputEle.id="check-box";
mainbg.appendChild(inputEle);

let inputLabel=document.createElement("label");
inputLabel.textContent="Need Home Delivery";
inputLabel.classList.add("need");
inputLabel.setAttribute("for","check-box");
mainbg.appendChild(inputLabel);

let breakele=document.createElement("br");
mainbg.appendChild(breakele);

let btnEle=document.createElement("button");
btnEle.textContent="Proceed to Pay";
btnEle.classList.add("btn","btn-primary","need");
mainbg.appendChild(btnEle);


