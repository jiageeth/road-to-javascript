let sendreq=document.getElementById("sendGetRequestBtn");
let reqsta=document.getElementById("requestStatus");
let load=document.getElementById("loading");
let resp=document.getElementById("httpResponse");

sendreq.addEventListener("click",function(){
    let urlreq="https://gorest.co.in/public-api/users";
    let options={
        method:"GET",
    };
    load.classList.add("d-none");
    sendreq.classList.add("d-none");

    fetch(urlreq,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        reqsta.classList.remove("d-none");
        load.classList.add("d-none");

        reqsta.textContent=jsonData.code;
        resp.textContent=JSON.stringify(jsonData);
    })
})