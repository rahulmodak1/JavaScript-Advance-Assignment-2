var main_bill = document.getElementById("bill-inp");
var tip_range = document.getElementById("tip-range");
var tip_amount = document.getElementById("tip-amount-inp");
var total_bill = document.getElementById("total-bill-inp");
var tip_percentage_display = document.getElementById("percentage");

tip_range.addEventListener("input", calculateTip);
main_bill.addEventListener("change", calculateTip);

function calculateTip() {
    let bill = parseFloat(main_bill.value);
    let tipPercentageDisplay = tip_range.value;
    main_bill.value = bill.toFixed(2);
    tip_percentage_display.innerHTML = tipPercentageDisplay + "%";
    let resultTip = parseFloat((bill * (tipPercentageDisplay / 100)).toFixed(2));
    let totalAmount = parseFloat((resultTip + bill).toFixed(2));
    document.getElementById("tip-amount-inp").innerHTML = resultTip;
    document.getElementById("total-bill-inp").innerHTML = totalAmount;
}