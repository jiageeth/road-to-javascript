let b1=document.getElementById("twentySecondsBtn");
let b2=document.getElementById("thirtySecondsBtn");
let b3=document.getElementById("fortySecondsBtn");
let b4=document.getElementById("oneMinuteBtn");
let tex=document.getElementById("timerText");



b1.onclick=function(){
    let st=20;
    tex.textContent=st+" seconds left";
    let t1=setInterval(function(){
        if(st>0){
            st=st-1;
            tex.textContent=st;
        }
        else{
            clearInterval(t1);
            tex.textContent="Your moment is completed";
        }
    },1000

    )
}

b2.onclick=function(){
    let st=30;
    tex.textContent=st+" seconds left";
    let t2=setInterval(function(){
        if(st>0){
            st=st-1;
            tex.textContent=st;
        }
        else{
            clearInterval(t2);
            tex.textContent="Your moment is completed";
        }
    },1000

    )
}

b3.onclick=function(){
    let st=40;
    tex.textContent=st+" seconds left";
    let t3=setInterval(function(){
        if(st>0){
            st=st-1;
            tex.textContent=st;
        }
        else{
            clearInterval(t3);
            tex.textContent="Your moment is completed";
        }
    },1000

    )
}


b4.onclick=function(){
    let st=60;
    tex.textContent=st+" seconds left";
    let t4=setInterval(function(){
        if(st>0){
            st=st-1;
            tex.textContent=st;
        }
        else{
            clearInterval(t4);
            tex.textContent="Your moment is completed";
        }
    },1000

    )
}