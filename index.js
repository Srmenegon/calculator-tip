


function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return "$ " + value
}

function formatSplit(value){ 
    if (value == 1) return value + " person"
    return value + " people"
}

function update() {
    let bill = Number(document.getElementById ("yourBill").value)
    let tipPercent = document.getElementById ("tipInput").value
    let split = document.getElementById("splitInput").value

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    let selectTip = document.getElementById("tipPercent").innerHTML = tipPercent + "%";  
    let selectTipValue = document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    let selecTotal = document.getElementById("totalWithTip").innerHTML = formatMoney(billTotal);
    
    
    let selectSplit = document.getElementById("splitValue").innerHTML = formatSplit(split);
    let selecTotalBill = document.getElementById("billEach").innerHTML = formatMoney(billEach);



}



