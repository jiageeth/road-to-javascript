let timerEl=document.getElementById("timer");
let countdown=10;
let difuserEl=document.getElementById("defuser");
let intervalid=setInterval(function()
{
    countdown=countdown-1;
    timerEl.textContent=countdown;
    if (countdown===0){
    timerEl.textContent=" Boom ";
    clearInterval(intervalid);
}
},1000);
// if (countdown===0){
//     timerEl.textContent=" Boom ";
//     clearInterval(intervalid);
// }
// clearInterval(intervalid);
difuserEl.addEventListener("keydown",function(event)
{
    let bombdefuserText=difuserEl.value;
    if (event.key==="Enter" || bombdefuserText==="diffuse" || countdown===0){
        timerEl.textContent="you done better";
        clearInterval(intervalid);
    }
    
}
)