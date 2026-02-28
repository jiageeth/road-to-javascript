let back = document.getElementById("checkboxWithLabelContainer");
back.classList.add("back");

let cheK = document.createElement("input");
cheK.type = "checkbox";
cheK.id = "checkbox";
back.appendChild(cheK);

let labl = document.createElement("label");
labl.setAttribute("for", "checkbox");
labl.textContent = "Click Me!";
labl.id = "checkboxLabel";
back.appendChild(labl);