let customButton = document.getElementById("customButton");
let bgColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");

function Apply() {
    let bgcolorValue = bgColorInput.value;
    let fontColorValue = fontColorInput.value;
    let fontSizeValue = fontSizeInput.value;
    let fontWeightValue = fontWeightInput.value;
    let paddingValue = paddingInput.value;
    let borderRadius = borderRadiusInput.value;

    customButton.style.backgroundColor = bgcolorValue;
    customButton.style.color = fontColorValue;
    customButton.style.fontSize = fontSizeValue;
    customButton.style.fontWeight = fontWeightValue;
    customButton.style.padding = paddingValue;
    customButton.style.borderRadius = borderRadius;

}