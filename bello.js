// Obtener referencias a los elementos del DOM
const productNameInput = document.getElementById('product-name');
const productQuantityInput = document.getElementById('product-quantity');
const productPriceInput = document.getElementById('product-price');
const addButton = document.getElementById('add-button');
const productList = document.getElementById('products');

let products = [];

// Función para agregar un producto a la lista
function addProduct() {
  const productName = productNameInput.value;
  const productQuantity = parseInt(productQuantityInput.value);
  const productPrice = parseFloat(productPriceInput.value);

  if (productName && productQuantity && productPrice) {
    const product = {
      name: productName,
      quantity: productQuantity,
      price: productPrice
    };

    products.push(product);
    updateProductList();

    // Limpiar los campos de entrada
    productNameInput.value = '';
    productQuantityInput.value = '';
    productPriceInput.value = '';
  }
}

// Función para actualizar la lista de productos en
