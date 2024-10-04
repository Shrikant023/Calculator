// Function to calculate total amount
function calculateTotal() {
    let qty100 = parseInt(document.getElementById('qty100').value) || 0;
    let qty400 = parseInt(document.getElementById('qty400').value) || 0;
    let qty900 = parseInt(document.getElementById('qty900').value) || 0;
    let qty1300 = parseInt(document.getElementById('qty1300').value) || 0;
    let qty700 = parseInt(document.getElementById('qty700').value) || 0;
    let qty10000 = parseInt(document.getElementById('qty10000').value) || 0;
    let qty15000 = parseInt(document.getElementById('qty15000').value) || 0;

    // Multiply quantities by their respective prices
    let total = (qty100 * 100)+(qty400 * 400) + (qty900 * 900) + (qty1300 * 1300) + (qty700 * 700) + (qty10000 * 10000) + (qty15000 * 15000);

    // Update the total amount displayed on the page
    document.getElementById('totalAmount').innerHTML = total;
}
