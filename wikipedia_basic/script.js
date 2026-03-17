let searchInputEle=document.getElementById("searchInput");
let searchResultsEle=document.getElementById("searchResults");
let spinner=document.getElementById("spinner");


searchInputEle.addEventListener("keydown",searchInput);

function createAndappend(result){
    let resultItemEle=document.createElement("div");
    resultItemEle.classList.add("result-item");
    searchResultsEle.appendChild(resultItemEle);

    let {link,title,description}=result;

    let titleEl=document.createElement("a");
    titleEl.href=link;
    titleEl.target="_blank";
    titleEl.textContent=title;
    titleEl.classList.add("result-title");
    searchResultsEle.appendChild(titleEl);

    let titlebreakEle=document.createElement("br");
    searchResultsEle.appendChild(titlebreakEle);

    let urlEl=document.createElement("a");
    urlEl.href=link;
    urlEl.target="_blank";
    urlEl.textContent=link;
    urlEl.classList.add("result-url");
    searchResultsEle.appendChild(urlEl);

    let linkbreakEle=document.createElement("br");
    searchResultsEle.appendChild(linkbreakEle);

    let descEle=document.createElement("paragraph");
    descEle.classList.add("link-description");
    descEle.textContent=description;
    searchResultsEle.appendChild(descEle);

}

function displayResults(search_results){
    for (let i of search_results){
        createAndappend(i);
    }
    // let result=search_results[0];
    // createAndappend(result);
}
// function wikipedia(event){
//     if(event.key==="Enter"){
//         searchResultsEle.textContent="";
//     }
// }


function searchInput(event){
  if(event.key==="Enter"){
    spinner.classList.toggle("d-none")
    searchResultsEle.textContent="";
    let searchInput=searchInputEle.value;
    let url="https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options={
        method:"GET",
    };
    fetch(url,options)
    .then(function(response){
        return response.json();
    }).then(function(jsonData){
        let {search_results}=jsonData;
        displayResults(search_results);
    })

  }
}

