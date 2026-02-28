let back = document.getElementById("checkBoxWithLabelContainer");

let inpu = document.createElement("input");
inpu.type = "checkbox";
inpu.id = "checkbox";
back.appendChild(inpu);

let label = document.createElement("label");
label.id = "checkboxLabel"
label.setAttribute("for", "checkbox");
label.textContent = "I am a label"
back.appendChild(label);

inpu.onclick = function() {
    label.classList.toggle("strike");
}