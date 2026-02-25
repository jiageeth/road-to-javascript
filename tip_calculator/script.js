let BillAmountE = document.getElementById("billAmount");
let percentE = document.getElementById("percentageTip");
let tipAmountE = document.getElementById("tipAmount");
let total = document.getElementById("totalAmount");
let errorE = document.getElementById("errorMessage");

function calculate() {
    let inbillamount = BillAmountE.value;
    let inpercent = percentE.value;

    if (inbillamount === "") {
        errorE.textContent = "Please Enter a Valid Input.";
    } else if (inpercent === "") {
        errorE.textContent = "Please Enter a Valid Input.";
    } else {
        errorE.textContent = "";
        inbillamount = parseInt(inbillamount);
        inpercent = parseInt(inpercent);

        let calculated = (inbillamount / 100) * inpercent;
        tipAmountE.value = calculated;
        total.value = inbillamount + calculated;
    }


}