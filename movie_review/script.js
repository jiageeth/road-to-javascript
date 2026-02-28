let btTn = document.getElementById("addBtn");
let tiTl = document.getElementById("titleInput");
let reVi = document.getElementById("reviewTextarea");
let revC = document.getElementById("reviewsContainer");
btTn.onclick = function() {
    if (tiTl.value === "") {
        alert("Enter the movie title");
        reVi.textContent = "";
    } else {
        let head = document.createElement("h1");
        let para = document.createElement("p");
        head.textContent = "Movie: " + tiTl.value;
        para.textContent = "Reviews: " + reVi.value;
        revC.appendChild(head);
        revC.appendChild(para);
        reVi.value = "";
        tiTl.value = "";
    }
}