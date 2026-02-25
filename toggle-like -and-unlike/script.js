let puppyimgele=document.getElementById("sadimg");
let likeiconimg=document.getElementById("icon");
let likebutton=document.getElementById("likebutton");
let isimgliked=false;

function onclickbutton() {
    if (isimgliked === false) {
        puppyimgele.src="happyarsh.png";
        likeiconimg.style.color="#0967d2";
        likebutton.style.backgroundColor="#0967d2";
        likebutton.style.color="#fff";
        isimgliked=true;
    } else {
        puppyimgele.src="sad.png";
        likeiconimg.style.color="#cbd2d9";
        likebutton.style.backgroundColor="#cbd2d9";
        likebutton.style.color="#9aa5b1";
        isimgliked=false;
    }
}