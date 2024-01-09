function updateOrderDetails() {
    let orderDetailsDiv = document.getElementById("OrderDetails");
    orderDetailsDiv.innerHTML = '';

    // Order number
    let orderNumber = document.getElementById("orderNumber").innerText;
    let orderNumberElement = document.createElement("p");
    orderNumberElement.innerHTML = "Order Number: " + orderNumber;
    orderNumberElement.classList.add("OrderText");
    orderDetailsDiv.appendChild(orderNumberElement);

    // Menu items with their prices and quantities
    const menuItems = {
        bigMac: { name: "Big Mac", price: 32, quantity: parseInt(document.getElementById("bigMac").value) },
        mcFeast: { name: "McFeast", price: 37, quantity: parseInt(document.getElementById("McFeast").value) },
        mcChicken: { name: "McChicken", price: 32, quantity: parseInt(document.getElementById("McChicken").value) },
        sodavand: { name: "Sodavand", price: 17, quantity: parseInt(document.getElementById("Sodavand").value) },
        espresso: { name: "Espresso", price: 12, quantity: parseInt(document.getElementById("Espresso").value) },
        pommesFrites: { name: "Pommes Frites", price: 20, quantity: parseInt(document.getElementById("PommesFrites").value) },
        dips: { name: "Dips", price: 20, quantity: parseInt(document.getElementById("Dips").value) },
        mcFlurry: { name: "McFlurry", price: 35, quantity: parseInt(document.getElementById("McFlurry").value) },
        milkshakes: { name: "Milkshakes", price: 35, quantity: parseInt(document.getElementById("Milkshakes").value) }
    };
    // Append elements for each item with a quantity more than 0
    for (const key in menuItems) {
        const item = menuItems[key];
        if (item.quantity > 0) {
            let itemElement = document.createElement("p");
            itemElement.innerHTML = `${item.name}: ${item.quantity} stk - Total: ${item.quantity * item.price}kr`;
            orderDetailsDiv.appendChild(itemElement);
        }
    }
}
function confirmOrder() {
    let orderDetailsDiv = document.getElementById("OrderDetails");
    orderDetailsDiv.innerHTML = '';

    // Order number
    let orderNumber = document.getElementById("orderNumber").innerText;
    let orderNumberElement = document.createElement("p");
    orderNumberElement.innerHTML = "Order Number: " + orderNumber;
    orderNumberElement.classList.add("OrderText");
    orderDetailsDiv.appendChild(orderNumberElement);

    // Menu items with their prices and quantities
    const menuItems = {
        bigMac: { price: 32, quantity: parseInt(document.getElementById("bigMac").value) },
        mcFeast: { price: 37, quantity: parseInt(document.getElementById("McFeast").value) },
        mcChicken: { price: 32, quantity: parseInt(document.getElementById("McChicken").value) },
        sodavand: { price: 17, quantity: parseInt(document.getElementById("Sodavand").value) },
        espresso: { price: 12, quantity: parseInt(document.getElementById("Espresso").value) },
        pommesFrites: { price: 20, quantity: parseInt(document.getElementById("PommesFrites").value) },
        dips: { price: 20, quantity: parseInt(document.getElementById("Dips").value) },
        mcFlurry: { price: 35, quantity: parseInt(document.getElementById("McFlurry").value) },
        milkshakes: { price: 35, quantity: parseInt(document.getElementById("Milkshakes").value) }
    };

    // Calculate total price
    let totalPrice = 0;
    for (const key in menuItems) {
        const item = menuItems[key];
        if (item.quantity > 0) {
            totalPrice += item.price * item.quantity;
        }
    }

    // Display total price and thank you message
    let totalPriceElement = document.createElement("p");
    totalPriceElement.innerHTML = "Total Price: " + totalPrice + " kr";
    orderDetailsDiv.appendChild(totalPriceElement);

    let thankYouElement = document.createElement("p");
    thankYouElement.innerHTML = "Thank you for your order!";
    orderDetailsDiv.appendChild(thankYouElement);




    const inputs = document.querySelectorAll('#Menu input[type="number"]');
    const buttons = document.querySelectorAll('button');

    // Disable all inputs and buttons
    buttons.forEach(button => button.disabled = true);
    inputs.forEach(input => input.disabled = true);

    setTimeout(function() {
        // Increment the order number
        let orderNumberElement = document.getElementById("orderNumber");
        let currentOrderNumber = parseInt(orderNumberElement.innerText);
        orderNumberElement.innerText = currentOrderNumber + 1;

        // Clear the order details
        orderDetailsDiv.innerHTML = '';

        // Reset the input fields
        inputs.forEach(input => input.value = 0);

        // Re-enable all inputs and buttons
        buttons.forEach(button => button.disabled = false);
        inputs.forEach(input => input.disabled = false);

        alert("Time for a new order!");

    }, 3000); // 3 seconds timer, adjust as needed

}
