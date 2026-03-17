let UI=document.getElementById("userInput");
let reqbody=document.getElementById("requestBody");
let sendputReq=document.getElementById("sendPutRequestBtn");
let load=document.getElementById("loading");
let resp=document.getElementById("httpResponse");
let reqstat=document.getElementById("requestStatus");


sendputReq.addEventListener("click",function(){
    id=UI.value;
    url="https://gorest.co.in/public-api/users/"+id;
    let requestbody=reqbody.value;
    opt={
        method:"PUT",
        headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer e265c8ee15507f499fa3e6dfd44fea2074d4350ece22cd9a5a9f13267a888bbc",
    },
    body:requestbody
}
    load.classList.remove("d-none");
    resp.classList.add("d-none");

    fetch(url,opt)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
     load.classList.add("d-none");
     resp.classList.remove("d-none");

     reqstat.textContent=jsonData.code;
     resp.textContent=JSON.stringify(jsonData);
   
    })
})