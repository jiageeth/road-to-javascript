let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "pasta.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

// Update the existing title (element with id="head") instead of creating a new one
let titleEle = document.getElementById("head");
if (titleEle) {
    titleEle.textContent = recipeObj.title;
    titleEle.classList.add("recipe-title");
}

// Set the image source on the existing <img id="ImageE"> element
let imageEle = document.getElementById("ImageE");
if (imageEle) {
    imageEle.src = recipeObj.imgSrc;
    imageEle.classList.add("img");
}

// Populate the ingredients list (ul with id="listCon")
let listCon = document.getElementById("listCon");
if (listCon) {
    listCon.innerHTML = "";
    recipeObj.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        listCon.appendChild(li);
    });
}

// Ensure container has the intended class (fixes styling if CSS targets it)
let ingredCon = document.getElementById("ingreCont");
if (ingredCon) {
    ingredCon.classList.add("ingredContainer");
}


