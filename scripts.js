// Function to toggle dark mode when the ProfitPulse heading is clicked
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Function to change the quantity (increase or decrease)
function changeQuantity(id, value) {
    let inputField = document.getElementById(id);
    let currentValue = parseInt(inputField.value) || 0;

    // Update the value based on the button clicked (+ or -)
    let newValue = currentValue + value;

    // Update the input field with the new value
    inputField.value = newValue;

    // Recalculate the total after every change
    calculateTotal();
}

// Function to calculate the total amount
function calculateTotal() {
    let qty100 = parseInt(document.getElementById('qty100').value) || 0;
    let qty200 = parseInt(document.getElementById('qty200').value) || 0;
    let qty300 = parseInt(document.getElementById('qty300').value) || 0;
    let qty400 = parseInt(document.getElementById('qty400').value) || 0;
    let qty500 = parseInt(document.getElementById('qty500').value) || 0;
    let qty700 = parseInt(document.getElementById('qty700').value) || 0;
    let qty800 = parseInt(document.getElementById('qty800').value) || 0;
    let qty900 = parseInt(document.getElementById('qty900').value) || 0;
    let qty1000 = parseInt(document.getElementById('qty1000').value) || 0;
    let qty1200 = parseInt(document.getElementById('qty1200').value) || 0;
    let qty1300 = parseInt(document.getElementById('qty1300').value) || 0;
    let qty1500 = parseInt(document.getElementById('qty1500').value) || 0;
    let qty2000 = parseInt(document.getElementById('qty2000').value) || 0;
    let qty3000 = parseInt(document.getElementById('qty3000').value) || 0;
    let qty5000 = parseInt(document.getElementById('qty5000').value) || 0;
    let qty7000 = parseInt(document.getElementById('qty7000').value) || 0;
    let qty9000 = parseInt(document.getElementById('qty9000').value) || 0;
    let qty10000 = parseInt(document.getElementById('qty10000').value) || 0;
    let qty15000 = parseInt(document.getElementById('qty15000').value) || 0;
    let qty500000 = parseInt(document.getElementById('qty500000').value) || 0;

    // Multiply quantities by their respective prices and calculate the total
    let total = (qty100 * 100) + (qty200 * 200) + (qty300 * 300) +
        (qty400 * 400) + (qty500 * 500) + (qty700 * 700) +
        (qty800 * 800) + (qty900 * 900) + (qty1000 * 1000) +
        (qty1200 * 1200) + (qty1300 * 1300) + (qty1500 * 1500) +
        (qty2000 * 2000) + (qty3000 * 3000) + (qty5000 * 5000) +
        (qty7000 * 7000) + (qty9000 * 9000) + (qty10000 * 10000) +
        (qty15000 * 15000) + (qty500000 * 500000);

    // Update the total amount displayed on the page
    document.getElementById('totalAmount').innerHTML = total;
}
