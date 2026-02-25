let profileDetails = {
    imgSrc: "person.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let bgcontEle=document.getElementById("bgContainer");
bgcontEle.classList.add("d-flex","flex-column","justify-content-center","bg-container");

let imageEleCont=document.getElementById("imageContainer");
let imageEle=document.createElement("img");
imageEle.src=profileDetails.imgSrc;
imageEle.classList.add("profile-img");
imageEleCont.appendChild(imageEle);

let nameEle=document.createElement("h1");
nameEle.textContent=profileDetails.name;
nameEle.classList.add("profile-name");
bgcontEle.appendChild(nameEle);

let ageEle=document.createElement("p");
ageEle.textContent="Age" + profileDetails.age;
ageEle.classList.add("profile-age");
bgcontEle.appendChild(ageEle);


