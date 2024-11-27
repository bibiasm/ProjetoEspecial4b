let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    cart.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `${product.name} - R$ ${product.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remover</button>`;
        cartDiv.appendChild(productDiv);
    });

    const total = cart.reduce((sum, product) => sum + product.price, 0);
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
    cartDiv.appendChild(totalDiv);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}
