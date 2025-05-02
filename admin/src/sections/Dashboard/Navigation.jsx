import React from "react";

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="p-2 mb-6 bg-white rounded-lg shadow-sm">
      <ul className="flex space-x-4">
        <li>
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "overview"
                ? "bg-blue-100 text-blue-800"
                : "text-gray-600"
            }`}
          >
            Overview
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "products"
                ? "bg-blue-100 text-blue-800"
                : "text-gray-600"
            }`}
          >
            Products
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab("sales")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "sales"
                ? "bg-blue-100 text-blue-800"
                : "text-gray-600"
            }`}
          >
            Sales
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab("offices")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "offices"
                ? "bg-blue-100 text-blue-800"
                : "text-gray-600"
            }`}
          >
            Offices
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
