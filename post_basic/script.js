rbEle=document.getElementById("requestBody");
sendpostReqbtnEle=document.getElementById("sendPostRequestBtn");
reqStatus=document.getElementById("requestStatus");
load=document.getElementById("loading");
responseEl=document.getElementById("httpResponse");

sendpostReqbtnEle.addEventListener("click",function(){
    url="https://gorest.co.in/public-api/users";
    reqBody=rbEle.value;
    let opt={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer 	e265c8ee15507f499fa3e6dfd44fea2074d4350ece22cd9a5a9f13267a888bbc",
        },
        body:reqBody
    };
    load.classList.remove("d-none");
    reqStatus.classList.add("d-none");
    fetch(url,opt)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
         load.classList.add("d-none");         
         reqStatus.classList.remove("d-none"); 

        reqStatus.textContent=jsonData.code;
        responseEl.textContent=JSON.stringify(jsonData);
    })
})