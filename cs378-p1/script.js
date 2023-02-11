let subtotalAmt = 0

function changeAmt(sign, food, price) {
    let foodID = document.getElementById(food);
    let priceID = document.getElementById(price).innerHTML.substring(1,);
    if (sign === '+') {
        foodID.innerHTML = parseInt(foodID.innerHTML) + 1;
        subtotalAmt += parseInt(priceID);
        document.getElementById("subtotal").innerHTML = "Subtotal $" + subtotalAmt;
    } else {
        if (foodID.innerHTML !== '0') {
            foodID.innerHTML = parseInt(foodID.innerHTML) - 1;
            subtotalAmt -= parseInt(priceID);
            document.getElementById("subtotal").innerHTML = "Subtotal $" + subtotalAmt;

        }
    }
}

function clearAll() {
    document.getElementById("mac-cheese-amt").innerHTML = "0";
    document.getElementById("pasta-amt").innerHTML = "0";
    document.getElementById("taco-amt").innerHTML = "0";
    document.getElementById("enchilada-amt").innerHTML = "0";
    document.getElementById("subtotal").innerHTML = "Subtotal $0";
    subtotalAmt = 0
}

function order() {
    let order = "";
    if (document.getElementById("mac-cheese-amt").innerHTML !== '0'){
        order += document.getElementById("mac-cheese-amt").innerHTML + " mac & cheese ";
    }
    if (document.getElementById("pasta-amt").innerHTML !== '0'){
        order += document.getElementById("pasta-amt").innerHTML + " pasta ";
    }
    if (document.getElementById("taco-amt").innerHTML !== '0'){
        order += document.getElementById("taco-amt").innerHTML + " taco ";
    }
    if (document.getElementById("enchilada-amt").innerHTML !== '0'){
        order += document.getElementById("enchilada-amt").innerHTML + " enchilada";
    }
    if (order === "") {
        alert("No items in cart");
    } else {
        alert("Order placed!\n" + order);
    }
}
