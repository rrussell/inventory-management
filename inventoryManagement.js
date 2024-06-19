/**
Gestión de Inventario
======= == ==========

Escribe una serie de funciones para gestionar el inventario de una tienda. La tienda
vende varios productos, y cada producto tiene un nombre, una categoría, un precio y
una cantidad en inventario. Implementa las siguientes funciones:

 - addProduct: Añade un nuevo producto al inventario.
 - deleteProduct: Elimina un producto del inventario.
 - updateProduct: Actualiza la información de un producto.
 - listProductsByCategory: Devuelve una lista de productos filtrados por categoría.
 - productoConMayorInventario: Devuelve el producto con la mayor cantidad en inventario.
 - productosPorDebajoDe: Devuelve una lista de productos cuya cantidad en inventario esté por debajo de un umbral especificado.

 Requisitos:
  - Cada función debe tener una única responsabilidad.
  - Debes utilizar funciones auxiliares para dividir la lógica en partes reutilizables.
  - El código debe ser claro, bien comentado y seguir buenas prácticas de programación.
 */

/**
 * Función que añade un nuevo producto al inventario.
 * @param {Array} inventory - El inventario actual.
 * @param {Object} product - El producto a añadir.
 */
const addProduct = (inventory, product) => {
  
};

/**
* Función que elimina un producto del inventario por su nombre.
* @param {Array} inventory - El inventario actual.
* @param {string} productName - El nombre del producto a eliminar.
*/
const deleteProduct = (inventory, productName) => {
  
};

/**
* Función que actualiza la información de un producto en el inventario.
* @param {Array} inventory - El inventario actual.
* @param {string} productName - El nombre del producto a actualizar.
* @param {Object} changes - Los cambios a aplicar al producto.
*/
const updateProduct = (inventory, productName, changes) => {
  
};

/**
* Función que devuelve una lista de productos filtrados por categoría.
* @param {Array} inventory - El inventario actual.
* @param {string} category - La categoría por la cual filtrar los productos.
* @returns {Array} - Lista de productos filtrados por categoría.
*/
const listProductsByCategory = (inventory, category) => {
  
};

/**
* Función que devuelve una lista de productos cuya cantidad en inventario esté por debajo de un umbral especificado.
* @param {Array} inventory - El inventario actual.
* @param {number} threshold - El umbral de cantidad en inventario.
* @returns {Array} - Lista de productos cuya cantidad en inventario está por debajo del umbral.
*/
const productsBelowInventoryFrom = (inventory, threshold) => {
  
};

// Ejemplo de uso:
const i = [
  { name: "Laptop", category: "Electrónica", price: 1000, quantity: 50 },
  { name: "Camiseta", category: "Ropa", price: 20, quantity: 200 },
  { name: "Escritorio", category: "Muebles", price: 150, quantity: 30 },
];
console.log(i);

addProduct(i, { name: "Mouse", category: "Electrónica", price: 25, quantity: 100 });
console.log('add', i);

deleteProduct(i, "Camiseta");
console.log('delete', i);

updateProduct(i, "Laptop", { price: 900, quantity: 45 });
console.log('update', i);

console.log(listProductsByCategory(i, "Electrónica"));

console.log(productsBelowInventoryFrom(i, 50));
