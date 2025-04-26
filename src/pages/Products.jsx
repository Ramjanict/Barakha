import CommonContainer from "@/common/CommonContainer";
import Filter from "@/section/products/Filter";
import ProductList from "@/section/products/ProductList";
import { products } from "@/store/AppStore";
import { useState } from "react";
const Products = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <CommonContainer>
        <div className="flex items-start gap-10 pt-4">
          <Filter sidebar={sidebar} setSidebar={setSidebar} />
          <ProductList sidebar={sidebar} setSidebar={setSidebar} />
        </div>
      </CommonContainer>
    </div>
  );
};

export default Products;
