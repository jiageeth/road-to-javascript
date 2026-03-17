let inp=document.getElementById("userInput");
let keyEl=document.getElementById("keyCodeList");

inp.addEventListener("keydown",function(event){
    let newlist=document.createElement("ul");
    keyEl.appendChild(newlist);
    newlist.textContent=event.keyCode;
})