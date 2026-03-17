let jokeTextEle = document.getElementById("jokeText");
let spinner = document.getElementById("spinner");
let jokeBtnEle = document.getElementById("jokeBtn");

jokeBtnEle.addEventListener("click", function() {
    jokeBtnEle.classList.add("d-none");      
    spinner.classList.remove("d-none");       

    let url = "https://apis.ccbp.in/jokes/random";
    let opt = {
        method: "GET"
    };

    fetch(url, opt)
        .then(function(response) {
            return response.json();           
        })
        .then(function(jsonData) {            
            jokeBtnEle.classList.remove("d-none");  
            spinner.classList.add("d-none");         

            jokeTextEle.textContent = jsonData.value;
        })
});