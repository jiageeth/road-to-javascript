let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let back = document.getElementById("groceryListContainer");
back.classList.add("back");

let head = document.createElement("h1");
head.textContent = "GrocerY List";
back.appendChild(head);

let LisD = document.createElement("div");
LisD.classList.add("LisD");
back.appendChild(LisD);

let unOrd = document.createElement("ul");
LisD.appendChild(unOrd);

function liSEl(i) {
    let lisEl = document.createElement("li");
    lisEl.textContent = i;
    LisD.appendChild(lisEl);
}

for (let i of groceryList) {
    liSEl(i);
}