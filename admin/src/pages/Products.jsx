import React from "react";

const Products = ({
  activeTab,
  category,
  filteredProducts,
  setSelectedCategory,
}) => {
  return (
    <div>
      {activeTab === "products" && (
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Products</h2>
            <div className="flex space-x-2">
              <select
                onChange={(e) =>
                  setSelectedCategory(
                    e.target.value === "all" ? null : e.target.value
                  )
                }
                className="px-3 py-1 text-sm border border-gray-300 rounded-md"
              >
                <option value="all">All Categories</option>
                {category.map((cat) => (
                  <option key={cat.title} value={cat.title}>
                    {cat.title}
                  </option>
                ))}
              </select>
              <button className="px-4 py-1 text-sm text-white bg-blue-600 rounded-md">
                Add Product
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden transition-shadow border border-gray-200 rounded-lg hover:shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image[0]}
                    alt={product.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-medium text-gray-900">
                      {product.title}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {product.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {product.des}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-medium text-gray-900">
                      ${Math.floor(Math.random() * 100) + 50}/unit
                    </span>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
