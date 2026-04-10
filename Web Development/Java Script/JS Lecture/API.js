// Get all products
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

// Get a single product
// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(console.log);


// Search products
// fetch('https://dummyjson.com/products/search?q=phone')
// .then(res => res.json())
// .then(console.log);


// Limit and skip products
// fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
// .then(res => res.json())
// .then(console.log);


// Sort products
// fetch('https://dummyjson.com/products?sortBy=title&order=asc')
// .then(res => res.json())
// .then(console.log);

// Get all products categories
// fetch('https://dummyjson.com/products/categories')
// .then(res => res.json())
// .then(console.log);


// Get products category list
// fetch('https://dummyjson.com/products/category-list')
// .then(res => res.json())
// .then(console.log);



// Get products by a category
// fetch('https://dummyjson.com/products/category/smartphones')
// .then(res => res.json())
// .then(console.log);


// Add a new product
// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//   })
// })
// .then(res => res.json())
// .then(console.log);


// Update a product
// fetch('https://dummyjson.com/products/1', {
//   method: 'PUT', /* or PATCH */
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'iPhone Galaxy +1'
//   })
// })
// .then(res => res.json())
// .then(console.log);


// Delete a product
fetch('https://dummyjson.com/products/1', {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);