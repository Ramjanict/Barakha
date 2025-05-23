import { productList } from "../assets/Data";
import { office } from "../assets/Data";
import { category } from "../assets/Data";
import Navigation from "../sections/Dashboard/Navigation";
import Overview from "./Overview";
import Products from "./Products";
import Sales from "./Sales";
import Office from "./Office";
import DasHeader from "../sections/Dashboard/DasHeader";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import AdminLoginForm from "../components/AdminLoginForm";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryData = category.map((cat) => ({
    name: cat.title,
    value: productList.filter((p) => p.category === cat.title).length,
    icon: cat.icon,
  }));

  const salesData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 2780 },
    { name: "May", sales: 1890 },
    { name: "Jun", sales: 2390 },
  ];

  const inventoryData = productList
    .map((product) => ({
      name: product.title,
      stock: Math.floor(Math.random() * 1000),
    }))
    .slice(0, 10);

  const filteredProducts = selectedCategory
    ? productList.filter((p) => p.category === selectedCategory)
    : productList;
  return (
    <div className="">
      <DasHeader />
      <div className="flex max-h-[calc(100vh-80px)] ">
        <div className="h-full w-60">
          <Sidebar setActiveTab={setActiveTab} />
        </div>
        <div className="flex-1 h-full p-6">
          <Overview
            activeTab={activeTab}
            productList={productList}
            category={category}
            office={office}
            categoryData={categoryData}
            COLORS={COLORS}
          />
          <Products
            activeTab={activeTab}
            category={category}
            filteredProducts={filteredProducts}
            setSelectedCategory={setSelectedCategory}
          />
          <Sales
            activeTab={activeTab}
            categoryData={categoryData}
            inventoryData={inventoryData}
            salesData={salesData}
          />
          <Office activeTab={activeTab} office={office} />
          <AdminLoginForm activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
