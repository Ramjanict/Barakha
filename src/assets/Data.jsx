import image1 from "../assets/images/copper-cathode.jpg";
import image2 from "../assets/images/thermal-coal .avif";
//oil
import image3 from "../assets/images/sunflower-oil.jpg";
import image4 from "../assets/images/soya-bean-oil.webp";
import image5 from "../assets/images/plam-oil.jpg";
import image6 from "../assets/images/coconut-oil.webp";
import image7 from "../assets/images/soya-bean.webp";
//agriculture
import image8 from "../assets/images/yellow-maize.jpg";
import image9 from "../assets/images/white-maize.jpg";
import image10 from "../assets/images/green-mung-beans.webp";
import image11 from "../assets/images/sesame-seeds.webp";
import image12 from "../assets/images/red-lentils.jpg";
import image13 from "../assets/images/kidney-beans.webp";
import image14 from "../assets/images/red-kidney-beans.jpg";
import image15 from "../assets/images/white-kidney-bean.jpg";
import image16 from "../assets/images/kabuli-chickpeas.jpg";
import image17 from "../assets/images/lentils.webp";
//nuts
import image18 from "../assets/images/raw-cashew-nuts.avif";
import image19 from "../assets/images/processed-cashew-nuts.webp";
import image20 from "../assets/images/peanuts.webp";
import image21 from "../assets/images/pistachio-nuts.jpg";
import image22 from "../assets/images/almond-nuts.jpg";
//masla
import image23 from "../assets/images/cardamom.png";
import image24 from "../assets/images/cloves.webp";
import image25 from "../assets/images/black-pepper.jpg";
import image26 from "../assets/images/dry-chili.jpg";
import image27 from "../assets/images/white-pepper.jpg";
//coffee
import image28 from "../assets/images/coffee-beans.jpg";
import image29 from "../assets/images/rubusta-coffee-bean.jpg";
//every
import image30 from "../assets/images/dates.jpg";
import image31 from "../assets/images/sugar.jpeg";
import image32 from "../assets/images/meat.jpg";
import image33 from "../assets/images/mug.jpg";

import { GiMineralPearls } from "react-icons/gi";
import { MdAgriculture } from "react-icons/md";
import { RiOilFill } from "react-icons/ri";
import { GiHotSpices } from "react-icons/gi";
import { GiCoffeeBeans } from "react-icons/gi";
import { GiCoconuts } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { list } from "postcss";
export const productList = [
  { image: image1, label: "Copper Cathode", id: 1 },
  { image: image2, label: "Thermal Coal", id: 2 },

  { image: image3, label: "Sunflower Oil", id: 3 },
  { image: image4, label: "Soya Bean Oil", id: 4 },
  { image: image5, label: "Plam Oil", id: 5 },
  { image: image6, label: "Coconut oil", id: 6 },
  { image: image7, label: "Soya Bean", id: 7 },

  { image: image8, label: "Yellow Maize", id: 8 },
  { image: image9, label: "White Maize", id: 9 },
  { image: image10, label: "Green Mung Beans", id: 10 },

  { image: image11, label: "Sesame Seeds", id: 11 },
  { image: image12, label: "Red Lentils", id: 12 },
  { image: image13, label: "Kidney Beans", id: 13 },

  { image: image14, label: "Red Kidney Beans", id: 14 },
  { image: image15, label: "White Kidney Beans", id: 15 },
  { image: image16, label: "Kabuli Chickpeas", id: 16 },
  { image: image17, label: "Lentils", id: 17 },

  { image: image18, label: "Raw Cashew Nuts", id: 18 },
  { image: image19, label: "Processed Cashew Nuts", id: 19 },
  { image: image20, label: "Peanuts", id: 20 },
  { image: image21, label: "Pistachio Nnuts.", id: 21 },
  { image: image22, label: "Almond Nuts", id: 22 },

  { image: image23, label: "Cardamom", id: 23 },
  { image: image24, label: "Cloves", id: 24 },
  { image: image25, label: "Black Pepper", id: 25 },
  { image: image26, label: "Dry Chili", id: 26 },
  { image: image27, label: "White Pepper", id: 27 },

  { image: image28, label: "Coffee Bbeans", id: 28 },

  { image: image29, label: "Robusta Coffee Bean", id: 29 },

  { image: image30, label: "Dates", id: 30 },
  { image: image31, label: "Sugar", id: 31 },
  { image: image32, label: "Meat", id: 32 },
  { image: image33, label: "Mug", id: 33 },
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
      "Pistachio Nnuts.",
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
    list: ["Dates", "Sugar", "Meat", "Mug"],
    icon: <TbMeat />,
  },
];
