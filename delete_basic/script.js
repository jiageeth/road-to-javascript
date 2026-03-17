let ui=document.getElementById("userInput");
let btn=document.getElementById("sendDeleteRequestBtn");
let stat=document.getElementById("requestStatus");
let load=document.getElementById("loading");
let respo=document.getElementById("httpResponse");
btn.addEventListener("click",function(){
    let id=ui.value;
    let url="https://gorest.co.in/public-api/users/"+id;
    opt={
        method:"DELETE",
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer 9ce3661c6d10a5fd60ef4765239a3ea6d31589a5bdf64bee2422972449897dea",
        },
    }
    load.classList.remove("d-none");
    stat.classList.add("d-none");

    fetch(url,opt)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        load.classList.add("d-none");   
            stat.classList.remove("d-none");

        stat.textContent=jsonData.code;
        respo.textContent=JSON.stringify(jsonData)

    })
})