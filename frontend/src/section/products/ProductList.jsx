import Sort from "./Sort";
import BarakaPagination from "@/section/BarakaPagination.jsx";
import Card from "@/components/Card";
import { products } from "@/store/AppStore";
import { useState } from "react";
import ListCard from "@/components/ListCard";

const ProductList = ({ setSidebar, sidebar }) => {
  const { filterProducts } = products();
  const filteredProducts = filterProducts();
  const [card, setCard] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const totalPost = filteredProducts.length;
  const ProductData = filteredProducts.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="flex-1 w-ful ">
      <Sort sidebar={sidebar} setSidebar={setSidebar} setCard={setCard} />
      <div
        className={` py-5 gap-4 ${
          card === "list"
            ? "grid grid-cols-1"
            : "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  "
        }`}
      >
        {card === "grid"
          ? ProductData?.map((item, i) => (
              <Card product={item} key={i} id={item.id} />
            ))
          : ProductData?.map((item, i) => (
              <ListCard product={item} key={i} id={item.id} />
            ))}
      </div>
      <BarakaPagination
        postPerPage={postPerPage}
        totalPost={totalPost}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
