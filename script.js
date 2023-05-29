const calcFee = (sPrice, numLines, status) => {
    // Remove any commas from sPrice and numLines
    sPrice = sPrice.replace(/,/g, '');
    numLines = numLines.replace(/,/g, '');

    // Check if sPrice and numLines are numbers
    if (isNaN(sPrice) || isNaN(numLines)) {
        alert("Please enter valid numbers for Sale Price and Number of Parcels.");
        return;
    }

    // Round down the sale price to remove decimal places
    let price = Math.floor(sPrice / 100) * 100;
    
    const multiplierPrice = 250;
    const multiplierLines = 0.5;

    let lineFee = numLines * multiplierLines;
    let conveyFee = status ? 0 : price / multiplierPrice;
    let totFee = lineFee + conveyFee;

    document.getElementById("line_fee").value = formatPrice(lineFee);
    document.getElementById("formatted_fee").value = formatPrice(conveyFee);
    document.getElementById("total_cost").value = formatPrice(totFee);
};

const formatPrice = value => {
    let dollars = Math.floor(value);
    let cents = Math.round(10 * (value - dollars));
    let feeValue = dollars + (cents * 0.1);
    feeValue = value.toFixed(1);
    return "$" + feeValue + "0";
};

const fieldReset = () => {
    document.getElementById("cost").value = "";
    document.getElementById("lines").value = "";
    document.getElementById("line_fee").value = "";
    document.getElementById("formatted_fee").value = "";
    document.getElementById("total_cost").value = "";
};
