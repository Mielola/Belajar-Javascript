// script.js
document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const customerName = document.getElementById('customer_name').value;
    const totalAmount = document.getElementById('total_amount').value;
    const status = document.getElementById('status').value;

    const menuItems = document.getElementsByName('menu_item_id[]');
    const quantities = document.getElementsByName('quantity[]');
    const prices = document.getElementsByName('price[]');

    const orderItems = [];

    for (let i = 0; i < menuItems.length; i++) {
        orderItems.push({
            menu_item_id: parseInt(menuItems[i].value),
            quantity: parseInt(quantities[i].value),
            price: parseInt(prices[i].value)
        });
    }

    const orderData = {
        customer_name: customerName,
        total_amount: parseInt(totalAmount),
        status: status,
        order_items: orderItems
    };

    fetch('http://192.168.150.68:8000/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerHTML = `<p>Order placed successfully! Order ID: ${data.id}</p>`;
        })
        .catch(error => {
            document.getElementById('response').innerHTML = `<p>Error placing order: ${error.message}</p>`;
        });
});

document.getElementById('addItem').addEventListener('click', () => {
    const orderItemsDiv = document.getElementById('orderItems');
    const itemCount = orderItemsDiv.getElementsByClassName('order-item').length + 1;

    const newOrderItem = `
        <div class="order-item">
            <label for="menu_item_id_${itemCount}">Menu Item ID:</label>
            <input type="number" id="menu_item_id_${itemCount}" name="menu_item_id[]" required>

            <label for="quantity_${itemCount}">Quantity:</label>
            <input type="number" id="quantity_${itemCount}" name="quantity[]" required>

            <label for="price_${itemCount}">Price:</label>
            <input type="number" id="price_${itemCount}" name="price[]" required>
        </div>
    `;

    orderItemsDiv.insertAdjacentHTML('beforeend', newOrderItem);
});
