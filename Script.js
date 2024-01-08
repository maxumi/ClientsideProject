function updateOrderDetails() {
    //get elements
    let orderNumber = document.getElementById("orderNumber").innerText;
    let mainCourse = document.getElementById("mainCourse").value;
    let drink  = document.getElementById("drink").value;
    let accessories  = document.getElementById("accessories").value;
    let dessert  = document.getElementById("Dessert").value;

    //Clears if for safety
    let orderDetailsDiv = document.getElementById("OrderDetails");
    orderDetailsDiv.innerHTML = '';

    let orderNumberElement = document.createElement("p");
    orderNumberElement.innerHTML = "Order Number: " + orderNumber;
    orderNumberElement.classList.add("OrderText");
    orderDetailsDiv.appendChild(orderNumberElement);

    // Append elements for each of the items with their amount.
    if(mainCourse > 0) {
        let mainCourseElement = document.createElement("p");
        mainCourseElement.innerHTML = "Hovedret: " + mainCourse;
        orderDetailsDiv.appendChild(mainCourseElement);
    }
    if(drink > 0) {
        let drinkElement = document.createElement("p");
        drinkElement.innerHTML = "Drikkelse: " + drink;
        orderDetailsDiv.appendChild(drinkElement);
    }
    if(accessories > 0) {
        let accessoriesElement = document.createElement("p");
        accessoriesElement.innerHTML = "Tilbehør: " + accessories;
        orderDetailsDiv.appendChild(accessoriesElement);
    }
    if(dessert > 0) {
        let dessertElement = document.createElement("p");
        dessertElement.innerHTML = "Dessert: " + dessert;
        orderDetailsDiv.appendChild(dessertElement);
    }


}