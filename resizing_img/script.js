let imageElement = document.getElementById("image");
let imageWidthE = document.getElementById("imageWidth");
let warningMessageE = document.getElementById("warningMessage");

let maxWidth = 300;
let minWidth = 100;
let originalImageWidth = 200;
let maxWidthwarning = "Too big.Decrease the size of the Image.";
let minWidthwarning = "Can't Visible. Increase the size of the Image.";
imageElement.style.width = originalImageWidth + "px";
imageWidthE.textContent = originalImageWidth + "px";

function onIncrement() {
    if (originalImageWidth >= maxWidth) {
        warningMessageE.textContent = maxWidthwarning;
    } else {
        originalImageWidth = originalImageWidth + 5;
        let updated = originalImageWidth + "px";

        warningMessageE.textContent = "";
        imageElement.style.width = updated;
        imageWidthE.textContent = updated;
    }
}

function onDecrement() {
    if (originalImageWidth <= minWidth) {
        warningMessageE.textContent = minWidthwarning;
    } else {
        originalImageWidth = originalImageWidth - 5;
        let updated = originalImageWidth + "px";

        warningMessageE.textContent = "";
        imageElement.style.width = updated;
        imageWidthE.textContent = updated;

    }
}