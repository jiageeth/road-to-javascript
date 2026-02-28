let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];
let ul = document.getElementById("unordList");

function marking(i) {
    let T1 = document.createElement("li");
    ul.appendChild(T1);
    let chK = document.createElement("input");
    chK.type = "checkbox";
    chK.id = "checkbox" + i.uniqueNo;
    T1.appendChild(chK);
    let label = document.createElement("label");
    label.id = "label" + i.uniqueNo;
    label.textContent = i.skillName;
    label.setAttribute("for", chK.id);
    T1.appendChild(label);
    chK.onclick = function() {
        label.classList.toggle("color");
    }
}
for (let i of skillList) {
    marking(i)
}