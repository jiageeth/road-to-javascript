
let ulL = document.getElementById("ulL");

function addEle(texT) {
    texT = document.getElementById("cartItemTextInput");
    let aA = texT.value;
    let liL = document.createElement("li");
    liL.textContent = aA;
    ulL.appendChild(liL);
    texT.value = "";
}