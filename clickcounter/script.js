let addB = document.getElementById("incrementBtn");
let texT = document.getElementById("counterValue");

addB.onclick = function() {
    texT.textContent = parseInt(texT.textContent) + 1
    localStorage.setItem("clickCount", texT.textContent)
}