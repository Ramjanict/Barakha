import React, { useState } from "react";

import { GiMineralPearls } from "react-icons/gi";
import { MdAgriculture } from "react-icons/md";
import { RiOilFill } from "react-icons/ri";
import { GiHotSpices } from "react-icons/gi";
import { GiCoffeeBeans } from "react-icons/gi";
import { GiCoconuts } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";

import { productList } from "../../../frontend/src/assets/Data";
import Navigation from "../sections/Dashboard/Navigation";
import Overview from "./Overview";
import Products from "./Products";
import Sales from "./Sales";
import Office from "./Office";
import DasHeader from "../sections/Dashboard/DasHeader";

export const category = [
  {
    title: "Metal & Minerals",
    list: ["Copper Cathode", "Thermal Coal"],
    icon: <GiMineralPearls />,
  },
  {
    title: "Agriculture",
    list: [
      "Yellow Maize",
      "White Maize",
      "Green Mung Beans",
      "Sesame Seeds",
      "Red Lentils",
      "Kidney Beans",
      "Red Kidney Beans",
      "White Kidney Beans",
      "Kabuli Chickpeas",
      "Lentils",
    ],
    icon: <MdAgriculture />,
  },
  {
    title: "Oil",
    list: [
      "Sunflower Oil",
      "Soya Bean Oil",
      "Plam Oil",
      "Coconut oil",
      "Soya Bean",
    ],
    icon: <RiOilFill />,
  },
  {
    title: "Nuts",
    list: [
      "Raw Cashew Nuts",
      "Processed Cashew Nuts",
      "Peanuts",
      "Pistachio Nuts",
      "Almond Nuts",
    ],
    icon: <GiCoconuts />,
  },
  {
    title: "Spice",
    list: ["Cardamom", "Cloves", "Black Pepper", "Dry Chili", "White Pepper"],
    icon: <GiHotSpices />,
  },
  {
    title: "Coffee",
    list: ["Coffee Bbeans", "Robusta Coffee Bean"],
    icon: <GiCoffeeBeans />,
  },
  {
    title: "Others",
    list: ["Dates", "Sugar", "Meat"],
    icon: <TbMeat />,
  },
];
export const office = [
  {
    title: "Singapore office",
    address: "138 JURONG GATEWAY ROAD,Singapore 600134.",
    cell: "+65-91517201",
    email: "head-office@barakha-enterprise.com",
  },
  {
    title: "Bangladesh Office",
    address: "House-1, Road-5, Block-G/1 Mirpur-2, Dhaka, Bangladesh",
    cell: "+880-1982248470",
    email: "BD-office@barakha-enterprise.com",
  },
  {
    title: "Dubai Office",
    address: "House-122, Salah Uddin Street,Al Muteena, Deira, Dubai, UAE",
    cell: "971-508267926",
    email: "UAE@ barakha-enterprise.com",
  },
  {
    title: "Vietnam Office",
    address: "No 21 Street 15, Tan Hung Ward, District 7, HCM City, Vietnam",
    cell: "+84-796765222",
    email: "Vn@ barakha-enterprise.com",
  },
  {
    title: "Tanzania Office",
    address: "NHC House, Samora Avenue,Dar es Salaam, Tanzania",
    cell: "+255-759178179",
    email: "Tanzania@barakha-enterprise.com",
  },
  {
    title: "Indonesia Office",
    address:
      "Bakrie Tower Komplek Rasuna Epicentrum Jl. H. R. Rasuna Said Karet Kuningan, SetiabudiDKI Jakarta 12940, Indonesia",
    cell: "+62-82142841381",
    email: "Indonesia@barakha-enterprise.com",
  },
];

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

  const topProducts = [...productList]
    .sort(() => 0.5 - Math.random())
    .slice(0, 5)
    .map((p) => ({ ...p, sales: Math.floor(Math.random() * 10000) + 1000 }));

  const filteredProducts = selectedCategory
    ? productList.filter((p) => p.category === selectedCategory)
    : productList;
  return (
    <div className="min-h-screen bg-gray-100">
      <DasHeader />
      <div className="container p-4 mx-auto">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <Overview
          activeTab={activeTab}
          productList={productList}
          category={category}
          office={office}
          categoryData={categoryData}
          COLORS={COLORS}
          salesData={salesData}
          topProducts={topProducts}
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
      </div>
    </div>
  );
};

export default Dashboard;
