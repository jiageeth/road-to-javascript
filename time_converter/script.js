let h=document.getElementById("hoursInput");
let m=document.getElementById("minutesInput");
let conv=document.getElementById("convertBtn");
let sec=document.getElementById("timeInSeconds");
let err=document.getElementById("errorMsg");

conv.addEventListener("click",function(){
    let th=h.value;
    let tm=m.value;
    if(th==="")
    {
        err.textContent="Please enter number of hours";
        sec.textContent="";
        sec.classList.remove("ins");
    }
    else if(tm==="")
    {
        err.textContent="Please enter number of minutes";
        sec.textContent="";
        sec.classList.remove("ins");
    }
    else{
        let ts=parseInt(th)*3600+parseInt(tm)*60;
        sec.textContent=ts+"s";
        sec.classList.add("ins");
        err.textContent="";
    }
})

