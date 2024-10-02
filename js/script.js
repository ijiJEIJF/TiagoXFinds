function search() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('p').textContent.toLowerCase();
        // Mostra tutti i prodotti se l'input è vuoto
        if (query === '' || productName.includes(query)) {
            product.style.display = 'block'; // Mostra il prodotto
        } else {
            product.style.display = 'none'; // Nascondi il prodotto
        }
    });
}
