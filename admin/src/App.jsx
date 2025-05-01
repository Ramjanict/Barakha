import React, { useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  GiMineralPearls,
  MdAgriculture,
  RiOilFill,
  GiHotSpices,
  GiCoffeeBeans,
  GiCoconuts,
  TbMeat,
} from "react-icons/all";

export const productList = [
  {
    id: 1,
    title: "Copper Cathode",
    slug: "copper-cathode",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error.",
    image: [image1, image12, image3, image5, image6, image9],
    category: "Metal & Minerals",
  },
  {
    id: 2,
    title: "Thermal Coal",
    slug: "thermal-coal",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image2, image4, image2, image2],
    category: "Metal & Minerals",
  },
  {
    id: 3,
    title: "Sunflower Oil",
    slug: "sunflower-oil",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image3, image9, image6, image3],
    category: "oil",
  },
  {
    id: 4,
    title: "Soya Bean Oil",
    slug: "soya-bean-oil",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image4, image10, image4, image5],
    category: "oil",
  },
  {
    id: 5,
    title: "Plam Oil",
    slug: "palm-oil",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image5, image5, image5, image5],
  },
  {
    id: 6,
    title: "Coconut Oil",
    slug: "coconut-oil",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image6, image18, image17, image6],
    category: "oil",
  },
  {
    id: 7,
    title: "Soya Bean",
    slug: "soya-bean",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image7, image7, image7, image7],
    category: "oil",
  },
  {
    id: 8,
    title: "Yellow Maize",
    slug: "yellow-maize",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image8, image8, image8, image8],
    category: "Agriculture",
  },
  {
    id: 9,
    title: "White Maize",
    slug: "white-maize",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image9, image9, image9, image9],
    category: "Agriculture",
  },
  {
    id: 10,
    title: "Green Mung Beans",
    slug: "green-mung-beans",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error.",
    image: [image10, image10, image10, image10],
    category: "Agriculture",
  },
  {
    id: 11,
    title: "Sesame Seeds",
    slug: "sesame-seeds",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image11, image11, image11, image11],
    category: "Agriculture",
  },
  {
    id: 12,
    title: "Red Lentils",
    slug: "red-lentils",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error.",
    image: [image12, image12, image12, image12],
    category: "Agriculture",
  },
  {
    id: 13,
    title: "Kidney Beans",
    slug: "kidney-beans",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image13, image13, image13, image13],
    category: "Agriculture",
  },
  {
    id: 14,
    title: "Red Kidney Beans",
    slug: "red-kidney-beans",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image14, image14, image14, image14],
    category: "Agriculture",
  },
  {
    id: 15,
    title: "White Kidney Beans",
    slug: "white-kidney-beans",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image15, image15, image15, image15],
    category: "Agriculture",
  },
  {
    id: 16,
    title: "Kabuli Chickpeas",
    slug: "kabuli-chickpeas",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image16, image16, image16, image16],
    category: "Agriculture",
  },
  {
    id: 17,
    title: "Lentils",
    slug: "lentils",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image17, image17, image17, image17],
    category: "Agriculture",
  },
  {
    id: 18,
    title: "Raw Cashew Nuts",
    slug: "raw-cashew-nuts",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image18, image18, image18, image18],
    category: "Nuts",
  },
  {
    id: 19,
    title: "Processed Cashew Nuts",
    slug: "processed-cashew-nuts",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image19, image19, image19, image19],
    category: "Nuts",
  },
  {
    id: 20,
    title: "Peanuts",
    slug: "peanuts",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image20, image20, image20, image20],
    category: "Nuts",
  },
  {
    id: 21,
    title: "Pistachio Nuts",
    slug: "pistachio-nuts",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image21, image21, image21, image21],
    category: "Nuts",
  },
  {
    id: 22,
    title: "Almond Nuts",
    slug: "almond-nuts",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image22, image22, image22, image22],
    category: "Nuts",
  },
  {
    id: 23,
    title: "Cardamom",
    slug: "cardamom",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image23, image23, image23, image23],
    category: "Spice",
  },
  {
    id: 24,
    title: "Cloves",
    slug: "cloves",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image24, image24, image24, image24],
    category: "Spice",
  },
  {
    id: 25,
    title: "Black Pepper",
    slug: "black-pepper",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error.",
    image: [image25, image25, image25, image25],
    category: "Spice",
  },
  {
    id: 26,
    title: "Dry Chili",
    slug: "dry-chili",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image26, image26, image26, image26],
    category: "Spice",
  },
  {
    id: 27,
    title: "White Pepper",
    slug: "white-pepper",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image27, image27, image27, image27],
    category: "Spice",
  },
  {
    id: 28,
    title: "Coffee Beans",
    slug: "coffee-beans",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error.",
    image: [image28, image28, image28, image28],
    category: "Coffee",
  },
  {
    id: 29,
    title: "Robusta Coffee Bean",
    slug: "robusta-coffee-bean",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image29, image29, image29, image29],
    category: "Coffee",
  },
  {
    id: 30,
    title: "Dates",
    slug: "dates",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image30, image30, image30, image30],
    category: "Others",
  },
  {
    id: 31,
    title: "Sugar",
    slug: "sugar",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image31, image31, image31, image31],
    category: "Others",
  },
  {
    id: 32,
    title: "Meat",
    slug: "meat",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi ullam consequuntur laborum suscipit quisquam nostrum quis.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis veritatis corrupti voluptates qui natus facere, excepturi saepe doloribus dolore impedit optio consequatur quaerat quia deleniti nemo voluptatibus nisi dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita hic delectus nobis cumque adipisci placeat eum? Reprehenderit, laudantium rem! Doloribus molestiae dolore rem ipsum, quos aperiam odit? Quam, fuga ,error",
    image: [image32, image32, image32, image32],
    category: "Others",
  },
  ,
];

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

const App = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Data for charts
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
      {/* Header */}
      <header className="p-4 text-white bg-blue-800 shadow-md">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-2xl font-bold">Barakha Enterprise Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Admin</span>
            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
              <span className="text-xs">A</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container p-4 mx-auto">
        {/* Navigation */}
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

        {/* Dashboard Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Summary Cards */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                Total Products
              </h3>
              <p className="text-3xl font-bold text-blue-600">
                {productList.length}
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                Categories
              </h3>
              <p className="text-3xl font-bold text-green-600">
                {category.length}
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                Global Offices
              </h3>
              <p className="text-3xl font-bold text-purple-600">
                {office.length}
              </p>
            </div>

            {/* Category Distribution */}
            <div className="p-6 bg-white rounded-lg shadow-sm md:col-span-2">
              <h3 className="mb-4 text-lg font-semibold text-gray-700">
                Product Categories
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {categoryData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sales Trend */}
            <div className="p-6 bg-white rounded-lg shadow-sm md:col-span-3">
              <h3 className="mb-4 text-lg font-semibold text-gray-700">
                Sales Trend
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Products */}
            <div className="p-6 bg-white rounded-lg shadow-sm md:col-span-3">
              <h3 className="mb-4 text-lg font-semibold text-gray-700">
                Top Selling Products
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Product
                      </th>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Category
                      </th>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Sales
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {topProducts.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={product.image[0]}
                                alt={product.title}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {product.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {product.category}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            ${product.sales.toLocaleString()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

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

        {activeTab === "sales" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-700">
                Monthly Sales
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-700">
                Inventory Levels
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={inventoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="stock" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm md:col-span-2">
              <h3 className="mb-4 text-lg font-semibold text-gray-700">
                Sales by Category
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === "offices" && (
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-800">
              Global Offices
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {office.map((office, index) => (
                <div
                  key={index}
                  className="p-4 transition-shadow border border-gray-200 rounded-lg hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    {office.title}
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">{office.address}</p>
                  <div className="flex items-center mb-1 text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {office.cell}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {office.email}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
