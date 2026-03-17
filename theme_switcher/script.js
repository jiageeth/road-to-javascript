inp.addEventListener("keydown", function(event) {
    if(event.key === "Enter"){              
        if(inp.value === "Dark"){
            bgEle.classList.add("dark");
            bgEle.classList.remove("light");
        }
        else if(inp.value === "Light"){
            bgEle.classList.add("light");
            bgEle.classList.remove("dark");
        }
        else{
            alert("Enter a valid theme"); 
        }
    }
});