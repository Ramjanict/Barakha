import React, { useState } from "react";

const ProductSelector = () => {
  const products = [
    { id: 1, title: "iPhone 15", category: "Electronics", price: "$999" },
    { id: 2, title: "MacBook Pro", category: "Electronics", price: "$1999" },
    { id: 3, title: "Leather Jacket", category: "Clothing", price: "$299" },
    { id: 4, title: "Running Shoes", category: "Clothing", price: "$149" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Get unique categories
  const categories = [...new Set(products.map(p => p.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null); // Reset product selection
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const filteredProducts = products.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <div>
      {!selectedCategory && (
        <div>
          <h3>Select a Category:</h3>
          {categories.map((cat) => (
            <button key={cat} onClick={() => handleCategoryClick(cat)}>
              {cat}
            </button>
          ))}
        </div>
      )}

      {selectedCategory && !selectedProduct && (
        <div>
          <h3>Products in {selectedCategory}:</h3>
          {filteredProducts.map((prod) => (
            <button key={prod.id} onClick={() => handleProductClick(prod)}>
              {prod.title}
            </button>
          ))}
          <br />
          <button onClick={() => setSelectedCategory(null)}>← Back</button>
        </div>
      )}

      {selectedProduct && (
        <div>
          <h3>Product Details:</h3>
          <p><strong>{selectedProduct.title}</strong></p>
          <p>Category: {selectedProduct.category}</p>
          <p>Price: {selectedProduct.price}</p>
          <br />
          <button onClick={() => setSelectedProduct(null)}>← Back to Products</button>
        </div>
      )}
    </div>
  );
};

export default ProductSelector;
