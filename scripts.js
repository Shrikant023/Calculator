// Function to change the quantity (increase or decrease)
function changeQuantity(id, value) {
    let inputField = document.getElementById(id);
    let currentValue = parseInt(inputField.value) || 0;

    // Update the value based on the button clicked (+ or -)
    let newValue = currentValue + value;

    // Remove the restriction that prevents going below zero
    inputField.value = newValue;

    // Recalculate the total after every change
    calculateTotal();
}

// Function to calculate the total amount
function calculateTotal() {
    let qty100 = parseInt(document.getElementById('qty100').value) || 0;
    let qty400 = parseInt(document.getElementById('qty400').value) || 0;
    let qty500 = parseInt(document.getElementById('qty500').value) || 0;
    let qty700 = parseInt(document.getElementById('qty700').value) || 0;
    let qty900 = parseInt(document.getElementById('qty900').value) || 0;
    let qty1000 = parseInt(document.getElementById('qty1000').value) || 0;
    let qty1300 = parseInt(document.getElementById('qty1300').value) || 0;
    let qty10000 = parseInt(document.getElementById('qty10000').value) || 0;
    let qty15000 = parseInt(document.getElementById('qty15000').value) || 0;

    // Multiply quantities by their respective prices
    let total = (qty100 * 100) + (qty400 * 400) + (qty500 * 500) + (qty700 * 700) +
        (qty900 * 900) + (qty1000 * 1000) + (qty1300 * 1300) + (qty10000 * 10000) +
        (qty15000 * 15000);

    // Update the total amount displayed on the page
    document.getElementById('totalAmount').innerHTML = total;
}
