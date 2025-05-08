import React, { useState } from "react";
import BarakaPagination from "../components/BarakaPagination";
import Card from "../components/Card";
import ListCard from "../components/ListCard";

const Products = ({
  activeTab,
  category,
  filteredProducts,
  setSelectedCategory,
}) => {
  const [card, setCard] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const totalPost = filteredProducts.length;
  const ProductData = filteredProducts.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      {activeTab === "products" && (
        <div className="p-6 ">
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

          <div
            className={` py-5 gap-4 ${
              card === "list"
                ? "grid grid-cols-1"
                : "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  "
            }`}
          >
            {card === "grid"
              ? filteredProducts?.map((item, i) => (
                  <Card product={item} key={i} id={item.id} />
                ))
              : filteredProducts?.map((item, i) => (
                  <ListCard product={item} key={i} id={item.id} />
                ))}
          </div>
        </div>
      )}
      {activeTab === "products" && (
        <BarakaPagination
          postPerPage={postPerPage}
          totalPost={totalPost}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Products;
