let startB = document.getElementById("startBtn")
let start = document.getElementById("fromUserInput")
let end = document.getElementById("toUserInput")
let tex = document.getElementById("counterText")
startB.onclick = function() {
    let st = parseInt(start.value)
    let toCount = parseInt(end.value)
    if (start.value === "" || end.value === "") {
        alert("Enter the value")
    }
    let currentCounter = st
    tex.textContent = currentCounter
    let timerId = setInterval(function() {
        if (currentCounter < toCount) {
            currentCounter += 1;
            tex.textContent = currentCounter
        } else {
            clearInterval(timerId)
        }
    }, 1000);
}