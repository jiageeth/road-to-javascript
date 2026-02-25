let smallimg=document.getElementById("season-sm-image");
let largeimg=document.getElementById("season-md-image");

let sprsm="sm-four.png";
let sprlg="md-fourseason.png";

let springsm="springsm.png";
let springlg="springmd.png";
let summersm="summersm.png";
let summerlg="summermd.png";
let autumnsm="autumnsm.png";
let autumnlg="autumnmd.png";
let wintersm="wintersm.png";
let winterlg="wintermd.png";

function tospring(){
    smallimg.src=springsm;
    largeimg.src=springlg;
}

function tosummer(){
    smallimg.src=summersm;
    largeimg.src=summerlg;
}

function toautumn(){
    smallimg.src=autumnsm;
    largeimg.src=autumnlg;
}   

function towinter(){
    smallimg.src=wintersm;
    largeimg.src=winterlg;

}
