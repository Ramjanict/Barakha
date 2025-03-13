import Sort from "./Sort";
import { productList } from "@/assets/Data";
import BarakaPagination from "@/section/BarakaPagination.jsx";
import Card from "@/components/Card";

const ProductList = () => {
  return (
    <div className="flex-1 ">
      <div>
        <Sort />
      </div>
      <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 md:grid-cols-3">
        {productList.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
      <BarakaPagination />
    </div>
  );
};

export default ProductList;
